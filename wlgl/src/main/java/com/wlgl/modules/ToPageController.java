package com.wlgl.modules;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wlgl.common.utils.Page;
import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.service.CustomerService;
import com.wlgl.modules.goods.entity.TbGoods;
import com.wlgl.modules.goods.service.GoodsService;
import com.wlgl.modules.order.entity.TbOrder;
import com.wlgl.modules.order.service.OrderService;
import com.wlgl.modules.user.entity.TbUser;
import com.wlgl.modules.user.service.UserService;

@Controller
public class ToPageController {
	@Autowired
	private UserService userService;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private GoodsService goodsService;
	@Autowired
	private OrderService orderService;
	
	/**
	 * 用户登录
	 * @param model
	 * @return
	 */
	@RequestMapping("userlogin")
	public String UserIndex() {
		System.out.println("用户登录");
		//model.addAttribute("lastresult", "");
		return "jsp/front/login";
	}
	/**
	 * 用户退出
	 * @param request
	 * @return
	 */
	@RequestMapping("userloginout")
	public String UserIndexout(HttpServletRequest request) {
		System.out.println("用户退出");
		request.getSession().removeAttribute("user");
		//model.addAttribute("lastresult", "");
		return "jsp/front/login";
	}
	/**
	 * 用户注册
	 * @return
	 */
	@RequestMapping("userregist")
	public String userregist() {
		System.out.println("用户注册");
		//model.addAttribute("lastresult", "");
		return "jsp/front/adduser";
	}
	
	/////////////////////////////////////
	/**
	 * 管理员登录
	 * @param model
	 * @return
	 */
	@RequestMapping("toadmin")
	public String adminIndex() {
		System.out.println("管理员登录");
		//model.addAttribute("lastresult", "");
		return "jsp/admin/login";
	}
	/**
	 * 管理员退出登录
	 * @param request
	 * @return
	 */
	@RequestMapping("toadminout")
	public String adminIndexout(HttpServletRequest request) {
		System.out.println("管理员登出");
		request.getSession().removeAttribute("admin");
		return "jsp/admin/login";
	}
	///////////////////////////////////////////////////////////
	
	@RequestMapping("admin/welcome")
	public String touserlist() {
		return "jsp/admin/welcome";
	}



	///////////////////////////////////////////////////////////
	/**
	 * 后台首页
	 * @return
	 */
	@RequestMapping("admin/toadminindex")
	public String toadminindex(HttpServletRequest request) {
		TbUser user = (TbUser) request.getSession().getAttribute("admin");
		if(user==null) {
			System.out.println("未登录");
			return "jsp/admin/login";
		}
		System.out.println(user.toString());
		return "jsp/admin/index";
	}


	/**
	 * 前台首页
	 * @return
	 */
	@RequestMapping("front/tofrontindex")
	public String tofrontindex(HttpServletRequest request,Model model) {
		TbUser user = (TbUser) request.getSession().getAttribute("user");
		if(user==null) {
			System.out.println("未登录");
			return "jsp/front/login";
		}
		
		TbCustomerinfo customerinfo = customerService.getCustomerByUserId(user.getId());
		if(customerinfo.getId()==null) {
			model.addAttribute("customer", "yes");
		}else {
			model.addAttribute("customer", "no");
		}
		return "jsp/front/index";
	}
	
