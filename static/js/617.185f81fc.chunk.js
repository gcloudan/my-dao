"use strict";(self.webpackChunkmydao=self.webpackChunkmydao||[]).push([[617],{40617:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return E}});var n=r(37762),a=r(74165),s=r(15861),c=r(1413),o=r(15671),u=r(43144),i=r(97326),d=r(60136),p=r(92572),h=r(30619),l=r(23581),f=r(60874),k=r(70002),v=r(19601),w=r(2257),g=(r(80518),r(25025),r(70332),r(8455),r(59189),r(97143),r(84255),r(62555),r(26219),r(61303),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(71497),r(54730),r(36250),r(85725),r(38730),r(2090),r(237),r(65609),r(86841),r(49561),r(54253),r(40553),r(26),r(69392),r(31583),r(82037),r(20737),r(78262),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(18281),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435),f.z.object({contractAddress:l.cD})),x=g.extend({quantity:h.A}),y=g.extend({tokenId:l.cE}),b=g.extend({tokenId:l.cE,quantity:l.cE}),Z=x.omit({quantity:!0}).extend({quantityPerReward:h.A}),A=y,m=b.omit({quantity:!0}).extend({quantityPerReward:l.cE}),R=Z.extend({totalRewards:l.cE.default("1")}),P=A,C=m.extend({totalRewards:l.cE.default("1")});f.z.object({erc20Rewards:f.z.array(Z).default([]),erc721Rewards:f.z.array(A).default([]),erc1155Rewards:f.z.array(m).default([])});var W=f.z.object({erc20Rewards:f.z.array(R).default([]),erc721Rewards:f.z.array(P).default([]),erc1155Rewards:f.z.array(C).default([])}),I=W.extend({packMetadata:h.N,rewardsPerPack:l.cE.default("1"),openStartTime:l.cF.default(new Date)}),E=function(t){(0,d.Z)(r,t);var e=(0,p.Z)(r);function r(t,n,a){var s;(0,o.Z)(this,r);var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.co(t,n,d,u.gasless&&"openzeppelin"in u.gasless?(0,c.Z)((0,c.Z)({},u),{},{gasless:{openzeppelin:(0,c.Z)((0,c.Z)({},u.gasless.openzeppelin),{},{useEOAForwarder:!0})}}):u);return s=e.call(this,f,a,p),(0,h._)((0,i.Z)(s),"abi",void 0),(0,h._)((0,i.Z)(s),"metadata",void 0),(0,h._)((0,i.Z)(s),"roles",void 0),(0,h._)((0,i.Z)(s),"encoder",void 0),(0,h._)((0,i.Z)(s),"events",void 0),(0,h._)((0,i.Z)(s),"estimator",void 0),(0,h._)((0,i.Z)(s),"royalties",void 0),(0,h._)((0,i.Z)(s),"interceptor",void 0),(0,h._)((0,i.Z)(s),"erc1155",void 0),(0,h._)((0,i.Z)(s),"owner",void 0),s.abi=d,s.erc1155=new l.aH(s.contractWrapper,s.storage,p),s.metadata=new l.ai(s.contractWrapper,l.cG,s.storage),s.roles=new l.aj(s.contractWrapper,r.contractRoles),s.royalties=new l.ak(s.contractWrapper,s.metadata),s.encoder=new l.ah(s.contractWrapper),s.estimator=new l.aS(s.contractWrapper),s.events=new l.aT(s.contractWrapper),s.interceptor=new l.aU(s.contractWrapper),s.owner=new l.aX(s.contractWrapper),s}return(0,u.Z)(r,[{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.get(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.getAll(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getOwned",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.getOwned(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.totalCount());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,l.bs)("transfer"),k.dE);case 2:return e=t.sent,t.abrupt("return",!e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPackContents",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r,n,s,c,o,u,i,d,p,h,f;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.getPackContents(e);case 2:r=t.sent,n=r.contents,s=r.perUnitAmounts,c=[],o=[],u=[],i=0;case 9:if(!(i<n.length)){t.next=28;break}d=n[i],p=s[i],t.t0=d.tokenType,t.next=0===t.t0?15:1===t.t0?21:2===t.t0?23:25;break;case 15:return t.next=17,(0,l.cv)(this.contractWrapper.getProvider(),d.assetContract);case 17:return h=t.sent,f=v.formatUnits(d.totalAmount,h.decimals),c.push({contractAddress:d.assetContract,quantityPerReward:p.toString(),totalRewards:w.O$.from(f).div(p).toString()}),t.abrupt("break",25);case 21:return o.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString()}),t.abrupt("break",25);case 23:return u.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:w.O$.from(d.totalAmount).div(p).toString()}),t.abrupt("break",25);case 25:i++,t.next=9;break;case 28:return t.abrupt("return",{erc20Rewards:c,erc721Rewards:o,erc1155Rewards:u});case 29:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"create",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getSignerAddress();case 2:return r=t.sent,t.abrupt("return",this.createTo(r,e));case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addPackContents",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e,r){var n,s,c,o,u,i,d,p,h=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getSignerAddress();case 2:return n=t.sent,s=W.parse(r),t.next=6,this.toPackContentArgs(s);case 6:return c=t.sent,o=c.contents,u=c.numOfRewardUnits,t.next=11,this.contractWrapper.sendTransaction("addPackContents",[e,o,u,n]);case 11:if(i=t.sent,0!==(d=this.contractWrapper.parseLogs("PackUpdated",null===i||void 0===i?void 0:i.logs)).length){t.next=15;break}throw new Error("PackUpdated event not found");case 15:return p=d[0].args.packId,t.abrupt("return",{id:p,receipt:i,data:function(){return h.erc1155.get(p)}});case 17:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"createTo",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e,r){var n,s,c,o,u,i,d,p,h,f,k,v,w=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cw)(r.packMetadata,this.storage);case 2:return n=t.sent,s=I.parse(r),c=s.erc20Rewards,o=s.erc721Rewards,u=s.erc1155Rewards,i={erc20Rewards:c,erc721Rewards:o,erc1155Rewards:u},t.next=8,this.toPackContentArgs(i);case 8:return d=t.sent,p=d.contents,h=d.numOfRewardUnits,t.next=13,this.contractWrapper.sendTransaction("createPack",[p,h,n,s.openStartTime,s.rewardsPerPack,e]);case 13:if(f=t.sent,0!==(k=this.contractWrapper.parseLogs("PackCreated",null===f||void 0===f?void 0:f.logs)).length){t.next=17;break}throw new Error("PackCreated event not found");case 17:return v=k[0].args.packId,t.abrupt("return",{id:v,receipt:f,data:function(){return w.erc1155.get(v)}});case 19:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"open",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r,s,c,o,u,i,d,p,h,f,k,w=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=w.length>1&&void 0!==w[1]?w[1]:1,t.next=3,this.contractWrapper.sendTransaction("openPack",[e,r]);case 3:if(s=t.sent,0!==(c=this.contractWrapper.parseLogs("PackOpened",null===s||void 0===s?void 0:s.logs)).length){t.next=7;break}throw new Error("PackOpened event not found");case 7:o=c[0].args.rewardUnitsDistributed,u=[],i=[],d=[],p=(0,n.Z)(o),t.prev=12,p.s();case 14:if((h=p.n()).done){t.next=30;break}f=h.value,t.t0=f.tokenType,t.next=0===t.t0?19:1===t.t0?24:2===t.t0?26:28;break;case 19:return t.next=21,(0,l.cv)(this.contractWrapper.getProvider(),f.assetContract);case 21:return k=t.sent,u.push({contractAddress:f.assetContract,quantityPerReward:v.formatUnits(f.totalAmount,k.decimals).toString()}),t.abrupt("break",28);case 24:return i.push({contractAddress:f.assetContract,tokenId:f.tokenId.toString()}),t.abrupt("break",28);case 26:return d.push({contractAddress:f.assetContract,tokenId:f.tokenId.toString(),quantityPerReward:f.totalAmount.toString()}),t.abrupt("break",28);case 28:t.next=14;break;case 30:t.next=35;break;case 32:t.prev=32,t.t1=t.catch(12),p.e(t.t1);case 35:return t.prev=35,p.f(),t.finish(35);case 38:return t.abrupt("return",{erc20Rewards:u,erc721Rewards:i,erc1155Rewards:d});case 39:case"end":return t.stop()}}),t,this,[[12,32,35,38]])})));return function(e){return t.apply(this,arguments)}}()},{key:"toPackContentArgs",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r,s,c,o,u,i,d,p,h,f,k,v,g,x,y,b,Z,A;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],s=[],c=e.erc20Rewards,o=e.erc721Rewards,u=e.erc1155Rewards,i=this.contractWrapper.getProvider(),t.next=6,this.contractWrapper.getSignerAddress();case 6:d=t.sent,p=(0,n.Z)(c),t.prev=8,p.s();case 10:if((h=p.n()).done){t.next=25;break}return f=h.value,t.next=14,(0,l.cx)(i,f.quantityPerReward,f.contractAddress);case 14:return k=t.sent,v=k.mul(f.totalRewards),t.next=18,(0,l.cy)(this.contractWrapper,f.contractAddress,v);case 18:if(t.sent){t.next=21;break}throw new Error('ERC20 token with contract address "'.concat(f.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(f.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(v,");\n\n"));case 21:s.push(f.totalRewards),r.push({assetContract:f.contractAddress,tokenType:0,totalAmount:v,tokenId:0});case 23:t.next=10;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(8),p.e(t.t0);case 30:return t.prev=30,p.f(),t.finish(30);case 33:g=(0,n.Z)(o),t.prev=34,g.s();case 36:if((x=g.n()).done){t.next=47;break}return y=x.value,t.next=40,(0,l.cz)(this.contractWrapper.getProvider(),this.getAddress(),y.contractAddress,y.tokenId,d);case 40:if(t.sent){t.next=43;break}throw new Error('ERC721 token "'.concat(y.tokenId,'" with contract address "').concat(y.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(y.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(y.tokenId,");\n\n"));case 43:s.push("1"),r.push({assetContract:y.contractAddress,tokenType:1,totalAmount:1,tokenId:y.tokenId});case 45:t.next=36;break;case 47:t.next=52;break;case 49:t.prev=49,t.t1=t.catch(34),g.e(t.t1);case 52:return t.prev=52,g.f(),t.finish(52);case 55:b=(0,n.Z)(u),t.prev=56,b.s();case 58:if((Z=b.n()).done){t.next=69;break}return A=Z.value,t.next=62,(0,l.cz)(this.contractWrapper.getProvider(),this.getAddress(),A.contractAddress,A.tokenId,d);case 62:if(t.sent){t.next=65;break}throw new Error('ERC1155 token "'.concat(A.tokenId,'" with contract address "').concat(A.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(A.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 65:s.push(A.totalRewards),r.push({assetContract:A.contractAddress,tokenType:2,totalAmount:w.O$.from(A.quantityPerReward).mul(w.O$.from(A.totalRewards)),tokenId:A.tokenId});case 67:t.next=58;break;case 69:t.next=74;break;case 71:t.prev=71,t.t2=t.catch(56),b.e(t.t2);case 74:return t.prev=74,b.f(),t.finish(74);case 77:return t.abrupt("return",{contents:r,numOfRewardUnits:s});case 78:case"end":return t.stop()}}),t,this,[[8,27,30,33],[34,49,52,55],[56,71,74,77]])})));return function(e){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r,n,s,c,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=o.length,s=new Array(n>1?n-1:0),c=1;c<n;c++)s[c-1]=o[c];return t.abrupt("return",(r=this.contractWrapper).call.apply(r,[e].concat(s)));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),r}(l.aO);(0,h._)(E,"contractRoles",["admin","minter","asset","transfer"])}}]);
//# sourceMappingURL=617.185f81fc.chunk.js.map