package com.wlgl.common.utils;

public class toPage {
	private long totalCount = 0;//总记录数
	private int pageNumber = 1;//  当前页号，默认显示第一页
	private int pageSize = 10; // 每页大小，默认每页10条
	private int totalPage = 0;// 总页数，默认为0
	private int startRow = 0;// 起始记录行号，默认为从表头开始

	/**
	* 分页计算方法，由setTotalCount调用
	*/
	public void pagination() {
// 计算总页数
		if (this.totalCount % pageSize == 0)
			this.totalPage = new Long(this.totalCount / pageSize).intValue();
		else
			this.totalPage = new Long(this.totalCount / pageSize).intValue() + 1;
// 排除错误页号
		if (this.pageNumber < 1)
			this.pageNumber = 1;
		if (this.pageNumber > this.totalPage)
			this.pageNumber = this.totalPage;
// 计算起始行号
		this.startRow = (this.pageNumber - 1) * this.pageSize;
	}

	public long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
		this.pagination();
	}

	public int getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(int pageNumber) {
		if(pageNumber < 1){
			this.pageNumber = 1;
		}else{
			this.pageNumber = pageNumber;
		}
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getStartRow() {
		startRow=(getPageNumber() - 1) * this.pageSize;
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

}