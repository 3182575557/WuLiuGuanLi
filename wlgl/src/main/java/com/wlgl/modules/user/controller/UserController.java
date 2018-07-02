package com.wlgl.modules.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.user.entity.TbUser;
import com.wlgl.modules.user.entity.TbUserQuery;
import com.wlgl.modules.user.entity.TbUserQuery.Criteria;
import com.wlgl.modules.user.service.UserService;

@Controller
@RequestMapping("User")
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * 登录
	 * @param username
	 * @param password
	 * @param type
	 * @return
	 */
	@RequestMapping("login")
	@ResponseBody
	public String login(String username, String password, Integer type, Model model, HttpServletRequest request) {
		try {
			if(type==1||type==2) {
				System.out.println("用户类型合法");
			}else {
				return "jsp/loginresult";
			}
		} catch (Exception e) {
			return "jsp/loginresult";
		}
		 String result = userService.login(username, password, type);
		 
		 if(result.equals("jsp/admin/index")) {
			 HttpSession session = request.getSession();
				session.setAttribute("admin", userService.getUser(username, password, type));
				return result;
		 }
		 if(result.equals("jsp/front/index")) {
			 HttpSession session = request.getSession();
				session.setAttribute("user", userService.getUser(username, password, type));
				return result;
		 }
		/* if(result.equals("jsp/front/login")||result.equals("jsp/admin/login")) {
			 model.addAttribute("lastresult", "用户名或密码错误"); 
		 }*/
		 return result;
	}
	
	
	
	/**
	 * 添加用户
	 * @param tbUser
	 * @return
	 */
	@RequestMapping("add")
	@ResponseBody
	public String add(TbUser tbUser) {
		return userService.add(tbUser);
	}
	/**
	 * 修改用户
	 * @param tbUser
	 * @return
	 */
	@RequestMapping("change")
	@ResponseBody
	public String change(TbUser tbUser) {
		return userService.change(tbUser);
	}
	/**
	 * 删除用户
	 * @param id
	 * @return
	 */
	@RequestMapping("delete")
	@ResponseBody
	public String delete(Integer id) {
		return userService.delete(id);
	}
	/**
	 * 分页查询所有用户
	 * @return
	 */
	@RequestMapping("getUserByPage")
	@ResponseBody
	public Page<TbUser> getUserByPage(@RequestParam(defaultValue = "1") int pageNo,@RequestParam(defaultValue = "10") int pageSize){
		return userService.getUserByPage(pageNo, pageSize);
	}
	/**
	 * 按ID查找用户
	 * @param id
	 * @return
	 */
	@RequestMapping("getUserById")
	@ResponseBody
	public TbUser getUserById(Integer id){
		return userService.getUserById(id);
	}
	
	
	
	
	
}
