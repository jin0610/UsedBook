import React, {Component} from 'react';
import "./book_detail.css";
import "../reset.css";


  
class BookDetail extends Component{
    render() {
        return (

<div className=''>

<body>
	<div className="product_view">
		<h2>aaa</h2>
		<table>
			<caption>
				<details className="hide">
					<summary>상품정보</summary>
					판매가, 상품코드, 옵션 및 결제금액 안내
				</details>
			</caption>
			<colgroup>
			<col >
			</col>
			</colgroup>
			<tbody>
			<tr>
				<th>판매가</th>
				<td className="price">129,000</td>
			</tr>
			<tr>
				<th>상품코드</th>
				<td>C004843</td>
			</tr>
			<tr>
				<th>제조사/공급사</th>
				<td>bbb</td>
			</tr>
			<tr>
				<th>구매수량</th>
				<td>
					<div className="length">
						<input type="number" min="1" value="1"/>
						<a href="#a">증가</a>
						<a href="#a">감소</a>
					</div>
				</td>
			</tr>
			<tr>
				<th>배송비</th>
				<td>무료배송</td>
			</tr>
			<tr>
				<th>결제금액</th>
				<td className="total"><b>129,000</b>원</td>
			</tr>
			</tbody>
		</table>
		<div className="img">
			<img src="basic.png" alt=""/>
			
		</div>
		<div className="btns">
			<a href="#a" className="btn1">버튼1</a>
			<a href="#a" className="btn2">버튼2</a>
		</div>
	</div>

</body>

</div>
         );
    }
}

export default BookDetail;
