package com.wlgl.modules.goods.controller;


import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wlgl.common.utils.Page;
import com.wlgl.modules.goods.entity.TbGoods;
import com.wlgl.modules.goods.service.GoodsService;
import com.wlgl.modules.order.entity.TbOrder;
import com.wlgl.modules.order.service.OrderService;

@Controller
@RequestMapping("Goods")
public class GoodsController {

	@Autowired
	private GoodsService goodsService;
	@Autowired
	private OrderService orderService;
	
	
	/**
	 * 添加货物,目前不适用，较奇怪的业务逻辑
	 * @param tbGoods
	 * @return
	 */
	@RequestMapping("add")
	@ResponseBody
	public String add(TbGoods tbGoods) {
		return goodsService.add(tbGoods);
	}
	/**
	 * 修改货物
	 * @param tbGoods
	 * @return
	 */
	@RequestMapping("change")
	@ResponseBody
	public String change(TbGoods tbGoods) {
		TbOrder order = orderService.getOrderByExample(tbGoods.getId());
		
		BigDecimal iii = new BigDecimal(tbGoods.getGoodsNum());
		BigDecimal fff = new BigDecimal(tbGoods.getGoodsWeight());
		BigDecimal decimal = tbGoods.getUnitprice();
		decimal = decimal.multiply(fff);
		decimal = decimal.multiply(iii);
		String goods = tbGoods.getGoodsName();
		//System.out.println(decimal);
		orderService.changeGoodsCost(order.getOrderid(), decimal, goods);
		return goodsService.change(tbGoods);
	}
	/**
	 * 删除货物
	 * @param id
	 * @return
	 */
	@RequestMapping("delete")
	@ResponseBody
	public String delete(Long id) {
		TbOrder order = orderService.getOrderByExample(id);
		String result = orderService.delete(order.getOrderid());//需要连订单一起删除
		return goodsService.delete(id);
	}
	/**
	 * 分页查询所有货物
	 * @return
	 */
	@RequestMapping("getGoodsByPage")
	@ResponseBody
	public Page<TbGoods> getGoodsByPage(@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize){
		return goodsService.getGoodsByPage(pageNo, pageSize);
	}
	/**
	 * 按ID查找货物
	 * @param id
	 * @return
	 */
	@RequestMapping("getGoodsById")
	@ResponseBody
	public TbGoods getGoodsById(Long id){
		return goodsService.getGoodsById(id);
	}
	
	
}
