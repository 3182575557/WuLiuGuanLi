package com.wlgl.modules.order.dao;

import com.wlgl.modules.order.entity.TbOrder;
import com.wlgl.modules.order.entity.TbOrderQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TbOrderDao {
    int countByExample(TbOrderQuery example);

    int deleteByExample(TbOrderQuery example);

    int deleteByPrimaryKey(Long orderid);

    int insert(TbOrder record);

    int insertSelective(TbOrder record);

    List<TbOrder> selectByExample(TbOrderQuery example);

    TbOrder selectByPrimaryKey(Long orderid);

    int updateByExampleSelective(@Param("record") TbOrder record, @Param("example") TbOrderQuery example);

    int updateByExample(@Param("record") TbOrder record, @Param("example") TbOrderQuery example);

    int updateByPrimaryKeySelective(TbOrder record);

    int updateByPrimaryKey(TbOrder record);
}