(this["webpackJsonphome_work-3-search-img"]=this["webpackJsonphome_work-3-search-img"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3S9HI",Modal:"Modal_Modal__1ChMD"}},14:function(e,t,a){e.exports={Button:"Button_Button__sYDrl"}},16:function(e,t,a){e.exports={wrapper:"Loader_wrapper__3tUTe"}},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),o=a.n(r),c=a(11),l=a(3),s=a(4),i=a(6),u=a(5),h=a(12),p=a(7),m=a.n(p),d=a(1),b={searchQuery:""},j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=Object(h.a)({},b),e.handleSubmit=function(t){t.preventDefault(),e.props.apiRequest(e.state),e.resetInput()},e.handleChangeinput=function(t){var a=t.target.value;e.setState({searchQuery:a})},e.resetInput=function(){e.setState(Object(h.a)({},b))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(d.jsx)("header",{className:m.a.Searchbar,onSubmit:this.handleSubmit,children:Object(d.jsxs)("form",{className:m.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(d.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeinput,value:e})]})})}}]),a}(n.Component),g=a(14),O=a.n(g),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(d.jsx)("button",{type:"button",className:O.a.Button,onClick:this.props.apiRequest,children:"Load more"})}}]),a}(n.Component),y=a(15),v=a.n(y),S=(a(42),a(16)),_=a.n(S),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:_.a.wrapper,children:Object(d.jsx)(v.a,{type:"ThreeDots",color:"red",height:100,width:100,visible:this.props.spinner})})}}]),a}(n.Component),w=a(8),x=a.n(w),M=function(e){var t=e.img,a=e.handlerOpenModalWindow;return Object(d.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){return Object(d.jsx)("li",{className:x.a.ImageGalleryItem,onClick:a,children:Object(d.jsx)("img",{src:e.webformatURL,alt:e.largeImageURL,className:x.a.ImageGalleryItemImage})},e.id)}))})},k=function(e,t){return fetch("https://pixabay.com/api/?key=16360208-b38b3071e12220d724142a6b1&q=".concat(e,"&image_type=photo&pretty=true&page=").concat(t,"&per_page=12")).then((function(e){return e.json()})).then((function(e){return e.hits}))},C=a(10),F=a.n(C),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModalOverlay=function(t){"IMG"!==t.target.nodeName&&e.props.closeModalWIndow()},e.handleCloseModal=function(t){"Escape"===t.code&&e.props.closeModalWIndow()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal),window.addEventListener("click",this.handleCloseModalOverlay)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal),window.removeEventListener("click",this.handleCloseModalOverlay)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:F.a.Overlay,children:Object(d.jsx)("div",{className:F.a.Modal,children:Object(d.jsx)("img",{src:this.props.largeSrc,alt:"img"})})})}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={img:[],search:"",spinner:!1,page:1,largeSrc:null},e.apiRequest=function(){e.setState({spinner:!0});var t=e.state,a=t.search,n=t.page;k(a,n).then((function(t){return e.setState((function(e){return{img:[].concat(Object(c.a)(e.img),Object(c.a)(t)),page:e.page+1}}))})).finally((function(){return e.setState({spinner:!1})}))},e.handleSearchFormSubmit=function(t){var a=t.searchQuery;e.setState({search:a,img:[],page:1})},e.handlerOpenModalWindow=function(t){e.setState({largeSrc:t.target.alt})},e.closeModalWIndow=function(){e.setState({largeSrc:null})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.search;this.state.search!==a&&this.apiRequest()}},{key:"render",value:function(){var e=this.state,t=e.img,a=e.spinner,n=e.largeSrc,r=t.length>0;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{apiRequest:this.handleSearchFormSubmit}),Object(d.jsx)(M,{img:t,handlerOpenModalWindow:this.handlerOpenModalWindow}),n&&Object(d.jsx)(G,{largeSrc:n,closeModalWIndow:this.closeModalWIndow}),r&&!a?Object(d.jsx)(f,{apiRequest:this.apiRequest}):Object(d.jsx)(I,{spinner:a})]})}}]),a}(n.Component);o.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2bQkT",SearchForm:"Searchbar_SearchForm__3XGUP",SearchFormButton:"Searchbar_SearchFormButton__2y4zH",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__vGV9w",SearchFormInput:"Searchbar_SearchFormInput__2jlkj"}},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3eIsN",ImageGalleryItem:"ImageGallery_ImageGalleryItem__JYQw3",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__e76wI"}}},[[43,1,2]]]);
//# sourceMappingURL=main.06000838.chunk.js.map