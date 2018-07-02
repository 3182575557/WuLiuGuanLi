package com.wlgl.modules.user.dao;

import com.wlgl.modules.user.entity.TbUser;
import com.wlgl.modules.user.entity.TbUserQuery;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TbUserDao {
    int countByExample(TbUserQuery example);

    int deleteByExample(TbUserQuery example);

    int deleteByPrimaryKey(Integer id);

    int insert(TbUser record);

    int insertSelective(TbUser record);

    List<TbUser> selectByExample(TbUserQuery example);

    TbUser selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TbUser record, @Param("example") TbUserQuery example);

    int updateByExample(@Param("record") TbUser record, @Param("example") TbUserQuery example);

    int updateByPrimaryKeySelective(TbUser record);

    int updateByPrimaryKey(TbUser record);
}