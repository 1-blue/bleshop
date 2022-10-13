(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8347],{1152:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/information/address/update",function(){return c(5525)}])},5525:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(2670),f=c(9534),g=c(4051),h=c.n(g),i=c(5893),j=c(7294),k=c(7),l=c(7536),m=c(3299),n=c(2920),o=c(1163),p=c(5152),q=c.n(p),r=c(4629),s=c(9923),t=c(2483),u=c(9669),v=q()(function(){return c.e(7340).then(c.bind(c,7340))},{loadableGenerated:{webpack:function(){return[7340]}},suspense:!0}),w=q()(function(){return c.e(3989).then(c.bind(c,3989))},{loadableGenerated:{webpack:function(){return[3989]}},suspense:!0}),x=q()(function(){return Promise.resolve().then(c.bind(c,6193))},{loadableGenerated:{webpack:function(){return[6193]}},suspense:!0}),y=q()(function(){return c.e(1887).then(c.bind(c,1887))},{loadableGenerated:{webpack:function(){return[1887]}},suspense:!0}),z=q()(function(){return c.e(104).then(c.bind(c,1432))},{loadableGenerated:{webpack:function(){return[1432]}},suspense:!0}),A=q()(function(){return c.e(2249).then(c.bind(c,2249))},{loadableGenerated:{webpack:function(){return[2249]}},suspense:!0}),B=q()(function(){return c.e(6987).then(c.bind(c,6987))},{loadableGenerated:{webpack:function(){return[6987]}},suspense:!0}),C=function(){var a,b,c,g,p,q,C,D=(0,o.useRouter)(),E=(0,m.useSession)().data,F=(0,l.cI)({defaultValues:{name:null==E?void 0:null===(a=E.user)|| void 0===a?void 0:a.name,phone:(null==E?void 0:null===(b=E.user)|| void 0===b?void 0:b.phone)||""}}),G=F.register,H=F.handleSubmit,I=F.setValue,J=F.formState.errors;(0,j.useEffect)(function(){D.isReady&&"string"==typeof D.query.addressIdx&&(0,d.Z)(h().mark(function a(){var b,c,d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("string"==typeof D.query.addressIdx){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,t.Z.addressService.apiGetAllAddress();case 4:if(d=null==(c=(b=a.sent).data.addresses)?void 0:c.find(function(a){return a.idx=== +D.query.addressIdx})){a.next=9;break}return a.abrupt("return",n.Am.error("주소지 정보가 존재하지 않습니다."));case 9:I("idx",+D.query.addressIdx),I("name",d.name),I("address",d.address),I("residence",d.residence),I("phone",d.phone),I("message",d.message),I("isDefault",d.isDefault);case 16:case"end":return a.stop()}},a)}))()},[D.isReady,D.query,I]);var K,L=(0,j.useCallback)(function(a){var b=a.roadAddress,c=a.zonecode;I("address","".concat(b," [").concat(c,"]")),O(!1)},[I]),M=(0,j.useState)(!1),N=M[0],O=M[1],P=(0,j.useCallback)((K=(0,d.Z)(h().mark(function a(b){var c,d,g,i,j,k,l,m;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=n.Am.loading("주소지를 등록/수정하는 중입니다."),a.prev=1,!b.idx){a.next=10;break}return a.next=5,t.Z.addressService.apiUpdateAddress(b);case 5:g=(d=a.sent).data.message,n.Am.update(c,{render:g,type:"success",isLoading:!1,autoClose:1500}),a.next=16;break;case 10:return i=b.idx,j=(0,f.Z)(b,["idx"]),a.next=13,t.Z.addressService.apiCreateAddress(j);case 13:l=(k=a.sent).data.message,n.Am.update(c,{render:l,type:"success",isLoading:!1,autoClose:1500});case 16:D.push("/information/address"),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(1),console.error("error >> ",a.t0),(0,e.Z)(a.t0,u.AxiosError)?n.Am.update(c,{render:null===(m=a.t0.response)|| void 0===m?void 0:m.data.message,type:"error",isLoading:!1,autoClose:1500}):n.Am.update(c,{render:"알 수 없는 에러가 발생했습니다.",type:"error",isLoading:!1,autoClose:1500});case 23:case"end":return a.stop()}},a,null,[[1,19]])})),function(a){return K.apply(this,arguments)}),[D]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{title:"BleShop - 주소지 수정",description:"BleShop의 주소지 수정 페이지입니다."}),(0,i.jsxs)("section",{className:"flex flex-col items-center pt-4 space-y-4",children:[(0,i.jsx)(v,{title:"주소록 관리"}),(0,i.jsxs)(y,{onSubmit:H(P),className:"bg-white rounded-md shadow-2xl overflow-hidden min-w-[300px] max-w-[600px] p-8 w-full",children:[(0,i.jsx)(z,{type:"text",name:"받는 사람",placeholder:"받는 사람 이름을 입력해주세요.",register:G("name",{required:"이름를 입력해주세요!",maxLength:{value:20,message:"20자 이내로 입력해주세요!"}}),errorMessage:null===(c=J.name)|| void 0===c?void 0:c.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center min-w-[200px] max-w-[600px] w-full",children:[(0,i.jsx)(z,{type:"text",name:"주소",placeholder:"주소를 검색해주세요.",register:G("address",{required:"주소를 검색해주세요!"}),errorMessage:null===(g=J.address)|| void 0===g?void 0:g.message,disabled:!0,className:"min-w-[200px] max-w-[600px] w-full"}),(0,i.jsx)("button",{type:"button",className:"absolute top-[16px] xs:top-[20px] md:top-[24px] right-0 p-[10px] xs:p-[12px] md:p-[10px] bg-blue-400 text-white rounded-r-sm hover:bg-blue-500 focus:outline-none focus:bg-blue-500",onClick:function(){return O(!0)},children:(0,i.jsx)(x,{shape:"search",className:"w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6"})})]}),(0,i.jsx)(z,{type:"text",name:"상세 주소",placeholder:"상세 주소를 입력해주세요.",register:G("residence",{required:"상세 주소를 입력해주세요!"}),errorMessage:null===(p=J.residence)|| void 0===p?void 0:p.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,i.jsx)(z,{type:"text",name:"phone",placeholder:"휴대폰 번호를 숫자만 입력해주세요. ex) 01021038259",register:G("phone",{required:"휴대폰 번호를 입력해주세요",pattern:{value:(0,s.Nu)("phone"),message:"숫자만 11자리 입력해 주세요."},maxLength:{value:11,message:"숫자만 11자리 입력해 주세요."},minLength:{value:11,message:"숫자만 11자리 입력해 주세요."}}),errorMessage:null===(q=J.phone)|| void 0===q?void 0:q.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,i.jsx)(z,{type:"text",name:"요청 사항",placeholder:"요청 사항을 입력해주세요!",register:G("message"),errorMessage:null===(C=J.message)|| void 0===C?void 0:C.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,i.jsx)(A,{name:"기본 배송지로 선택",register:G("isDefault")}),(0,i.jsx)(B,{type:"submit",text:"등록/수정",className:"min-w-[200px] max-w-[600px] w-full",primary:!0})]}),N&&(0,i.jsx)(w,{onCloseModal:function(){return O(!1)},className:"max-w-[800px] min-w-[400px]",children:(0,i.jsx)(k.ZP,{onComplete:L,animation:!0,useBannerLink:!1})})]})]})};b.default=C}},function(a){a.O(0,[6819,7536,430,2483,9774,2888,179],function(){var b;return a(a.s=1152)}),_N_E=a.O()}])