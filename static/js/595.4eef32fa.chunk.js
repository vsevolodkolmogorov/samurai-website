"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[595],{9595:function(e,s,t){t.r(s),t.d(s,{default:function(){return le}});var i=t(5671),o=t(3144),n=t(136),a=t(516),r=t(8683),l=t(2791),c=t(885),u=t(5987),f="ProfileInfo_profile_body__jtYAV",h="ProfileInfo_profile_body_children__ze+81",d="ProfileInfo_profile_center__7Cx5P",p="ProfileInfo_editPanel__wbUvs",m="ProfileInfo_profile_left__uA-pG",_="ProfileInfo_description__fA7f-",x="ProfileInfo_profile_right__cmR8v",j="ProfileInfo_input_file_button__LofKf",P="ProfileInfo_titleOfEditPanel__xiK2G",v="ProfileInfo_separateLine__zfYp9",g="ProfileInfo_inputWrapper__RGxms",b="ProfileInfo_inputFile__Y6KEk",N=t(780),k=t(2752),S=t(184),y=function(e){var s=(0,l.useState)(!1),t=(0,c.Z)(s,2),i=t[0],o=t[1],n=(0,l.useState)(e.status),a=(0,c.Z)(n,2),r=a[0],u=a[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,S.jsxs)("div",{children:[!i&&(0,S.jsx)("div",{children:(0,S.jsxs)("span",{onDoubleClick:function(){o(!0)},children:[(0,S.jsx)("span",{className:"allocator",children:"Status:"})," ",e.status||"undefined :/ "]})}),i&&(0,S.jsx)("div",{children:(0,S.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:r,onBlur:function(){o(!1),e.updateStatus(r)}})})]})},I=t(2049),O=(0,I.W)("input"),C=function(e){var s=e.handleSubmit,t=e.profile;e.error;return(0,S.jsx)("div",{className:d,children:(0,S.jsx)("div",{className:_,children:(0,S.jsxs)("form",{onSubmit:s,children:[(0,S.jsx)("h2",{className:P,children:"Basic information:"}),(0,S.jsxs)("div",{className:p,children:[(0,S.jsxs)("li",{children:["Full name: ",(0,I.S)("Full name","fullName",[],O)]}),(0,S.jsxs)("li",{children:["Looking for a job: ",(0,I.S)("","lookingForAJob",[],O,{type:"checkbox"})]}),(0,S.jsxs)("li",{className:v,children:["My skills: ",(0,I.S)("","lookingForAJobDescription",[],(0,I.W)("textarea"))]}),(0,S.jsxs)("li",{children:["About me: ",(0,I.S)("About me","aboutMe",[],(0,I.W)("textarea"))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h2",{children:"Contacts:"}),(0,S.jsx)("li",{className:p,children:Object.keys(t.contacts).map((function(e){return(0,S.jsxs)("li",{children:[e,":",(0,I.S)(e,"contacts."+e,[],(0,I.W)("input"))]})}))})]})]}),(0,S.jsx)("button",{className:"buttonStyle",children:"Save"})]})})})},A=t(704),D=["profile","savePhoto","saveProfile"],w=(0,A.Z)({form:"profileData"})(C),M=function(e){var s=e.profile,t=e.props;return(0,S.jsx)("div",{className:d,children:(0,S.jsxs)("div",{className:_,children:[(0,S.jsx)("h3",{children:s.fullName}),(0,S.jsx)(y,{status:t.status,updateStatus:t.updateStatus}),(0,S.jsxs)("li",{children:[(0,S.jsx)("span",{className:"allocator",children:"Looking for a job:"})," ",s.lookingForAJob?"yes":"no"]}),(0,S.jsxs)("li",{children:[(0,S.jsx)("span",{className:"allocator",children:"My skills:"})," ",s.lookingForAJobDescription?s.lookingForAJobDescription:"nothing"]}),(0,S.jsxs)("li",{children:[(0,S.jsx)("span",{className:"allocator",children:"About me:"})," ",s.aboutMe?s.aboutMe:"nothing"]}),(0,S.jsxs)("li",{children:[(0,S.jsx)("span",{className:"allocator",children:"Contacts:"})," "]}),(0,S.jsx)("li",{children:Object.keys(s.contacts).map((function(e){return(0,S.jsx)(Z,{contactTitle:e,contactValue:s.contacts[e]},e)}))})]})})},Z=function(e){var s=e.contactTitle,t=e.contactValue;return t?(0,S.jsxs)("div",{children:[(0,S.jsxs)("span",{className:"allocator",children:[s,":"]})," ",t]}):null},F=function(e){var s=e.profile,t=e.savePhoto,i=e.saveProfile,o=(0,u.Z)(e,D),n=(0,l.useState)(!1),a=(0,c.Z)(n,2),r=a[0],d=a[1];if(!s)return(0,S.jsx)(k.Z,{});return(0,S.jsxs)("div",{className:f,children:[(0,S.jsxs)("div",{className:h,children:[(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)("img",{src:s.photos.large?s.photos.large:N}),o.isOwner&&(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)("button",{className:"buttonStyle",onClick:function(){d(!0)},children:"Edit"}),r&&(0,S.jsx)("button",{className:"buttonStyle",onClick:function(){d(!1)},children:"Back"})]})]}),r?(0,S.jsx)(w,{onSubmit:function(e){i(e).then((function(){d(!1)}))},initialValues:s,profile:s}):(0,S.jsx)(M,{profile:s,props:o})]}),(0,S.jsx)("div",{className:x,children:o.isOwner&&(0,S.jsxs)("div",{className:g,children:[(0,S.jsx)("input",{type:"file",name:"file",id:"inputFile",className:b,onChange:function(e){e.target.files.length&&t(e.target.files[0])}}),(0,S.jsx)("label",{className:j,htmlFor:"inputFile",children:"Change ava"})]})})]})},T=t(8687),L="MyPost_all_posts__W3ivf",U="MyPost_content_input__eJHkS",J="MyPost_message_answer__OHt0U",E="MyPost_input__Y+V-S",R="MyPost_input__wrapper__L+8k4",V="MyPost_input__file__+IpDB",W="MyPost_input__file_button__sNOLT",B="Post_post__zObHh",H="Post_post_text__amRvV",Y="Post_post_image__UyEav",q="Post_profile_post__Iiqq8",z=function(e){return(0,S.jsxs)("div",{className:B,children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:Y,children:(0,S.jsx)("img",{src:e.imageOfPost})}),(0,S.jsx)("div",{children:(0,S.jsxs)("div",{className:q,children:[(0,S.jsx)("a",{children:(0,S.jsx)("img",{src:e.imagePath})}),(0,S.jsx)("a",{children:(0,S.jsx)("h5",{children:e.nameOfUser?e.nameOfUser:"no name user"})}),(0,S.jsxs)("button",{children:[e.countLikes," likes"]})]})})]}),(0,S.jsx)("div",{className:H,children:(0,S.jsx)("p",{children:e.message})})]})},G=t(6139),K=function(e){return(0,S.jsxs)("form",{className:J,onSubmit:e.handleSubmit,children:[(0,S.jsxs)("div",{className:U,children:[(0,S.jsx)(G.Z,{name:"newPostText",component:"input",placeholder:"Enter your text for the post",className:E}),(0,S.jsxs)("div",{className:R,children:[(0,S.jsx)("input",{type:"file",name:"file",id:"input__file",className:V,onChange:function(s){var t=s.target,i=new FileReader;i.readAsDataURL(t.files[0]),i.onload=function(){e.checkPostPhoto(t,i.result)},t.files.length||alert("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e")}}),(0,S.jsx)("label",{className:W,htmlFor:"input__file",children:"Select an image"})]})]}),e.imagePostChooseMode?(0,S.jsx)("button",{type:"submit",className:"buttonStyle",children:"Submit"}):(0,S.jsx)("h1",{children:"Picture not selected"})]})},$=t(2381),Q=(0,A.Z)({form:"post",onSubmitSuccess:function(e,s){return s((0,$.mc)("post"))}})(K);var X=function(e){var s=e.profileData.map((function(e){return(0,S.jsx)(z,{message:e.message,ountLikes:e.countLikes,imagePath:e.imagePath,imageOfPost:e.imageOfPost,nameOfUser:e.nameOfUser},e.id)}));return(0,S.jsxs)("div",{children:[(0,S.jsx)("h1",{children:"All posts"}),e.isOwner&&(0,S.jsx)(Q,{pathToTheImagePost:e.pathToTheImagePost,onSubmit:function(s){e.addPostAC(s.newPostText)},checkPostPhoto:e.checkPostPhoto,imagePostChooseMode:e.imagePostChooseMode}),(0,S.jsx)("div",{className:L,children:s})]})},ee=t(3708),se=(0,T.$j)((function(e,s){return{profileData:e.profileData.MyPostsData,imagePostChooseMode:e.profileData.imagePostChooseMode,pathToTheImagePost:e.profileData.pathToTheImagePost,isOwner:s.isOwner}}),{addPostAC:ee.Pi,checkPostPhoto:ee.bJ})(X),te="Profile_wrapper__laFLh",ie=function(e){return(0,S.jsxs)("div",{className:te,children:[(0,S.jsx)(F,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile,savePhoto:e.savePhoto}),(0,S.jsx)(se,{isOwner:e.isOwner})]})},oe=t(7689),ne=t(249),ae=t(7781);var re=function(e){(0,n.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.userID),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e,s,t){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"render",value:function(){return(0,S.jsx)(ie,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),le=(0,ae.qC)((0,T.$j)((function(e){return{profile:e.profileData.ProfileInfoData,status:e.profileData.Status,userID:e.Auth.id,userIsAuth:e.Auth.isAuth}}),{setUserProfileAC:ee.kC,getProfile:ee.Ai,getStatus:ee.lR,updateStatus:ee.Nf,savePhoto:ee.Ju,saveProfile:ee.Ii}),(function(e){return function(s){var t=(0,oe.TH)(),i=(0,oe.s0)(),o=(0,oe.UO)();return(0,S.jsx)(e,(0,r.Z)((0,r.Z)({},s),{},{router:{location:t,navigate:i,params:o}}))}}),ne.e)(re)}}]);
//# sourceMappingURL=595.4eef32fa.chunk.js.map