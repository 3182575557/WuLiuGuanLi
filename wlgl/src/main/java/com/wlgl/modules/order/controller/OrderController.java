package com.wlgl.modules.order.controller;


import java.math.BigDecimal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.service.CustomerService;
import com.wlgl.modules.goods.service.GoodsService;
import com.wlgl.modules.order.entity.TbOrder;
import com.wlgl.modules.order.entity.TbOrderQuery;
import com.wlgl.modules.order.entity.TbOrderQuery.Criteria;
import com.wlgl.modules.order.service.OrderService;
import com.wlgl.modules.user.entity.TbUser;

@Controller
@RequestMapping("Order")
public class OrderController {

	@Autowired
	private OrderService orderService;
	@Autowired
	private GoodsService goodsService;
	@Autowired
	private CustomerService customerService;
	
	
	/**
	 * 添加订单
	 * @param tbOrder
	 * @return
	 */
	@RequestMapping("add")
	@ResponseBody
	public String add(TbOrder tbOrder,Integer goodsNum,Double goodsWeight,BigDecimal unitprice) {
		return orderService.add(tbOrder, goodsNum, goodsWeight, unitprice);
	}
	/**
	 * 设置快递名称，不许重复设置
	 * @param orderid
	 * @param express
	 * @return
	 */
	@RequestMapping("changeExpress")
	@ResponseBody
	public String changeExpress(Long orderid, String express) {
		return orderService.changeExpress(orderid, express);
	}
	
	
	
	/**
	 * 设置订单状态
	 * @param orderid
	 * @param type
	 * @return
	 */
	@RequestMapping("changeOrderType")
	@ResponseBody
	public String changeOrderType(Long orderid, Integer orderType) {
		return orderService.changeOrderType(orderid, orderType);
	}
	
	/**
	 * 设置订单物流
	 * @param orderid
	 * @param goodsLogistics
	 * @return
	 */
	@RequestMapping("changeGoodsLogistics")
	@ResponseBody
	public String changeGoodsLogistics(Long orderid, String goodsLogistics) {
		return orderService.changeGoodsLogistics(orderid, goodsLogistics);
	}
	
	
	
	
	
	
	
	/**
	 * 删除订单
	 * @param orderid
	 * @return
	 */
	@RequestMapping("delete")
	@ResponseBody
	public String delete(Long orderid) {
		goodsService.delete(orderid);
		return orderService.delete(orderid);
	}
	/**
	 * 分页查询所有订单
	 * @return
	 */
	@RequestMapping("getOrderByPage")
	@ResponseBody
	public Page<TbOrder> getOrderByPage(@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize){
		return orderService.getOrderByPage(pageNo, pageSize);
	}
	/**
	 * 按ID查找订单
	 * @param id
	 * @return
	 */
	@RequestMapping("getOrderById")
	@ResponseBody
	public TbOrder getOrderById(Long orderid){
		return orderService.getOrderById(orderid);
	}
	
	/**
	 * 当前用户的所有订单（前台）
	 * @param id
	 * @return
	 */
	@RequestMapping("getAllOrderByUserId")
	public String getOrderByCustomerId(HttpServletRequest request,Model model,
			@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize){
		PageHelper.startPage(pageNo, pageSize);
		TbUser user = (TbUser) request.getSession().getAttribute("user");
		//System.out.println(user.toString());
		if(user.getId()==null) {
			return "jsp/front/login";
		}
		List<TbOrder> list = orderService.getOrderByCustomerId(user.getId());
		if(list.size()==0) {
			TbCustomerinfo customerinfo = customerService.getCustomerByUserId(user.getId());
			if(customerinfo.getId()==null) {
				model.addAttribute("customer", "yes");
			}else {
				model.addAttribute("customer", "no");
			}
			
			
			return "jsp/front/index";
		}
		Page<TbOrder> page = Page.getPageInService(list);
		model.addAttribute("pageInfo", page);
		return "jsp/front/orderlistbyuser";
		
	}
	
	
}
