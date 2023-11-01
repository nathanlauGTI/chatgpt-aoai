(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{2048:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(1750);let s=(0,n.Z)("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]])},8064:function(e,r,t){Promise.resolve().then(t.bind(t,3875))},3875:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(9268),s=t(4214),i=t(6006),o=t(7830),l=t(9700),a=t(8919),c=t(6008),d=t(2048),u=t(1577),f=t(7902),m=t(4663),p=t(8175),x=t(6443),g=t(9647),v=t(1467),h=t(2391);let b=h.Ry({prompt:h.Z_().min(1,{message:"Music prompt is required"})});var j=()=>{let e=(0,v.t)(),r=(0,c.useRouter)(),[t,h]=(0,i.useState)(),j=(0,l.cI)({resolver:(0,o.F)(b),defaultValues:{prompt:""}}),y=j.formState.isSubmitting,N=async t=>{try{h(void 0);let e=await s.Z.post("/api/music",t);console.log(e),h(e.data.audio),j.reset()}catch(r){var n;(null==r?void 0:null===(n=r.response)||void 0===n?void 0:n.status)===403?e.onOpen():a.Am.error("Something went wrong.")}finally{r.refresh()}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(u.X,{title:"Music Generation",description:"Turn your prompt into music.",icon:d.Z,iconColor:"text-emerald-500",bgColor:"bg-emerald-500/10"}),(0,n.jsxs)("div",{className:"px-4 lg:px-8",children:[(0,n.jsx)(p.l0,{...j,children:(0,n.jsxs)("form",{onSubmit:j.handleSubmit(N),className:"   rounded-lg    border    w-full    p-4    px-3    md:px-6    focus-within:shadow-sm   grid   grid-cols-12   gap-2   ",children:[(0,n.jsx)(p.Wi,{name:"prompt",render:e=>{let{field:r}=e;return(0,n.jsx)(p.xJ,{className:"col-span-12 lg:col-span-10",children:(0,n.jsx)(p.NI,{className:"m-0 p-0",children:(0,n.jsx)(m.I,{className:"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent",disabled:y,placeholder:"Piano solo",...r})})})}}),(0,n.jsx)(f.z,{className:"col-span-12 lg:col-span-2 w-full",type:"submit",disabled:y,size:"icon",children:"Generate"})]})}),y&&(0,n.jsx)("div",{className:"p-20",children:(0,n.jsx)(x.a,{})}),!t&&!y&&(0,n.jsx)(g.H,{label:"No music generated."}),t&&(0,n.jsx)("audio",{controls:!0,className:"w-full mt-8",children:(0,n.jsx)("source",{src:t})})]})]})}},1577:function(e,r,t){"use strict";t.d(r,{X:function(){return i}});var n=t(9268),s=t(3044);let i=e=>{let{title:r,description:t,icon:i,iconColor:o,bgColor:l}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"px-4 lg:px-8 flex items-center gap-x-3 mb-8",children:[(0,n.jsx)("div",{className:(0,s.cn)("p-2 w-fit rounded-md",l),children:(0,n.jsx)(i,{className:(0,s.cn)("w-10 h-10",o)})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-3xl font-bold",children:r}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:t})]})]})})}},6443:function(e,r,t){"use strict";t.d(r,{a:function(){return o}});var n=t(9268),s=t(6394),i=t.n(s);let o=()=>(0,n.jsxs)("div",{className:"h-full flex flex-col gap-y-4 items-center justify-center",children:[(0,n.jsx)("div",{className:"w-10 h-10 relative animate-spin",children:(0,n.jsx)(i(),{alt:"Logo",src:"/logo.png",fill:!0})}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"The boss is thinking..."})]})},7902:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(9268),s=t(6006),i=t(1095),o=t(8917),l=t(3044);let a=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",premium:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,size:o,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(a({variant:s,size:o,className:t})),ref:r,...d})});c.displayName="Button"},9647:function(e,r,t){"use strict";t.d(r,{H:function(){return o}});var n=t(9268),s=t(6394),i=t.n(s);let o=e=>{let{label:r}=e;return(0,n.jsxs)("div",{className:"h-full p-20 flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"relative h-72 w-72",children:(0,n.jsx)(i(),{src:"/empty.png",fill:!0,alt:"Empty"})}),(0,n.jsx)("p",{className:"text-muted-foreground text-sm text-center",children:r})]})}},8175:function(e,r,t){"use strict";t.d(r,{l0:function(){return f},NI:function(){return b},Wi:function(){return p},xJ:function(){return v}});var n=t(9268),s=t(6006),i=t(1095),o=t(9700),l=t(3044),a=t(211),c=t(8917);let d=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,l.cn)(d(),t),...s})});u.displayName=a.f.displayName;let f=o.RV,m=s.createContext({}),p=e=>{let{...r}=e;return(0,n.jsx)(m.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},x=()=>{let e=s.useContext(m),r=s.useContext(g),{getFieldState:t,formState:n}=(0,o.Gc)(),i=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=r;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},g=s.createContext({}),v=s.forwardRef((e,r)=>{let{className:t,...i}=e,o=s.useId();return(0,n.jsx)(g.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...i})})});v.displayName="FormItem";let h=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:i,formItemId:o}=x();return(0,n.jsx)(u,{ref:r,className:(0,l.cn)(i&&"text-destructive",t),htmlFor:o,...s})});h.displayName="FormLabel";let b=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:o,formDescriptionId:l,formMessageId:a}=x();return(0,n.jsx)(i.g7,{ref:r,id:o,"aria-describedby":s?"".concat(l," ").concat(a):"".concat(l),"aria-invalid":!!s,...t})});b.displayName="FormControl";let j=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:i}=x();return(0,n.jsx)("p",{ref:r,id:i,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});j.displayName="FormDescription";let y=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e,{error:o,formMessageId:a}=x(),c=o?String(null==o?void 0:o.message):s;return c?(0,n.jsx)("p",{ref:r,id:a,className:(0,l.cn)("text-sm font-medium text-destructive",t),...i,children:c}):null});y.displayName="FormMessage"},4663:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(9268),s=t(6006),i=t(3044);let o=s.forwardRef((e,r)=>{let{className:t,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},1467:function(e,r,t){"use strict";t.d(r,{t:function(){return s}});var n=t(2561);let s=(0,n.Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},3044:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(9791),s=t(293);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m)((0,n.W)(r))}}},function(e){e.O(0,[690,394,762,44,253,698,744],function(){return e(e.s=8064)}),_N_E=e.O()}]);