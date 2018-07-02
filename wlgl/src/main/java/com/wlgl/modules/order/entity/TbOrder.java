package com.wlgl.modules.order.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class TbOrder implements Serializable {
    /**
     * 订单编号
     */
    private Long orderid;

    /**
     * 下单时间
     */
    private Date createtime;

    /**
     * 收货人
     */
    private String consignee;

    /**
     * 收货地址
     */
    private String receivingAddress;

    /**
     * 联系电话
     */
    private String orderPhone;

    /**
     * 客户
     */
    private String orderUser;

    /**
     * 货物
     */
    private String goods;

    /**
     * 费用
     */
    private BigDecimal goodsCost;

    /**
     * 货物物流
     */
    private String goodsLogistics;

    /**
     * 订单状态，1：处理中，2：已关闭，3：已完成
     */
    private Integer orderType;

    /**
     * 订单完成时间
     */
    private Date completionTime;

    /**
     * 快递名称
     */
    private String express;

    /**
     * 货物ID
     */
    private Long goodsId;

    /**
     * 客户ID
     */
    private Integer customerId;

    private static final long serialVersionUID = 1L;

    public Long getOrderid() {
        return orderid;
    }

    public void setOrderid(Long orderid) {
        this.orderid = orderid;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getConsignee() {
        return consignee;
    }

    public void setConsignee(String consignee) {
        this.consignee = consignee == null ? null : consignee.trim();
    }

    public String getReceivingAddress() {
        return receivingAddress;
    }

    public void setReceivingAddress(String receivingAddress) {
        this.receivingAddress = receivingAddress == null ? null : receivingAddress.trim();
    }

    public String getOrderPhone() {
        return orderPhone;
    }

    public void setOrderPhone(String orderPhone) {
        this.orderPhone = orderPhone == null ? null : orderPhone.trim();
    }

    public String getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(String orderUser) {
        this.orderUser = orderUser == null ? null : orderUser.trim();
    }

    public String getGoods() {
        return goods;
    }

    public void setGoods(String goods) {
        this.goods = goods == null ? null : goods.trim();
    }

    public BigDecimal getGoodsCost() {
        return goodsCost;
    }

    public void setGoodsCost(BigDecimal goodsCost) {
        this.goodsCost = goodsCost;
    }

    public String getGoodsLogistics() {
        return goodsLogistics;
    }

    public void setGoodsLogistics(String goodsLogistics) {
        this.goodsLogistics = goodsLogistics == null ? null : goodsLogistics.trim();
    }

    public Integer getOrderType() {
        return orderType;
    }

    public void setOrderType(Integer orderType) {
        this.orderType = orderType;
    }

    public Date getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(Date completionTime) {
        this.completionTime = completionTime;
    }

    public String getExpress() {
        return express;
    }

    public void setExpress(String express) {
        this.express = express == null ? null : express.trim();
    }

    public Long getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Long goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", orderid=").append(orderid);
        sb.append(", createtime=").append(createtime);
        sb.append(", consignee=").append(consignee);
        sb.append(", receivingAddress=").append(receivingAddress);
        sb.append(", orderPhone=").append(orderPhone);
        sb.append(", orderUser=").append(orderUser);
        sb.append(", goods=").append(goods);
        sb.append(", goodsCost=").append(goodsCost);
        sb.append(", goodsLogistics=").append(goodsLogistics);
        sb.append(", orderType=").append(orderType);
        sb.append(", completionTime=").append(completionTime);
        sb.append(", express=").append(express);
        sb.append(", goodsId=").append(goodsId);
        sb.append(", customerId=").append(customerId);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}