package com.wlgl.modules.goods.entity;

import java.io.Serializable;
import java.math.BigDecimal;

public class TbGoods implements Serializable {
    /**
     * 货物ID
     */
    private Long id;

    /**
     * 货物数量
     */
    private Integer goodsNum;

    /**
     * 货物重量
     */
    private Double goodsWeight;

    /**
     * 货物名称
     */
    private String goodsName;

    /**
     * 单价
     */
    private BigDecimal unitprice;

    /**
     * 备注
     */
    private String note;

    private static final long serialVersionUID = 1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getGoodsNum() {
        return goodsNum;
    }

    public void setGoodsNum(Integer goodsNum) {
        this.goodsNum = goodsNum;
    }

    public Double getGoodsWeight() {
        return goodsWeight;
    }

    public void setGoodsWeight(Double goodsWeight) {
        this.goodsWeight = goodsWeight;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName == null ? null : goodsName.trim();
    }

    public BigDecimal getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(BigDecimal unitprice) {
        this.unitprice = unitprice;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", goodsNum=").append(goodsNum);
        sb.append(", goodsWeight=").append(goodsWeight);
        sb.append(", goodsName=").append(goodsName);
        sb.append(", unitprice=").append(unitprice);
        sb.append(", note=").append(note);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}