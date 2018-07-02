package com.wlgl.modules.customer.dao;

import com.wlgl.modules.customer.entity.TbCustomerinfo;
import com.wlgl.modules.customer.entity.TbCustomerinfoQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TbCustomerinfoDao {
    int countByExample(TbCustomerinfoQuery example);

    int deleteByExample(TbCustomerinfoQuery example);

    int deleteByPrimaryKey(Integer id);

    int insert(TbCustomerinfo record);

    int insertSelective(TbCustomerinfo record);

    List<TbCustomerinfo> selectByExample(TbCustomerinfoQuery example);

    TbCustomerinfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TbCustomerinfo record, @Param("example") TbCustomerinfoQuery example);

    int updateByExample(@Param("record") TbCustomerinfo record, @Param("example") TbCustomerinfoQuery example);

    int updateByPrimaryKeySelective(TbCustomerinfo record);

    int updateByPrimaryKey(TbCustomerinfo record);
}