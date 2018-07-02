package com.wlgl.modules.order.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.service.CustomerService;
import com.wlgl.modules.goods.dao.TbGoodsDao;
import com.wlgl.modules.goods.entity.TbGoods;
import com.wlgl.modules.order.dao.TbOrderDao;
import com.wlgl.modules.order.entity.TbOrder;
import com.wlgl.modules.order.entity.TbOrderQuery;
import com.wlgl.modules.order.entity.TbOrderQuery.Criteria;

@Service
public class OrderService {

	@Autowired
	private TbOrderDao orderDao;
	@Autowired
	private TbGoodsDao goodsDao;
	@Autowired
	private CustomerService customerService;
	
	/**
	 * 添加订单
	 * @param tbOrder
	 * @return
	 */
	public String add(TbOrder tbOrder,Integer goodsNum,Double goodsWeight,BigDecimal unitprice) {
		try {
			//根据订单内容生成货物信息
			Long id = System.currentTimeMillis();
			TbGoods goods = new TbGoods();
			goods.setId(id);
			goods.setGoodsName(tbOrder.getGoods());
			goods.setGoodsNum(goodsNum);
			goods.setGoodsWeight(goodsWeight);
			goods.setUnitprice(unitprice);
			goodsDao.insert(goods);
			
			
			//计算总价
			BigDecimal iii = new BigDecimal(goodsNum);
			BigDecimal fff = new BigDecimal(goodsWeight);
			BigDecimal decimal = unitprice;
			decimal = decimal.multiply(fff);
			decimal = decimal.multiply(iii);
			
			
			//获取客户信息
			TbCustomerinfo customerinfo = customerService.getCustomerById(tbOrder.getCustomerId());
			
			
			 
			//补全一些属性
			 //ID
			 tbOrder.setOrderid(id);
			 //货物id
			 tbOrder.setGoodsId(id);
			 
			 tbOrder.setOrderUser(customerinfo.getCustomerName());
			 //总价
			 tbOrder.setGoodsCost(decimal);
			 //客户
			//tbOrder.setOrderUser(customerinfo.getCustomerName());
			//创建时间
			tbOrder.setCreatetime(new Date());
			//状态   1：处理中，2：已关闭，3：已完成
			tbOrder.setOrderType(1);
			//物流信息
			tbOrder.setGoodsLogistics("加速处理中，请稍等...");
			orderDao.insert(tbOrder);
			return "addsuccess";
		} catch (Exception e) {
			return "addfail";
		}
	}
	/**
	 * 设置快递名称，不许重复设置
	 * @param id
	 * @param express
	 * @return
	 */
	public String changeExpress(Long id, String express) {
		try {
			
			TbOrder order = orderDao.selectByPrimaryKey(id);
			//System.out.println(order.toString());
			if(order.getExpress()==null||order.getExpress()=="") {
				order.setExpress(express);
			}else {
				return "changefail";
			}
			orderDao.updateByPrimaryKeySelective(order);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	
	
	
	/**
	 * 设置订单状态
	 * @param id
	 * @param type
	 * @return
	 */
	public String changeOrderType(Long id, Integer type) {
		//try {
			if(type!=2&&type!=3&&type!=1) {
				System.out.println("失败1");
				return "changefail";
			}
			TbOrder order = orderDao.selectByPrimaryKey(id);
			order.setOrderType(type);
			if(type==2||type==3) {
				order.setCompletionTime(new Date());
			}
			orderDao.updateByPrimaryKeySelective(order);
			return "changesuccess";
		//} catch (Exception e) {

		//	System.out.println("失败2");
			//return "changefail";
		//}
	}
	
	/**
	 * 设置订单物流
	 * @param id
	 * @param goodsLogistics
	 * @return
	 */
	public String changeGoodsLogistics(Long id, String goodsLogistics) {
		try {
			TbOrder order = orderDao.selectByPrimaryKey(id);
			order.setGoodsLogistics(goodsLogistics);
			
			orderDao.updateByPrimaryKeySelective(order);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	
	/**
	 * 设置总价，修改商品时被动触发执行
	 * @param id
	 * @param goodsCost
	 * @return
	 */
	public String changeGoodsCost(Long id, BigDecimal goodsCost, String goods) {
		try {
			TbOrder order = orderDao.selectByPrimaryKey(id);
			order.setGoodsCost(goodsCost);
			order.setGoods(goods);
			orderDao.updateByPrimaryKeySelective(order);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	
	
	
	
	
	/**
	 * 删除订单
	 * @param id
	 * @return
	 */
	public String delete(Long id) {
		try {
			orderDao.deleteByPrimaryKey(id);
			return "deletesuccess";
		} catch (Exception e) {
			return "deletefail";
		}
	}
	/**
	 * 分页查询所有订单
	 * @return
	 */
	public Page<TbOrder> getOrderByPage(int pageNo, int pageSize){
		PageHelper.startPage(pageNo, pageSize);
		TbOrderQuery example = new TbOrderQuery();
		Criteria criteria = example .createCriteria();
		List<TbOrder> list = orderDao.selectByExample(example);
		Page<TbOrder> page = Page.getPageInService(list);
		return page;
	}
	/**
	 * 按ID查找订单
	 * @param id
	 * @return
	 */
	public TbOrder getOrderById(Long id){
		return orderDao.selectByPrimaryKey(id);
	}
	/**
	 * 按条件查询：货物id
	 * @param id
	 * @return
	 */
	public TbOrder getOrderByExample(Long id){
		TbOrder tbOrder1 = new TbOrder();
		TbOrderQuery example = new TbOrderQuery();
		Criteria criteria = example.createCriteria();
		criteria.andGoodsIdEqualTo(id);
		List<TbOrder> list = orderDao.selectByExample(example);
		for (TbOrder tbOrder : list) {
			tbOrder1 = tbOrder;//只有一条记录，id唯一
			break;
		}
		//System.out.println(tbOrder1.toString());
		return tbOrder1;
	}
	/**
	 * 用户的所有订单
	 * @param id
	 * @return
	 */
	public List<TbOrder> getOrderByCustomerId(Integer id){
		//System.out.println(id);
		TbCustomerinfo customerinfo = customerService.getCustomerByUserId(id);
		//System.out.println(customerinfo.toString());
		TbOrder tbOrder1 = new TbOrder();
		TbOrderQuery example = new TbOrderQuery();
		Criteria criteria = example.createCriteria();
		criteria.andCustomerIdEqualTo(customerinfo.getId());
		List<TbOrder> list = orderDao.selectByExample(example);
		return list;
	}
	
	
}
