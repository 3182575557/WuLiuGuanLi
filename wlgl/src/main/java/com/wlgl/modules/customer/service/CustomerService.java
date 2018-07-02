package com.wlgl.modules.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.customer.dao.TbCustomerinfoDao;
import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.entity.TbCustomerinfoQuery;
import com.wlgl.modules.customer.entity.TbCustomerinfoQuery.Criteria;

@Service
public class CustomerService {

	@Autowired
	private TbCustomerinfoDao customerDao;
	
	
	/**
	 * 添加客户
	 * @param tbCustomerinfo
	 * @return
	 */
	public String add(TbCustomerinfo tbCustomerinfo) {
		try {
			TbCustomerinfo customerinfo = getCustomerByUserId(tbCustomerinfo.getUserid());
			if(customerinfo.getId()!=null) {
				System.out.println("该账号已存在客户！");
				return "addfail";
			}
			customerDao.insert(tbCustomerinfo);
			return "addsuccess";
		} catch (Exception e) {
			return "addfail";
		}
	}
	/**
	 * 修改客户
	 * @param tbCustomerinfo
	 * @return
	 */
	public String change(TbCustomerinfo tbCustomerinfo) {
		try {
			customerDao.updateByPrimaryKeySelective(tbCustomerinfo);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	/**
	 * 删除客户
	 * @param id
	 * @return
	 */
	public String delete(Integer id) {
		try {
			customerDao.deleteByPrimaryKey(id);
			return "deletesuccess";
		} catch (Exception e) {
			return "deletefail";
		}
	}
	/**
	 * 分页查询所有客户
	 * @return
	 */
	public Page<TbCustomerinfo> getCustomerByPage(int pageNo, int pageSize){
		PageHelper.startPage(pageNo, pageSize);
		List<TbCustomerinfo> list = getCustomerAll();
		Page<TbCustomerinfo> page = Page.getPageInService(list);
		return page;
	}
	/**
	 * 获取所有客户
	 * @return
	 */
	public List<TbCustomerinfo> getCustomerAll(){
		TbCustomerinfoQuery example = new TbCustomerinfoQuery();
		Criteria criteria = example.createCriteria();
		List<TbCustomerinfo> list = customerDao.selectByExample(example);
		return list;
	}
	/**
	 * 按ID查找客户
	 * @param id
	 * @return
	 */
	public TbCustomerinfo getCustomerById(Integer id){
		return customerDao.selectByPrimaryKey(id);
	}
	
	public TbCustomerinfo getCustomerByUserId(int userid){
		TbCustomerinfo tbCustomerinfo1 = new TbCustomerinfo();
		//System.out.println(userid);
		TbCustomerinfoQuery example = new TbCustomerinfoQuery();
		Criteria criteria = example.createCriteria();
		criteria.andUseridEqualTo(userid);
		List<TbCustomerinfo> list = customerDao.selectByExample(example );
		System.out.println(list.toString());
		for (TbCustomerinfo tbCustomerinfo : list) {
			//System.out.println(tbCustomerinfo.toString());
			tbCustomerinfo1 = tbCustomerinfo;
			break;
		}
		return tbCustomerinfo1;
	}
	
	
}
