(this.webpackJsonpdoge2=this.webpackJsonpdoge2||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(5),i=n.n(a),s=(n(33),n(34),n(7)),o=n.n(s),d=n(20),u=n(21),p=n(22),j=n(27),l=n(26),h=n(23),b=n.n(h),x=n(24),k=n.n(x),g=n(80),O=n(1),v=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).state={circulation:1e8,price:0,marketCap:0,rank:1},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.coingecko.com/api/v3/coins/dogecoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true");case 2:e=t.sent,n=e.data.market_data,this.setState({circulation:n.circulating_supply,price:n.current_price.usd,marketCap:n.market_cap.usd,rank:n.market_cap_rank});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.circulation/5e9;return t=100/t,Object(O.jsxs)("div",{align:"center",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://res.cloudinary.com/jerrick/image/upload/v1611916824/6013e617b25457001c7d6e2f.png",height:"20%",width:"20%"})}),Object(O.jsxs)("div",{id:"textInfo",children:[Object(O.jsxs)("h2",{children:["Price : $",this.state.price.toFixed(7)]}),Object(O.jsxs)("h2",{children:["Inflation Rate: ",t.toFixed(2),"%"]}),Object(O.jsxs)("h2",{children:["Market Cap: $",this.state.marketCap.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(O.jsxs)("h2",{children:["market Cap Rank: ",this.state.rank]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{align:"center",children:[Object(O.jsx)("h2",{children:"Tips Appreciated :)"}),Object(O.jsx)(k.a,{value:"DB56Yce35J6YS57A7gyN559N7V1NDptoJr",size:"128"}),Object(O.jsx)("br",{}),Object(O.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){return navigator.clipboard.writeText("DB56Yce35J6YS57A7gyN559N7V1NDptoJr")},children:"Copy"})]})]})]})}}]),n}(r.Component);var m=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(v,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root")),f()}},[[66,1,2]]]);
//# sourceMappingURL=main.c71b8647.chunk.js.map