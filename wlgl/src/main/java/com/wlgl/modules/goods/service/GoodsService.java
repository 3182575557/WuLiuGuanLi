package com.wlgl.modules.goods.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.wlgl.common.utils.Page;
import com.wlgl.modules.goods.dao.TbGoodsDao;
import com.wlgl.modules.goods.entity.TbGoods;
import com.wlgl.modules.goods.entity.TbGoodsQuery;
import com.wlgl.modules.goods.entity.TbGoodsQuery.Criteria;

@Service
public class GoodsService {

	@Autowired
	private TbGoodsDao goodsDao;
	

	/**
	 * 添加货物
	 * @param tbGoods
	 * @return
	 */
	public String add(TbGoods tbGoods) {
		try {
			tbGoods.setId(System.currentTimeMillis());
			goodsDao.insert(tbGoods);
			return "addsuccess";
		} catch (Exception e) {
			return "addfail";
		}
	}
	/**
	 * 修改货物
	 * @param tbGoods
	 * @return
	 */
	public String change(TbGoods tbGoods) {
		try {
			goodsDao.updateByPrimaryKeySelective(tbGoods);
			return "changesuccess";
		} catch (Exception e) {
			return "changefail";
		}
	}
	/**
	 * 删除货物
	 * @param id
	 * @return
	 */
	public String delete(Long id) {
		try {
			goodsDao.deleteByPrimaryKey(id);
			return "deletesuccess";
		} catch (Exception e) {
			return "deletefail";
		}
	}
	/**
	 * 分页查询所有货物
	 * @return
	 */
	public Page<TbGoods> getGoodsByPage(int pageNo, int pageSize){
		PageHelper.startPage(pageNo, pageSize);
		TbGoodsQuery example = new TbGoodsQuery();
		Criteria criteria = example .createCriteria();
		List<TbGoods> list = goodsDao.selectByExample(example);
		Page<TbGoods> page = Page.getPageInService(list);
		return page;
	}
	/**
	 * 按ID查找货物
	 * @param id
	 * @return
	 */
	public TbGoods getGoodsById(Long id){
		return goodsDao.selectByPrimaryKey(id);
	}
	
	
	
}
