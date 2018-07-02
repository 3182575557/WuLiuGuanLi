package com.wlgl.common.utils;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.github.pagehelper.PageInfo;
 
/**
 * 对分页的基本数据进行一个简单的封装
 */
public class Page<T> implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int pageNo = 1;			//页码，默认是第一页
    private int pageSize = 10;		//每页显示的记录数，默认是10
    private int totalRecord;		//总记录数
    private int totalPage;			//总页数
    private List<T> results;		//对应的当前页记录
    private Map<String, Object> params = new HashMap<String, Object>();		//其他的参数我们把它分装成一个Map对象
    private String pageLinks;     //页面链接
 
    public int getPageNo() {
       return pageNo;
    }
 
    public void setPageNo(int pageNo) {
       this.pageNo = pageNo;
    }
 
    public int getPageSize() {
       return pageSize;
    }
 
    public void setPageSize(int pageSize) {
       this.pageSize = pageSize;
    }
 
    public int getTotalRecord() {
       return totalRecord;
    }
 
    /**
     * 总记录数
     * <p>Title: setTotalRecord</p>
     * <p>Description: </p>
     * @param totalRecord
     */
    public void setTotalRecord(long totalRecord2) {
       int totalRecord = (int)totalRecord2;
       this.totalRecord = totalRecord;
       //在设置总页数的时候计算出对应的总页数，在下面的三目运算中加法拥有更高的优先级，所以最后可以不加括号。
       int totalPage = totalRecord%pageSize==0 ? totalRecord/pageSize : totalRecord/pageSize + 1;
       this.setTotalPage(totalPage);
    }
 
    public int getTotalPage() {
       return totalPage;
    }
 
    public void setTotalPage(int totalPage) {
       this.totalPage = totalPage;
    }
 
    public List<T> getResults() {
       return results;
    }
 
    public void setResults(List<T> results) {
       this.results = results;
    }
   
    public Map<String, Object> getParams() {
       return params;
    }
   
    public void setParams(Map<String, Object> params) {
       this.params = params;
    }
    
    public String getPageLinks() {
		return pageLinks;
	}

	/**
	 * <p>Title: setPageLinks</p>
	 * <p>Description: 不能调用这个设置链接</p>
	 * @param pageLinks
	 */
	public void setPageLinks(String pageLinks) {
		this.pageLinks = pageLinks;
	}

	public String toString() {
       StringBuilder builder = new StringBuilder();
       builder.append("Page [pageNo=").append(pageNo).append(", pageSize=").append(pageSize).append(", results=").append(results).append(", totalPage=").append(totalPage).append(", totalRecord=").append(totalRecord).append("]");
       return builder.toString();
    }
	
	/**
	 * <p>Title: getPageInService</p>
	 * <p>Description: 根据查询的结果，再service层中返回一个分页结果</p>
	 * @param list
	 * @return
	 */
	public static<T> Page<T> getPageInService(List<T> list) {
		PageInfo<T> info = new PageInfo<T>(list);
		Page<T> page = new Page<T>();
		page.setPageNo(info.getPageNum());
		page.setPageSize(info.getPageSize());
		page.setResults(list);
		page.setTotalRecord(info.getTotal());
		
		return page;
	}
    
 
	/* 页面链接 */
	/**
	 * <p>Title: pageLinks</p>
	 * <p>Description: </p>
	 * @param url <p>格式：xxx?（xx&）不加参数：例如：select?</p>
	 * <p>若要加参数，尾部要加“&”以链接pageNo这个参数 ，例如：select?num=1&</p>
	 * @return
	 */
	public String pageLinks(String url) {
		int endPage = this.totalRecord/pageSize;
		if (totalRecord%pageSize > 0) {
			endPage += 1;
		}

		StringBuffer sBuf = new StringBuffer();
		
		sBuf.append("<input type=\"hidden\" name=\"pageNo\" value=\"").append(this.pageNo).append("\">");		//分页参数：当前页隐藏域
		
		sBuf.append("<span class=\"noprint\" style=\"padding:5px;\">");

		sBuf.append("&nbsp;第").append(this.pageNo).append("页 / 共").append(endPage).append("页&nbsp;");
		sBuf.append("&nbsp;总共").append(this.totalRecord).append("条记录 每页").append(this.pageSize).append("条记录&nbsp;");
		
		sBuf.append("<a href=\"").append(url).append("pageNo=1&size="+pageSize);
		
		sBuf.append("\">[首页]");
		sBuf.append("</a>&nbsp;");
		
		sBuf.append("<a href=\"").append(url).append("pageNo=");
		if(pageNo<=1){
			sBuf.append(1);
		}else{
			sBuf.append(pageNo-1);
		}	
		sBuf.append("&size="+pageSize+"\">[上一页]");
		sBuf.append("</a>&nbsp;");
			
		
		sBuf.append("<a href=\"").append(url).append("pageNo=");
		if(pageNo>=endPage){
			sBuf.append(endPage);
		}else{
			sBuf.append(pageNo+1);
		}	
		sBuf.append("&size="+pageSize+"\">[下一页]");
		sBuf.append("</a>&nbsp;");
			
		sBuf.append("<a href=\"").append(url).append("pageNo=").append(endPage);
		sBuf.append("&size="+pageSize+"\">[末页]");
		sBuf.append("</a>&nbsp;");

		sBuf.append("</span>");
		setPageLinks(sBuf.toString());
		return sBuf.toString();
	}

}