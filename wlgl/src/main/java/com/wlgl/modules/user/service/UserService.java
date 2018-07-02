package com.wlgl.modules.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * 用户和管理员service
 * @author 剑影随风
 *
 */

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.user.dao.TbUserDao;
import com.wlgl.modules.user.entity.TbUser;
import com.wlgl.modules.user.entity.TbUserQuery;
import com.wlgl.modules.user.entity.TbUserQuery.Criteria;
@Service
public class UserService {

	@Autowired
	private TbUserDao userDao;
	/**
	 * 登录
	 * @param username
	 * @param password
	 * @param type
	 * @return
	 */
	public String login(String username, String password, Integer type) {
		TbUserQuery example = new TbUserQuery();
		Criteria criteria = example.createCriteria();
		List<TbUser> list = userDao.selectByExample(example );
		for (TbUser tbUser : list) {
			if(tbUser.getType()==type&&tbUser.getUsername().equals(username)&&tbUser.getPassword().equals(password)) {
				if(type==1) {
					return "jsp/front/index";
				}else {
					return "jsp/admin/index";
				}
			}
		}
		/*if(type==1) {
			return "jsp/front/login";
		}else {
			return "jsp/admin/login";
		}*/
		return "faillogin";
	}
	
	public TbUser getUser(String username, String password, Integer type) {
		TbUser tbUser1 = new TbUser();
		TbUserQuery example = new TbUserQuery();
		Criteria criteria = example.createCriteria();
		List<TbUser> list = userDao.selectByExample(example );
		for (TbUser tbUser : list) {
			if(tbUser.getType()==type&&tbUser.getUsername().equals(username)&&tbUser.getPassword().equals(password)) {
				tbUser1 = tbUser;
				break;
			}
		}
		return tbUser1;
	}
	
	/**
	 * 添加用户
	 * @param tbUser
	 * @return
	 */
	public String add(TbUser tbUser) {
		try {
			userDao.insert(tbUser);
			return "addsuccess";
		} catch (Exception e) {
			return "addfail";
		}
	}
	/**
	 * 修改用户
	 * @param tbUser
	 * @return
	 */
	public String change(TbUser tbUser) {
		try {
			userDao.updateByPrimaryKeySelective(tbUser);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	/**
	 * 删除用户
	 * @param id
	 * @return
	 */
	public String delete(Integer id) {
		try {
			userDao.deleteByPrimaryKey(id);
			return "deletesuccess";
		} catch (Exception e) {
			return "deletefail";
		}
	}
	/**
	 * 分页查询所有用户
	 * @return
	 */
	public Page<TbUser> getUserByPage(int pageNo, int pageSize){
		PageHelper.startPage(pageNo, pageSize);
		TbUserQuery example = new TbUserQuery();
		Criteria criteria = example.createCriteria();
		List<TbUser> list = userDao.selectByExample(example );
		Page<TbUser> page = Page.getPageInService(list);
		return page;
	}
	/**
	 * 按ID查找用户
	 * @param id
	 * @return
	 */
	public TbUser getUserById(Integer id){
		return userDao.selectByPrimaryKey(id);
	}
	
}
