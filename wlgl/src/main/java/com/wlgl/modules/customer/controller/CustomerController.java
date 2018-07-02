package com.wlgl.modules.customer.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wlgl.common.utils.Page;
import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.service.CustomerService;
import com.wlgl.modules.user.entity.TbUser;

@Controller
@RequestMapping("Customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	
	/**
	 * 添加客户
	 * @param tbCustomerinfo
	 * @return
	 */
	@RequestMapping("add")
	@ResponseBody
	public String add(TbCustomerinfo tbCustomerinfo, HttpServletRequest request) {
		TbUser user = (TbUser) request.getSession().getAttribute("user");
		//System.out.println(request.getSession().getAttribute("user"));
		tbCustomerinfo.setUserid(user.getId());
		//return "";
		return customerService.add(tbCustomerinfo);
	}
	/**
	 * 修改客户
	 * @param tbCustomerinfo
	 * @return
	 */
	@RequestMapping("change")
	@ResponseBody
	public String change(TbCustomerinfo tbCustomerinfo) {
		return customerService.change(tbCustomerinfo);
	}
	/**
	 * 删除客户
	 * @param id
	 * @return
	 */
	@RequestMapping("delete")
	@ResponseBody
	public String delete(Integer id) {
		return customerService.delete(id);
	}
	/**
	 * 分页查询所有客户
	 * @return
	 */
	@RequestMapping("getCustomerByPage")
	@ResponseBody
	public Page<TbCustomerinfo> getCustomerByPage(@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize){
		return customerService.getCustomerByPage(pageNo, pageSize);
	}
	
	@RequestMapping("getCustomerAll")
	@ResponseBody
	public List<TbCustomerinfo> getCustomerAll(){
		return customerService.getCustomerAll();
	}
	
	/**
	 * 按ID查找客户
	 * @param id
	 * @return
	 */
	@RequestMapping("getCustomerById")
	@ResponseBody
	public TbCustomerinfo getCustomerServiceById(Integer id){
		return customerService.getCustomerById(id);
	}
	
	
}