	///////////////////////////////////////////////////////////
	/**
	 * 用户列表
	 * @param model
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("admin/user/touserlist")
	public String touserlist(Model model,@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize) {
		System.out.println("用户、管理员列表");
		Page<TbUser> userByPage = userService.getUserByPage(pageNo, pageSize);
		model.addAttribute("pageInfo", userByPage);
		return "jsp/admin/user/userlist";
	}
	/**
	 * 添加用户
	 * @return
	 */
	@RequestMapping("admin/user/toadduser")
	public String toadduser() {
		return "jsp/admin/user/adduser";
	}
	/**
	 * 添加管理员
	 * @return
	 */
	@RequestMapping("admin/user/toaddadmin")
	public String toaddadmin() {
		return "jsp/admin/user/addadmin";
	}
	/**
	 * 修改用户
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping("admin/user/tochangeuser")
	public String tochangeuser(Model model,Integer id) {
		TbUser tbUser = userService.getUserById(id);
		model.addAttribute("username", tbUser.getUsername());
		model.addAttribute("password", tbUser.getPassword());
		model.addAttribute("id", tbUser.getId());
		return "jsp/admin/user/changeuser";
	}
	/**
	 * 获取登录用户信息并修改
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping("getUserBySession")
	public String getUserBySession(Model model,HttpServletRequest request){
		TbUser user = (TbUser) request.getSession().getAttribute("user");
		model.addAttribute("username", user.getUsername());
		model.addAttribute("password", user.getPassword());
		model.addAttribute("id", user.getId());
		return "jsp/front/changeuser";
	}
	
///////////////////////////////////////////////////////////
	/**
	 * 客户列表
	 * @param model
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("admin/customer/tocustomerlist")
	public String tocustomerlist(Model model,@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize) {
		System.out.println("客户列表");
		Page<TbCustomerinfo> page = customerService.getCustomerByPage(pageNo, pageSize);
		model.addAttribute("pageInfo", page);
		return "jsp/admin/customer/customerlist";
	}
	
	/**
	 * 添加客户
	 * @return
	 */
	@RequestMapping("admin/customer/toaddcustomer")
	public String toaddcustomer() {
		/*TbUser user = (TbUser) request.getSession().getAttribute("admin");
		System.out.println(user.toString());*/
		return "jsp/admin/customer/addcustomer";
	}
	/**
	 * 添加客户
	 * @return
	 */
	@RequestMapping("front/toaddcustomer")
	public String frontaddcustomer() {
		/*TbUser user = (TbUser) request.getSession().getAttribute("admin");
		System.out.println(user.toString());*/
		return "jsp/front/addcustomer";
	}
	/**
	 * 修改客户
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping("admin/customer/tochangecustomer")
	public String tochangecustomer(Model model, Integer id) {
		TbCustomerinfo customerinfo = customerService.getCustomerById(id);
		model.addAttribute("customerName", customerinfo.getCustomerName());
		model.addAttribute("customerPhone", customerinfo.getCustomerPhone());
		model.addAttribute("id", customerinfo.getId());
		model.addAttribute("customerAddress", customerinfo.getCustomerAddress());
		model.addAttribute("note", customerinfo.getNote());
		return "jsp/admin/customer/changecustomer";
	}

	@RequestMapping("front/tochangecustomer")
	public String frontTochangecustomer(Model model, HttpServletRequest request) {
		TbUser user = (TbUser) request.getSession().getAttribute("user");
		TbCustomerinfo customerinfo = customerService.getCustomerByUserId(user.getId());
		System.out.println(customerinfo.toString());
		//TbCustomerinfo customerinfo = customerService.getCustomerById(id);
		model.addAttribute("customerName", customerinfo.getCustomerName());
		model.addAttribute("customerPhone", customerinfo.getCustomerPhone());
		model.addAttribute("id", customerinfo.getId());
		model.addAttribute("customerAddress", customerinfo.getCustomerAddress());
		model.addAttribute("note", customerinfo.getNote());
		return "jsp/front/changecustomer";
	}
	
	
///////////////////////////////////////////////////////////
	/**
	 * 货物列表
	 * @param model
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("admin/goods/togoodslist")
	public String togoodslist(Model model,@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize) {
		System.out.println("货物列表");
		Page<TbGoods> page = goodsService.getGoodsByPage(pageNo, pageSize);
		model.addAttribute("pageInfo", page);
		return "jsp/admin/goods/goodslist";
	}

	/**
	 * 添加货物
	 * @return
	 */
	@RequestMapping("admin/goods/toaddgoods")
	public String toaddgoods() {
		return "jsp/admin/goods/addgoods";
	}
	/**
	 * 修改货物
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping("admin/goods/tochangegoods")
	public String tochangegoods(Model model, Long id) {
		TbGoods goods = goodsService.getGoodsById(id);
		model.addAttribute("id", goods.getId());
		model.addAttribute("goodsNum", goods.getGoodsNum());
		model.addAttribute("goodsWeight", goods.getGoodsWeight());
		model.addAttribute("goodsName", goods.getGoodsName());
		model.addAttribute("unitprice", goods.getUnitprice());
		model.addAttribute("note", goods.getNote());
		return "jsp/admin/goods/changegoods";
	}

	/**
	 * 按id（货物编号）查货物信息
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping("getGoodsById")
	public String getGoodsById(Model model, Long id) {
		TbGoods goods = goodsService.getGoodsById(id);
		model.addAttribute("id", goods.getId());
		model.addAttribute("goodsNum", goods.getGoodsNum());
		model.addAttribute("goodsWeight", goods.getGoodsWeight());
		model.addAttribute("goodsName", goods.getGoodsName());
		model.addAttribute("unitprice", goods.getUnitprice());
		model.addAttribute("note", goods.getNote());
		return "jsp/front/goodslist";
	}
	
///////////////////////////////////////////////////////////
	/**
	 * 订单列表
	 * @param model
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("admin/order/toorderlist")
	public String toorderlist(Model model,@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize) {
		System.out.println("订单列表");
		Page<TbOrder> page = orderService.getOrderByPage(pageNo, pageSize);
		model.addAttribute("pageInfo", page);
		return "jsp/admin/order/orderlist";
	}

	/**
	 * 按id（订单编号）查找物流
	 * @param model
	 * @param orderid
	 * @return
	 */
	@RequestMapping("getOrderById")
	public String getOrderById(Model model, Long orderid) {
		TbOrder order = orderService.getOrderById(orderid);
		
		model.addAttribute("data", order);
		return "jsp/front/orderlist";
	}
	
	
	/**
	 * 添加订单
	 * @return
	 */
	@RequestMapping("admin/order/toaddorder")
	public String toaddorder(Model model) {
		List<TbCustomerinfo> list = customerService.getCustomerAll();
		System.out.println(list.toString());
		model.addAttribute("list", list);
		return "jsp/admin/order/addorder";
	}
	
	/**
	 * 设置快递名称页面，不许重复设置
	 * @param model
	 * @param orderid
	 * @return
	 */
	@RequestMapping("admin/order/toChangeOrderExpress")
	public String toChangeOrderExpress(Model model, Long orderid) {
		TbOrder order = orderService.getOrderById(orderid);
		//System.out.println(orderid);
		//System.out.println(order.toString());
		model.addAttribute("orderid", order.getOrderid());
		model.addAttribute("express", order.getExpress()==null?"":"noset");
		return "jsp/admin/order/changeorderexpress";
	}
	/**
	 * 设置订单状态
	 * @param model
	 * @param orderid
	 * @return
	 */
	@RequestMapping("admin/order/toChangeOrderType")
	public String toChangeOrderType(Model model, Long orderid) {
		TbOrder order = orderService.getOrderById(orderid);
		//System.out.println(order.toString());
		model.addAttribute("orderid", order.getOrderid());
		model.addAttribute("orderType", order.getOrderType());
		return "jsp/admin/order/changeordertype";
	}
	/**
	 * 设置订单物流
	 * @param model
	 * @param orderid
	 * @return
	 */
	@RequestMapping("admin/order/toChangeOrderGoodsLogistics")
	public String toChangeOrderGoodsLogistics(Model model, Long orderid) {
		TbOrder order = orderService.getOrderById(orderid);
		model.addAttribute("orderid", order.getOrderid());
		model.addAttribute("goodsLogistics", order.getGoodsLogistics());
		return "jsp/admin/order/changeordergoodslogistics";
	}

}
