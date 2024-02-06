const ye=["EXT_color_buffer_float"],Le=["OES_texture_float_linear"];class C extends Array{constructor(t=0,e=t,n=e){return typeof t=="string"&&([t,e,n]=C.hexToRGB(t)),t>1&&(t/=255,e/=255,n/=255),super(t,e,n),this}get isColor(){return!0}get r(){return this[0]}set r(t){this[0]=t}get g(){return this[1]}set g(t){this[1]=t}get b(){return this[2]}set b(t){this[2]=t}set(t,e,n){return typeof t=="string"&&([t,e,n]=C.hexToRGB(t)),t.length?this.copy(t):(this[0]=t,this[1]=e,this[2]=n,this)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this}fromHex(t){const e=C.hexToRGB(t);this.fromArray(e)}getHex(){const[t,e,n]=this,a=s=>Math.round(255*s).toString(16).padStart(2,"0");return`#${a(t)}${a(e)}${a(n)}`}static hexToRGB(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}static rgbToHex(t){t.length&&t.length==3||console.error(`Unable to convert rgb array ${t} to hex value`);let e="#";for(let n=0;n<t.length;n++){let a=Number(t[n]).toString(16);a.length<2&&(a="0"+a),e+=a}return e}static hslToRGB(t,e,n){let a,s,r;if(e==0)a=s=r=n;else{let l=function(u,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<.16666666666666666?u+6*(d-u)*p:p<.5?d:p<.6666666666666666?u+(d-u)*(.6666666666666666-p)*6:u},o=n<.5?n*(1+e):n+e-n*e,c=2*n-o;a=l(c,o,t+1/3),s=l(c,o,t),r=l(c,o,t-1/3)}return[a,s,r]}static rgbToHsl(t,e,n){t/=255,e/=255,n/=255;let a,s,r=Math.max(t,e,n),l=Math.min(t,e,n),o=(r+l)/2;if(r==l)a=s=0;else{let c=r-l;switch(s=o>.5?c/(2-r-l):c/(r+l),r){case t:a=(e-n)/c+(e<n?6:0);break;case e:a=(n-t)/c+2;break;case n:a=(t-e)/c+4}a/=6}return[a,s,o]}static rgbToHsv(t,e,n){let a,s,r;t/=255,e/=255,n/=255;let l=Math.min(t,e,n),o=r=Math.max(t,e,n),c=o-l;if(o==l)a=0;else{switch(o){case t:a=(e-n)/c+(e<n?6:0);break;case e:a=2+(n-t)/c;break;case n:a=4+(t-e)/c}a=Math.round(60*a)}return s=o==0?0:1-l/o,s=Math.round(100*s),r=Math.round(100*r),[a,s,r]}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(){return Array.from(this)}SRGBToLinearSingle(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}SRGBToLinear(){return this[0]=this.SRGBToLinearSingle(this[0]),this[1]=this.SRGBToLinearSingle(this[1]),this[2]=this.SRGBToLinearSingle(this[2]),this}LinearToSRGBSingle(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}LinearToSRGB(){return this[0]=this.LinearToSRGBSingle(this[0]),this[1]=this.LinearToSRGBSingle(this[1]),this[2]=this.LinearToSRGBSingle(this[2]),this}luminance(){return .2126*this[0]+.7152*this[1]+.0722*this[2]}addColor(t,e){return this[0]=t[0]+e[0],this[1]=t[1]+e[1],this[2]=t[2]+e[2],this}scale(t){return this[0]=this[0]*t,this[1]=this[1]*t,this[2]=this[2]*t,this}}function Lt(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function Ft(i,t,e){let n=t[0],a=t[1],s=t[2],r=t[3],l=t[4],o=t[5],c=t[6],u=t[7],d=t[8],p=t[9],f=t[10],h=t[11],m=t[12],T=t[13],x=t[14],S=t[15],v=e[0],g=e[1],b=e[2],A=e[3];return i[0]=v*n+g*l+b*d+A*m,i[1]=v*a+g*o+b*p+A*T,i[2]=v*s+g*c+b*f+A*x,i[3]=v*r+g*u+b*h+A*S,v=e[4],g=e[5],b=e[6],A=e[7],i[4]=v*n+g*l+b*d+A*m,i[5]=v*a+g*o+b*p+A*T,i[6]=v*s+g*c+b*f+A*x,i[7]=v*r+g*u+b*h+A*S,v=e[8],g=e[9],b=e[10],A=e[11],i[8]=v*n+g*l+b*d+A*m,i[9]=v*a+g*o+b*p+A*T,i[10]=v*s+g*c+b*f+A*x,i[11]=v*r+g*u+b*h+A*S,v=e[12],g=e[13],b=e[14],A=e[15],i[12]=v*n+g*l+b*d+A*m,i[13]=v*a+g*o+b*p+A*T,i[14]=v*s+g*c+b*f+A*x,i[15]=v*r+g*u+b*h+A*S,i}function Pt(i,t){let e=t[0]+t[5]+t[10],n=0;return e>0?(n=2*Math.sqrt(e+1),i[3]=.25*n,i[0]=(t[6]-t[9])/n,i[1]=(t[8]-t[2])/n,i[2]=(t[1]-t[4])/n):t[0]>t[5]&&t[0]>t[10]?(n=2*Math.sqrt(1+t[0]-t[5]-t[10]),i[3]=(t[6]-t[9])/n,i[0]=.25*n,i[1]=(t[1]+t[4])/n,i[2]=(t[8]+t[2])/n):t[5]>t[10]?(n=2*Math.sqrt(1+t[5]-t[0]-t[10]),i[3]=(t[8]-t[2])/n,i[0]=(t[1]+t[4])/n,i[1]=.25*n,i[2]=(t[6]+t[9])/n):(n=2*Math.sqrt(1+t[10]-t[0]-t[5]),i[3]=(t[1]-t[4])/n,i[0]=(t[8]+t[2])/n,i[1]=(t[6]+t[9])/n,i[2]=.25*n),i}function Rt(i,t){let e=t[0],n=t[1],a=t[2],s=t[3],r=e+e,l=n+n,o=a+a,c=e*r,u=n*r,d=n*l,p=a*r,f=a*l,h=a*o,m=s*r,T=s*l,x=s*o;return i[0]=1-d-h,i[1]=u+x,i[2]=p-T,i[3]=0,i[4]=u-x,i[5]=1-c-h,i[6]=f+m,i[7]=0,i[8]=p+T,i[9]=f-m,i[10]=1-c-d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}class V extends Array{constructor(t=1,e=0,n=0,a=0,s=0,r=1,l=0,o=0,c=0,u=0,d=1,p=0,f=0,h=0,m=0,T=1){return super(t,e,n,a,s,r,l,o,c,u,d,p,f,h,m,T),this}get isMatrix4(){return!0}set x(t){this[12]=t}get x(){return this[12]}set y(t){this[13]=t}get y(){return this[13]}set z(t){this[14]=t}get z(){return this[14]}set w(t){this[15]=t}get w(){return this[15]}set(t,e,n,a,s,r,l,o,c,u,d,p,f,h,m,T){return t.length?this.copy(t):(function(x,S,v,g,b,A,M,L,F,R,I,N,X,w,W,y,ot){x[0]=S,x[1]=v,x[2]=g,x[3]=b,x[4]=A,x[5]=M,x[6]=L,x[7]=F,x[8]=R,x[9]=I,x[10]=N,x[11]=X,x[12]=w,x[13]=W,x[14]=y,x[15]=ot}(this,t,e,n,a,s,r,l,o,c,u,d,p,f,h,m,T),this)}translate(t,e=this){return function(n,a,s){let r,l,o,c,u,d,p,f,h,m,T,x,S=s[0],v=s[1],g=s[2];a===n?(n[12]=a[0]*S+a[4]*v+a[8]*g+a[12],n[13]=a[1]*S+a[5]*v+a[9]*g+a[13],n[14]=a[2]*S+a[6]*v+a[10]*g+a[14],n[15]=a[3]*S+a[7]*v+a[11]*g+a[15]):(r=a[0],l=a[1],o=a[2],c=a[3],u=a[4],d=a[5],p=a[6],f=a[7],h=a[8],m=a[9],T=a[10],x=a[11],n[0]=r,n[1]=l,n[2]=o,n[3]=c,n[4]=u,n[5]=d,n[6]=p,n[7]=f,n[8]=h,n[9]=m,n[10]=T,n[11]=x,n[12]=r*S+u*v+h*g+a[12],n[13]=l*S+d*v+m*g+a[13],n[14]=o*S+p*v+T*g+a[14],n[15]=c*S+f*v+x*g+a[15])}(this,e,t),this}rotateX(t,e=this){return function(n,a,s){let r=Math.sin(s),l=Math.cos(s),o=a[4],c=a[5],u=a[6],d=a[7],p=a[8],f=a[9],h=a[10],m=a[11];a!==n&&(n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15]),n[4]=o*l+p*r,n[5]=c*l+f*r,n[6]=u*l+h*r,n[7]=d*l+m*r,n[8]=p*l-o*r,n[9]=f*l-c*r,n[10]=h*l-u*r,n[11]=m*l-d*r}(this,e,t),this}rotateY(t,e=this){return function(n,a,s){let r=Math.sin(s),l=Math.cos(s),o=a[0],c=a[1],u=a[2],d=a[3],p=a[8],f=a[9],h=a[10],m=a[11];a!==n&&(n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15]),n[0]=o*l-p*r,n[1]=c*l-f*r,n[2]=u*l-h*r,n[3]=d*l-m*r,n[8]=o*r+p*l,n[9]=c*r+f*l,n[10]=u*r+h*l,n[11]=d*r+m*l}(this,e,t),this}rotateZ(t,e=this){return function(n,a,s){let r=Math.sin(s),l=Math.cos(s),o=a[0],c=a[1],u=a[2],d=a[3],p=a[4],f=a[5],h=a[6],m=a[7];a!==n&&(n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15]),n[0]=o*l+p*r,n[1]=c*l+f*r,n[2]=u*l+h*r,n[3]=d*l+m*r,n[4]=p*l-o*r,n[5]=f*l-c*r,n[6]=h*l-u*r,n[7]=m*l-d*r}(this,e,t),this}scale(t,e=this){return function(n,a,s){let r=s[0],l=s[1],o=s[2];n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=a[3]*r,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=a[7]*l,n[8]=a[8]*o,n[9]=a[9]*o,n[10]=a[10]*o,n[11]=a[11]*o,n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15]}(this,e,typeof t=="number"?[t,t,t]:t),this}multiply(t,e){return e?Ft(this,t,e):Ft(this,this,t),this}identity(){return Lt(this),this}copy(t){var e,n;return n=t,(e=this)[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}fromPerspective({fov:t,aspect:e,near:n,far:a}={}){return function(s,r,l,o,c){let u=1/Math.tan(r/2),d=1/(o-c);s[0]=u/l,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(c+o)*d,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*c*o*d,s[15]=0}(this,t,e,n,a),this}fromOrthogonal({left:t,right:e,bottom:n,top:a,near:s,far:r}){return function(l,o,c,u,d,p,f){let h=1/(o-c),m=1/(u-d),T=1/(p-f);l[0]=-2*h,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=-2*m,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=2*T,l[11]=0,l[12]=(o+c)*h,l[13]=(d+u)*m,l[14]=(f+p)*T,l[15]=1}(this,t,e,n,a,s,r),this}fromQuaternion(t){return Rt(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}transpose(t=this){return function(e,n){if(e===n){let a=n[1],s=n[2],r=n[3],l=n[6],o=n[7],c=n[11];e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=a,e[6]=n[9],e[7]=n[13],e[8]=s,e[9]=l,e[11]=n[14],e[12]=r,e[13]=o,e[14]=c}else e[0]=n[0],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=n[1],e[5]=n[5],e[6]=n[9],e[7]=n[13],e[8]=n[2],e[9]=n[6],e[10]=n[10],e[11]=n[14],e[12]=n[3],e[13]=n[7],e[14]=n[11],e[15]=n[15]}(this,t),this}inverse(t=this){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[3],o=n[4],c=n[5],u=n[6],d=n[7],p=n[8],f=n[9],h=n[10],m=n[11],T=n[12],x=n[13],S=n[14],v=n[15],g=a*c-s*o,b=a*u-r*o,A=a*d-l*o,M=s*u-r*c,L=s*d-l*c,F=r*d-l*u,R=p*x-f*T,I=p*S-h*T,N=p*v-m*T,X=f*S-h*x,w=f*v-m*x,W=h*v-m*S,y=g*W-b*w+A*X+M*N-L*I+F*R;y&&(y=1/y,e[0]=(c*W-u*w+d*X)*y,e[1]=(r*w-s*W-l*X)*y,e[2]=(x*F-S*L+v*M)*y,e[3]=(h*L-f*F-m*M)*y,e[4]=(u*N-o*W-d*I)*y,e[5]=(a*W-r*N+l*I)*y,e[6]=(S*A-T*F-v*b)*y,e[7]=(p*F-h*A+m*b)*y,e[8]=(o*w-c*N+d*R)*y,e[9]=(s*N-a*w-l*R)*y,e[10]=(T*L-x*A+v*g)*y,e[11]=(f*A-p*L-m*g)*y,e[12]=(c*I-o*X-u*R)*y,e[13]=(a*X-s*I+r*R)*y,e[14]=(x*b-T*M-S*g)*y,e[15]=(p*M-f*b+h*g)*y)}(this,t),this}compose(t,e,n){return function(a,s,r,l){let o=s[0],c=s[1],u=s[2],d=s[3],p=o+o,f=c+c,h=u+u,m=o*p,T=o*f,x=o*h,S=c*f,v=c*h,g=u*h,b=d*p,A=d*f,M=d*h,L=l[0],F=l[1],R=l[2];a[0]=(1-(S+g))*L,a[1]=(T+M)*L,a[2]=(x-A)*L,a[3]=0,a[4]=(T-M)*F,a[5]=(1-(m+g))*F,a[6]=(v+b)*F,a[7]=0,a[8]=(x+A)*R,a[9]=(v-b)*R,a[10]=(1-(m+S))*R,a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1}(this,t,e,n),this}getRotation(t){return Pt(t,this),this}extractRotation(t){let e=[];return Pt(e,t),Rt(this,e),this}fromRotation(t,e){return function(n,a,s){let r,l,o,c=s[0],u=s[1],d=s[2],p=Math.sqrt(c*c+u*u+d*d);Math.abs(p)<1e-6||(p=1/p,c*=p,u*=p,d*=p,r=Math.sin(a),l=Math.cos(a),o=1-l,n[0]=c*c*o+l,n[1]=u*c*o+d*r,n[2]=d*c*o-u*r,n[3]=0,n[4]=c*u*o-d*r,n[5]=u*u*o+l,n[6]=d*u*o+c*r,n[7]=0,n[8]=c*d*o+u*r,n[9]=u*d*o-c*r,n[10]=d*d*o+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1)}(this,t,e),this}getTranslation(t){var e,n;return n=this,(e=t)[0]=n[12],e[1]=n[13],e[2]=n[14],this}getScaling(t){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[4],o=n[5],c=n[6],u=n[8],d=n[9],p=n[10];e[0]=Math.sqrt(a*a+s*s+r*r),e[1]=Math.sqrt(l*l+o*o+c*c),e[2]=Math.sqrt(u*u+d*d+p*p)}(t,this),this}getMaxScaleOnAxis(){return function(t){let e=t[0],n=t[1],a=t[2],s=t[4],r=t[5],l=t[6],o=t[8],c=t[9],u=t[10];const d=e*e+n*n+a*a,p=s*s+r*r+l*l,f=o*o+c*c+u*u;return Math.sqrt(Math.max(d,p,f))}(this)}lookAt(t,e,n){return function(a,s,r,l){let o=s[0],c=s[1],u=s[2],d=l[0],p=l[1],f=l[2],h=o-r[0],m=c-r[1],T=u-r[2],x=h*h+m*m+T*T;x>0&&(x=1/Math.sqrt(x),h*=x,m*=x,T*=x);let S=p*T-f*m,v=f*h-d*T,g=d*m-p*h;x=S*S+v*v+g*g,x>0&&(x=1/Math.sqrt(x),S*=x,v*=x,g*=x),a[0]=S,a[1]=v,a[2]=g,a[3]=0,a[4]=m*g-T*v,a[5]=T*S-h*g,a[6]=h*v-m*S,a[7]=0,a[8]=h,a[9]=m,a[10]=T,a[11]=0,a[12]=o,a[13]=c,a[14]=u,a[15]=1}(this,t,e,n),this}lookAtTarget(t,e,n){return function(a,s,r,l){let o,c,u,d,p,f,h,m,T,x,S=s[0],v=s[1],g=s[2],b=l[0],A=l[1],M=l[2],L=r[0],F=r[1],R=r[2];Math.abs(S-L)<1e-6&&Math.abs(v-F)<1e-6&&Math.abs(g-R)<1e-6?Lt(a):(h=S-L,m=v-F,T=g-R,x=1/Math.sqrt(h*h+m*m+T*T),h*=x,m*=x,T*=x,o=A*T-M*m,c=M*h-b*T,u=b*m-A*h,x=Math.sqrt(o*o+c*c+u*u),x?(x=1/x,o*=x,c*=x,u*=x):(o=0,c=0,u=0),d=m*u-T*c,p=T*o-h*u,f=h*c-m*o,x=Math.sqrt(d*d+p*p+f*f),x?(x=1/x,d*=x,p*=x,f*=x):(d=0,p=0,f=0),a[0]=o,a[1]=d,a[2]=h,a[3]=0,a[4]=c,a[5]=p,a[6]=m,a[7]=0,a[8]=u,a[9]=f,a[10]=T,a[11]=0,a[12]=-(o*S+c*v+u*g),a[13]=-(d*S+p*v+f*g),a[14]=-(h*S+m*v+T*g),a[15]=1)}(this,t,e,n),this}determinant(){return function(t){let e=t[0],n=t[1],a=t[2],s=t[3],r=t[4],l=t[5],o=t[6],c=t[7],u=t[8],d=t[9],p=t[10],f=t[11],h=t[12],m=t[13],T=t[14],x=t[15];return(e*l-n*r)*(p*x-f*T)-(e*o-a*r)*(d*x-f*m)+(e*c-s*r)*(d*T-p*m)+(n*o-a*l)*(u*x-f*h)-(n*c-s*l)*(u*T-p*h)+(a*c-s*o)*(u*m-d*h)}(this)}fromArray(t,e=0){for(var n=0;n<16;n++)this[n]=t[n+e];return this}toArray(t=[],e=0){let n=this;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}static copyTo(t=[],e=[]){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]}}function It(i,t,e){let n=t[0],a=t[1],s=t[2],r=t[3],l=t[4],o=t[5],c=t[6],u=t[7],d=t[8],p=e[0],f=e[1],h=e[2],m=e[3],T=e[4],x=e[5],S=e[6],v=e[7],g=e[8];return i[0]=p*n+f*r+h*c,i[1]=p*a+f*l+h*u,i[2]=p*s+f*o+h*d,i[3]=m*n+T*r+x*c,i[4]=m*a+T*l+x*u,i[5]=m*s+T*o+x*d,i[6]=S*n+v*r+g*c,i[7]=S*a+v*l+g*u,i[8]=S*s+v*o+g*d,i}new V;class O extends Array{constructor(t=1,e=0,n=0,a=0,s=1,r=0,l=0,o=0,c=1){return super(t,e,n,a,s,r,l,o,c),this}get isMatrix3(){return!0}set(t,e,n,a,s,r,l,o,c){return t.length?this.copy(t):(function(u,d,p,f,h,m,T,x,S,v){u[0]=d,u[1]=p,u[2]=f,u[3]=h,u[4]=m,u[5]=T,u[6]=x,u[7]=S,u[8]=v}(this,t,e,n,a,s,r,l,o,c),this)}transpose(){return function(t){let e;e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e}(this),this}inverse(t=this){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[3],o=n[4],c=n[5],u=n[6],d=n[7],p=n[8],f=p*o-c*d,h=-p*l+c*u,m=d*l-o*u,T=a*f+s*h+r*m;T&&(T=1/T,e[0]=f*T,e[1]=(-p*s+r*d)*T,e[2]=(c*s-r*o)*T,e[3]=h*T,e[4]=(p*a-r*u)*T,e[5]=(-c*a+r*l)*T,e[6]=m*T,e[7]=(-d*a+s*u)*T,e[8]=(o*a-s*l)*T)}(this,t),this}translate(t,e=this){return function(n,a,s){let r=a[0],l=a[1],o=a[2],c=a[3],u=a[4],d=a[5],p=a[6],f=a[7],h=a[8],m=s[0],T=s[1];n[0]=r,n[1]=l,n[2]=o,n[3]=c,n[4]=u,n[5]=d,n[6]=m*r+T*c+p,n[7]=m*l+T*u+f,n[8]=m*o+T*d+h}(this,e,t),this}rotate(t,e=this){return function(n,a,s){let r=a[0],l=a[1],o=a[2],c=a[3],u=a[4],d=a[5],p=a[6],f=a[7],h=a[8],m=Math.sin(s),T=Math.cos(s);n[0]=T*r+m*c,n[1]=T*l+m*u,n[2]=T*o+m*d,n[3]=T*c-m*r,n[4]=T*u-m*l,n[5]=T*d-m*o,n[6]=p,n[7]=f,n[8]=h}(this,e,t),this}scale(t,e=this){return function(n,a,s){let r=s[0],l=s[1];n[0]=r*a[0],n[1]=r*a[1],n[2]=r*a[2],n[3]=l*a[3],n[4]=l*a[4],n[5]=l*a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8]}(this,e,t),this}multiply(t,e){return e?It(this,t,e):It(this,this,t),this}identity(){var t;return(t=this)[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this}copy(t){var e,n;return n=t,(e=this)[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}fromMatrix4(t){var e,n;return n=t,(e=this)[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],this}fromQuaternion(t){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[3],o=a+a,c=s+s,u=r+r,d=a*o,p=s*o,f=s*c,h=r*o,m=r*c,T=r*u,x=l*o,S=l*c,v=l*u;e[0]=1-f-T,e[3]=p-v,e[6]=h+S,e[1]=p+v,e[4]=1-d-T,e[7]=m-x,e[2]=h-S,e[5]=m+x,e[8]=1-d-f}(this,t),this}fromBasis(t,e,n){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],n[0],n[1],n[2]),this}getNormalMatrix(t){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[3],o=n[4],c=n[5],u=n[6],d=n[7],p=n[8],f=n[9],h=n[10],m=n[11],T=n[12],x=n[13],S=n[14],v=n[15],g=a*c-s*o,b=a*u-r*o,A=a*d-l*o,M=s*u-r*c,L=s*d-l*c,F=r*d-l*u,R=p*x-f*T,I=p*S-h*T,N=p*v-m*T,X=f*S-h*x,w=f*v-m*x,W=h*v-m*S,y=g*W-b*w+A*X+M*N-L*I+F*R;y&&(y=1/y,e[0]=(c*W-u*w+d*X)*y,e[1]=(u*N-o*W-d*I)*y,e[2]=(o*w-c*N+d*R)*y,e[3]=(r*w-s*W-l*X)*y,e[4]=(a*W-r*N+l*I)*y,e[5]=(s*N-a*w-l*R)*y,e[6]=(x*F-S*L+v*M)*y,e[7]=(S*A-T*F-v*b)*y,e[8]=(T*L-x*A+v*g)*y)}(this,t),this}clone(){return new O().copy(this)}fromArray(t,e=0){for(var n=0;n<9;n++)this[n]=t[n+e];return this}toArray(){return Array.from(this)}toWebGPUFormat(){const t=new Float32Array(12);return t[3]=0,t[7]=0,t[11]=0,t[0]=this[0],t[1]=this[1],t[2]=this[2],t[4]=this[3],t[5]=this[4],t[6]=this[5],t[8]=this[6],t[9]=this[7],t[10]=this[8],t}}function Nt(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i[2]=t[2]+e[2],i}function Xt(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],i}function lt(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i}function at(i,t){let e=t[0],n=t[1],a=t[2],s=e*e+n*n+a*a;return s>0&&(s=1/Math.sqrt(s),i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s),i}function wt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ne(i,t,e){let n=t[0],a=t[1],s=t[2],r=e[3]*n+e[7]*a+e[11]*s+e[15];return r=r||1,i[0]=(e[0]*n+e[4]*a+e[8]*s+e[12])/r,i[1]=(e[1]*n+e[5]*a+e[9]*s+e[13])/r,i[2]=(e[2]*n+e[6]*a+e[10]*s+e[14])/r,i}function ae(i,t,e){let n=t[0],a=t[1],s=t[2];return i[0]=n*e[0]+a*e[3]+s*e[6],i[1]=n*e[1]+a*e[4]+s*e[7],i[2]=n*e[2]+a*e[5]+s*e[8],i}const ft=function(){let i=[];return function(t,e,n,a,s,r){let l,o;for(e||(e=3),n||(n=0),o=a?Math.min(a*e+n,t.length):t.length,l=n;l<o;l+=e)i[0]=t[l],i[1]=t[l+1],i[2]=t[l+2],s(i,i,r),t[l]=i[0],t[l+1]=i[1],t[l+2]=i[2];return t}}();function Wt(i,t,e){let n=t[0],a=t[1],s=t[2],r=t[3],l=e[0],o=e[1],c=e[2],u=e[3];return i[0]=n*u+r*l+a*c-s*o,i[1]=a*u+r*o+s*l-n*c,i[2]=s*u+r*c+n*o-a*l,i[3]=r*u-n*l-a*o-s*c,i}const Fe=function(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i},Pe=function(i,t,e,n,a){return i[0]=t,i[1]=e,i[2]=n,i[3]=a,i},Re=function(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3]*t[3]},Ie=function(i,t){let e=t[0],n=t[1],a=t[2],s=t[3],r=e*e+n*n+a*a+s*s;return r>0&&(r=1/Math.sqrt(r),i[0]=e*r,i[1]=n*r,i[2]=a*r,i[3]=s*r),i};class Ne extends Array{constructor(t=0,e=0,n=0,a=1){return super(t,e,n,a),this.onChange=()=>{},this}get isQuaternion(){return!0}get x(){return this[0]}set x(t){this[0]=t,this.onChange()}get y(){return this[1]}set y(t){this[1]=t,this.onChange()}get z(){return this[2]}set z(t){this[2]=t,this.onChange()}get w(){return this[3]}set w(t){this[3]=t,this.onChange()}identity(){var t;return(t=this)[0]=0,t[1]=0,t[2]=0,t[3]=1,this.onChange(),this}set(t,e,n,a){return t.length?this.copy(t):(Pe(this,t,e,n,a),this.onChange(),this)}rotateX(t){return function(e,n,a){a*=.5;let s=n[0],r=n[1],l=n[2],o=n[3],c=Math.sin(a),u=Math.cos(a);e[0]=s*u+o*c,e[1]=r*u+l*c,e[2]=l*u-r*c,e[3]=o*u-s*c}(this,this,t),this.onChange(),this}rotateY(t){return function(e,n,a){a*=.5;let s=n[0],r=n[1],l=n[2],o=n[3],c=Math.sin(a),u=Math.cos(a);e[0]=s*u-l*c,e[1]=r*u+o*c,e[2]=l*u+s*c,e[3]=o*u-r*c}(this,this,t),this.onChange(),this}rotateZ(t){return function(e,n,a){a*=.5;let s=n[0],r=n[1],l=n[2],o=n[3],c=Math.sin(a),u=Math.cos(a);e[0]=s*u+r*c,e[1]=r*u-s*c,e[2]=l*u+o*c,e[3]=o*u-l*c}(this,this,t),this.onChange(),this}inverse(t=this){return function(e,n){let a=n[0],s=n[1],r=n[2],l=n[3],o=a*a+s*s+r*r+l*l,c=o?1/o:0;e[0]=-a*c,e[1]=-s*c,e[2]=-r*c,e[3]=l*c}(this,t),this.onChange(),this}conjugate(t=this){var e,n;return n=t,(e=this)[0]=-n[0],e[1]=-n[1],e[2]=-n[2],e[3]=n[3],this.onChange(),this}copy(t){return Fe(this,t),this.onChange(),this}normalize(t=this){return Ie(this,t),this.onChange(),this}multiply(t,e){return e?Wt(this,t,e):Wt(this,this,t),this.onChange(),this}dot(t){return Re(this,t)}fromMatrix3(t){return function(e,n){let a,s=n[0]+n[4]+n[8];if(s>0)a=Math.sqrt(s+1),e[3]=.5*a,a=.5/a,e[0]=(n[5]-n[7])*a,e[1]=(n[6]-n[2])*a,e[2]=(n[1]-n[3])*a;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);let l=(r+1)%3,o=(r+2)%3;a=Math.sqrt(n[3*r+r]-n[3*l+l]-n[3*o+o]+1),e[r]=.5*a,a=.5/a,e[3]=(n[3*l+o]-n[3*o+l])*a,e[l]=(n[3*l+r]+n[3*r+l])*a,e[o]=(n[3*o+r]+n[3*r+o])*a}}(this,t),this.onChange(),this}fromEuler(t){return function(e,n,a="YXZ"){let s=Math.sin(.5*n[0]),r=Math.cos(.5*n[0]),l=Math.sin(.5*n[1]),o=Math.cos(.5*n[1]),c=Math.sin(.5*n[2]),u=Math.cos(.5*n[2]);a==="XYZ"?(e[0]=s*o*u+r*l*c,e[1]=r*l*u-s*o*c,e[2]=r*o*c+s*l*u,e[3]=r*o*u-s*l*c):a==="YXZ"?(e[0]=s*o*u+r*l*c,e[1]=r*l*u-s*o*c,e[2]=r*o*c-s*l*u,e[3]=r*o*u+s*l*c):a==="ZXY"?(e[0]=s*o*u-r*l*c,e[1]=r*l*u+s*o*c,e[2]=r*o*c+s*l*u,e[3]=r*o*u-s*l*c):a==="ZYX"?(e[0]=s*o*u-r*l*c,e[1]=r*l*u+s*o*c,e[2]=r*o*c-s*l*u,e[3]=r*o*u+s*l*c):a==="YZX"?(e[0]=s*o*u+r*l*c,e[1]=r*l*u+s*o*c,e[2]=r*o*c-s*l*u,e[3]=r*o*u-s*l*c):a==="XZY"&&(e[0]=s*o*u-r*l*c,e[1]=r*l*u-s*o*c,e[2]=r*o*c+s*l*u,e[3]=r*o*u+s*l*c)}(this,t,t.order),this}slerp(t,e,n){return function(a,s,r,l){let o,c,u,d,p,f=s[0],h=s[1],m=s[2],T=s[3],x=r[0],S=r[1],v=r[2],g=r[3];c=f*x+h*S+m*v+T*g,c<0&&(c=-c,x=-x,S=-S,v=-v,g=-g),1-c>1e-6?(o=Math.acos(c),u=Math.sin(o),d=Math.sin((1-l)*o)/u,p=Math.sin(l*o)/u):(d=1-l,p=l),a[0]=d*f+p*x,a[1]=d*h+p*S,a[2]=d*m+p*v,a[3]=d*T+p*g}(this,t,e,n),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(){return Array.from(this)}}function _t(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i}function Et(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i}function ct(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i}function zt(i){var t=i[0],e=i[1];return Math.sqrt(t*t+e*e)}class $ extends Array{constructor(t=0,e=t){return super(t,e),this}get isVector2(){return!0}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get width(){return this[0]}set width(t){this[0]=t}get height(){return this[1]}set height(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(function(n,a,s){n[0]=a,n[1]=s}(this,t,e),this)}copy(t){var e,n;return n=t,(e=this)[0]=n[0],e[1]=n[1],this}add(t,e){return e?_t(this,t,e):_t(this,this,t),this}sub(t,e){return e?Et(this,t,e):Et(this,this,t),this}multiply(t){var e,n,a;return t.length?(n=this,a=t,(e=this)[0]=n[0]*a[0],e[1]=n[1]*a[1]):ct(this,this,t),this}divide(t){var e,n,a;return t.length?(n=this,a=t,(e=this)[0]=n[0]/a[0],e[1]=n[1]/a[1]):ct(this,this,1/t),this}scale(t){return ct(this,this,t),this}distance(t){return t?(e=this,a=(n=t)[0]-e[0],s=n[1]-e[1],Math.sqrt(a*a+s*s)):zt(this);var e,n,a,s}squaredDistance(t){return t?(e=this,a=(n=t)[0]-e[0],s=n[1]-e[1],a*a+s*s):function(r){var l=r[0],o=r[1];return l*l+o*o}(this);var e,n,a,s}len(){return zt(this)}squaredLength(){return this.squaredDistance()}negate(t=this){var e,n;return n=t,(e=this)[0]=-n[0],e[1]=-n[1],this}inverse(t=this){var e,n;return n=t,(e=this)[0]=1/n[0],e[1]=1/n[1],this}normalize(){var t,e,n,a,s;t=this,n=(e=this)[0],a=e[1],(s=n*n+a*a)>0&&(s=1/Math.sqrt(s),t[0]=e[0]*s,t[1]=e[1]*s)}dot(t){return n=t,(e=this)[0]*n[0]+e[1]*n[1];var e,n}cross(t,e){return a=e,(n=t)[0]*a[1]-n[1]*a[0];var n,a}lerp(t,e,n){(function(a,s,r,l){var o=s[0],c=s[1];a[0]=o+l*(r[0]-o),a[1]=c+l*(r[1]-c)})(this,t,e,n)}applyMatrix3(t){var e,n,a,s,r;return e=this,a=t,s=(n=this)[0],r=n[1],e[0]=a[0]*s+a[3]*r+a[6],e[1]=a[1]*s+a[4]*r+a[7],this}applyMatrix4(t){return function(e,n,a){let s=n[0],r=n[1];e[0]=a[0]*s+a[4]*r+a[12],e[1]=a[1]*s+a[5]*r+a[13]}(this,this,t),this}equals(t){return n=t,(e=this)[0]===n[0]&&e[1]===n[1];var e,n}clone(){return new $(this[0],this[1])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this}toArray(){return Array.from(this)}}class P extends Array{constructor(t=0,e=t,n=t){return super(t,e,n),this.constant=1,this}get isVector3(){return!0}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get z(){return this[2]}set z(t){this[2]=t}set(t,e=t,n=t){return t.length?this.copy(t):(function(a,s,r,l){a[0]=s,a[1]=r,a[2]=l}(this,t,e,n),this)}copy(t){var e,n;return n=t,(e=this)[0]=n[0],e[1]=n[1],e[2]=n[2],this}add(t,e){return e?Nt(this,t,e):Nt(this,this,t),this}sub(t,e){return e?Xt(this,t,e):Xt(this,this,t),this}multiply(t){var e,n,a;return t.length?(n=this,a=t,(e=this)[0]=n[0]*a[0],e[1]=n[1]*a[1],e[2]=n[2]*a[2]):lt(this,this,t),this}divide(t){var e,n,a;return t.length?(n=this,a=t,(e=this)[0]=n[0]/a[0],e[1]=n[1]/a[1],e[2]=n[2]/a[2]):lt(this,this,1/t),this}scale(t){return lt(this,this,t),this}distance(t){return t?function(e,n){let a=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2];return Math.sqrt(a*a+s*s+r*r)}(this,t):function(e){let n=e[0],a=e[1],s=e[2];return Math.sqrt(n*n+a*a+s*s)}(this)}squaredDistance(t){return t?function(e,n){let a=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2];return a*a+s*s+r*r}(this,t):function(e){let n=e[0],a=e[1],s=e[2];return n*n+a*a+s*s}(this)}squaredLength(){return this.squaredDistance()}negate(t=this){var e,n;return n=t,(e=this)[0]=-n[0],e[1]=-n[1],e[2]=-n[2],this}reflect(t){let e=t.clone();return this.sub(e.multiply(2*this.dot(t)))}inverse(t=this){var e,n;return n=t,(e=this)[0]=1/n[0],e[1]=1/n[1],e[2]=1/n[2],this}normalize(){return at(this,this),this}dot(t){return wt(this,t)}cross(t,e){return function(n,a,s){let r=a[0],l=a[1],o=a[2],c=s[0],u=s[1],d=s[2];n[0]=l*d-o*u,n[1]=o*c-r*d,n[2]=r*u-l*c}(this,t,e),this}lerp(t,e,n){return function(a,s,r,l){let o=s[0],c=s[1],u=s[2];a[0]=o+l*(r[0]-o),a[1]=c+l*(r[1]-c),a[2]=u+l*(r[2]-u)}(this,t,e,n),this}hermite(t,e,n,a,s){return function(r,l,o,c,u,d){let p=d*d,f=p*(2*d-3)+1,h=p*(d-2)+d,m=p*(d-1),T=p*(3-2*d);r[0]=l[0]*f+o[0]*h+c[0]*m+u[0]*T,r[1]=l[1]*f+o[1]*h+c[1]*m+u[1]*T,r[2]=l[2]*f+o[2]*h+c[2]*m+u[2]*T}(this,t,e,n,a,s),this}bezier(t,e,n,a,s){return function(r,l,o,c,u,d){let p=1-d,f=p*p,h=d*d,m=f*p,T=3*d*f,x=3*h*p,S=h*d;r[0]=l[0]*m+o[0]*T+c[0]*x+u[0]*S,r[1]=l[1]*m+o[1]*T+c[1]*x+u[1]*S,r[2]=l[2]*m+o[2]*T+c[2]*x+u[2]*S}(this,t,e,n,a,s),this}applyMatrix4(t){return ne(this,this,t),this}applyMatrix3(t){return ae(this,this,t),this}applyQuaternion(t){return function(e,n,a){let s=n[0],r=n[1],l=n[2],o=a[0],c=a[1],u=a[2],d=a[3],p=d*s+c*l-u*r,f=d*r+u*s-o*l,h=d*l+o*r-c*s,m=-o*s-c*r-u*l;e[0]=p*d+m*-o+f*-u-h*-c,e[1]=f*d+m*-c+h*-o-p*-u,e[2]=h*d+m*-u+p*-c-f*-o}(this,this,t),this}setFromMatrixPosition(t){return this.x=t[12],this.y=t[13],this.z=t[14],this}angle(t){return function(e,n){let a=[...e],s=[...n];at(a,a),at(s,s);let r=wt(a,s);return r>1?0:r<-1?Math.PI:Math.acos(r)}(this,t)}equals(t){return n=t,(e=this)[0]===n[0]&&e[1]===n[1]&&e[2]===n[2];var e,n}clone(){return new P(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}min(t){return this[0]=Math.min(this[0],t.x),this[1]=Math.min(this[1],t.y),this[2]=Math.min(this[2],t.z),this}max(t){return this[0]=Math.max(this[0],t.x),this[1]=Math.max(this[1],t.y),this[2]=Math.max(this[2],t.z),this}toArray(){return Array.from(this)}static copyTo(t,e){t[0]=e[0],t[1]=e[1],t[2]=e[2]}}const K=[new P,new P,new P,new P,new P,new P,new P,new P];class H{constructor(t=new P(1/0),e=new P(-1/0)){this.min=t,this.max=e}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.add(this.min,this.max).multiply(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.sub(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}applyMatrix4(t){return this.isEmpty()||(K[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),K[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),K[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),K[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),K[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),K[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),K[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),K[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(K)),this}}class ie{constructor(){this.name="",this.type="",this.isRayTracingMaterial=!0}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`${this.name}: ${e} parameter is undefined.`);continue}const a=this[e];a!==void 0&&(a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n)}}copy(t){}}class tt extends ie{constructor(t){super(),this.type="PrincipleBSDF",this.workflow="Metalness",this.color=new C(1,1,1),this.roughness=.5,this.metalness=0,this.transmission=0,this.ior=1.5,this.specularTint=0,this.clearcoat=0,this.clearcoatRoughness=0,this.sheen=0,this.sheenTint=.5,this.atDistance=1,this.extinction=new C(1,1,1),this.anisotropic=0,this.subsurface=0,this.subsurfaceColor=new C(1,1,1),this.subsurfaceMFP=.05,this.emissiveColor=new C(0,0,0),this.normalScale=new $(1,1),this.alpha=1,this.map=null,this.normalMap=null,this.roughnessMap=null,this.metalnessMap=null,this.emissiveMap=null,this.specularColor=new C(1,1,1),this.glossiness=1,this.specularMap=null,this.glossinessMap=null,this.setValues(t)}copy(t){return this.name=`copy_${t.name}`,this.type=t.type,this.workflow=t.workflow,this.color=new C().copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.transmission=t.transmission,this.ior=t.ior,this.specularTint=t.specularTint,this.clearcoat=t.clearcoat,this.clearcoatRoughness=t.clearcoatRoughness,this.sheen=t.sheen,this.sheenTint=t.sheenTint,this.atDistance=t.atDistance,this.anisotropic=t.anisotropic,this.extinction=new C().copy(t.extinction),this.subsurface=t.subsurface,this.subsurfaceColor=new C().copy(t.subsurfaceColor),this.subsurfaceMFP=t.subsurfaceMFP,this.emissiveColor=new C().copy(t.emissiveColor),this.normalScale=new $().copy(t.normalScale),this.alpha=t.alpha,this.map=t.map,this.normalMap=t.normalMap,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.emissiveMap=t.emissiveMap,this.specularColor=new C().copy(t.specularColor),this.glossiness=t.glossiness,this.specularMap=t.specularMap,this.glossinessMap=t.glossinessMap,this}clone(){return new tt().copy(this)}}class At{constructor(){this.focus=10,this.aperture=0,this.zoom=1,this.tempVec3a=new P,this.tempVec3b=new P,this.type="PerspectiveCamera",this.viewToWorldMat=new V,this.worldToViewMat=new V,this.viewToClipMat=new V,this.clipToViewMat=new V,this.position=new P}copy(t){return this.type=t.type,this.focus=t.focus,this.aperture=t.aperture,this.zoom=t.zoom,this.viewToWorldMat.copy(t.viewToWorldMat),this.worldToViewMat.copy(t.worldToViewMat),this.viewToClipMat.copy(t.viewToClipMat),this.clipToViewMat.copy(t.clipToViewMat),this.position.copy(t.position),this}clone(){return new At().copy(this)}updateFrustum(){this.frustum||(this.frustum=[new P,new P,new P,new P,new P,new P]);const t=new V().multiply(this.viewToClipMat,this.worldToViewMat);this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let e=0;e<6;e++){const n=1/this.frustum[e].distance();this.frustum[e].multiply(n),this.frustum[e].constant*=n}}frustumIntersectsMesh(t){if(!t.geometry.position||!t.geometry.aabb)return!0;const e=t.geometry.aabb;e.getCenter(this.tempVec3a);const n=this.tempVec3a,a=e.min.distance(e.max)/2;n.applyMatrix4(t.localToWorldMat);const s=a*t.localToWorldMat.getMaxScaleOnAxis();return this.frustumIntersectsSphere(n,s)}frustumIntersectsSphere(t,e){const n=this.tempVec3b;for(let a=0;a<6;a++){const s=this.frustum[a];if(n.copy(s).dot(t)+s.constant<-e)return!1}return!0}}class _{constructor(t,e){this.array=t,this.itemSize=e}getItem(t,e){const n=this.array,a=this.itemSize,s=e*a;for(let r=0;r<a;r++)t[r]=n[s+r]}get count(){return this.array.length/this.itemSize}}class rt{constructor(t,e,n,a){this.position=t,this.normal=e,this.uv=n,this.indices=a}}class Xe extends rt{constructor(){const t=new Float32Array([.5,.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5]),e=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),n=new Float32Array([0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0]),a=new Uint16Array([0,2,1,2,3,1,4,6,5,6,7,5,8,10,9,10,11,9,12,14,13,14,15,13,16,18,17,18,19,17,20,22,21,22,23,21]);super(new _(t,3),new _(e,3),new _(n,2),new _(a,1)),this.name="LGL_DefaultCubeGeometry",this.aabb=new H(new P(-.5,-.5,-.5),new P(.5,.5,.5))}}class it{constructor(t=new Xe,e=new tt){this.geometry=t,this.material=e,this.visible=!0,this.tlasMask=!1,this.localToWorldMat=new V}get worldToLocalMat(){return new V().inverse(this.localToWorldMat)}copy(t){return this.geometry=t.geometry,this.material.copy(t.material),this.localToWorldMat.copy(t.localToWorldMat),this}clone(t=!0){let e=this.material;t&&(e=this.material.clone());const n=new it(this.geometry,e);return n.localToWorldMat.copy(this.localToWorldMat),n}}class we{constructor(t){this.image=t,this.isTexture=!0,this.uvTransMat=new O,this.wrapS=0,this.wrapT=0}}class We{constructor(){this.resourcePool={},this.renderPipelines=new Map}getPipelineByCacheKey(t,e){const n=`${t}-${e}`;return this.renderPipelines.get(n)?this.renderPipelines.get(n):null}setPipelineByCacheKey(t,e,n){const a=`${t}-${e}`;this.renderPipelines.set(a,n)}clearPipelineCache(){Array.from(this.renderPipelines.values()).forEach(t=>t.dispose()),this.renderPipelines=new Map}getResourceByName(t){return this.resourcePool[t]}getRawResourceByName(t){var e;return(e=this.resourcePool[t])==null?void 0:e.raw}destoryResourceByName(t){this.resourcePool[t]&&(this.resourcePool[t].raw.dispose(),delete this.resourcePool[t])}setResource(t,e,n="Texture"){this.destoryResourceByName(t),this.resourcePool[t]={raw:e,type:n}}updateResource(t,e,n="Texture"){this.destoryResourceByName(t),this.resourcePool[t]={raw:e,type:n}}getPool(){return this.resourcePool}destroy(){for(const t in this.resourcePool)this.resourcePool[t].raw.dispose();this.resourcePool={}}}function Ct(i,t,e){return Object.assign({},e,{lightsNum:i.lightsNum,lightsData:i.lightsData,materialDefines:i.materialDefines,bvhDefines:i.bvhDefines,enableSSS:i.includeSSS,enableVolume:i.includeVolume,enableAtomsphere:i.includeAtomsphere})}const _e=["color","roughness","metalness","transmission","ior","clearcoat","clearcoatRoughness","sheen","sheenTint","specularTint","atDistance","extinction","anisotropic","subsurface","subsurfaceColor","subsurfaceMFP","normalScale","alpha","specularColor","glossiness","glossiness","emissiveIntensity","emissive"],Ee=["map","normalMap","roughnessMap","metalnessMap","specularMap","glossinessMap","emissiveMap"],Gt={1e3:0,1001:1,1002:2};function pt(i){const t=new Map;for(const e of i){const n=e.material;let a=t.get(n);a===void 0&&(a=t.size,t.set(n,a))}return t.size==0&&t.set(new ie,0),t}function Ut(i,t=!1){i.updateMatrixWorld(!0);const e=[],n=[];if(t){const c=new it;c.name="LGLDefaultMesh",c.material.name="LGLDefaultMaterial",c.visible=!1,c.localToWorldMat.scale([1e-4,1e-4,1e-4]),e.push(c)}let a=!1;const s=new Map,r=new Map;i.traverse(c=>{if(c.isMesh){let u=c;if(u.geometry){let d=u.material;if(u.material||(d=new tt),u.userData.useLGLMaterial&&u.userData.LGLMaterial)d=u.userData.LGLMaterial;else{const h=s.get(d);h?d=h:(d=mt(u.material),s.set(u.material,d))}d.subsurface>0&&(a=!0);let p=r.get(u.geometry.id);p||(p=function(h){var m,T;const x=ut(h,"position"),S=ut(h,"normal"),v=ut(h,"uv"),g=h.getIndex(),b=new rt(x&&new _(x.array,x.itemSize),S&&new _(S.array,S.itemSize),v&&new _(v.array,v.itemSize),g&&new _(g.array,g.itemSize));return b.id=`LGL_${h.id}`,b.name=`LGL_${h.name}`,h.boundingBox||h.computeBoundingBox(),b.aabb=new H,b.aabb.min.fromArray((m=h.boundingBox)==null?void 0:m.min.toArray()),b.aabb.max.fromArray((T=h.boundingBox)==null?void 0:T.max.toArray()),b}(u.geometry),r.set(u.geometry.id,p));const f=new it(p,d);dn.linkMeshWithTHREEMesh(f,u),e.push(f)}else console.warn(`${c.name} need geometry data`)}c.isLight&&c.visible&&n.push(c)});const l=pt(e),o=function(c){if(!c.length)return null;const u=new V,d=new Ne;return function(p){const f={};return f.position=p.map(h=>h.position),f.emission=p.map(h=>h.emission),f.p1=p.map(h=>h.p1),f.p2=p.map(h=>h.p2),f.radius=p.map(h=>h.radius),f.area=p.map(h=>h.area),f.type=p.map(h=>h.type),f.visible=p.map(h=>h.visible),f.position=[].concat(...f.position.map(h=>h.toArray())),f.emission=[].concat(...f.emission.map(h=>h.toArray())),f.p1=[].concat(...f.p1.map(h=>h.toArray())),f.p2=[].concat(...f.p2.map(h=>h.toArray())),f.params=function(...h){let m=0;for(let x=0;x<h.length;x++){const S=h[x],v=S.data?S.data.length/S.channels:0;m=Math.max(m,v)}const T=[];for(let x=0;x<m;x++)for(let S=0;S<h.length;S++){const{data:v=[],channels:g}=h[S];for(let b=0;b<g;b++)T.push(v[x*g+b])}return T}({data:f.radius,channels:1},{data:f.area,channels:1},{data:f.type,channels:1},{data:f.visible,channels:1}),f}(c.map(p=>{const f=p,h={},m=new P;switch(f.updateWorldMatrix(!0,!1),m.setFromMatrixPosition(f.matrixWorld.elements),h.position=m,h.emission=new P().fromArray(f.color.toArray()).multiply(f.intensity),h.radius=f.radius||0,h.area=0,h.visible=Number(f.visible),h.p1=new P,h.p2=new P,f.type){case"RectAreaLight":if(h.type=0,u.fromArray(f.matrixWorld.elements),u.getRotation(d),f.width&&f.height){const S=new P(f.width,0,0);S.applyQuaternion(d);const v=new P(0,f.height,0);v.applyQuaternion(d),h.p1.copy(v),h.p2.copy(S),h.area=new P().cross(h.p1,h.p2).distance()}break;case"PointLight":h.type=2,h.area=0;break;case"DirectionalLight":h.type=1,f.target&&h.p1.fromArray(f.target.position.toArray()),h.area=0;break;case"SpotLight":h.type=3;const T=new P;f.target&&T.fromArray(f.target.position.toArray());const x=new P().sub(T,m).normalize();h.p1.copy(x),h.p2.x=Math.cos(f.angle),h.p2.y=Math.cos(f.angle*(1-f.penumbra)),h.p2.z=f.decay;break;default:console.warn(`Not support light type: ${f.type}`)}return h}))}(n);return{meshes:e,materialIndexMap:l,materials:Array.from(l.keys()),geometryConvertMap:r,lightsNum:n.length,lightsData:o,includeSSS:a,includeVolume:!1,includeAtomsphere:!1}}function Dt(i,t){i.updateMatrixWorld(!0);const e=t||new At;return e.type=i.type,e.viewToWorldMat.fromArray(i.matrixWorld.elements),e.worldToViewMat.fromArray(i.matrixWorldInverse.elements),e.clipToViewMat.fromArray(i.projectionMatrixInverse.elements),e.viewToClipMat.fromArray(i.projectionMatrix.elements),e.position.fromArray(i.position.toArray()),i.aperture!=null&&(e.aperture=i.aperture||0),i.focus!=null&&(e.focus=i.focus||0),i.zoom!=null&&(e.zoom=i.zoom||1),e}function ut(i,t){const e=i.getAttribute(t);return e!=null&&e.isInterleavedBufferAttribute?e.clone():e}function Q(i){return i?new we(i.image):null}function mt(i,t){var e,n,a,s,r,l,o,c,u;Array.isArray(i)&&(i=i[0]);const d=t||new tt;return d.name=`LGL_${i.name}`,function(p,f){_e.forEach(h=>{if(p[h]==null&&p.userData[h]==null)switch(h){case"emissive":p.userData[h]=f.emissiveColor.toArray();break;case"emissiveIntensity":p.userData[h]=1;break;default:p.userData[h]=f[h].toArray?f[h].toArray():f[h]}})}(i,d),i.color?d.color.fromArray(i.color.toArray()):d.color.fromArray(i.userData.color),d.roughness=(e=i.roughness)!=null?e:i.userData.roughness,d.metalness=(n=i.metalness)!=null?n:i.userData.metalness,d.transmission=(a=i.transmission)!=null?a:i.userData.transmission,d.ior=(s=i.ior)!=null?s:i.userData.ior,i.emissive?d.emissiveColor.fromArray(i.emissive.toArray()).scale(i.emissiveIntensity):d.emissiveColor.fromArray(i.userData.emissive).scale(i.userData.emissiveIntensity),i.normalScale?d.normalScale.fromArray(i.normalScale.toArray()):d.normalScale.fromArray(i.userData.normalScale),d.clearcoat=(r=i.clearcoat)!=null?r:i.userData.clearcoat,d.clearcoatRoughness=(l=i.clearcoatRoughness)!=null?l:i.userData.clearcoatRoughness,d.sheen=(o=i.sheen)!=null?o:i.userData.sheen,d.sheenTint=(c=i.sheenTint)!=null?c:i.userData.sheenTint,d.alpha=(u=i.opacity)!=null?u:i.userData.alpha,d.map=Q(i.map),d.normalMap=Q(i.normalMap),d.emissiveMap=Q(i.emissiveMap),d.roughnessMap=Q(i.roughnessMap),d.metalnessMap=Q(i.metalnessMap),i.isGLTFSpecularGlossinessMaterial&&(d.workflow="Specular",d.specularColor.fromArray(i.specular.toArray()),d.glossiness=i.glossiness,d.specularMap=Q(i.specularMap),d.glossinessMap=Q(i.glossinessMap)),d.subsurface=i.userData.subsurface,d.subsurfaceMFP=i.userData.subsurfaceMFP,d.subsurfaceColor.fromArray(i.userData.subsurfaceColor),d.specularTint=i.userData.specularTint,d.atDistance=i.userData.atDistance,d.extinction.fromArray(i.userData.extinction),d.anisotropic=i.userData.anisotropic,function(p,f){Ee.forEach(h=>{const m=p[h],T=f[h];m&&(m.updateMatrix(),T.uvTransMat.fromArray(m.matrix.toArray()),T.wrapS=Gt[m.wrapS],T.wrapT=Gt[m.wrapT])})}(i,d),d}class j{constructor(t,e){this.gl=t;const{color:n,depth:a}=e;this.color=n,this.depth=a,this.framebuffer=t.createFramebuffer(),this.init()}bind(){const{gl:t,framebuffer:e}=this;t.bindFramebuffer(t.FRAMEBUFFER,e)}unbind(){const{gl:t}=this;t.bindFramebuffer(t.FRAMEBUFFER,null)}dispose(){const{gl:t,framebuffer:e}=this;t.deleteFramebuffer(e)}init(){const{gl:t,color:e,depth:n}=this;this.bind();const a=[];for(let s in e){const r=Number(s);r===void 0&&console.error("invalid location");const l=e[r];t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+r,l.target,l.texture,0),a.push(t.COLOR_ATTACHMENT0+r)}t.drawBuffers(a),n&&t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,n.target,n.texture),this.unbind()}}function Vt(i,t){const e={};for(const n of t)e[n]=i.getExtension(n);return e}function E(i,t){return{values:`uniform${i}${t}`,array:`uniform${i}${t}v`}}function dt(i,t){return{matrix:i===t?`uniformMatrix${i}fv`:`uniformMatrix${i}x${t}fv`}}class ze{constructor(t,e){this.gl=t;const n=function(a,s){const r={},l=a.getProgramParameter(s,a.ACTIVE_UNIFORMS);for(let o=0;o<l;o++){const{name:c,type:u}=a.getActiveUniform(s,o),d=a.getUniformLocation(s,c);d&&(r[c]={type:u,location:d})}return r}(t,e);this.uniforms={};for(let a in n){const{type:s,location:r}=n[a],l={type:s,location:r,v0:0,v1:0,v2:0,v3:0};this.uniforms[a]=l}this.typeMap=function(a){return{[a.FLOAT]:E(1,"f"),[a.FLOAT_VEC2]:E(2,"f"),[a.FLOAT_VEC3]:E(3,"f"),[a.FLOAT_VEC4]:E(4,"f"),[a.INT]:E(1,"i"),[a.INT_VEC2]:E(2,"i"),[a.INT_VEC3]:E(3,"i"),[a.INT_VEC4]:E(4,"i"),[a.UNSIGNED_INT]:E(1,"ui"),[a.UNSIGNED_INT_VEC2]:E(2,"ui"),[a.UNSIGNED_INT_VEC3]:E(3,"ui"),[a.UNSIGNED_INT_VEC4]:E(4,"ui"),[a.SAMPLER_2D]:E(1,"i"),[a.SAMPLER_3D]:E(1,"i"),[a.SAMPLER_2D_ARRAY]:E(1,"i"),[a.FLOAT_MAT2]:dt(2,2),[a.FLOAT_MAT3]:dt(3,3),[a.FLOAT_MAT4]:dt(4,4),[a.INT_SAMPLER_2D]:E(1,"i")}}(t),this.needsUpload=[],this.failedUnis=new Set}setUniform(t,e,n,a,s){const r=this.uniforms[t];r?(r.v0=e,r.v1=n,r.v2=a,r.v3=s,this.needsUpload.push(r)):this.failedUnis.has(t)||this.failedUnis.add(t)}setStructUniform(t,e){if(e.length)for(let n=0;n<e.length;n++){const a=e[n];Object.keys(a).map(s=>{let r=a[s];(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector3||r.isVector2||r.isVector4)&&(r=r.toArray()),this.setUniform(`${t}[${n}].${s}`,r)})}else Object.keys(e).map(n=>{const a=e[n];this.setUniform(`${t}.${n}[0]`,a)})}upload(){const{gl:t,needsUpload:e,typeMap:n}=this;for(;e.length>0;){const{type:a,location:s,v0:r,v1:l,v2:o,v3:c}=e.pop(),u=n[a];if(r&&r.length)if(u.matrix){const d=r,p=l||!1;t[u.matrix](s,p,d)}else t[u.array](s,r);else t[u.values](s,r,l,o,c)}}}function se(i,t,e,n){let a=`#version 300 es
precision highp float;
precision highp int;
precision highp isampler2D;
precision highp usampler2D;
`;return n&&(a+=function(s){let r="";for(const l in s){const o=s[l];o&&(r+=`#define ${l} ${o}
`)}return r}(n)),a+=e.source?e.source:e,function(s,r,l){const o=s.createShader(r);if(s.shaderSource(o,l),s.compileShader(o),s.getShaderParameter(o,s.COMPILE_STATUS))return o;const c=l.split(`
`).map((u,d)=>`${d+1}: ${u}`).join(`
`);throw console.error(c),s.getShaderInfoLog(o)}(i,t,a)}function re(i,{defines:t,vertex:e}){return se(i,i.VERTEX_SHADER,e,t)}class Y{constructor(t,e){this.gl=t,this.params=e;const{fragment:n,vertex:a}=e,s=a instanceof WebGLShader?a:re(t,e),r=n instanceof WebGLShader?n:function(o,{defines:c,fragment:u}){return se(o,o.FRAGMENT_SHADER,u,c)}(t,e),l=function(o,c,u,d,p){const f=o.createProgram();if(o.attachShader(f,c),o.attachShader(f,u),d&&o.transformFeedbackVaryings(f,d,p),o.linkProgram(f),o.detachShader(f,c),o.detachShader(f,u),o.getProgramParameter(f,o.LINK_STATUS))return f;throw o.getProgramInfoLog(f)}(t,s,r);this.program=l,this.uniformSetter=new ze(t,l),this.attribLocs=function(o,c){const u={},d=o.getProgramParameter(c,o.ACTIVE_ATTRIBUTES);for(let p=0;p<d;p++){const{name:f}=o.getActiveAttrib(c,p);f&&(u[f]=o.getAttribLocation(c,f))}return u}(t,l),this.textures={},this.nextTexUnit=1}setUniform(t,e,n,a,s){this.uniformSetter.setUniform(t,e,n,a,s)}setStructUniform(t,e){this.uniformSetter.setStructUniform(t,e)}setTexture(t,e){if(e)if(this.textures[t])this.textures[t].tex=e;else{const n=this.nextTexUnit++;this.uniformSetter.setUniform(t,n),this.textures[t]={unit:n,tex:e}}}bindTextures(){const{gl:t,textures:e}=this;for(let n in e){const{tex:a,unit:s}=e[n];t.activeTexture(t.TEXTURE0+s),t.bindTexture(a.target,a.texture)}}useProgram(t=!0){const{gl:e,uniformSetter:n,program:a}=this;e.useProgram(a),n.upload(),t&&this.bindTextures()}disposeProgram(){const{gl:t,program:e}=this;t.deleteProgram(e)}dispose(){const{gl:t,textures:e}=this;for(const n in e){const{tex:a}=e[n];t.deleteTexture(a.texture)}this.disposeProgram()}}class oe{constructor(t){this.gl=t;const e=t.createVertexArray();t.bindVertexArray(e),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,3,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,2,0,0,2]),t.STATIC_DRAW),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,2,t.FLOAT,!1,0,0),t.bindVertexArray(null),this.vao=e,this.vertexShader=re(t,{vertex:`layout(location = 0) in vec2 aPosition;
layout(location = 1) in vec2 aUv;

out vec2 vCoord;

void main() {
	vCoord = aUv;
	gl_Position = vec4(aPosition, 0., 1.);
}`,defines:null})}draw(){const{gl:t,vao:e}=this;t.bindVertexArray(e),t.drawArrays(t.TRIANGLES,0,3)}}function Ce(i,t,e){return .2126*i+.7152*t+.0722*e}function le(i,t,e){return Math.min(Math.max(i,t),e)}function Bt(i,t,e=1e-4){for(let n=0;n<i.length;n++)if(Math.abs(i[n]-t[n])>e)return!1;return!0}function xt(i,t){return i.type!=t.type?(t=i.clone(),!1):i.type==="OrthographicCamera"?Bt(i.viewToWorldMat,t.viewToWorldMat)&&i.zoom==t.zoom:Bt(i.viewToWorldMat,t.viewToWorldMat)}function U(){console.error("Only webgpu version supports this feature")}function Ht(i,t){return{1:i.RED_INTEGER,2:i.RG_INTEGER,3:i.RGB_INTEGER,4:i.RGBA_INTEGER}[t]}class z{constructor(t,e){this.gl=t;let n,{width:a,height:s,data:r,length:l=1,channels:o,storage:c,flipY:u=!1,gammaCorrection:d=!1,wrapS:p=t.CLAMP_TO_EDGE,wrapT:f=t.CLAMP_TO_EDGE,minFilter:h=t.NEAREST,magFilter:m=t.NEAREST}=e;a=a||r.width||0,s=s||r.height||0,this.texture=t.createTexture(),Array.isArray(r)&&(n=r,r=n[0]);let T=this.target=n||l>1?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D;t.activeTexture(t.TEXTURE0),t.bindTexture(T,this.texture),t.texParameteri(T,t.TEXTURE_MIN_FILTER,h),t.texParameteri(T,t.TEXTURE_MAG_FILTER,m),t.texParameteri(T,t.TEXTURE_WRAP_S,p),t.texParameteri(T,t.TEXTURE_WRAP_T,f),o||(o=r&&r.length?r.length/(a*s):4),o=le(o,1,4);const{type:x,format:S,internalFormat:v}=function(g,b,A,M,L){let F,R;const I=M instanceof Uint8Array||M instanceof HTMLImageElement||M instanceof HTMLCanvasElement||M instanceof ImageData||M instanceof ImageBitmap,N=M instanceof Float32Array,X=M instanceof Int32Array,w=M instanceof Uint32Array;let W=function(y,ot){return{1:y.RED,2:y.RG,3:y.RGB,4:y.RGBA}[ot]}(g,b);return A==="byte"||!A&&I?(R={1:g.R8,2:g.RG8,3:L?g.SRGB8:g.RGB8,4:L?g.SRGB8_ALPHA8:g.RGBA8}[b],F=g.UNSIGNED_BYTE):A==="float"||!A&&N?(R={1:g.R32F,2:g.RG32F,3:g.RGB32F,4:g.RGBA32F}[b],F=g.FLOAT):A==="halfFloat"?(R={1:g.R16F,2:g.RG16F,3:g.RGB16F,4:g.RGBA16F}[b],F=g.HALF_FLOAT):A==="snorm"?(R={1:g.R8_SNORM,2:g.RG8_SNORM,3:g.RGB8_SNORM,4:g.RGBA8_SNORM}[b],F=g.UNSIGNED_BYTE):A==="int"||!A&&X?(R={1:g.R32I,2:g.RG32I,3:g.RGB32I,4:g.RGBA32I}[b],F=g.INT,W=Ht(g,b)):(A==="uint"||!A&&w)&&(R={1:g.R32UI,2:g.RG32UI,3:g.RGB32UI,4:g.RGBA32UI}[b],F=g.UNSIGNED_INT,W=Ht(g,b)),{format:W,internalFormat:R,type:F}}(t,o,c,r,d);if(n){t.texStorage3D(T,1,v,a,s,n.length);for(let g=0;g<n.length;g++){const b=n[g].width||a,A=n[g].height||s;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,Array.isArray(u)?u[g]:u),t.texSubImage3D(T,0,0,0,g,b,A,1,S,x,n[g])}}else l>1?t.texStorage3D(T,1,v,a,s,l):(t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,u),t.texStorage2D(T,1,v,a,s),r&&t.texSubImage2D(T,0,0,0,a,s,S,x,r));t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1)}dispose(){const{gl:t,texture:e}=this;t.deleteTexture(e)}}class Ge{constructor(t,e,n){this.gl=t;const a=t.createRenderbuffer(),s=t.RENDERBUFFER;t.bindRenderbuffer(s,a),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT24,e,n),t.bindRenderbuffer(s,null),this.gl=t,this.texture=a,this.target=s}dispose(){const{gl:t,texture:e}=this;t.deleteRenderbuffer(e)}}function Ue(i,t){const e=new i.constructor(t);return e.set(i),e}class D extends z{constructor(t,e,n=4){const a=function(l){const o=Math.round(Math.log2(Math.sqrt(l))),c=2**o,u=Math.ceil(l/c);return{columnsLog:o,columns:c,rows:u,size:u*c}}(e.length/n),s=a.columns,r=a.rows;super(t,{data:Ue(e,n*s*r),width:s,height:r}),this.textureDim=a}}function B(i,t,e,n,a,s,r){const l=Math.min(r.length/s,e);for(let o=0;o<l;o++)for(let c=0;c<s;c++)i[t](n+o*a+4*c,r[s*o+c],!0)}class De{constructor(t,e,n){this.gl=t;const a=t.getUniformBlockIndex(e,n),s=t.getActiveUniformBlockParameter(e,a,t.UNIFORM_BLOCK_DATA_SIZE),r=function(c,u,d){const p=c.getActiveUniformBlockParameter(u,d,c.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),f=c.getActiveUniforms(u,p,c.UNIFORM_OFFSET),h=c.getActiveUniforms(u,p,c.UNIFORM_ARRAY_STRIDE),m={};for(let T=0;T<p.length;T++){const{name:x,type:S,size:v}=c.getActiveUniform(u,p[T]);m[x]={type:S,size:v,offset:f[T],stride:h[T]}}return m}(t,e,a),l=t.createBuffer();t.bindBuffer(t.UNIFORM_BUFFER,l),t.bufferData(t.UNIFORM_BUFFER,s,t.STATIC_DRAW);const o=new DataView(new ArrayBuffer(s));this.uniforms=r,this.buffer=l,this.data=o}set(t,e){const{gl:n,uniforms:a,data:s}=this;if(!a[t])return void console.warn("No uniform property with name ",t);const{type:r,size:l,offset:o,stride:c}=a[t];switch(r){case n.FLOAT:B(s,"setFloat32",l,o,c,1,e);break;case n.FLOAT_VEC2:B(s,"setFloat32",l,o,c,2,e);break;case n.FLOAT_VEC3:B(s,"setFloat32",l,o,c,3,e);break;case n.FLOAT_VEC4:B(s,"setFloat32",l,o,c,4,e);break;case n.INT:B(s,"setInt32",l,o,c,1,e);break;case n.INT_VEC2:B(s,"setInt32",l,o,c,2,e);break;case n.INT_VEC3:B(s,"setInt32",l,o,c,3,e);break;case n.INT_VEC4:B(s,"setInt32",l,o,c,4,e);break;case n.BOOL:B(s,"setUint32",l,o,c,1,e);break;case n.FLOAT_MAT4:B(s,"setFloat32",l,o,c,16,e);break;default:console.warn("UniformBuffer: Unsupported type")}}bind(t){const{gl:e,buffer:n,data:a}=this;e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferSubData(e.UNIFORM_BUFFER,0,a),e.bindBufferBase(e.UNIFORM_BUFFER,t,n)}dispose(){const{gl:t,buffer:e}=this;t.deleteBuffer(e)}}const et=Ve();function Ve(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),a=new Uint32Array(512);for(let o=0;o<256;++o){const c=o-127;c<-27?(n[o]=0,n[256|o]=32768,a[o]=24,a[256|o]=24):c<-14?(n[o]=1024>>-c-14,n[256|o]=1024>>-c-14|32768,a[o]=-c-1,a[256|o]=-c-1):c<=15?(n[o]=c+15<<10,n[256|o]=c+15<<10|32768,a[o]=13,a[256|o]=13):c<128?(n[o]=31744,n[256|o]=64512,a[o]=24,a[256|o]=24):(n[o]=31744,n[256|o]=64512,a[o]=13,a[256|o]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,u=0;for(;!(8388608&c);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[o]=c|u}for(let o=1024;o<2048;++o)s[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)r[o]=o<<23;r[31]=1199570944,r[32]=2147483648;for(let o=33;o<63;++o)r[o]=2147483648+(o-32<<23);r[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:a,mantissaTable:s,exponentTable:r,offsetTable:l}}function Be(i){if(i instanceof Uint16Array)return i;const t=new Uint16Array(i.length);return i.map((e,n)=>t[n]=function(a){Math.abs(a)>65504&&console.warn("toHalfFloat(): Value out of range."),a=Math.max(-65504,Math.min(65504,a)),et.floatView[0]=a;const s=et.uint32View[0],r=s>>23&511;return et.baseTable[r]+((8388607&s)>>et.shiftTable[r])}(e)),t}function Kt(i,t,e=0,n=i.length){let a=e,s=e+n-1;for(;a<s;){const r=a+s>>1;i[r]<t?a=r+1:s=r}return a-e}const He={width:1,height:1,data:new Float32Array(4)},q=class{constructor(i,t){this.gl=i,this.resourcePool=t,this.totalSumValue=1}destory(){const{resourcePool:i}=this;i.destoryResourceByName(q.ENVMAP_RES_NAME),i.destoryResourceByName(q.ENVMAP_MARGINAL_WEIGHTS_RES_NAME),i.destoryResourceByName(q.ENVMAP_CONDITIONAL_WEIGHTS_RES_NAME)}load(i){i||(i=He);const{gl:t,resourcePool:e}=this;this.destory();const n=i.width,a=i.height,s=Be(i.data),r=new z(t,{data:s,storage:"halfFloat",minFilter:t.LINEAR,magFilter:t.LINEAR,width:n,height:a}),{marginalDataArray:l,conditionalDataArray:o,totalSumValue:c}=function(p){const{width:f,height:h,data:m}=p,T=new Float32Array(f*h),x=new Float32Array(f*h),S=new Float32Array(h),v=new Float32Array(h);let g=0,b=0;for(let L=0;L<h;L++){let F=0;for(let R=0;R<f;R++){const I=L*f+R,N=Ce(m[4*I+0],m[4*I+1],m[4*I+2]);F+=N,g+=N,T[I]=N,x[I]=F}if(F!==0)for(let R=L*f,I=L*f+f;R<I;R++)T[R]/=F,x[R]/=F;b+=F,S[L]=F,v[L]=b}if(b!==0)for(let L=0,F=S.length;L<F;L++)S[L]/=b,v[L]/=b;const A=new Float32Array(h),M=new Float32Array(f*h);for(let L=0;L<h;L++){const F=Kt(v,(L+1)/h);A[L]=(F+.5)/h}for(let L=0;L<h;L++)for(let F=0;F<f;F++){const R=L*f+F,I=Kt(x,(F+1)/f,L*f,f);M[R]=(I+.5)/f}return{marginalDataArray:A,conditionalDataArray:M,totalSumValue:g}}(i);this.totalSumValue=c;const u=new z(t,{data:l,storage:"float",channels:1,width:a,height:1}),d=new z(t,{data:o,storage:"float",channels:1,width:n,height:a});e.setResource(q.ENVMAP_RES_NAME,r),e.setResource(q.ENVMAP_MARGINAL_WEIGHTS_RES_NAME,u),e.setResource(q.ENVMAP_CONDITIONAL_WEIGHTS_RES_NAME,d)}};let J=q;function ce(i,t=!1){const e=new Map;let n=0,a=0,s=0,r=0;const l=[];l.push({vertexSplitIndex:0,indicesSplitIndex:0});for(const o of i){let c=o.geometry;if(e.get(c)==null){c.indices||ke(c),c.uv||Oe(c),t&&(c=Ke(c,o.localToWorldMat)),c.normal?ft(c.normal.array,3,0,void 0,at,void 0):Ye(c),s+=c.position.count,r+=c.indices.count,l.push({vertexSplitIndex:3*s,indicesSplitIndex:r});const u=e.size;e.set(c,u),o.geometry=c}n+=c.position.count,a+=c.indices.count}return{vertexTotalCount:s,indicesTotalCount:r,geoInfoSplitIndex:l,renderVertexCount:n,renderIndicesCount:a,geometryIndexMap:e}}function Ke(i,t){const e=new rt(new _(i.position.array.slice(),i.position.itemSize),i.normal&&new _(i.normal.array.slice(),i.normal.itemSize),i.uv&&new _(i.uv.array,i.uv.itemSize),i.indices&&new _(i.indices.array,i.indices.itemSize)),n=new O().getNormalMatrix(t);return ft(e.position.array,3,0,null,ne,t),e.normal&&ft(e.normal.array,3,0,null,ae,n),e}function ke(i){const t=i.position;if(!t)return void console.warn("No position attribute");const e=new Uint32Array(t.count);for(let n=0;n<e.length;n++)e[n]=n;return i.indices=new _(e,1),i}function Oe(i){const t=i.position,e=new Float32Array(2*t.count);for(let n=0;n<e.length;n++)e[n]=Math.random();return i.uv=new _(e,2),i}function Ye(i){const t=i.indices.array,e=i.position.array;i.normal=new _(new Float32Array(e.length),3);const n=i.normal.array,a=new P,s=new P,r=new P,l=new P,o=new P,c=new P,u=t.length;let d,p,f;for(let h=0;h<u;){t?(d=t[h++],p=t[h++],f=t[h++]):(d=h++,p=h++,f=h++),a.set(e[3*d],e[3*d+1],e[3*d+2]),s.set(e[3*p],e[3*p+1],e[3*p+2]),r.set(e[3*f],e[3*f+1],e[3*f+2]),l.sub(a,s),o.sub(s,r),c.cross(l,o);for(let m=0;m<3;m++)n[3*d+m]=n[3*d+m]+c[m],n[3*p+m]=n[3*p+m]+c[m],n[3*f+m]=n[3*f+m]+c[m]}for(let h=0;h<n.length;)c.set(n[h],n[h+1],n[h+2]),c.normalize(),n[h++]=c[0],n[h++]=c[1],n[h++]=c[2]}function Qe(i,t,e){const n=[],{renderVertexCount:a,renderIndicesCount:s}=e;for(const l of i){let o=l.geometry;const c=l.material;let u=t.get(c);n.push({geometry:o,materialID:u})}return{geometry:function(l,o,c){const u=new _(new Float32Array(3*o),3),d=new _(new Float32Array(3*o),3),p=new _(new Float32Array(2*o),2),f=new _(new Uint32Array(c),1),h=new _(new Int32Array(2*o),2),m=new rt(u,d,p,f);m.materialMeshIndex=h;let T=0,x=0,S=0;for(const{geometry:v,materialID:g}of l){const b=v.position.count;["position","normal","uv"].forEach(M=>{v[M]&&m[M].array.set(v[M].array,T*v[M].itemSize)});const A=v.indices.array;for(let M=0;M<A.length;M++)f.array[x+M]=T+A[M];for(let M=0;M<2*b;)h.array[2*T+M++]=g,h.array[2*T+M++]=S;T+=b,x+=A.length,S++}return m}(n,a,s),vertexCount:a,IndicesCount:s,visible:!0}}J.ENVMAP_RES_NAME="EnvMapTexture",J.ENVMAP_MARGINAL_WEIGHTS_RES_NAME="EnvMapMarginalWeightsTexture",J.ENVMAP_CONDITIONAL_WEIGHTS_RES_NAME="EnvMapConditionalWeightsTexture";class Ze{constructor(t,e){this.gl=t,this.fullscreenTriangle=e}createPipeline(){const{gl:t,fullscreenTriangle:e}=this,n={gl:t,vertex:e.vertexShader,fragment:`
layout(location = 0) out vec4 out_color;

in vec2 vCoord;

uniform sampler2D inputTex;

void main() {
	vec4 light = texture(inputTex, vCoord);
	out_color = light;
}`};this.renderPass=new Y(t,n),this.fullscreenTriangle=e}draw(t){let{inputTex:e}=t;this.renderPass.setTexture("inputTex",e),this.renderPass.useProgram(),this.fullscreenTriangle.draw()}dispose(){this.renderPass.dispose()}}async function ue(i,t){const e=new Map;let n=0;t.forEach(r=>{Object.keys(r).forEach(l=>{var o;if((o=r[l])!=null&&o.isTexture){const c=r[l].image;let u=e.get(c);u===void 0&&n<255&&(u=e.size,e.set(c,u),n++)}})});let a,s=Array.from(e.keys());return n==255&&console.warn("Material limit exceeded. Some material information will be lost"),s.length==0?a=function(r){return new z(r,{width:1,height:1,length:2,storage:"byte",minFilter:r.LINEAR,magFilter:r.LINEAR})}(i):(s.length==1&&(s=[s[0],s[0]]),a=await async function(r,l){const o=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,o);const c=new oe(r),u=new Ze(r,c);u.createPipeline();const d=new z(r,{width:2048,height:2048,length:l.length,storage:"byte",channels:4,minFilter:r.LINEAR,magFilter:r.LINEAR});for(let p=0;p<l.length;p++){r.framebufferTextureLayer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,d.texture,0,p),r.clear(r.COLOR_BUFFER_BIT),r.viewport(0,0,2048,2048);const f=l[p],h=new z(r,{width:f.width,height:f.height,data:f,storage:"byte",channels:4,minFilter:r.LINEAR,magFilter:r.LINEAR});u.draw({inputTex:h}),h.dispose()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteFramebuffer(o),d}(i,s)),{textureImages:s,textureImageMap:e,textureArrayRes:a}}function k(...i){let t=0;for(let n=0;n<i.length;n++){const a=i[n],s=a.data?a.data.length/a.channels:0;t=Math.max(t,s)}const e=[];for(let n=0;n<t;n++)for(let a=0;a<i.length;a++){const{data:s=[],channels:r}=i[a];for(let l=0;l<r;l++)e.push(s[n*r+l])}return e}function Mt(i,t){i.color=t.map(e=>e.color),i.workflow=t.map(e=>e.workflow==="Metalness"?0:1),i.roughness=t.map(e=>e.roughness),i.metalness=t.map(e=>e.metalness),i.transmission=t.map(e=>e.transmission),i.ior=t.map(e=>e.ior),i.sheen=t.map(e=>e.sheen),i.sheenTint=t.map(e=>e.sheenTint),i.clearcoat=t.map(e=>e.clearcoat),i.clearcoatRoughness=t.map(e=>e.clearcoatRoughness),i.emissiveColor=t.map(e=>e.emissiveColor),i.alpha=t.map(e=>e.alpha),i.specularTint=t.map(e=>e.specularTint),i.atDistance=t.map(e=>e.atDistance),i.normalScale=t.map(e=>e.normalScale),i.subsurfaceColor=t.map(e=>e.subsurfaceColor),i.subsurface=t.map(e=>e.subsurface),i.extinction=t.map(e=>e.extinction),i.subsurfaceMFP=t.map(e=>e.subsurfaceMFP),i.specularColor=t.map(e=>e.specularColor),i.glossiness=t.map(e=>e.glossiness)}function de(i,t){i.set("Materials.colorWorkflow[0]",k({data:[].concat(...t.color),channels:3},{data:t.workflow,channels:1})),i.set("Materials.roughMetalTransIOR[0]",k({data:t.roughness,channels:1},{data:t.metalness,channels:1},{data:t.transmission,channels:1},{data:t.ior,channels:1})),i.set("Materials.sheenTintClearcoatRoughness[0]",k({data:t.sheen,channels:1},{data:t.sheenTint,channels:1},{data:t.clearcoat,channels:1},{data:t.clearcoatRoughness,channels:1})),i.set("Materials.emissiveAlpha[0]",k({data:[].concat(...t.emissiveColor),channels:3},{data:t.alpha,channels:1})),i.set("Materials.specularTintAtDistanceNormalScale[0]",k({data:t.specularTint,channels:1},{data:t.atDistance,channels:1},{data:[].concat(...t.normalScale),channels:2})),i.set("Materials.subsurfaceAndColor[0]",k({data:t.subsurface,channels:1},{data:[].concat(...t.subsurfaceColor),channels:3})),i.set("Materials.extinctionSubsurfaceMFP[0]",k({data:[].concat(...t.extinction),channels:3},{data:t.subsurfaceMFP,channels:1})),i.set("Materials.specularColorGlossiness[0]",k({data:[].concat(...t.specularColor),channels:3},{data:t.glossiness,channels:1}))}function he(i,t,e){const n=[],a=[];t.map((s,r)=>{const l=Z(e,s.map),o=Z(e,s.normalMap),c=Z(e,s.roughnessMap),u=Z(e,s.metalnessMap);n.push(l,o,c,u);const d=Z(e,s.emissiveMap),p=Z(e,s.specularMap),f=Z(e,s.glossinessMap);a.push(d,p,f,-1)}),i.diffuseNormalRoughnessMetalnessMapIndex=n,i.emissiveSpecularGlossinessMapIndex=a}function Z(i,t){return t!=null&&t.image?i.get(t.image):-1}function fe(i,t){return de(i,t),function(e,n){e.set("Materials.diffuseNormalRoughnessMetalnessMapIndex[0]",n.diffuseNormalRoughnessMetalnessMapIndex),e.set("Materials.emissiveSpecularGlossinessMapIndex[0]",n.emissiveSpecularGlossinessMapIndex)}(i,t),i.bind(0),i}function pe(i,t){const e={};Mt(e,t),de(i,e),i.bind(0)}async function me(i,t,e){const n={};Mt(n,e);const{textureImageMap:a,textureArrayRes:s}=await ue(i,e);return he(n,e,a),fe(t,n),{textureArrayRes:s}}async function xe(i,t,e=!1){const n={};Mt(n,t);const{textureImageMap:a,textureArrayRes:s}=await ue(i,t);he(n,t,a);const{defines:r,materialBuffer:l}=function(o,c,u=!1){const d={BVH_DYNAMIC:u,NUM_MESHES:c.length,NUM_MATERIALS:c.length},p=new Y(o,{vertex:{source:"void main() {}"},fragment:{source:`// UBO-1
#ifdef NUM_MATERIALS
uniform Materials {
	vec4 colorWorkflow[NUM_MATERIALS];
	vec4 roughMetalTransIOR[NUM_MATERIALS];
	vec4 sheenTintClearcoatRoughness[NUM_MATERIALS];
	vec4 emissiveAlpha[NUM_MATERIALS];
	vec4 specularTintAtDistanceNormalScale[NUM_MATERIALS];
	vec4 subsurfaceAndColor[NUM_MATERIALS];
	vec4 extinctionSubsurfaceMFP[NUM_MATERIALS];
	vec4 specularColorGlossiness[NUM_MATERIALS];

	ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
	ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];

} materials;
#endif
void main() {}`},defines:d}),f=new De(o,p.program,"Materials");return p.dispose(),{defines:d,materialBuffer:f}}(i,t,e);return fe(l,n),{materialDefines:r,bufferData:n,materialBuffer:l,textureArrayRes:s,textureImageMap:a}}const kt=["map","normalMap","roughnessMap","metalnessMap","specularMap","glossinessMap","emissiveMap"];function Te(i,t){const{mapNum:e,perMatrixLength:n,perWrappingDataLength:a,uvTransDataLength:s,bufferSize:r}=function(p){const f=kt.length,h=p.size*f*9,m=p.size*f*3;return{mapNum:f,perMatrixLength:9,perWrappingDataLength:3,uvTransDataLength:h,textureWrappingDataLength:m,bufferSize:h+m}}(t),l=new Float32Array(r),o=new O,c=e*n,u=e*a;t.forEach((p,f)=>{kt.forEach((h,m)=>{const T=f[`${h}`];let x=o;T&&(x=T.uvTransMat);for(let b=0;b<n;b++)l[c*p+m*n+b]=x[b];let S=0,v=0;T&&(S=T.wrapS,v=T.wrapT);const g=s+p*u+m*a;l[g+0]=S,l[g+1]=v,l[g+2]=0})});const d=new D(i,l,3);return{uvTransDefines:{UV_TRANS_COLUMNS:d.textureDim.columnsLog,TEX_WRAP_DATA_INDEX:s/3},uvTransformBufferTex:d}}function Ot(i,t,e=0,n=i.length,a=Math.floor((e+n)/2)){for(let s=e;s<=a;s++){let r=s,l=i[s];for(let o=s+1;o<n;o++)t(l,i[o])||(r=o,l=i[o],ge(i,s,r))}}function ge(i,t,e){const n=i[e];i[e]=i[t],i[t]=n}let ve,Tt=0,gt=0,vt=0,yt=!1;const G=new P;function Yt(i,t){return{primitives:i,bounds:t}}function Qt(i,t,e){let n=e[t]-i.min[t];return i.max[t]>i.min[t]&&(n/=i.max[t]-i.min[t]),n}function ht(i){return i.getSize(G),2*(G.x*G.z+G.x*G.y+G.z*G.y)}function st(i,t,e,n=!1){const a=new H;for(let c=t;c<e;c++)a.union(i[c].bounds);yt&&(vt+=1,ve((vt+gt)/Tt));const s=e-t;if(s===1)return Yt(i.slice(t,e),a);{const c=new H;for(let p=t;p<e;p++)c.expandByPoint(i[p].center);const u=(c.getSize(G),G.x>G.z?G.x>G.y?"x":"y":G.z>G.y?"z":"y");let d=Math.floor((t+e)/2);if(s<=4)Ot(i,(p,f)=>p.center[u]<f.center[u],t,e,d);else if(c.max[u]===c.min[u]){if(!n)return Yt(i.slice(t,e),a);Ot(i,(p,f)=>p.center[u]<f.center[u],t,e,d)}else{const f=[];for(let x=0;x<12;x++)f.push({bounds:new H,count:0});for(let x=t;x<e;x++){let S=Math.floor(12*Qt(c,u,i[x].center));S===f.length&&(S=f.length-1),f[S].count++,f[S].bounds.union(i[x].bounds)}const h=[];for(let x=0;x<f.length-1;x++){const S=new H,v=new H;let g=0,b=0;for(let A=0;A<=x;A++)S.union(f[A].bounds),g+=f[A].count;for(let A=x+1;A<f.length;A++)v.union(f[A].bounds),b+=f[A].count;h.push(.1+(g*ht(S)+b*ht(v))/ht(a))}let m=h[0],T=0;for(let x=1;x<h.length;x++)h[x]<m&&(m=h[x],T=x);d=function(x,S,v=0,g=x.length){for(;v!==g;){for(;S(x[v]);)if(++v===g)return v;do if(v===--g)return v;while(!S(x[g]));ge(x,v,g),v++}return v}(i,x=>{let S=Math.floor(f.length*Qt(c,u,x.center));return S===f.length&&(S=f.length-1),S<=T},t,e)}return r=u,l=st(i,t,d,n),o=st(i,d,e,n),{child0:l,child1:o,bounds:new H().union(l.bounds).union(o.bounds),splitAxis:r}}var r,l,o}function Zt(i,t,e){const n=function(a,s,r){const l=[];for(let o=0;o<a.length;o++){const c=a[o],{material:u,geometry:d}=c,p=new H;p.copy(d.aabb).applyMatrix4(c.localToWorldMat);const f={bounds:p,center:p.getCenter(new P),meshID:o,geometryID:s.get(d),materialID:r.get(u),visible:c.visible};l.push(f)}return l}(i,t,e);return yt=!1,st(n,0,n.length,!0)}function qt(i,t){const{primitiveInfoArr:e}=function(a){let s=0;const r=[];for(let l=0;l<a.length;l++){const o=[],c=a[l],u=c.indices,d=c.position,p=c.materialMeshIndex,f=new P,h=new P,m=new P,T=new P,x=new P;for(let S=0;S<u.array.length;S+=3){const v=u.array[S],g=u.array[S+1],b=u.array[S+2],A=new H,M=3,L=v*M;f.x=d.array[L],f.y=d.array[L+1],f.z=d.array[L+2];const F=g*M;h.x=d.array[F],h.y=d.array[F+1],h.z=d.array[F+2];const R=b*M;m.x=d.array[R],m.y=d.array[R+1],m.z=d.array[R+2],A.expandByPoint(f),A.expandByPoint(h),A.expandByPoint(m),T.sub(m,f),x.sub(h,f);const I=new P().cross(x,T).normalize(),N={bounds:A,center:A.getCenter(new P),indices:[v+s,g+s,b+s],faceNormal:I,materialID:p&&p.array[v*p.itemSize]};o.push(N)}s+=c.position.array.length/3,r.push(o)}return{primitiveInfoArr:r}}(i),n=[];if(t){Tt=0,gt=0,yt=!0,ve=t;for(let a=0;a<e.length;a++)Tt+=2*e[a].length-1}for(let a=0;a<e.length;a++){const s=e[a];vt=0;const r=st(s,0,s.length);gt+=2*s.length-1,n.push(r)}return{blasBVHs:n}}function Se(i,t=0,e=[]){const n=[];let a=1;const s={x:0,y:1,z:2},r=(l,o=1)=>{if(a=Math.max(o,a),l.primitives){const c=l;for(let u=0;u<c.primitives.length;u++){const d=c.primitives[u];if(d.indices!==void 0){const p=d;n.push(p.indices[0],p.indices[1],p.indices[2],-1,p.faceNormal.x,p.faceNormal.y,p.faceNormal.z,p.materialID||0)}else{const p=d;n.push(e[p.geometryID],p.materialID,p.meshID,-1,Number(p.visible),0,0,0)}}}else{const c=l,u=c.bounds;n.push(u.min.x,u.min.y,u.min.z,s[c.splitAxis],u.max.x,u.max.y,u.max.z,-1);const d=n.length-1;r(c.child0,o+1),n[d]=n.length/4+t,r(c.child1,o+1)}};return r(i),{count:n.length/4,maxDepth:a,flatData:n}}function Jt(i,t){return Se(i,0,t)}function jt(i,t=0){const e=[];let n=[],a=1;for(let s=0;s<i.length;s++){const r=Se(i[s],t);a=Math.max(r.maxDepth,a),n.push(t),t+=r.count,e.push(r)}return{blasBufferSplitIndex:n,totalBLASDataLength:4*t,totalBLASDataCount:t,flatBVHInfos:e,maxDepth:a}}const be="IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHQ9MWUtNjtmdW5jdGlvbiBuKHQpe3JldHVybiB0WzBdPTEsdFsxXT0wLHRbMl09MCx0WzNdPTAsdFs0XT0wLHRbNV09MSx0WzZdPTAsdFs3XT0wLHRbOF09MCx0WzldPTAsdFsxMF09MSx0WzExXT0wLHRbMTJdPTAsdFsxM109MCx0WzE0XT0wLHRbMTVdPTEsdH1mdW5jdGlvbiBpKHQsbixpKXtsZXQgcz1uWzBdLGU9blsxXSxyPW5bMl0saD1uWzNdLGE9bls0XSxvPW5bNV0sdT1uWzZdLGw9bls3XSxjPW5bOF0sbT1uWzldLGY9blsxMF0seD1uWzExXSx5PW5bMTJdLHA9blsxM10sZz1uWzE0XSxNPW5bMTVdLGQ9aVswXSx6PWlbMV0sdz1pWzJdLGI9aVszXTtyZXR1cm4gdFswXT1kKnMreiphK3cqYytiKnksdFsxXT1kKmUreipvK3cqbStiKnAsdFsyXT1kKnIreip1K3cqZitiKmcsdFszXT1kKmgreipsK3cqeCtiKk0sZD1pWzRdLHo9aVs1XSx3PWlbNl0sYj1pWzddLHRbNF09ZCpzK3oqYSt3KmMrYip5LHRbNV09ZCplK3oqbyt3Km0rYipwLHRbNl09ZCpyK3oqdSt3KmYrYipnLHRbN109ZCpoK3oqbCt3KngrYipNLGQ9aVs4XSx6PWlbOV0sdz1pWzEwXSxiPWlbMTFdLHRbOF09ZCpzK3oqYSt3KmMrYip5LHRbOV09ZCplK3oqbyt3Km0rYipwLHRbMTBdPWQqcit6KnUrdypmK2IqZyx0WzExXT1kKmgreipsK3cqeCtiKk0sZD1pWzEyXSx6PWlbMTNdLHc9aVsxNF0sYj1pWzE1XSx0WzEyXT1kKnMreiphK3cqYytiKnksdFsxM109ZCplK3oqbyt3Km0rYipwLHRbMTRdPWQqcit6KnUrdypmK2IqZyx0WzE1XT1kKmgreipsK3cqeCtiKk0sdH1mdW5jdGlvbiBzKHQsbil7bGV0IGk9blswXStuWzVdK25bMTBdLHM9MDtyZXR1cm4gaT4wPyhzPTIqTWF0aC5zcXJ0KGkrMSksdFszXT0uMjUqcyx0WzBdPShuWzZdLW5bOV0pL3MsdFsxXT0obls4XS1uWzJdKS9zLHRbMl09KG5bMV0tbls0XSkvcyk6blswXT5uWzVdJiZuWzBdPm5bMTBdPyhzPTIqTWF0aC5zcXJ0KDErblswXS1uWzVdLW5bMTBdKSx0WzNdPShuWzZdLW5bOV0pL3MsdFswXT0uMjUqcyx0WzFdPShuWzFdK25bNF0pL3MsdFsyXT0obls4XStuWzJdKS9zKTpuWzVdPm5bMTBdPyhzPTIqTWF0aC5zcXJ0KDErbls1XS1uWzBdLW5bMTBdKSx0WzNdPShuWzhdLW5bMl0pL3MsdFswXT0oblsxXStuWzRdKS9zLHRbMV09LjI1KnMsdFsyXT0obls2XStuWzldKS9zKToocz0yKk1hdGguc3FydCgxK25bMTBdLW5bMF0tbls1XSksdFszXT0oblsxXS1uWzRdKS9zLHRbMF09KG5bOF0rblsyXSkvcyx0WzFdPShuWzZdK25bOV0pL3MsdFsyXT0uMjUqcyksdH1mdW5jdGlvbiBlKHQsbil7bGV0IGk9blswXSxzPW5bMV0sZT1uWzJdLHI9blszXSxoPWkraSxhPXMrcyxvPWUrZSx1PWkqaCxsPXMqaCxjPXMqYSxtPWUqaCxmPWUqYSx4PWUqbyx5PXIqaCxwPXIqYSxnPXIqbztyZXR1cm4gdFswXT0xLWMteCx0WzFdPWwrZyx0WzJdPW0tcCx0WzNdPTAsdFs0XT1sLWcsdFs1XT0xLXUteCx0WzZdPWYreSx0WzddPTAsdFs4XT1tK3AsdFs5XT1mLXksdFsxMF09MS11LWMsdFsxMV09MCx0WzEyXT0wLHRbMTNdPTAsdFsxNF09MCx0WzE1XT0xLHR9ZnVuY3Rpb24gcih0LG4saSl7cmV0dXJuIHRbMF09blswXStpWzBdLHRbMV09blsxXStpWzFdLHRbMl09blsyXStpWzJdLHR9ZnVuY3Rpb24gaCh0LG4saSl7cmV0dXJuIHRbMF09blswXS1pWzBdLHRbMV09blsxXS1pWzFdLHRbMl09blsyXS1pWzJdLHR9ZnVuY3Rpb24gYSh0LG4saSl7cmV0dXJuIHRbMF09blswXSppLHRbMV09blsxXSppLHRbMl09blsyXSppLHR9ZnVuY3Rpb24gbyh0LG4pe2xldCBpPW5bMF0scz1uWzFdLGU9blsyXSxyPWkqaStzKnMrZSplO3JldHVybiByPjAmJihyPTEvTWF0aC5zcXJ0KHIpLHRbMF09blswXSpyLHRbMV09blsxXSpyLHRbMl09blsyXSpyKSx0fWZ1bmN0aW9uIHUodCxuKXtyZXR1cm4gdFswXSpuWzBdK3RbMV0qblsxXSt0WzJdKm5bMl19bmV3IGNsYXNzIGV4dGVuZHMgQXJyYXl7Y29uc3RydWN0b3IodD0xLG49MCxpPTAscz0wLGU9MCxyPTEsaD0wLGE9MCxvPTAsdT0wLGw9MSxjPTAsbT0wLGY9MCx4PTAseT0xKXtyZXR1cm4gc3VwZXIodCxuLGkscyxlLHIsaCxhLG8sdSxsLGMsbSxmLHgseSksdGhpc31nZXQgaXNNYXRyaXg0KCl7cmV0dXJuITB9c2V0IHgodCl7dGhpc1sxMl09dH1nZXQgeCgpe3JldHVybiB0aGlzWzEyXX1zZXQgeSh0KXt0aGlzWzEzXT10fWdldCB5KCl7cmV0dXJuIHRoaXNbMTNdfXNldCB6KHQpe3RoaXNbMTRdPXR9Z2V0IHooKXtyZXR1cm4gdGhpc1sxNF19c2V0IHcodCl7dGhpc1sxNV09dH1nZXQgdygpe3JldHVybiB0aGlzWzE1XX1zZXQodCxuLGkscyxlLHIsaCxhLG8sdSxsLGMsbSxmLHgseSl7cmV0dXJuIHQubGVuZ3RoP3RoaXMuY29weSh0KTooZnVuY3Rpb24odCxuLGkscyxlLHIsaCxhLG8sdSxsLGMsbSxmLHgseSxwKXt0WzBdPW4sdFsxXT1pLHRbMl09cyx0WzNdPWUsdFs0XT1yLHRbNV09aCx0WzZdPWEsdFs3XT1vLHRbOF09dSx0WzldPWwsdFsxMF09Yyx0WzExXT1tLHRbMTJdPWYsdFsxM109eCx0WzE0XT15LHRbMTVdPXB9KHRoaXMsdCxuLGkscyxlLHIsaCxhLG8sdSxsLGMsbSxmLHgseSksdGhpcyl9dHJhbnNsYXRlKHQsbj10aGlzKXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2xldCBzLGUscixoLGEsbyx1LGwsYyxtLGYseCx5PWlbMF0scD1pWzFdLGc9aVsyXTtuPT09dD8odFsxMl09blswXSp5K25bNF0qcCtuWzhdKmcrblsxMl0sdFsxM109blsxXSp5K25bNV0qcCtuWzldKmcrblsxM10sdFsxNF09blsyXSp5K25bNl0qcCtuWzEwXSpnK25bMTRdLHRbMTVdPW5bM10qeStuWzddKnArblsxMV0qZytuWzE1XSk6KHM9blswXSxlPW5bMV0scj1uWzJdLGg9blszXSxhPW5bNF0sbz1uWzVdLHU9bls2XSxsPW5bN10sYz1uWzhdLG09bls5XSxmPW5bMTBdLHg9blsxMV0sdFswXT1zLHRbMV09ZSx0WzJdPXIsdFszXT1oLHRbNF09YSx0WzVdPW8sdFs2XT11LHRbN109bCx0WzhdPWMsdFs5XT1tLHRbMTBdPWYsdFsxMV09eCx0WzEyXT1zKnkrYSpwK2MqZytuWzEyXSx0WzEzXT1lKnkrbypwK20qZytuWzEzXSx0WzE0XT1yKnkrdSpwK2YqZytuWzE0XSx0WzE1XT1oKnkrbCpwK3gqZytuWzE1XSl9KHRoaXMsbix0KSx0aGlzfXJvdGF0ZVgodCxuPXRoaXMpe3JldHVybiBmdW5jdGlvbih0LG4saSl7bGV0IHM9TWF0aC5zaW4oaSksZT1NYXRoLmNvcyhpKSxyPW5bNF0saD1uWzVdLGE9bls2XSxvPW5bN10sdT1uWzhdLGw9bls5XSxjPW5bMTBdLG09blsxMV07biE9PXQmJih0WzBdPW5bMF0sdFsxXT1uWzFdLHRbMl09blsyXSx0WzNdPW5bM10sdFsxMl09blsxMl0sdFsxM109blsxM10sdFsxNF09blsxNF0sdFsxNV09blsxNV0pLHRbNF09ciplK3Uqcyx0WzVdPWgqZStsKnMsdFs2XT1hKmUrYypzLHRbN109byplK20qcyx0WzhdPXUqZS1yKnMsdFs5XT1sKmUtaCpzLHRbMTBdPWMqZS1hKnMsdFsxMV09bSplLW8qc30odGhpcyxuLHQpLHRoaXN9cm90YXRlWSh0LG49dGhpcyl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtsZXQgcz1NYXRoLnNpbihpKSxlPU1hdGguY29zKGkpLHI9blswXSxoPW5bMV0sYT1uWzJdLG89blszXSx1PW5bOF0sbD1uWzldLGM9blsxMF0sbT1uWzExXTtuIT09dCYmKHRbNF09bls0XSx0WzVdPW5bNV0sdFs2XT1uWzZdLHRbN109bls3XSx0WzEyXT1uWzEyXSx0WzEzXT1uWzEzXSx0WzE0XT1uWzE0XSx0WzE1XT1uWzE1XSksdFswXT1yKmUtdSpzLHRbMV09aCplLWwqcyx0WzJdPWEqZS1jKnMsdFszXT1vKmUtbSpzLHRbOF09cipzK3UqZSx0WzldPWgqcytsKmUsdFsxMF09YSpzK2MqZSx0WzExXT1vKnMrbSplfSh0aGlzLG4sdCksdGhpc31yb3RhdGVaKHQsbj10aGlzKXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2xldCBzPU1hdGguc2luKGkpLGU9TWF0aC5jb3MoaSkscj1uWzBdLGg9blsxXSxhPW5bMl0sbz1uWzNdLHU9bls0XSxsPW5bNV0sYz1uWzZdLG09bls3XTtuIT09dCYmKHRbOF09bls4XSx0WzldPW5bOV0sdFsxMF09blsxMF0sdFsxMV09blsxMV0sdFsxMl09blsxMl0sdFsxM109blsxM10sdFsxNF09blsxNF0sdFsxNV09blsxNV0pLHRbMF09ciplK3Uqcyx0WzFdPWgqZStsKnMsdFsyXT1hKmUrYypzLHRbM109byplK20qcyx0WzRdPXUqZS1yKnMsdFs1XT1sKmUtaCpzLHRbNl09YyplLWEqcyx0WzddPW0qZS1vKnN9KHRoaXMsbix0KSx0aGlzfXNjYWxlKHQsbj10aGlzKXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2xldCBzPWlbMF0sZT1pWzFdLHI9aVsyXTt0WzBdPW5bMF0qcyx0WzFdPW5bMV0qcyx0WzJdPW5bMl0qcyx0WzNdPW5bM10qcyx0WzRdPW5bNF0qZSx0WzVdPW5bNV0qZSx0WzZdPW5bNl0qZSx0WzddPW5bN10qZSx0WzhdPW5bOF0qcix0WzldPW5bOV0qcix0WzEwXT1uWzEwXSpyLHRbMTFdPW5bMTFdKnIsdFsxMl09blsxMl0sdFsxM109blsxM10sdFsxNF09blsxNF0sdFsxNV09blsxNV19KHRoaXMsbiwibnVtYmVyIj09dHlwZW9mIHQ/W3QsdCx0XTp0KSx0aGlzfW11bHRpcGx5KHQsbil7cmV0dXJuIG4/aSh0aGlzLHQsbik6aSh0aGlzLHRoaXMsdCksdGhpc31pZGVudGl0eSgpe3JldHVybiBuKHRoaXMpLHRoaXN9Y29weSh0KXt2YXIgbixpO3JldHVybiBpPXQsKG49dGhpcylbMF09aVswXSxuWzFdPWlbMV0sblsyXT1pWzJdLG5bM109aVszXSxuWzRdPWlbNF0sbls1XT1pWzVdLG5bNl09aVs2XSxuWzddPWlbN10sbls4XT1pWzhdLG5bOV09aVs5XSxuWzEwXT1pWzEwXSxuWzExXT1pWzExXSxuWzEyXT1pWzEyXSxuWzEzXT1pWzEzXSxuWzE0XT1pWzE0XSxuWzE1XT1pWzE1XSx0aGlzfWZyb21QZXJzcGVjdGl2ZSh7Zm92OnQsYXNwZWN0Om4sbmVhcjppLGZhcjpzfT17fSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpLHMsZSl7bGV0IHI9MS9NYXRoLnRhbihuLzIpLGg9MS8ocy1lKTt0WzBdPXIvaSx0WzFdPTAsdFsyXT0wLHRbM109MCx0WzRdPTAsdFs1XT1yLHRbNl09MCx0WzddPTAsdFs4XT0wLHRbOV09MCx0WzEwXT0oZStzKSpoLHRbMTFdPS0xLHRbMTJdPTAsdFsxM109MCx0WzE0XT0yKmUqcypoLHRbMTVdPTB9KHRoaXMsdCxuLGkscyksdGhpc31mcm9tT3J0aG9nb25hbCh7bGVmdDp0LHJpZ2h0Om4sYm90dG9tOmksdG9wOnMsbmVhcjplLGZhcjpyfSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpLHMsZSxyLGgpe2xldCBhPTEvKG4taSksbz0xLyhzLWUpLHU9MS8oci1oKTt0WzBdPS0yKmEsdFsxXT0wLHRbMl09MCx0WzNdPTAsdFs0XT0wLHRbNV09LTIqbyx0WzZdPTAsdFs3XT0wLHRbOF09MCx0WzldPTAsdFsxMF09Mip1LHRbMTFdPTAsdFsxMl09KG4raSkqYSx0WzEzXT0oZStzKSpvLHRbMTRdPShoK3IpKnUsdFsxNV09MX0odGhpcyx0LG4saSxzLGUsciksdGhpc31mcm9tUXVhdGVybmlvbih0KXtyZXR1cm4gZSh0aGlzLHQpLHRoaXN9c2V0UG9zaXRpb24odCl7cmV0dXJuIHRoaXMueD10WzBdLHRoaXMueT10WzFdLHRoaXMuej10WzJdLHRoaXN9dHJhbnNwb3NlKHQ9dGhpcyl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7aWYodD09PW4pe2xldCBpPW5bMV0scz1uWzJdLGU9blszXSxyPW5bNl0saD1uWzddLGE9blsxMV07dFsxXT1uWzRdLHRbMl09bls4XSx0WzNdPW5bMTJdLHRbNF09aSx0WzZdPW5bOV0sdFs3XT1uWzEzXSx0WzhdPXMsdFs5XT1yLHRbMTFdPW5bMTRdLHRbMTJdPWUsdFsxM109aCx0WzE0XT1hfWVsc2UgdFswXT1uWzBdLHRbMV09bls0XSx0WzJdPW5bOF0sdFszXT1uWzEyXSx0WzRdPW5bMV0sdFs1XT1uWzVdLHRbNl09bls5XSx0WzddPW5bMTNdLHRbOF09blsyXSx0WzldPW5bNl0sdFsxMF09blsxMF0sdFsxMV09blsxNF0sdFsxMl09blszXSx0WzEzXT1uWzddLHRbMTRdPW5bMTFdLHRbMTVdPW5bMTVdfSh0aGlzLHQpLHRoaXN9aW52ZXJzZSh0PXRoaXMpe3JldHVybiBmdW5jdGlvbih0LG4pe2xldCBpPW5bMF0scz1uWzFdLGU9blsyXSxyPW5bM10saD1uWzRdLGE9bls1XSxvPW5bNl0sdT1uWzddLGw9bls4XSxjPW5bOV0sbT1uWzEwXSxmPW5bMTFdLHg9blsxMl0seT1uWzEzXSxwPW5bMTRdLGc9blsxNV0sTT1pKmEtcypoLGQ9aSpvLWUqaCx6PWkqdS1yKmgsdz1zKm8tZSphLGI9cyp1LXIqYSx2PWUqdS1yKm8scT1sKnktYyp4LEE9bCpwLW0qeCxCPWwqZy1mKngsST1jKnAtbSp5LEQ9YypnLWYqeSxQPW0qZy1mKnAsUz1NKlAtZCpEK3oqSSt3KkItYipBK3YqcTtTJiYoUz0xL1MsdFswXT0oYSpQLW8qRCt1KkkpKlMsdFsxXT0oZSpELXMqUC1yKkkpKlMsdFsyXT0oeSp2LXAqYitnKncpKlMsdFszXT0obSpiLWMqdi1mKncpKlMsdFs0XT0obypCLWgqUC11KkEpKlMsdFs1XT0oaSpQLWUqQityKkEpKlMsdFs2XT0ocCp6LXgqdi1nKmQpKlMsdFs3XT0obCp2LW0qeitmKmQpKlMsdFs4XT0oaCpELWEqQit1KnEpKlMsdFs5XT0ocypCLWkqRC1yKnEpKlMsdFsxMF09KHgqYi15KnorZypNKSpTLHRbMTFdPShjKnotbCpiLWYqTSkqUyx0WzEyXT0oYSpBLWgqSS1vKnEpKlMsdFsxM109KGkqSS1zKkErZSpxKSpTLHRbMTRdPSh5KmQteCp3LXAqTSkqUyx0WzE1XT0obCp3LWMqZCttKk0pKlMpfSh0aGlzLHQpLHRoaXN9Y29tcG9zZSh0LG4saSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpLHMpe2xldCBlPW5bMF0scj1uWzFdLGg9blsyXSxhPW5bM10sbz1lK2UsdT1yK3IsbD1oK2gsYz1lKm8sbT1lKnUsZj1lKmwseD1yKnUseT1yKmwscD1oKmwsZz1hKm8sTT1hKnUsZD1hKmwsej1zWzBdLHc9c1sxXSxiPXNbMl07dFswXT0oMS0oeCtwKSkqeix0WzFdPShtK2QpKnosdFsyXT0oZi1NKSp6LHRbM109MCx0WzRdPShtLWQpKncsdFs1XT0oMS0oYytwKSkqdyx0WzZdPSh5K2cpKncsdFs3XT0wLHRbOF09KGYrTSkqYix0WzldPSh5LWcpKmIsdFsxMF09KDEtKGMreCkpKmIsdFsxMV09MCx0WzEyXT1pWzBdLHRbMTNdPWlbMV0sdFsxNF09aVsyXSx0WzE1XT0xfSh0aGlzLHQsbixpKSx0aGlzfWdldFJvdGF0aW9uKHQpe3JldHVybiBzKHQsdGhpcyksdGhpc31leHRyYWN0Um90YXRpb24odCl7bGV0IG49W107cmV0dXJuIHMobix0KSxlKHRoaXMsbiksdGhpc31mcm9tUm90YXRpb24obixpKXtyZXR1cm4gZnVuY3Rpb24obixpLHMpe2xldCBlLHIsaCxhPXNbMF0sbz1zWzFdLHU9c1syXSxsPU1hdGguc3FydChhKmErbypvK3UqdSk7TWF0aC5hYnMobCk8dHx8KGw9MS9sLGEqPWwsbyo9bCx1Kj1sLGU9TWF0aC5zaW4oaSkscj1NYXRoLmNvcyhpKSxoPTEtcixuWzBdPWEqYSpoK3IsblsxXT1vKmEqaCt1KmUsblsyXT11KmEqaC1vKmUsblszXT0wLG5bNF09YSpvKmgtdSplLG5bNV09bypvKmgrcixuWzZdPXUqbypoK2EqZSxuWzddPTAsbls4XT1hKnUqaCtvKmUsbls5XT1vKnUqaC1hKmUsblsxMF09dSp1KmgrcixuWzExXT0wLG5bMTJdPTAsblsxM109MCxuWzE0XT0wLG5bMTVdPTEpfSh0aGlzLG4saSksdGhpc31nZXRUcmFuc2xhdGlvbih0KXt2YXIgbixpO3JldHVybiBpPXRoaXMsKG49dClbMF09aVsxMl0sblsxXT1pWzEzXSxuWzJdPWlbMTRdLHRoaXN9Z2V0U2NhbGluZyh0KXtyZXR1cm4gZnVuY3Rpb24odCxuKXtsZXQgaT1uWzBdLHM9blsxXSxlPW5bMl0scj1uWzRdLGg9bls1XSxhPW5bNl0sbz1uWzhdLHU9bls5XSxsPW5bMTBdO3RbMF09TWF0aC5zcXJ0KGkqaStzKnMrZSplKSx0WzFdPU1hdGguc3FydChyKnIraCpoK2EqYSksdFsyXT1NYXRoLnNxcnQobypvK3UqdStsKmwpfSh0LHRoaXMpLHRoaXN9Z2V0TWF4U2NhbGVPbkF4aXMoKXtyZXR1cm4gZnVuY3Rpb24odCl7bGV0IG49dFswXSxpPXRbMV0scz10WzJdLGU9dFs0XSxyPXRbNV0saD10WzZdLGE9dFs4XSxvPXRbOV0sdT10WzEwXTtjb25zdCBsPW4qbitpKmkrcypzLGM9ZSplK3IqcitoKmgsbT1hKmErbypvK3UqdTtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgubWF4KGwsYyxtKSl9KHRoaXMpfWxvb2tBdCh0LG4saSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpLHMpe2xldCBlPW5bMF0scj1uWzFdLGg9blsyXSxhPXNbMF0sbz1zWzFdLHU9c1syXSxsPWUtaVswXSxjPXItaVsxXSxtPWgtaVsyXSxmPWwqbCtjKmMrbSptO2Y+MCYmKGY9MS9NYXRoLnNxcnQoZiksbCo9ZixjKj1mLG0qPWYpO2xldCB4PW8qbS11KmMseT11KmwtYSptLHA9YSpjLW8qbDtmPXgqeCt5KnkrcCpwLGY+MCYmKGY9MS9NYXRoLnNxcnQoZikseCo9Zix5Kj1mLHAqPWYpLHRbMF09eCx0WzFdPXksdFsyXT1wLHRbM109MCx0WzRdPWMqcC1tKnksdFs1XT1tKngtbCpwLHRbNl09bCp5LWMqeCx0WzddPTAsdFs4XT1sLHRbOV09Yyx0WzEwXT1tLHRbMTFdPTAsdFsxMl09ZSx0WzEzXT1yLHRbMTRdPWgsdFsxNV09MX0odGhpcyx0LG4saSksdGhpc31sb29rQXRUYXJnZXQoaSxzLGUpe3JldHVybiBmdW5jdGlvbihpLHMsZSxyKXtsZXQgaCxhLG8sdSxsLGMsbSxmLHgseSxwPXNbMF0sZz1zWzFdLE09c1syXSxkPXJbMF0sej1yWzFdLHc9clsyXSxiPWVbMF0sdj1lWzFdLHE9ZVsyXTtNYXRoLmFicyhwLWIpPHQmJk1hdGguYWJzKGctdik8dCYmTWF0aC5hYnMoTS1xKTx0P24oaSk6KG09cC1iLGY9Zy12LHg9TS1xLHk9MS9NYXRoLnNxcnQobSptK2YqZit4KngpLG0qPXksZio9eSx4Kj15LGg9eip4LXcqZixhPXcqbS1kKngsbz1kKmYteiptLHk9TWF0aC5zcXJ0KGgqaCthKmErbypvKSx5Pyh5PTEveSxoKj15LGEqPXksbyo9eSk6KGg9MCxhPTAsbz0wKSx1PWYqby14KmEsbD14KmgtbSpvLGM9bSphLWYqaCx5PU1hdGguc3FydCh1KnUrbCpsK2MqYykseT8oeT0xL3ksdSo9eSxsKj15LGMqPXkpOih1PTAsbD0wLGM9MCksaVswXT1oLGlbMV09dSxpWzJdPW0saVszXT0wLGlbNF09YSxpWzVdPWwsaVs2XT1mLGlbN109MCxpWzhdPW8saVs5XT1jLGlbMTBdPXgsaVsxMV09MCxpWzEyXT0tKGgqcCthKmcrbypNKSxpWzEzXT0tKHUqcCtsKmcrYypNKSxpWzE0XT0tKG0qcCtmKmcreCpNKSxpWzE1XT0xKX0odGhpcyxpLHMsZSksdGhpc31kZXRlcm1pbmFudCgpe3JldHVybiBmdW5jdGlvbih0KXtsZXQgbj10WzBdLGk9dFsxXSxzPXRbMl0sZT10WzNdLHI9dFs0XSxoPXRbNV0sYT10WzZdLG89dFs3XSx1PXRbOF0sbD10WzldLGM9dFsxMF0sbT10WzExXSxmPXRbMTJdLHg9dFsxM10seT10WzE0XSxwPXRbMTVdO3JldHVybihuKmgtaSpyKSooYypwLW0qeSktKG4qYS1zKnIpKihsKnAtbSp4KSsobipvLWUqcikqKGwqeS1jKngpKyhpKmEtcypoKSoodSpwLW0qZiktKGkqby1lKmgpKih1KnktYypmKSsocypvLWUqYSkqKHUqeC1sKmYpfSh0aGlzKX1mcm9tQXJyYXkodCxuPTApe2Zvcih2YXIgaT0wO2k8MTY7aSsrKXRoaXNbaV09dFtpK25dO3JldHVybiB0aGlzfXRvQXJyYXkodD1bXSxuPTApe2xldCBpPXRoaXM7cmV0dXJuIHRbbl09aVswXSx0W24rMV09aVsxXSx0W24rMl09aVsyXSx0W24rM109aVszXSx0W24rNF09aVs0XSx0W24rNV09aVs1XSx0W24rNl09aVs2XSx0W24rN109aVs3XSx0W24rOF09aVs4XSx0W24rOV09aVs5XSx0W24rMTBdPWlbMTBdLHRbbisxMV09aVsxMV0sdFtuKzEyXT1pWzEyXSx0W24rMTNdPWlbMTNdLHRbbisxNF09aVsxNF0sdFtuKzE1XT1pWzE1XSx0fXN0YXRpYyBjb3B5VG8odD1bXSxuPVtdKXt0WzBdPW5bMF0sdFsxXT1uWzFdLHRbMl09blsyXSx0WzNdPW5bM10sdFs0XT1uWzRdLHRbNV09bls1XSx0WzZdPW5bNl0sdFs3XT1uWzddLHRbOF09bls4XSx0WzldPW5bOV0sdFsxMF09blsxMF0sdFsxMV09blsxMV0sdFsxMl09blsxMl0sdFsxM109blsxM10sdFsxNF09blsxNF0sdFsxNV09blsxNV19fTtjbGFzcyBsIGV4dGVuZHMgQXJyYXl7Y29uc3RydWN0b3IodD0wLG49dCxpPXQpe3JldHVybiBzdXBlcih0LG4saSksdGhpcy5jb25zdGFudD0xLHRoaXN9Z2V0IGlzVmVjdG9yMygpe3JldHVybiEwfWdldCB4KCl7cmV0dXJuIHRoaXNbMF19c2V0IHgodCl7dGhpc1swXT10fWdldCB5KCl7cmV0dXJuIHRoaXNbMV19c2V0IHkodCl7dGhpc1sxXT10fWdldCB6KCl7cmV0dXJuIHRoaXNbMl19c2V0IHoodCl7dGhpc1syXT10fXNldCh0LG49dCxpPXQpe3JldHVybiB0Lmxlbmd0aD90aGlzLmNvcHkodCk6KGZ1bmN0aW9uKHQsbixpLHMpe3RbMF09bix0WzFdPWksdFsyXT1zfSh0aGlzLHQsbixpKSx0aGlzKX1jb3B5KHQpe3ZhciBuLGk7cmV0dXJuIGk9dCwobj10aGlzKVswXT1pWzBdLG5bMV09aVsxXSxuWzJdPWlbMl0sdGhpc31hZGQodCxuKXtyZXR1cm4gbj9yKHRoaXMsdCxuKTpyKHRoaXMsdGhpcyx0KSx0aGlzfXN1Yih0LG4pe3JldHVybiBuP2godGhpcyx0LG4pOmgodGhpcyx0aGlzLHQpLHRoaXN9bXVsdGlwbHkodCl7dmFyIG4saSxzO3JldHVybiB0Lmxlbmd0aD8oaT10aGlzLHM9dCwobj10aGlzKVswXT1pWzBdKnNbMF0sblsxXT1pWzFdKnNbMV0sblsyXT1pWzJdKnNbMl0pOmEodGhpcyx0aGlzLHQpLHRoaXN9ZGl2aWRlKHQpe3ZhciBuLGkscztyZXR1cm4gdC5sZW5ndGg/KGk9dGhpcyxzPXQsKG49dGhpcylbMF09aVswXS9zWzBdLG5bMV09aVsxXS9zWzFdLG5bMl09aVsyXS9zWzJdKTphKHRoaXMsdGhpcywxL3QpLHRoaXN9c2NhbGUodCl7cmV0dXJuIGEodGhpcyx0aGlzLHQpLHRoaXN9ZGlzdGFuY2UodCl7cmV0dXJuIHQ/ZnVuY3Rpb24odCxuKXtsZXQgaT1uWzBdLXRbMF0scz1uWzFdLXRbMV0sZT1uWzJdLXRbMl07cmV0dXJuIE1hdGguc3FydChpKmkrcypzK2UqZSl9KHRoaXMsdCk6ZnVuY3Rpb24odCl7bGV0IG49dFswXSxpPXRbMV0scz10WzJdO3JldHVybiBNYXRoLnNxcnQobipuK2kqaStzKnMpfSh0aGlzKX1zcXVhcmVkRGlzdGFuY2UodCl7cmV0dXJuIHQ/ZnVuY3Rpb24odCxuKXtsZXQgaT1uWzBdLXRbMF0scz1uWzFdLXRbMV0sZT1uWzJdLXRbMl07cmV0dXJuIGkqaStzKnMrZSplfSh0aGlzLHQpOmZ1bmN0aW9uKHQpe2xldCBuPXRbMF0saT10WzFdLHM9dFsyXTtyZXR1cm4gbipuK2kqaStzKnN9KHRoaXMpfXNxdWFyZWRMZW5ndGgoKXtyZXR1cm4gdGhpcy5zcXVhcmVkRGlzdGFuY2UoKX1uZWdhdGUodD10aGlzKXt2YXIgbixpO3JldHVybiBpPXQsKG49dGhpcylbMF09LWlbMF0sblsxXT0taVsxXSxuWzJdPS1pWzJdLHRoaXN9cmVmbGVjdCh0KXtsZXQgbj10LmNsb25lKCk7cmV0dXJuIHRoaXMuc3ViKG4ubXVsdGlwbHkoMip0aGlzLmRvdCh0KSkpfWludmVyc2UodD10aGlzKXt2YXIgbixpO3JldHVybiBpPXQsKG49dGhpcylbMF09MS9pWzBdLG5bMV09MS9pWzFdLG5bMl09MS9pWzJdLHRoaXN9bm9ybWFsaXplKCl7cmV0dXJuIG8odGhpcyx0aGlzKSx0aGlzfWRvdCh0KXtyZXR1cm4gdSh0aGlzLHQpfWNyb3NzKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtsZXQgcz1uWzBdLGU9blsxXSxyPW5bMl0saD1pWzBdLGE9aVsxXSxvPWlbMl07dFswXT1lKm8tciphLHRbMV09cipoLXMqbyx0WzJdPXMqYS1lKmh9KHRoaXMsdCxuKSx0aGlzfWxlcnAodCxuLGkpe3JldHVybiBmdW5jdGlvbih0LG4saSxzKXtsZXQgZT1uWzBdLHI9blsxXSxoPW5bMl07dFswXT1lK3MqKGlbMF0tZSksdFsxXT1yK3MqKGlbMV0tciksdFsyXT1oK3MqKGlbMl0taCl9KHRoaXMsdCxuLGkpLHRoaXN9aGVybWl0ZSh0LG4saSxzLGUpe3JldHVybiBmdW5jdGlvbih0LG4saSxzLGUscil7bGV0IGg9cipyLGE9aCooMipyLTMpKzEsbz1oKihyLTIpK3IsdT1oKihyLTEpLGw9aCooMy0yKnIpO3RbMF09blswXSphK2lbMF0qbytzWzBdKnUrZVswXSpsLHRbMV09blsxXSphK2lbMV0qbytzWzFdKnUrZVsxXSpsLHRbMl09blsyXSphK2lbMl0qbytzWzJdKnUrZVsyXSpsfSh0aGlzLHQsbixpLHMsZSksdGhpc31iZXppZXIodCxuLGkscyxlKXtyZXR1cm4gZnVuY3Rpb24odCxuLGkscyxlLHIpe2xldCBoPTEtcixhPWgqaCxvPXIqcix1PWEqaCxsPTMqciphLGM9MypvKmgsbT1vKnI7dFswXT1uWzBdKnUraVswXSpsK3NbMF0qYytlWzBdKm0sdFsxXT1uWzFdKnUraVsxXSpsK3NbMV0qYytlWzFdKm0sdFsyXT1uWzJdKnUraVsyXSpsK3NbMl0qYytlWzJdKm19KHRoaXMsdCxuLGkscyxlKSx0aGlzfWFwcGx5TWF0cml4NCh0KXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2xldCBzPW5bMF0sZT1uWzFdLHI9blsyXSxoPWlbM10qcytpWzddKmUraVsxMV0qcitpWzE1XTtoPWh8fDEsdFswXT0oaVswXSpzK2lbNF0qZStpWzhdKnIraVsxMl0pL2gsdFsxXT0oaVsxXSpzK2lbNV0qZStpWzldKnIraVsxM10pL2gsdFsyXT0oaVsyXSpzK2lbNl0qZStpWzEwXSpyK2lbMTRdKS9ofSh0aGlzLHRoaXMsdCksdGhpc31hcHBseU1hdHJpeDModCl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtsZXQgcz1uWzBdLGU9blsxXSxyPW5bMl07dFswXT1zKmlbMF0rZSppWzNdK3IqaVs2XSx0WzFdPXMqaVsxXStlKmlbNF0rcippWzddLHRbMl09cyppWzJdK2UqaVs1XStyKmlbOF19KHRoaXMsdGhpcyx0KSx0aGlzfWFwcGx5UXVhdGVybmlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2xldCBzPW5bMF0sZT1uWzFdLHI9blsyXSxoPWlbMF0sYT1pWzFdLG89aVsyXSx1PWlbM10sbD11KnMrYSpyLW8qZSxjPXUqZStvKnMtaCpyLG09dSpyK2gqZS1hKnMsZj0taCpzLWEqZS1vKnI7dFswXT1sKnUrZiotaCtjKi1vLW0qLWEsdFsxXT1jKnUrZiotYSttKi1oLWwqLW8sdFsyXT1tKnUrZiotbytsKi1hLWMqLWh9KHRoaXMsdGhpcyx0KSx0aGlzfXNldEZyb21NYXRyaXhQb3NpdGlvbih0KXtyZXR1cm4gdGhpcy54PXRbMTJdLHRoaXMueT10WzEzXSx0aGlzLno9dFsxNF0sdGhpc31hbmdsZSh0KXtyZXR1cm4gZnVuY3Rpb24odCxuKXtsZXQgaT1bLi4udF0scz1bLi4ubl07byhpLGkpLG8ocyxzKTtsZXQgZT11KGkscyk7cmV0dXJuIGU+MT8wOmU8LTE/TWF0aC5QSTpNYXRoLmFjb3MoZSl9KHRoaXMsdCl9ZXF1YWxzKHQpe3JldHVybiBpPXQsKG49dGhpcylbMF09PT1pWzBdJiZuWzFdPT09aVsxXSYmblsyXT09PWlbMl07dmFyIG4saX1jbG9uZSgpe3JldHVybiBuZXcgbCh0aGlzWzBdLHRoaXNbMV0sdGhpc1syXSl9ZnJvbUFycmF5KHQsbj0wKXtyZXR1cm4gdGhpc1swXT10W25dLHRoaXNbMV09dFtuKzFdLHRoaXNbMl09dFtuKzJdLHRoaXN9bWluKHQpe3JldHVybiB0aGlzWzBdPU1hdGgubWluKHRoaXNbMF0sdC54KSx0aGlzWzFdPU1hdGgubWluKHRoaXNbMV0sdC55KSx0aGlzWzJdPU1hdGgubWluKHRoaXNbMl0sdC56KSx0aGlzfW1heCh0KXtyZXR1cm4gdGhpc1swXT1NYXRoLm1heCh0aGlzWzBdLHQueCksdGhpc1sxXT1NYXRoLm1heCh0aGlzWzFdLHQueSksdGhpc1syXT1NYXRoLm1heCh0aGlzWzJdLHQueiksdGhpc310b0FycmF5KCl7cmV0dXJuIEFycmF5LmZyb20odGhpcyl9c3RhdGljIGNvcHlUbyh0LG4pe3RbMF09blswXSx0WzFdPW5bMV0sdFsyXT1uWzJdfX1jb25zdCBjPVtuZXcgbCxuZXcgbCxuZXcgbCxuZXcgbCxuZXcgbCxuZXcgbCxuZXcgbCxuZXcgbF07Y2xhc3MgbXtjb25zdHJ1Y3Rvcih0PW5ldyBsKDEvMCksbj1uZXcgbCgtMS8wKSl7dGhpcy5taW49dCx0aGlzLm1heD1ufW1ha2VFbXB0eSgpe3JldHVybiB0aGlzLm1pbi54PXRoaXMubWluLnk9dGhpcy5taW4uej0xLzAsdGhpcy5tYXgueD10aGlzLm1heC55PXRoaXMubWF4Lno9LTEvMCx0aGlzfWlzRW1wdHkoKXtyZXR1cm4gdGhpcy5tYXgueDx0aGlzLm1pbi54fHx0aGlzLm1heC55PHRoaXMubWluLnl8fHRoaXMubWF4Lno8dGhpcy5taW4uen1nZXRDZW50ZXIodCl7cmV0dXJuIHRoaXMuaXNFbXB0eSgpP3Quc2V0KDAsMCwwKTp0LmFkZCh0aGlzLm1pbix0aGlzLm1heCkubXVsdGlwbHkoLjUpfWdldFNpemUodCl7cmV0dXJuIHRoaXMuaXNFbXB0eSgpP3Quc2V0KDAsMCwwKTp0LnN1Yih0aGlzLm1heCx0aGlzLm1pbil9ZXhwYW5kQnlQb2ludCh0KXtyZXR1cm4gdGhpcy5taW4ubWluKHQpLHRoaXMubWF4Lm1heCh0KSx0aGlzfXVuaW9uKHQpe3JldHVybiB0aGlzLm1pbi5taW4odC5taW4pLHRoaXMubWF4Lm1heCh0Lm1heCksdGhpc31jb3B5KHQpe3JldHVybiB0aGlzLm1pbi5jb3B5KHQubWluKSx0aGlzLm1heC5jb3B5KHQubWF4KSx0aGlzfWludGVyc2VjdHNCb3godCl7cmV0dXJuISh0Lm1heC54PHRoaXMubWluLnh8fHQubWluLng+dGhpcy5tYXgueHx8dC5tYXgueTx0aGlzLm1pbi55fHx0Lm1pbi55PnRoaXMubWF4Lnl8fHQubWF4Lno8dGhpcy5taW4uenx8dC5taW4uej50aGlzLm1heC56KX1zZXRGcm9tUG9pbnRzKHQpe3RoaXMubWFrZUVtcHR5KCk7Zm9yKGxldCBuPTAsaT10Lmxlbmd0aDtuPGk7bisrKXRoaXMuZXhwYW5kQnlQb2ludCh0W25dKTtyZXR1cm4gdGhpc31hcHBseU1hdHJpeDQodCl7cmV0dXJuIHRoaXMuaXNFbXB0eSgpfHwoY1swXS5zZXQodGhpcy5taW4ueCx0aGlzLm1pbi55LHRoaXMubWluLnopLmFwcGx5TWF0cml4NCh0KSxjWzFdLnNldCh0aGlzLm1pbi54LHRoaXMubWluLnksdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KHQpLGNbMl0uc2V0KHRoaXMubWluLngsdGhpcy5tYXgueSx0aGlzLm1pbi56KS5hcHBseU1hdHJpeDQodCksY1szXS5zZXQodGhpcy5taW4ueCx0aGlzLm1heC55LHRoaXMubWF4LnopLmFwcGx5TWF0cml4NCh0KSxjWzRdLnNldCh0aGlzLm1heC54LHRoaXMubWluLnksdGhpcy5taW4ueikuYXBwbHlNYXRyaXg0KHQpLGNbNV0uc2V0KHRoaXMubWF4LngsdGhpcy5taW4ueSx0aGlzLm1heC56KS5hcHBseU1hdHJpeDQodCksY1s2XS5zZXQodGhpcy5tYXgueCx0aGlzLm1heC55LHRoaXMubWluLnopLmFwcGx5TWF0cml4NCh0KSxjWzddLnNldCh0aGlzLm1heC54LHRoaXMubWF4LnksdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KHQpLHRoaXMuc2V0RnJvbVBvaW50cyhjKSksdGhpc319ZnVuY3Rpb24gZih0LG4saT0wLHM9dC5sZW5ndGgsZT1NYXRoLmZsb29yKChpK3MpLzIpKXtmb3IobGV0IHI9aTtyPD1lO3IrKyl7bGV0IGk9cixlPXRbcl07Zm9yKGxldCBoPXIrMTtoPHM7aCsrKW4oZSx0W2hdKXx8KGk9aCxlPXRbaF0seCh0LHIsaSkpfX1mdW5jdGlvbiB4KHQsbixpKXtjb25zdCBzPXRbaV07dFtpXT10W25dLHRbbl09c31sZXQgeSxwPTAsZz0wLE09MCxkPSExO2NvbnN0IHo9bmV3IGw7ZnVuY3Rpb24gdyh0LG4pe3JldHVybntwcmltaXRpdmVzOnQsYm91bmRzOm59fWZ1bmN0aW9uIGIodCxuLGkpe2xldCBzPWlbbl0tdC5taW5bbl07cmV0dXJuIHQubWF4W25dPnQubWluW25dJiYocy89dC5tYXhbbl0tdC5taW5bbl0pLHN9ZnVuY3Rpb24gdih0KXtyZXR1cm4gdC5nZXRTaXplKHopLDIqKHoueCp6Lnorei54KnoueSt6Lnoqei55KX1mdW5jdGlvbiBxKHQsbixpLHM9ITEpe2NvbnN0IGU9bmV3IG07Zm9yKGxldCB1PW47dTxpO3UrKyllLnVuaW9uKHRbdV0uYm91bmRzKTtpZihkKXtNKz0xLHkoKE0rZykvcCl9Y29uc3Qgcj1pLW47aWYoMT09PXIpcmV0dXJuIHcodC5zbGljZShuLGkpLGUpO3tjb25zdCB1PW5ldyBtO2ZvcihsZXQgcz1uO3M8aTtzKyspdS5leHBhbmRCeVBvaW50KHRbc10uY2VudGVyKTtjb25zdCBsPSh1LmdldFNpemUoeiksei54Pnouej96Lng+ei55PyJ4IjoieSI6ei56PnoueT8ieiI6InkiKTtsZXQgYz1NYXRoLmZsb29yKChuK2kpLzIpO2lmKHI8PTQpZih0LCgodCxuKT0+dC5jZW50ZXJbbF08bi5jZW50ZXJbbF0pLG4saSxjKTtlbHNlIGlmKHUubWF4W2xdPT09dS5taW5bbF0pe2lmKCFzKXJldHVybiB3KHQuc2xpY2UobixpKSxlKTtmKHQsKCh0LG4pPT50LmNlbnRlcltsXTxuLmNlbnRlcltsXSksbixpLGMpfWVsc2V7Y29uc3Qgcz0xMixyPVtdO2ZvcihsZXQgdD0wO3Q8czt0Kyspci5wdXNoKHtib3VuZHM6bmV3IG0sY291bnQ6MH0pO2ZvcihsZXQgZT1uO2U8aTtlKyspe2xldCBuPU1hdGguZmxvb3IocypiKHUsbCx0W2VdLmNlbnRlcikpO249PT1yLmxlbmd0aCYmKG49ci5sZW5ndGgtMSkscltuXS5jb3VudCsrLHJbbl0uYm91bmRzLnVuaW9uKHRbZV0uYm91bmRzKX1jb25zdCBoPVtdO2ZvcihsZXQgdD0wO3Q8ci5sZW5ndGgtMTt0Kyspe2NvbnN0IG49bmV3IG0saT1uZXcgbTtsZXQgcz0wLGE9MDtmb3IobGV0IGU9MDtlPD10O2UrKyluLnVuaW9uKHJbZV0uYm91bmRzKSxzKz1yW2VdLmNvdW50O2ZvcihsZXQgZT10KzE7ZTxyLmxlbmd0aDtlKyspaS51bmlvbihyW2VdLmJvdW5kcyksYSs9cltlXS5jb3VudDtoLnB1c2goLjErKHMqdihuKSthKnYoaSkpL3YoZSkpfWxldCBhPWhbMF0sbz0wO2ZvcihsZXQgdD0xO3Q8aC5sZW5ndGg7dCsrKWhbdF08YSYmKGE9aFt0XSxvPXQpO2M9ZnVuY3Rpb24odCxuLGk9MCxzPXQubGVuZ3RoKXtmb3IoO2khPT1zOyl7Zm9yKDtuKHRbaV0pOylpZigrK2k9PT1zKXJldHVybiBpO2Rve2lmKGk9PT0tLXMpcmV0dXJuIGl9d2hpbGUoIW4odFtzXSkpO3godCxpLHMpLGkrK31yZXR1cm4gaX0odCwodD0+e2xldCBuPU1hdGguZmxvb3Ioci5sZW5ndGgqYih1LGwsdC5jZW50ZXIpKTtyZXR1cm4gbj09PXIubGVuZ3RoJiYobj1yLmxlbmd0aC0xKSxuPD1vfSksbixpKX1yZXR1cm4gaD1sLGE9cSh0LG4sYyxzKSxvPXEodCxjLGkscykse2NoaWxkMDphLGNoaWxkMTpvLGJvdW5kczoobmV3IG0pLnVuaW9uKGEuYm91bmRzKS51bmlvbihvLmJvdW5kcyksc3BsaXRBeGlzOmh9fXZhciBoLGEsb31mdW5jdGlvbiBBKHQsbil7Y29uc3R7cHJpbWl0aXZlSW5mb0FycjppfT1mdW5jdGlvbih0KXtsZXQgbj0wO2NvbnN0IGk9W107Zm9yKGxldCBzPTA7czx0Lmxlbmd0aDtzKyspe2NvbnN0IGU9W10scj10W3NdLGg9ci5pbmRpY2VzLGE9ci5wb3NpdGlvbixvPXIubWF0ZXJpYWxNZXNoSW5kZXgsdT1uZXcgbCxjPW5ldyBsLGY9bmV3IGwseD1uZXcgbCx5PW5ldyBsO2ZvcihsZXQgdD0wO3Q8aC5hcnJheS5sZW5ndGg7dCs9Myl7Y29uc3QgaT1oLmFycmF5W3RdLHM9aC5hcnJheVt0KzFdLHI9aC5hcnJheVt0KzJdLHA9bmV3IG0sZz0zLE09aSpnO3UueD1hLmFycmF5W01dLHUueT1hLmFycmF5W00rMV0sdS56PWEuYXJyYXlbTSsyXTtjb25zdCBkPXMqZztjLng9YS5hcnJheVtkXSxjLnk9YS5hcnJheVtkKzFdLGMuej1hLmFycmF5W2QrMl07Y29uc3Qgej1yKmc7Zi54PWEuYXJyYXlbel0sZi55PWEuYXJyYXlbeisxXSxmLno9YS5hcnJheVt6KzJdLHAuZXhwYW5kQnlQb2ludCh1KSxwLmV4cGFuZEJ5UG9pbnQoYykscC5leHBhbmRCeVBvaW50KGYpLHguc3ViKGYsdSkseS5zdWIoYyx1KTtjb25zdCB3PShuZXcgbCkuY3Jvc3MoeSx4KS5ub3JtYWxpemUoKSxiPXtib3VuZHM6cCxjZW50ZXI6cC5nZXRDZW50ZXIobmV3IGwpLGluZGljZXM6W2krbixzK24scituXSxmYWNlTm9ybWFsOncsbWF0ZXJpYWxJRDpvJiZvLmFycmF5W2kqby5pdGVtU2l6ZV19O2UucHVzaChiKX1uKz1yLnBvc2l0aW9uLmFycmF5Lmxlbmd0aC8zLGkucHVzaChlKX1yZXR1cm57cHJpbWl0aXZlSW5mb0FycjppfX0odCkscz1bXTtpZihuKXtwPTAsZz0wLGQ9ITAseT1uO2ZvcihsZXQgdD0wO3Q8aS5sZW5ndGg7dCsrKXArPTIqaVt0XS5sZW5ndGgtMX1mb3IobGV0IGU9MDtlPGkubGVuZ3RoO2UrKyl7Y29uc3QgdD1pW2VdO009MDtjb25zdCBuPXEodCwwLHQubGVuZ3RoKTtnKz0yKnQubGVuZ3RoLTEscy5wdXNoKG4pfXJldHVybntibGFzQlZIczpzfX1mdW5jdGlvbiBCKHQsbj0wLGk9W10pe2NvbnN0IHM9W107bGV0IGU9MTtjb25zdCByPXt4OjAseToxLHo6Mn0saD0odCxhPTEpPT57aWYoZT1NYXRoLm1heChhLGUpLHQucHJpbWl0aXZlcyl7Y29uc3Qgbj10O2ZvcihsZXQgdD0wO3Q8bi5wcmltaXRpdmVzLmxlbmd0aDt0Kyspe2NvbnN0IGU9bi5wcmltaXRpdmVzW3RdO2lmKHZvaWQgMCE9PWUuaW5kaWNlcyl7Y29uc3QgdD1lO3MucHVzaCh0LmluZGljZXNbMF0sdC5pbmRpY2VzWzFdLHQuaW5kaWNlc1syXSwtMSx0LmZhY2VOb3JtYWwueCx0LmZhY2VOb3JtYWwueSx0LmZhY2VOb3JtYWwueix0Lm1hdGVyaWFsSUR8fDApfWVsc2V7Y29uc3QgdD1lO3MucHVzaChpW3QuZ2VvbWV0cnlJRF0sdC5tYXRlcmlhbElELHQubWVzaElELC0xLE51bWJlcih0LnZpc2libGUpLDAsMCwwKX19fWVsc2V7Y29uc3QgaT10LGU9aS5ib3VuZHM7cy5wdXNoKGUubWluLngsZS5taW4ueSxlLm1pbi56LHJbaS5zcGxpdEF4aXNdLGUubWF4LngsZS5tYXgueSxlLm1heC56LC0xKTtjb25zdCBvPXMubGVuZ3RoLTE7aChpLmNoaWxkMCxhKzEpLHNbb109cy5sZW5ndGgvNCtuLGgoaS5jaGlsZDEsYSsxKX19O3JldHVybiBoKHQpLHtjb3VudDpzLmxlbmd0aC80LG1heERlcHRoOmUsZmxhdERhdGE6c319c2VsZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oe2RhdGE6dH0pe2NvbnN0e2dlb21ldHJpZXM6bn09dDtsZXQgaT1wZXJmb3JtYW5jZS5ub3coKTtjb25zdCBzPXQ9Pntjb25zdCBuPXBlcmZvcm1hbmNlLm5vdygpOyhuLWk+PTEwfHwxPT09dCkmJihpPW4sc2VsZi5wb3N0TWVzc2FnZSh7ZXJyb3I6bnVsbCxmbGF0QkxBU0JWSEluZm86bnVsbCxwcm9ncmVzczp0fSkpfTt0cnl7Y29uc3R7Ymxhc0JWSHM6dH09QShuLHMpLGk9ZnVuY3Rpb24odCxuPTApe2NvbnN0IGk9W107bGV0IHM9W10sZT0xO2ZvcihsZXQgcj0wO3I8dC5sZW5ndGg7cisrKXtjb25zdCBoPUIodFtyXSxuKTtlPU1hdGgubWF4KGgubWF4RGVwdGgsZSkscy5wdXNoKG4pLG4rPWguY291bnQsaS5wdXNoKGgpfXJldHVybntibGFzQnVmZmVyU3BsaXRJbmRleDpzLHRvdGFsQkxBU0RhdGFMZW5ndGg6NCpuLHRvdGFsQkxBU0RhdGFDb3VudDpuLGZsYXRCVkhJbmZvczppLG1heERlcHRoOmV9fSh0KTtzZWxmLnBvc3RNZXNzYWdlKHtlcnJvcjpudWxsLGZsYXRCTEFTQlZISW5mbzppLHByb2dyZXNzOm51bGx9KX1jYXRjaChlKXtzZWxmLnBvc3RNZXNzYWdlKHtlcnJvcjplLGZsYXRCTEFTQlZISW5mbzpudWxsLHByb2dyZXNzOm51bGx9KX19fSgpOwo=",$t=typeof window<"u"&&window.Blob&&new Blob([atob(be)],{type:"text/javascript;charset=utf-8"});function qe(){const i=$t&&(window.URL||window.webkitURL).createObjectURL($t);try{return i?new Worker(i,{}):new Worker("data:application/javascript;base64,"+be,{type:"module"})}finally{i&&(window.URL||window.webkitURL).revokeObjectURL(i)}}class Je{constructor(){this.worker=new qe,this.building=!1}build(t,e){if(this.building)throw new Error("BVHWorker is building");this.building=!0;const{worker:n}=this;return new Promise((a,s)=>{n.onmessage=r=>{this.building=!1;const{flatBLASBVHInfo:l,error:o,progress:c}=r.data;o?s(new Error(o)):l?(n.onmessage=null,a(l)):c!=null&&e(c)},Array.isArray(t)||(t=[t]),n.postMessage({geometries:t})})}}function te(i){const t=new Float32Array(16*i.length);for(let e=0;e<i.length;e++){const n=i[e].localToWorldMat;for(let a=0;a<16;a++)t[16*e+a]=n[a]}return t}class Ae{constructor(t,e){this.gl=t,this.useWebWorker=e,this.workerBuilder=new Je}rebuildTLAS(t,e=!1){const{gl:n,geometryIndexMap:a}=this;let{meshes:s,materialIndexMap:r}=t;s=s.filter(p=>!p.tlasMask);const l=Jt(Zt(s,a,r),this.lastFlatBLASBVHInfo.blasBufferSplitIndex),o=l.flatData.length,c=new Float32Array(o);c.set(l.flatData,0);const u=new D(n,c,4),d=te(s);return{tlasBuffer:u,transformBuffer:new D(n,d,4)}}async buildDynamic(t,e,n,a,s){const{gl:r,useWebWorker:l}=this;this.geometryIndexMap=e;let{meshes:o,materialIndexMap:c}=t;const u=Array.from(e.keys()),d=[];if(u.forEach((I,N)=>{d[N]={};const X=d[N];X.position=I.position,X.indices=I.indices}),l)this.lastFlatBLASBVHInfo=await this.workerBuilder.build(d,s);else{const{blasBVHs:I}=qt(d);this.lastFlatBLASBVHInfo=jt(I)}o=o.filter(I=>!I.tlasMask);const p=Jt(Zt(o,e,c),this.lastFlatBLASBVHInfo.blasBufferSplitIndex),f=this.lastFlatBLASBVHInfo.totalBLASDataLength,h=new Float32Array(f),m=this.lastFlatBLASBVHInfo.flatBVHInfos;let T=0;for(let I=0;I<m.length;I++){const N=m[I].flatData;h.set(N,T),T+=N.length}const x=new D(r,h,4),S=p.flatData.length,v=new Float32Array(S);v.set(p.flatData,0);const g=new D(r,v,4),b=new Float32Array(4*n),A=new Float32Array(4*n);let M=0;u.forEach(I=>{const N=I.position.array,X=I.normal.array,w=I.uv.array,W=I.position.count;for(let y=0;y<W;y++)b[M+4*y+0]=N[3*y+0],b[M+4*y+1]=N[3*y+1],b[M+4*y+2]=N[3*y+2],b[M+4*y+3]=w?w[2*y+0]:0,A[M+4*y+0]=X[3*y+0],A[M+4*y+1]=X[3*y+1],A[M+4*y+2]=X[3*y+2],A[M+4*y+3]=w?w[2*y+1]:0;M+=4*W});const L=new D(r,b,4),F=new D(r,A,4),R=te(o);return{positionBuffer:L,normalBuffer:F,blasBuffer:x,tlasBuffer:g,transformBuffer:new D(r,R,4),maxDepth:this.lastFlatBLASBVHInfo.maxDepth+p.maxDepth}}async buildStatic(t,e){const{gl:n,useWebWorker:a}=this,{geometry:s}=t;if(a)this.lastFlatBLASBVHInfo=await this.workerBuilder.build([s],e);else{const{blasBVHs:m}=qt([s]);this.lastFlatBLASBVHInfo=jt(m)}const r=this.lastFlatBLASBVHInfo.flatBVHInfos[0],l=new Float32Array(r.flatData),o=new D(n,l,4),c=s.position.count,u=new Float32Array(4*c),d=new Float32Array(4*c),p=s.position.array,f=s.normal.array,h=s.uv.array;for(let m=0;m<c;m++)u[4*m+0]=p[3*m+0],u[4*m+1]=p[3*m+1],u[4*m+2]=p[3*m+2],u[4*m+3]=h?h[2*m+0]:0,d[4*m+0]=f[3*m+0],d[4*m+1]=f[3*m+1],d[4*m+2]=f[3*m+2],d[4*m+3]=h?h[2*m+1]:0;return{positionBuffer:new D(n,u,4),normalBuffer:new D(n,d,4),bvhBuffer:o,maxDepth:r.maxDepth}}}class je{constructor(t,e,n=!0){this.gl=t,this.resourcePool=e,this.useWebWorker=n,this.bvhBuilder=new Ae(t,n)}destroy(){const{resourcePool:t}=this;t.destoryResourceByName("MaterialBuffer"),t.destoryResourceByName("PositionBuffer"),t.destoryResourceByName("NormalBuffer"),t.destoryResourceByName("BVHBuffer"),t.destoryResourceByName("MaterialTextureArray")}async buildBVH(t,e,n){const{resourcePool:a}=this,{maxDepth:s,positionBuffer:r,normalBuffer:l,bvhBuffer:o}=await this.bvhBuilder.buildStatic(e,n);a.setResource("PositionBuffer",r),a.setResource("NormalBuffer",l),a.setResource("BVHBuffer",o),t.bvhDefines={STACK_SIZE:s,BVH_COLUMNS:o.textureDim.columnsLog,VERTEX_COLUMNS:r.textureDim.columnsLog}}async build(t,e){let{meshes:n,materialIndexMap:a,materials:s}=t;this.destroy(),n.length===1&&n[0].name=="LGLDefaultMesh"&&(n[0].visible=!0),n=n.filter(f=>f.visible==1);const r=ce(n,!0);t.geometryInfo=r;const l=Qe(n,a,r),{materialDefines:o,textureArrayRes:c,materialBuffer:u}=await xe(this.gl,s,!1);t.mergedMesh=l,this.resourcePool.setResource("MaterialBuffer",u,"Buffer"),this.resourcePool.setResource("MaterialTextureArray",c);const{uvTransDefines:d,uvTransformBufferTex:p}=Te(this.gl,a);this.resourcePool.setResource("TextureUVTransformBuffer",p),this.lastMaterialBuffer=u,t.materialDefines=o,await this.buildBVH(t,l,e),Object.assign(t.bvhDefines,d)}updateMaterialParams(t){const{lastMaterialBuffer:e}=this,{materials:n}=t;pe(e,n)}async rebuildMaterialBuffer(t){const{materials:e}=t,{textureArrayRes:n}=await me(this.gl,this.lastMaterialBuffer,e);this.resourcePool.setResource("MaterialTextureArray",n)}}class $e{constructor(t,e,n=!0){this.gl=t,this.resourcePool=e,this.useWebWorker=n,this.bvhBuilder=new Ae(t,n)}destroy(){const{resourcePool:t}=this;t.destoryResourceByName("MaterialBuffer"),t.destoryResourceByName("MaterialTextureArray"),t.destoryResourceByName("PositionBuffer"),t.destoryResourceByName("NormalBuffer"),t.destoryResourceByName("TLASBuffer"),t.destoryResourceByName("BLASBuffer"),t.destoryResourceByName("TLASTransformBuffer")}async buildBVH(t,e){const{resourcePool:n}=this,{geometryIndexMap:a,vertexTotalCount:s,indicesTotalCount:r}=t.geometryInfo,{positionBuffer:l,normalBuffer:o,blasBuffer:c,tlasBuffer:u,transformBuffer:d,maxDepth:p}=await this.bvhBuilder.buildDynamic(t,a,s,r,e);n.setResource("PositionBuffer",l),n.setResource("NormalBuffer",o),n.setResource("TLASBuffer",u),n.setResource("TLASTransformBuffer",d),n.setResource("BLASBuffer",c),t.bvhDefines={BVH_DYNAMIC:1,STACK_SIZE:32,BLAS_COLUMNS:c.textureDim.columnsLog,TLAS_COLUMNS:u.textureDim.columnsLog,TLAS_TRANSFORM_COLUMNS:d.textureDim.columnsLog,VERTEX_COLUMNS:l.textureDim.columnsLog}}async build(t,e){let{meshes:n,materials:a,materialIndexMap:s}=t;const r=ce(n,!1);t.geometryInfo=r;const{materialDefines:l,textureImageMap:o,textureArrayRes:c,materialBuffer:u}=await xe(this.gl,a,!0);this.resourcePool.setResource("MaterialBuffer",u,"Buffer"),this.resourcePool.setResource("MaterialTextureArray",c),t.materialDefines=l;const{uvTransDefines:d,uvTransformBufferTex:p}=Te(this.gl,s);this.resourcePool.setResource("TextureUVTransformBuffer",p),this.lastMaterialBuffer=u,await this.buildBVH(t,e),Object.assign(t.bvhDefines,d)}updateMaterialParams(t){const{materials:e}=t;pe(this.lastMaterialBuffer,e)}rebuildTLAS(t,e=!1){const{tlasBuffer:n,transformBuffer:a}=this.bvhBuilder.rebuildTLAS(t,e);this.resourcePool.updateResource("TLASBuffer",n,"Buffer"),this.resourcePool.updateResource("TLASTransformBuffer",a,"Buffer")}async rebuildMaterialBuffer(t){const{materials:e}=t,{textureArrayRes:n}=await me(this.gl,this.lastMaterialBuffer,e);this.resourcePool.setResource("MaterialTextureArray",n)}}class tn{constructor(t){this.gl=t,this.curTileNum=-1,this.totalTileNum=-1,this.columns=0,this.rows=0,this.tileWidth=0,this.tileHeight=0,this.viewWidth=0,this.viewHeight=0}reset(){this.curTileNum=-1}setSize(t,e){this.viewWidth=t,this.viewHeight=e,this.computeTileDimensions()}setTileCount(t){this.totalTileNum=t,this.computeTileDimensions(),this.reset()}computeTileDimensions(){const{viewWidth:t,viewHeight:e}=this,n=Math.sqrt(this.totalTileNum);this.tileWidth=Math.ceil(t/n),this.tileHeight=Math.ceil(e/n),this.columns=Math.ceil(t/this.tileWidth),this.rows=Math.ceil(e/this.tileHeight),this.columns&&this.rows&&(this.totalTileNum=this.columns*this.rows)}nextTile(){const{totalTileNum:t,tileWidth:e,tileHeight:n,viewHeight:a,columns:s,rows:r}=this;this.curTileNum++,this.curTileNum%t==0&&(this.curTileNum=0);const l=this.curTileNum===t-1,o=this.curTileNum%s,c=Math.floor(this.curTileNum/s)%r;return{x:o*e,y:Math.min(a,c*n),tileWidth:e,tileHeight:n,isFirstTile:this.curTileNum===0,isLastTile:l}}}class en{constructor(t,e){this.gl=t,this.fullscreenTriangle=e}createPipeline(t){const{gl:e,fullscreenTriangle:n}=this,a={gl:e,vertex:n.vertexShader,fragment:`layout(location = 0) out vec4 out_color;

uniform sampler2D inputBuffer;
uniform vec2 resolution;
in vec2 vCoord;

// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)
//----------------------------------------------------------------------------------
// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
// SDK Version: v3.00
// Email:       gameworks@nvidia.com
// Site:        http://developer.nvidia.com/

// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//  * Neither the name of NVIDIA CORPORATION nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AS IS AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

//----------------------------------------------------------------------------------

#define FXAA_PC 1
#define FXAA_GLSL_100 1
#define FXAA_QUALITY_PRESET 12

#define FXAA_GREEN_AS_LUMA 1

/*--------------------------------------------------------------------------*/
#ifndef FXAA_PC_CONSOLE
    //
    // The console algorithm for PC is included
    // for developers targeting really low spec machines.
    // Likely better to just run FXAA_PC, and use a really low preset.
    //
    #define FXAA_PC_CONSOLE 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_GLSL_120
    #define FXAA_GLSL_120 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_GLSL_130
    #define FXAA_GLSL_130 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_HLSL_3
    #define FXAA_HLSL_3 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_HLSL_4
    #define FXAA_HLSL_4 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_HLSL_5
    #define FXAA_HLSL_5 0
#endif
/*==========================================================================*/
#ifndef FXAA_GREEN_AS_LUMA
    //
    // For those using non-linear color,
    // and either not able to get luma in alpha, or not wanting to,
    // this enables FXAA to run using green as a proxy for luma.
    // So with this enabled, no need to pack luma in alpha.
    //
    // This will turn off AA on anything which lacks some amount of green.
    // Pure red and blue or combination of only R and B, will get no AA.
    //
    // Might want to lower the settings for both,
    //    fxaaConsoleEdgeThresholdMin
    //    fxaaQualityEdgeThresholdMin
    // In order to insure AA does not get turned off on colors
    // which contain a minor amount of green.
    //
    // 1 = On.
    // 0 = Off.
    //
    #define FXAA_GREEN_AS_LUMA 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_EARLY_EXIT
    //
    // Controls algorithm's early exit path.
    // On PS3 turning this ON adds 2 cycles to the shader.
    // On 360 turning this OFF adds 10ths of a millisecond to the shader.
    // Turning this off on console will result in a more blurry image.
    // So this defaults to on.
    //
    // 1 = On.
    // 0 = Off.
    //
    #define FXAA_EARLY_EXIT 1
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_DISCARD
    //
    // Only valid for PC OpenGL currently.
    // Probably will not work when FXAA_GREEN_AS_LUMA = 1.
    //
    // 1 = Use discard on pixels which don't need AA.
    //     For APIs which enable concurrent TEX+ROP from same surface.
    // 0 = Return unchanged color on pixels which don't need AA.
    //
    #define FXAA_DISCARD 0
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_FAST_PIXEL_OFFSET
    //
    // Used for GLSL 120 only.
    //
    // 1 = GL API supports fast pixel offsets
    // 0 = do not use fast pixel offsets
    //
    #ifdef GL_EXT_gpu_shader4
        #define FXAA_FAST_PIXEL_OFFSET 1
    #endif
    #ifdef GL_NV_gpu_shader5
        #define FXAA_FAST_PIXEL_OFFSET 1
    #endif
    #ifdef GL_ARB_gpu_shader5
        #define FXAA_FAST_PIXEL_OFFSET 1
    #endif
    #ifndef FXAA_FAST_PIXEL_OFFSET
        #define FXAA_FAST_PIXEL_OFFSET 0
    #endif
#endif
/*--------------------------------------------------------------------------*/
#ifndef FXAA_GATHER4_ALPHA
    //
    // 1 = API supports gather4 on alpha channel.
    // 0 = API does not support gather4 on alpha channel.
    //
    #if (FXAA_HLSL_5 == 1)
        #define FXAA_GATHER4_ALPHA 1
    #endif
    #ifdef GL_ARB_gpu_shader5
        #define FXAA_GATHER4_ALPHA 1
    #endif
    #ifdef GL_NV_gpu_shader5
        #define FXAA_GATHER4_ALPHA 1
    #endif
    #ifndef FXAA_GATHER4_ALPHA
        #define FXAA_GATHER4_ALPHA 0
    #endif
#endif


/*============================================================================
                        FXAA QUALITY - TUNING KNOBS
------------------------------------------------------------------------------
NOTE the other tuning knobs are now in the shader function inputs!
============================================================================*/
#ifndef FXAA_QUALITY_PRESET
    //
    // Choose the quality preset.
    // This needs to be compiled into the shader as it effects code.
    // Best option to include multiple presets is to
    // in each shader define the preset, then include this file.
    //
    // OPTIONS
    // -----------------------------------------------------------------------
    // 10 to 15 - default medium dither (10=fastest, 15=highest quality)
    // 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
    // 39       - no dither, very expensive
    //
    // NOTES
    // -----------------------------------------------------------------------
    // 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
    // 13 = about same speed as FXAA 3.9 and better than 12
    // 23 = closest to FXAA 3.9 visually and performance wise
    //  _ = the lowest digit is directly related to performance
    // _  = the highest digit is directly related to style
    //
    #define FXAA_QUALITY_PRESET 12
#endif


/*============================================================================

                        FXAA QUALITY - PRESETS

============================================================================*/

/*============================================================================
                    FXAA QUALITY - MEDIUM DITHER PRESETS
============================================================================*/
#if (FXAA_QUALITY_PRESET == 10)
    #define FXAA_QUALITY_PS 3
    #define FXAA_QUALITY_P0 1.5
    #define FXAA_QUALITY_P1 3.0
    #define FXAA_QUALITY_P2 12.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 11)
    #define FXAA_QUALITY_PS 4
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 3.0
    #define FXAA_QUALITY_P3 12.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 12)
    #define FXAA_QUALITY_PS 5
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 4.0
    #define FXAA_QUALITY_P4 12.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 13)
    #define FXAA_QUALITY_PS 6
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 4.0
    #define FXAA_QUALITY_P5 12.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 14)
    #define FXAA_QUALITY_PS 7
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 4.0
    #define FXAA_QUALITY_P6 12.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 15)
    #define FXAA_QUALITY_PS 8
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 4.0
    #define FXAA_QUALITY_P7 12.0
#endif

/*============================================================================
                    FXAA QUALITY - LOW DITHER PRESETS
============================================================================*/
#if (FXAA_QUALITY_PRESET == 20)
    #define FXAA_QUALITY_PS 3
    #define FXAA_QUALITY_P0 1.5
    #define FXAA_QUALITY_P1 2.0
    #define FXAA_QUALITY_P2 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 21)
    #define FXAA_QUALITY_PS 4
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 22)
    #define FXAA_QUALITY_PS 5
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 23)
    #define FXAA_QUALITY_PS 6
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 24)
    #define FXAA_QUALITY_PS 7
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 3.0
    #define FXAA_QUALITY_P6 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 25)
    #define FXAA_QUALITY_PS 8
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 4.0
    #define FXAA_QUALITY_P7 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 26)
    #define FXAA_QUALITY_PS 9
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 2.0
    #define FXAA_QUALITY_P7 4.0
    #define FXAA_QUALITY_P8 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 27)
    #define FXAA_QUALITY_PS 10
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 2.0
    #define FXAA_QUALITY_P7 2.0
    #define FXAA_QUALITY_P8 4.0
    #define FXAA_QUALITY_P9 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 28)
    #define FXAA_QUALITY_PS 11
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 2.0
    #define FXAA_QUALITY_P7 2.0
    #define FXAA_QUALITY_P8 2.0
    #define FXAA_QUALITY_P9 4.0
    #define FXAA_QUALITY_P10 8.0
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_QUALITY_PRESET == 29)
    #define FXAA_QUALITY_PS 12
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.5
    #define FXAA_QUALITY_P2 2.0
    #define FXAA_QUALITY_P3 2.0
    #define FXAA_QUALITY_P4 2.0
    #define FXAA_QUALITY_P5 2.0
    #define FXAA_QUALITY_P6 2.0
    #define FXAA_QUALITY_P7 2.0
    #define FXAA_QUALITY_P8 2.0
    #define FXAA_QUALITY_P9 2.0
    #define FXAA_QUALITY_P10 4.0
    #define FXAA_QUALITY_P11 8.0
#endif

/*============================================================================
                    FXAA QUALITY - EXTREME QUALITY
============================================================================*/
#if (FXAA_QUALITY_PRESET == 39)
    #define FXAA_QUALITY_PS 12
    #define FXAA_QUALITY_P0 1.0
    #define FXAA_QUALITY_P1 1.0
    #define FXAA_QUALITY_P2 1.0
    #define FXAA_QUALITY_P3 1.0
    #define FXAA_QUALITY_P4 1.0
    #define FXAA_QUALITY_P5 1.5
    #define FXAA_QUALITY_P6 2.0
    #define FXAA_QUALITY_P7 2.0
    #define FXAA_QUALITY_P8 2.0
    #define FXAA_QUALITY_P9 2.0
    #define FXAA_QUALITY_P10 4.0
    #define FXAA_QUALITY_P11 8.0
#endif



/*============================================================================

                                API PORTING

============================================================================*/
#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
    #define FxaaBool bool
    #define FxaaDiscard discard
    #define FxaaFloat float
    #define FxaaFloat2 vec2
    #define FxaaFloat3 vec3
    #define FxaaFloat4 vec4
    #define FxaaHalf float
    #define FxaaHalf2 vec2
    #define FxaaHalf3 vec3
    #define FxaaHalf4 vec4
    #define FxaaInt2 ivec2
    #define FxaaSat(x) clamp(x, 0.0, 1.0)
    #define FxaaTex sampler2D
#else
    #define FxaaBool bool
    #define FxaaDiscard clip(-1)
    #define FxaaFloat float
    #define FxaaFloat2 float2
    #define FxaaFloat3 float3
    #define FxaaFloat4 float4
    #define FxaaHalf half
    #define FxaaHalf2 half2
    #define FxaaHalf3 half3
    #define FxaaHalf4 half4
    #define FxaaSat(x) saturate(x)
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_GLSL_100 == 1)
#define FxaaTexTop(t, p) texture(t, p, 0.0)
#define FxaaTexOff(t, p, o, r) texture(t, p + (o * r), 0.0)
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_GLSL_120 == 1)
    // Requires,
    //  #version 120
    // And at least,
    //  #extension GL_EXT_gpu_shader4 : enable
    //  (or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
    #define FxaaTexTop(t, p) textureLod(t, p, 0.0)
    #if (FXAA_FAST_PIXEL_OFFSET == 1)
        #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
    #else
        #define FxaaTexOff(t, p, o, r) textureLod(t, p + (o * r), 0.0)
    #endif
    #if (FXAA_GATHER4_ALPHA == 1)
        // use #extension GL_ARB_gpu_shader5 : enable
        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)
        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
    #endif
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_GLSL_130 == 1)
    #define FxaaTexTop(t, p) textureLod(t, p, 0.0)
    #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
    #if (FXAA_GATHER4_ALPHA == 1)
        // use #extension GL_ARB_gpu_shader5 : enable
        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)
        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
    #endif
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_HLSL_3 == 1)
    #define FxaaInt2 float2
    #define FxaaTex sampler2D
    #define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
    #define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_HLSL_4 == 1)
    #define FxaaInt2 int2
    struct FxaaTex { SamplerState smpl; texture tex; };
    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
#endif
/*--------------------------------------------------------------------------*/
#if (FXAA_HLSL_5 == 1)
    #define FxaaInt2 int2
    struct FxaaTex { SamplerState smpl; texture tex; };
    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
    #define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
    #define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
    #define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
    #define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
#endif


/*============================================================================
                GREEN AS LUMA OPTION SUPPORT FUNCTION
============================================================================*/
#if (FXAA_GREEN_AS_LUMA == 0)
    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
#else
    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
#endif




/*============================================================================

                            FXAA3 QUALITY - PC

============================================================================*/
#if (FXAA_PC == 1)
/*--------------------------------------------------------------------------*/
FxaaFloat4 FxaaPixelShader(
    //
    // Use noperspective interpolation here (turn off perspective interpolation).
    // {xy} = center of pixel
    FxaaFloat2 pos,
    //
    // Used only for FXAA Console, and not used on the 360 version.
    // Use noperspective interpolation here (turn off perspective interpolation).
    // {xy_} = upper left of pixel
    // {_zw} = lower right of pixel
    FxaaFloat4 fxaaConsolePosPos,
    //
    // Input color texture.
    // {rgb_} = color in linear or perceptual color space
    // if (FXAA_GREEN_AS_LUMA == 0)
    //     {__a} = luma in perceptual color space (not linear)
    FxaaTex tex,
    //
    // Only used on the optimized 360 version of FXAA Console.
    // For everything but 360, just use the same input here as for tex.
    // For 360, same texture, just alias with a 2nd sampler.
    // This sampler needs to have an exponent bias of -1.
    FxaaTex fxaaConsole360TexExpBiasNegOne,
    //
    // Only used on the optimized 360 version of FXAA Console.
    // For everything but 360, just use the same input here as for tex.
    // For 360, same texture, just alias with a 3nd sampler.
    // This sampler needs to have an exponent bias of -2.
    FxaaTex fxaaConsole360TexExpBiasNegTwo,
    //
    // Only used on FXAA Quality.
    // This must be from a constant/uniform.
    // {x_} = 1.0/screenWidthInPixels
    // {_y} = 1.0/screenHeightInPixels
    FxaaFloat2 fxaaQualityRcpFrame,
    //
    // Only used on FXAA Console.
    // This must be from a constant/uniform.
    // This effects sub-pixel AA quality and inversely sharpness.
    //   Where N ranges between,
    //     N = 0.50 (default)
    //     N = 0.33 (sharper)
    // {x__} = -N/screenWidthInPixels
    // {_y_} = -N/screenHeightInPixels
    // {_z_} =  N/screenWidthInPixels
    // {__w} =  N/screenHeightInPixels
    FxaaFloat4 fxaaConsoleRcpFrameOpt,
    //
    // Only used on FXAA Console.
    // Not used on 360, but used on PS3 and PC.
    // This must be from a constant/uniform.
    // {x__} = -2.0/screenWidthInPixels
    // {_y_} = -2.0/screenHeightInPixels
    // {_z_} =  2.0/screenWidthInPixels
    // {__w} =  2.0/screenHeightInPixels
    FxaaFloat4 fxaaConsoleRcpFrameOpt2,
    //
    // Only used on FXAA Console.
    // Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
    // This must be from a constant/uniform.
    // {x__} =  8.0/screenWidthInPixels
    // {_y_} =  8.0/screenHeightInPixels
    // {_z_} = -4.0/screenWidthInPixels
    // {__w} = -4.0/screenHeightInPixels
    FxaaFloat4 fxaaConsole360RcpFrameOpt2,
    //
    // Only used on FXAA Quality.
    // This used to be the FXAA_QUALITY_SUBPIX define.
    // It is here now to allow easier tuning.
    // Choose the amount of sub-pixel aliasing removal.
    // This can effect sharpness.
    //   1.00 - upper limit (softer)
    //   0.75 - default amount of filtering
    //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)
    //   0.25 - almost off
    //   0.00 - completely off
    FxaaFloat fxaaQualitySubpix,
    //
    // Only used on FXAA Quality.
    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
    // It is here now to allow easier tuning.
    // The minimum amount of local contrast required to apply algorithm.
    //   0.333 - too little (faster)
    //   0.250 - low quality
    //   0.166 - default
    //   0.125 - high quality
    //   0.063 - overkill (slower)
    FxaaFloat fxaaQualityEdgeThreshold,
    //
    // Only used on FXAA Quality.
    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
    // It is here now to allow easier tuning.
    // Trims the algorithm from processing darks.
    //   0.0833 - upper limit (default, the start of visible unfiltered edges)
    //   0.0625 - high quality (faster)
    //   0.0312 - visible limit (slower)
    // Special notes when using FXAA_GREEN_AS_LUMA,
    //   Likely want to set this to zero.
    //   As colors that are mostly not-green
    //   will appear very dark in the green channel!
    //   Tune by looking at mostly non-green content,
    //   then start at zero and increase until aliasing is a problem.
    FxaaFloat fxaaQualityEdgeThresholdMin,
    //
    // Only used on FXAA Console.
    // This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
    // It is here now to allow easier tuning.
    // This does not effect PS3, as this needs to be compiled in.
    //   Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
    //   Due to the PS3 being ALU bound,
    //   there are only three safe values here: 2 and 4 and 8.
    //   These options use the shaders ability to a free *|/ by 2|4|8.
    // For all other platforms can be a non-power of two.
    //   8.0 is sharper (default!!!)
    //   4.0 is softer
    //   2.0 is really soft (good only for vector graphics inputs)
    FxaaFloat fxaaConsoleEdgeSharpness,
    //
    // Only used on FXAA Console.
    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
    // It is here now to allow easier tuning.
    // This does not effect PS3, as this needs to be compiled in.
    //   Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
    //   Due to the PS3 being ALU bound,
    //   there are only two safe values here: 1/4 and 1/8.
    //   These options use the shaders ability to a free *|/ by 2|4|8.
    // The console setting has a different mapping than the quality setting.
    // Other platforms can use other values.
    //   0.125 leaves less aliasing, but is softer (default!!!)
    //   0.25 leaves more aliasing, and is sharper
    FxaaFloat fxaaConsoleEdgeThreshold,
    //
    // Only used on FXAA Console.
    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
    // It is here now to allow easier tuning.
    // Trims the algorithm from processing darks.
    // The console setting has a different mapping than the quality setting.
    // This only applies when FXAA_EARLY_EXIT is 1.
    // This does not apply to PS3,
    // PS3 was simplified to avoid more shader instructions.
    //   0.06 - faster but more aliasing in darks
    //   0.05 - default
    //   0.04 - slower and less aliasing in darks
    // Special notes when using FXAA_GREEN_AS_LUMA,
    //   Likely want to set this to zero.
    //   As colors that are mostly not-green
    //   will appear very dark in the green channel!
    //   Tune by looking at mostly non-green content,
    //   then start at zero and increase until aliasing is a problem.
    FxaaFloat fxaaConsoleEdgeThresholdMin,
    //
    // Extra constants for 360 FXAA Console only.
    // Use zeros or anything else for other platforms.
    // These must be in physical constant registers and NOT immediates.
    // Immediates will result in compiler un-optimizing.
    // {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
    FxaaFloat4 fxaaConsole360ConstDir
) {
/*--------------------------------------------------------------------------*/
    FxaaFloat2 posM;
    posM.x = pos.x;
    posM.y = pos.y;
    #if (FXAA_GATHER4_ALPHA == 1)
        #if (FXAA_DISCARD == 0)
            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
            #if (FXAA_GREEN_AS_LUMA == 0)
                #define lumaM rgbyM.w
            #else
                #define lumaM rgbyM.y
            #endif
        #endif
        #if (FXAA_GREEN_AS_LUMA == 0)
            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
        #else
            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
        #endif
        #if (FXAA_DISCARD == 1)
            #define lumaM luma4A.w
        #endif
        #define lumaE luma4A.z
        #define lumaS luma4A.x
        #define lumaSE luma4A.y
        #define lumaNW luma4B.w
        #define lumaN luma4B.z
        #define lumaW luma4B.x
    #else
        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
        #if (FXAA_GREEN_AS_LUMA == 0)
            #define lumaM rgbyM.w
        #else
            #define lumaM rgbyM.y
        #endif
        #if (FXAA_GLSL_100 == 1)
        FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
        #else
        FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
        #endif
    #endif
/*--------------------------------------------------------------------------*/
    FxaaFloat maxSM = max(lumaS, lumaM);
    FxaaFloat minSM = min(lumaS, lumaM);
    FxaaFloat maxESM = max(lumaE, maxSM);
    FxaaFloat minESM = min(lumaE, minSM);
    FxaaFloat maxWN = max(lumaN, lumaW);
    FxaaFloat minWN = min(lumaN, lumaW);
    FxaaFloat rangeMax = max(maxWN, maxESM);
    FxaaFloat rangeMin = min(minWN, minESM);
    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
    FxaaFloat range = rangeMax - rangeMin;
    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
    FxaaBool earlyExit = range < rangeMaxClamped;
/*--------------------------------------------------------------------------*/
    if(earlyExit)
        #if (FXAA_DISCARD == 1)
            FxaaDiscard;
        #else
            return rgbyM;
        #endif
/*--------------------------------------------------------------------------*/
    #if (FXAA_GATHER4_ALPHA == 0)
        #if (FXAA_GLSL_100 == 1)
        FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
        #else
        FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
        #endif
    #else
        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
    #endif
/*--------------------------------------------------------------------------*/
    FxaaFloat lumaNS = lumaN + lumaS;
    FxaaFloat lumaWE = lumaW + lumaE;
    FxaaFloat subpixRcpRange = 1.0/range;
    FxaaFloat subpixNSWE = lumaNS + lumaWE;
    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
/*--------------------------------------------------------------------------*/
    FxaaFloat lumaNESE = lumaNE + lumaSE;
    FxaaFloat lumaNWNE = lumaNW + lumaNE;
    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
/*--------------------------------------------------------------------------*/
    FxaaFloat lumaNWSW = lumaNW + lumaSW;
    FxaaFloat lumaSWSE = lumaSW + lumaSE;
    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
/*--------------------------------------------------------------------------*/
    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
    FxaaBool horzSpan = edgeHorz >= edgeVert;
    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
/*--------------------------------------------------------------------------*/
    if(!horzSpan) lumaN = lumaW;
    if(!horzSpan) lumaS = lumaE;
    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
/*--------------------------------------------------------------------------*/
    FxaaFloat gradientN = lumaN - lumaM;
    FxaaFloat gradientS = lumaS - lumaM;
    FxaaFloat lumaNN = lumaN + lumaM;
    FxaaFloat lumaSS = lumaS + lumaM;
    FxaaBool pairN = abs(gradientN) >= abs(gradientS);
    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
    if(pairN) lengthSign = -lengthSign;
    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
/*--------------------------------------------------------------------------*/
    FxaaFloat2 posB;
    posB.x = posM.x;
    posB.y = posM.y;
    FxaaFloat2 offNP;
    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
    if(!horzSpan) posB.x += lengthSign * 0.5;
    if( horzSpan) posB.y += lengthSign * 0.5;
/*--------------------------------------------------------------------------*/
    FxaaFloat2 posN;
    posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
    posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
    FxaaFloat2 posP;
    posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
    posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
    FxaaFloat subpixE = subpixC * subpixC;
    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
/*--------------------------------------------------------------------------*/
    if(!pairN) lumaNN = lumaSS;
    FxaaFloat gradientScaled = gradient * 1.0/4.0;
    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
    FxaaFloat subpixF = subpixD * subpixE;
    FxaaBool lumaMLTZero = lumaMM < 0.0;
/*--------------------------------------------------------------------------*/
    lumaEndN -= lumaNN * 0.5;
    lumaEndP -= lumaNN * 0.5;
    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
    FxaaBool doneNP = (!doneN) || (!doneP);
    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
/*--------------------------------------------------------------------------*/
    if(doneNP) {
        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
        doneN = abs(lumaEndN) >= gradientScaled;
        doneP = abs(lumaEndP) >= gradientScaled;
        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
        doneNP = (!doneN) || (!doneP);
        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
/*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PS > 3)
        if(doneNP) {
            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
            doneN = abs(lumaEndN) >= gradientScaled;
            doneP = abs(lumaEndP) >= gradientScaled;
            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
            doneNP = (!doneN) || (!doneP);
            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
/*--------------------------------------------------------------------------*/
            #if (FXAA_QUALITY_PS > 4)
            if(doneNP) {
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                doneN = abs(lumaEndN) >= gradientScaled;
                doneP = abs(lumaEndP) >= gradientScaled;
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
                doneNP = (!doneN) || (!doneP);
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
/*--------------------------------------------------------------------------*/
                #if (FXAA_QUALITY_PS > 5)
                if(doneNP) {
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                    doneN = abs(lumaEndN) >= gradientScaled;
                    doneP = abs(lumaEndP) >= gradientScaled;
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
                    doneNP = (!doneN) || (!doneP);
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
/*--------------------------------------------------------------------------*/
                    #if (FXAA_QUALITY_PS > 6)
                    if(doneNP) {
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                        doneN = abs(lumaEndN) >= gradientScaled;
                        doneP = abs(lumaEndP) >= gradientScaled;
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
                        doneNP = (!doneN) || (!doneP);
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
/*--------------------------------------------------------------------------*/
                        #if (FXAA_QUALITY_PS > 7)
                        if(doneNP) {
                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                            doneN = abs(lumaEndN) >= gradientScaled;
                            doneP = abs(lumaEndP) >= gradientScaled;
                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
                            doneNP = (!doneN) || (!doneP);
                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
/*--------------------------------------------------------------------------*/
    #if (FXAA_QUALITY_PS > 8)
    if(doneNP) {
        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
        doneN = abs(lumaEndN) >= gradientScaled;
        doneP = abs(lumaEndP) >= gradientScaled;
        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
        doneNP = (!doneN) || (!doneP);
        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
/*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PS > 9)
        if(doneNP) {
            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
            doneN = abs(lumaEndN) >= gradientScaled;
            doneP = abs(lumaEndP) >= gradientScaled;
            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
            doneNP = (!doneN) || (!doneP);
            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
/*--------------------------------------------------------------------------*/
            #if (FXAA_QUALITY_PS > 10)
            if(doneNP) {
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                doneN = abs(lumaEndN) >= gradientScaled;
                doneP = abs(lumaEndP) >= gradientScaled;
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
                doneNP = (!doneN) || (!doneP);
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
/*--------------------------------------------------------------------------*/
                #if (FXAA_QUALITY_PS > 11)
                if(doneNP) {
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                    doneN = abs(lumaEndN) >= gradientScaled;
                    doneP = abs(lumaEndP) >= gradientScaled;
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
                    doneNP = (!doneN) || (!doneP);
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
/*--------------------------------------------------------------------------*/
                    #if (FXAA_QUALITY_PS > 12)
                    if(doneNP) {
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                        doneN = abs(lumaEndN) >= gradientScaled;
                        doneP = abs(lumaEndP) >= gradientScaled;
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
                        doneNP = (!doneN) || (!doneP);
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
/*--------------------------------------------------------------------------*/
                    }
                    #endif
/*--------------------------------------------------------------------------*/
                }
                #endif
/*--------------------------------------------------------------------------*/
            }
            #endif
/*--------------------------------------------------------------------------*/
        }
        #endif
/*--------------------------------------------------------------------------*/
    }
    #endif
/*--------------------------------------------------------------------------*/
                        }
                        #endif
/*--------------------------------------------------------------------------*/
                    }
                    #endif
/*--------------------------------------------------------------------------*/
                }
                #endif
/*--------------------------------------------------------------------------*/
            }
            #endif
/*--------------------------------------------------------------------------*/
        }
        #endif
/*--------------------------------------------------------------------------*/
    }
/*--------------------------------------------------------------------------*/
    FxaaFloat dstN = posM.x - posN.x;
    FxaaFloat dstP = posP.x - posM.x;
    if(!horzSpan) dstN = posM.y - posN.y;
    if(!horzSpan) dstP = posP.y - posM.y;
/*--------------------------------------------------------------------------*/
    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
    FxaaFloat spanLength = (dstP + dstN);
    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
    FxaaFloat spanLengthRcp = 1.0/spanLength;
/*--------------------------------------------------------------------------*/
    FxaaBool directionN = dstN < dstP;
    FxaaFloat dst = min(dstN, dstP);
    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
    FxaaFloat subpixG = subpixF * subpixF;
    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
/*--------------------------------------------------------------------------*/
    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
    #if (FXAA_DISCARD == 1)
        return FxaaTexTop(tex, posM);
    #else
        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
    #endif
}
/*==========================================================================*/
#endif

void main() {
out_color = FxaaPixelShader(
    vCoord,
    vec4(0.0),
    inputBuffer,
    inputBuffer,
    inputBuffer,
    resolution,
    vec4(0.0),
    vec4(0.0),
    vec4(0.0),
    0.75,
    0.166,
    0.0833,
    0.0,
    0.0,
    0.0,
    vec4(0.0)
);

out_color.a = texture(inputBuffer, vCoord).a;
}`};this.renderPass=new Y(e,a),this.fullscreenTriangle=n}setSize(t,e){this.renderPass.setUniform("resolution",1/t,1/e)}draw(t){let{light:e}=t;this.renderPass.setTexture("inputBuffer",e),this.renderPass.useProgram(),this.fullscreenTriangle.draw()}dispose(){this.renderPass.dispose()}}function nt(i,t,e){if(t===void 0)return;const{itemSize:n,array:a}=e;if(i.enableVertexAttribArray(t),i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,a,i.STATIC_DRAW),a instanceof Float32Array)i.vertexAttribPointer(t,n,i.FLOAT,!1,0,0);else{if(!(a instanceof Int32Array))throw"Unsupported buffer type";i.vertexAttribIPointer(t,n,i.INT,0,0)}}function nn(i,t,e,n){nt(i,t.attribLocs.aPosition,e.position),nt(i,t.attribLocs.aNormal,e.normal),nt(i,t.attribLocs.aUv,e.uv),n=="Static"&&e.materialMeshIndex&&nt(i,t.attribLocs.aMaterialMeshIndex,e.materialMeshIndex),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ELEMENT_ARRAY_BUFFER,e.indices.array,i.STATIC_DRAW)}class an{constructor(t,e,n){this.gl=t,this.resourcePool=n,this.vaos=[],this.fullscreenTriangle=e,this.meshNormalMat=new O}createPipeline(t,e){this.renderSetting=t,this.sceneInfo=e;const{materialDefines:n,sceneMode:a,bvhDefines:s}=t,{gl:r,resourcePool:l}=this,o=new Y(r,{defines:{SUPPORT_UV_TRANS:t.supportUVTrans,...s,...n},vertex:`in vec3 aPosition;
in vec3 aNormal;
in vec2 aUv;
// For batch mesh
#ifndef BVH_DYNAMIC
	in ivec2 aMaterialMeshIndex;
	// Each primitive can only have one material index
	flat out ivec2 vMaterialMeshIndex;
#endif

uniform mat4 projView;
#ifdef BVH_DYNAMIC
	uniform mat4 modelMat;
	uniform mat3 normalMat;
#endif

out vec3 vPosition;
out vec3 vNormal;
out vec2 vUv;

void main() {
	#ifdef BVH_DYNAMIC
		vec4 mPosition = modelMat * vec4(aPosition, 1.);
		// World space
		vPosition = mPosition.xyz;
		vNormal = normalize(normalMat * aNormal);
		vUv = aUv;
		gl_Position = projView * mPosition;
	#else
		vPosition = aPosition;
		vNormal = aNormal;
		vUv = aUv;
		vMaterialMeshIndex = aMaterialMeshIndex;
		gl_Position = projView * vec4(aPosition, 1);
	#endif
}
`,fragment:`
#define PI 3.14159265359
#define TWOPI 6.28318530718
#define INVPI 0.31830988618
#define INVPI2 0.10132118364

#define EPS 0.0001
#define ONE_MINUS_EPS 0.999999
#define INF 1000000.0
// Mobile sync
// #define INTERSECT_EPS 1.0e-2
// #define ROUGHNESS_MIN 0.03 // Blender
#define ROUGHNESS_MIN 0.001 // PBRT
// #define ROUGHNESS_MIN 0.01

// Material type
#define DISNEY 0
// https://www.w3.org/WAI/GL/wiki/Relative_luminance
const vec3 luminance = vec3(0.2126, 0.7152, 0.0722);
float Luminance(vec3 color) { return dot(color, luminance); }
#define RAY_MAX_DISTANCE 9999.0

struct Ray {
	vec3 o;
	vec3 d;
};

struct Path {
	Ray ray;
	vec3 li;
	float alpha;
	vec3 beta;
	bool abort;
	float misWeight;

	vec3 absorption;
};

struct Camera {
	mat4 viewToWorldMat;
	mat4 clipToViewMat;
	float aperture;
	float focus;
};

#if defined(NUM_LIGHTS)
struct Lights {
	vec3 position[NUM_LIGHTS];
	vec3 emission[NUM_LIGHTS];
	vec3 p1[NUM_LIGHTS];
	vec3 p2[NUM_LIGHTS];
	vec4 params[NUM_LIGHTS];
};

struct Light {
	vec3 position;
	float radius;
	vec3 emission;
	float area;
	vec3 p1; // param1: u, target
	float type;
	vec3 p2; // param2: v
	float visible;
};
#endif

struct SurfaceInteraction {
	bool hit;
	bool isEmitter;
	float t;
	vec3 position;
	vec3 normal;
	vec3 ffnormal;
	float eta;

	// Material
	vec3 color;
	float workflow;
	
	float roughness;
	float metalness;
	float transmission;
	float ior;
	
	float sheen;
	float sheenTint;
	float clearcoat;
	float clearcoatRoughness;
	
	vec3 emissive;
	float alpha;
	
	float specularTint;
	float atDistance;


	vec3 specularColor;
	float subsurface;

	vec3 extinction;
};

struct BsdfSampleRec {
	vec3 L;
	vec3 f;
	float pdf;
};

struct LightSampleRec{
	vec3 normal;
	vec3 emission;
	vec3 direction;
	float dist;
	float pdf;
};

// given the index from a 1D array, retrieve corresponding position from packed 2D texture
ivec2 unpackTexel(int i, int columnsLog2) {
	ivec2 u;
	u.y = i >> columnsLog2; // equivalent to (i / 2^columnsLog2)
	u.x = i - (u.y << columnsLog2); // equivalent to (i % 2^columnsLog2)
	return u;
}
vec4 fetchData(sampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}
ivec4 fetchData(isampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}

uniform Camera camera;
uniform vec2 pixelSize; // 1 / screenResolution
uniform vec2 jitter;
uniform float frameCount;
uniform sampler2D accumulateTex;

in vec2 vCoord;

#if defined(NUM_LIGHTS)
uniform Lights lights;
#endif

uniform int bounces;
uniform vec3 backgroundColor;
uniform float envMapIntensity;
uniform float backgroundAlpha;
uniform float enviromentVisible;

uniform int useBackgroundColor;
uniform mat3 envRotMatrix;
uniform mat3 invEnvRotMatrix;

vec3 ndcToWorld(vec2 coord) {
	vec4 worldPos = camera.viewToWorldMat * camera.clipToViewMat * vec4(coord, -1.0, 1.0);
	return worldPos.xyz / worldPos.w;
}
vec3 localToWorld(vec3 X, vec3 Y, vec3 Z, vec3 V) {
    return vec3(
        X.x * V.x + Y.x * V.y + Z.x * V.z,
        X.y * V.x + Y.y * V.y + Z.y * V.z,
        X.z * V.x + Y.z * V.y + Z.z * V.z
    );
}
vec3 worldToLocal(vec3 X, vec3 Y, vec3 Z, vec3 V) {
    return vec3(dot(V, X), dot(V, Y), dot(V, Z));
}

// UBO-1
#ifdef NUM_MATERIALS
uniform Materials {
	vec4 colorWorkflow[NUM_MATERIALS];
	vec4 roughMetalTransIOR[NUM_MATERIALS];
	vec4 sheenTintClearcoatRoughness[NUM_MATERIALS];
	vec4 emissiveAlpha[NUM_MATERIALS];
	vec4 specularTintAtDistanceNormalScale[NUM_MATERIALS];
	vec4 subsurfaceAndColor[NUM_MATERIALS];
	vec4 extinctionSubsurfaceMFP[NUM_MATERIALS];
	vec4 specularColorGlossiness[NUM_MATERIALS];

	ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
	ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];

} materials;
#endif

uniform mediump sampler2DArray materialTexArray;
vec3 srgbToLinear(vec3 srgb) { return pow(srgb, vec3(2.2)); }

#if defined(SUPPORT_UV_TRANS) || defined(SUPPORT_TEX_WRAP)
	uniform sampler2D uvTransBuffer;
	#define UV_TRANS_MAPS_LEN 7
#endif

#ifdef SUPPORT_UV_TRANS
	mat3 getMatUVTransform(int materialID, int mapKey) {
		int offset = materialID * UV_TRANS_MAPS_LEN * 3;
		int mapOffset = mapKey * 3;
		vec3 matRow1 = fetchData(uvTransBuffer, offset + mapOffset + 0, UV_TRANS_COLUMNS).xyz;
		vec3 matRow2 = fetchData(uvTransBuffer, offset + mapOffset + 1, UV_TRANS_COLUMNS).xyz;
		vec3 matRow3 = fetchData(uvTransBuffer, offset + mapOffset + 2, UV_TRANS_COLUMNS).xyz;
		mat3 uvTransMat = mat3(matRow1, matRow2, matRow3);
		return uvTransMat;
	}
#endif
#ifdef SUPPORT_TEX_WRAP
	vec3 getMatWrapping(int materialID, int mapKey) {
		int offset = TEX_WRAP_DATA_INDEX + materialID * UV_TRANS_MAPS_LEN;
		int mapOffset = mapKey;
		vec3 wrappingData = fetchData(uvTransBuffer, offset + mapOffset, UV_TRANS_COLUMNS).xyz;
		return wrappingData;
	}
	vec2 applyTextureWrapping(vec2 uv, vec3 warpping) {
		if (uv.x <= 0. || uv.x >= 1.) {
			int warpS = int(warpping.x);
			if (warpS == 1) {
				// ClampToEdgeWrapping
				uv.x = uv.x <= 0. ? 0. : 1.;
			} else if (warpS == 2) {
				// MirroredRepeatWrapping
            	uv.x = 1.0 - abs(fract(uv.x * 0.5) * 2.0 - 1.0);
			} else {
				// RepeatWrapping
				uv.x = fract(uv.x);
			}
		}
		if (uv.y <= 0. || uv.y >= 1.) {
			int warpT = int(warpping.y);
			if (warpT == 1) {
				uv.y = uv.y <= 0. ? 0. : 1.;
			} else if (warpT == 2) {
				uv.y = 1.0 - abs(fract(uv.y * 0.5) * 2.0 - 1.0);
			} else {
				uv.y = fract(uv.y);
			}
		}

		return uv;
	}
#endif

#ifdef SUPPORT_SG_WORKFLOW
	float max3(const vec3 v) { return max(v.x, max(v.y, v.z)); }
	float computeMetallicFromSpecularColor(const vec3 specularColor) { return max3(specularColor); }
	vec3 computeDiffuseColor(const vec3 baseColor, float metallic) { return baseColor * (1.0 - metallic); }

	vec3 getMatSpecularColor(int materialID, vec2 uv) {
		vec3 specularColor = materials.specularColorGlossiness[materialID].rgb;
		int specularMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].y;
		if (specularMapIndex > -1) {

	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 4);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 4);
		uv = applyTextureWrapping(uv, warpping);
	#endif

			vec3 texelSpecular = srgbToLinear(texture(materialTexArray, vec3(uv, specularMapIndex)).rgb);
			specularColor *= texelSpecular;
		}

		return specularColor;
	}

	float getMatGlossiness(int materialID, vec2 uv) {
		float glossiness = materials.specularColorGlossiness[materialID].a;
		int glossinessMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].z;
		if (glossinessMapIndex > -1) {

		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 5);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 5);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			float texelGlossiness = texture(materialTexArray, vec3(uv, glossinessMapIndex)).a;
			glossiness *= texelGlossiness;
		}
		return glossiness;
	}
#endif

vec4 getMatColorAlpha(int materialID, vec2 uv) {
	vec3 color = materials.colorWorkflow[materialID].rgb;
	float alpha =  materials.emissiveAlpha[materialID].a;

	int diffuseMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].x;
	if (diffuseMapIndex > -1) {
		
	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 0);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 0);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		vec4 texData = texture(materialTexArray, vec3(uv, diffuseMapIndex));
		color *= srgbToLinear(texData.rgb);
		alpha *= texData.a;
	}

#ifdef SUPPORT_SG_WORKFLOW
	float workflow = materials.colorWorkflow[materialID].w;
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialID, uv);
		color = computeDiffuseColor(color, computeMetallicFromSpecularColor(specularFactor));
	}
#endif

	return vec4(color, alpha);
}

float getMatRoughness(int materialID, vec2 uv) {
	float workflow = materials.colorWorkflow[materialID].w;
	float roughness = 0.0;

#ifdef SUPPORT_SG_WORKFLOW
	if (workflow > 0.1) {
		roughness = 1.0 - getMatGlossiness(materialID, uv);
	} else 
#endif

	{
		roughness = materials.roughMetalTransIOR[materialID].x;

		int roughnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].z;
		if (roughnessMapIndex > -1) {
		
		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 2);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 2);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			roughness *= texture(materialTexArray, vec3(uv, roughnessMapIndex)).g;
		}
	}
	// Remap
	return roughness * roughness;
}

float getMatMetalness(int materialID, vec2 uv) {
	float workflow = materials.colorWorkflow[materialID].w;
	float metalness = 0.0;

#ifdef SUPPORT_SG_WORKFLOW
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialID, uv);
		metalness = computeMetallicFromSpecularColor(specularFactor);
	} else 
#endif

	{
		metalness = materials.roughMetalTransIOR[materialID].y;

		int metalnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].w;
		if (metalnessMapIndex > -1) {

		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 3);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 3);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			metalness *= texture(materialTexArray, vec3(uv, metalnessMapIndex)).b;
		}
	}

	return metalness;
}

vec3 getMatEmissive(int materialID, vec2 uv) {
	vec3 emissive = materials.emissiveAlpha[materialID].xyz;

	int emissiveMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].x;
	if (emissiveMapIndex > -1) {

	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 6);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 6);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		emissive *= srgbToLinear(texture(materialTexArray, vec3(uv, emissiveMapIndex)).rgb);
	}
	
	return emissive;
}

vec3 getMatNormal(int materialID, vec2 uv, vec3 normal, vec3 dp1, vec3 dp2, vec2 duv1, vec2 duv2) {
	// http://www.thetenthplanet.de/archives/1180
	// Compute co-tangent and co-bitangent vectors
	vec3 dp2perp = cross(dp2, normal);
	vec3 dp1perp = cross(normal, dp1);
	vec3 dpdu = dp2perp * duv1.x + dp1perp * duv2.x;
	vec3 dpdv = dp2perp * duv1.y + dp1perp * duv2.y;
	float invmax = inversesqrt(max(dot(dpdu, dpdu), dot(dpdv, dpdv)));
	dpdu *= invmax;
	dpdv *= invmax;

	// All world space
	int normalMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].y;
	if (normalMapIndex > -1) {
		
	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 1);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 1);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		vec3 n = 2.0 * texture(materialTexArray, vec3(uv, normalMapIndex)).rgb - 1.0;
		n.xy *= materials.specularTintAtDistanceNormalScale[materialID].zw;

		mat3 tbn = mat3(dpdu, dpdv, normal);

		return normalize(tbn * n);
	} else {
		return normal;
	}

	return normal;
}


// specularTintAtDistanceNormalScale
float getMatSpecularTint(int materialID) {
	return materials.specularTintAtDistanceNormalScale[materialID].x;
}
float getMatAtDistance(int materialID) {
	return materials.specularTintAtDistanceNormalScale[materialID].y;
}

// subsurfaceAndColor
float getMatSubface(int materialID) {
	return materials.subsurfaceAndColor[materialID].x;
}
vec3 getMatSubfaceColor(int materialID) {
	return materials.subsurfaceAndColor[materialID].yzw;
}

// extinctionSubsurfaceMFP
vec3 getMatExtinction(int materialID) {
	return materials.extinctionSubsurfaceMFP[materialID].rgb;
}
float getMatSubsurfaceMFP(int materialID) {
	return materials.extinctionSubsurfaceMFP[materialID].a;
}

float getMatCastShadow(int materialID) {
	float workflow = materials.colorWorkflow[materialID].w;
	float castShadow = 0.0;
	
	if (workflow > 0.1) {
		castShadow = materials.roughMetalTransIOR[materialID].x;
	} else {
		castShadow = materials.specularColorGlossiness[materialID].a;
	}

	return castShadow;
}

layout(location = 0) out vec4 out_position;
layout(location = 1) out vec4 out_normal;
layout(location = 2) out vec4 out_color;

in vec3 vPosition;
in vec3 vNormal;
in vec2 vUv;

#ifdef BVH_DYNAMIC
	uniform int meshIndex;
	uniform int materialID;
#else
	flat in ivec2 vMaterialMeshIndex;
#endif

vec3 faceNormals(vec3 pos) {
	vec3 fdx = dFdx(pos);
	vec3 fdy = dFdy(pos);
	return cross(fdx, fdy);
}

void main() {

#ifndef BVH_DYNAMIC
	int materialID = vMaterialMeshIndex.x;
	int meshIndex = vMaterialMeshIndex.y;
#endif

	vec2 uv = vUv;

	vec3 color = getMatColorAlpha(materialID, uv).rgb;
	vec3 normal = normalize(vNormal);
	vec3 faceNormal = normalize(faceNormals(vPosition));
	normal *= sign(dot(normal, faceNormal));

	int normalMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].y;
	if (normalMapIndex >= 0) {
		vec3 dp1 = dFdx(vPosition);
		vec3 dp2 = dFdy(vPosition);
		vec2 duv1 = dFdx(vUv);
		vec2 duv2 = dFdy(vUv);
		normal = getMatNormal(materialID, uv, normal, dp1, dp2, duv1, duv2);
	}

	out_position = vec4(vPosition, float(meshIndex) + EPS);
	out_normal = vec4(normal, 0);
	out_color = vec4(color, 0.);
}`}),c=this.renderSetting.sceneMode=="Static"?[e.mergedMesh]:e.meshes;this.meshes=c,this.renderPass=o,o.setTexture("materialTexArr",l.getRawResourceByName("MaterialTextureArray")),(t.supportUVTrans||t.supportTexWrap)&&o.setTexture("uvTransBuffer",l.getRawResourceByName("TextureUVTransformBuffer")),this.vaos=[];for(let u=0;u<c.length;u++){const d=c[u].geometry,p=r.createVertexArray();r.bindVertexArray(p),nn(r,o,d,a),r.bindVertexArray(null),this.vaos.push(p)}this.projView=new V}setCamera(t){this.currentCamera=t}calcCamera(){const{projView:t,currentCamera:e,renderPass:n}=this;t.copy(e.viewToClipMat),t.multiply(e.worldToViewMat),n.setUniform("projView",t)}draw(){const{gl:t,renderSetting:e,renderPass:n,vaos:a,meshes:s}=this,{materialIndexMap:r}=this.sceneInfo;this.calcCamera(),t.enable(t.DEPTH_TEST),t.disable(t.CULL_FACE);for(let l=0;l<s.length;l++){const o=s[l];if(o.visible==0)continue;const c=o.geometry,u=c.indices.array,d=c.indices.count;if(e.sceneMode=="Dynamic"){const f=o;n.setUniform("modelMat",f.localToWorldMat),this.meshNormalMat.getNormalMatrix(f.localToWorldMat),n.setUniform("normalMat",this.meshNormalMat),n.setUniform("meshIndex",l);const h=r.get(f.material);n.setUniform("materialID",h)}const p=a[l];t.bindVertexArray(p),n.useProgram(),u instanceof Uint16Array?t.drawElements(t.TRIANGLES,d,t.UNSIGNED_SHORT,0):u instanceof Uint32Array&&t.drawElements(t.TRIANGLES,d,t.UNSIGNED_INT,0)}t.enable(t.CULL_FACE),t.disable(t.DEPTH_TEST)}dispose(){this.renderPass.dispose()}}class sn{constructor(t,e){this.gl=t,this.level=3,this.colorFactor=.05,this.normalFactor=.02,this.positionFactor=.35,this.fullscreenTriangle=e}createPipeline(t){const{gl:e,fullscreenTriangle:n}=this,a={gl:e,vertex:n.vertexShader,fragment:`
vec4 textureLinear(sampler2D map, vec2 uv) {
	#ifdef EXT_FLOAT_LINEAR
		return texture(map, uv);
	#else
		vec2 size = vec2(textureSize(map, 0));
		vec2 texelSize = 1.0 / size;

		uv = uv * size - 0.5;
		vec2 f = fract(uv);
		uv = floor(uv) + 0.5;

		vec4 s1 = texture(map, (uv + vec2(0, 0)) * texelSize);
		vec4 s2 = texture(map, (uv + vec2(1, 0)) * texelSize);
		vec4 s3 = texture(map, (uv + vec2(0, 1)) * texelSize);
		vec4 s4 = texture(map, (uv + vec2(1, 1)) * texelSize);

		return mix(mix(s1, s2, f.x), mix(s3, s4, f.x), f.y);
	#endif
}

layout(location = 0) out vec4 out_color;

in vec2 vCoord;

// Pre pass's filtered result
uniform sampler2D lightTex;

// G-Buffer
uniform sampler2D gPosition;
uniform sampler2D gNormal;
uniform sampler2D gColor;

// exp curve: https://www.desmos.com/calculator?lang=zh-CN
// It can be simply understood as a range threshold
// The greater the factor => the greater the distance, the greater the contribution
uniform float colorFactor;
uniform float normalFactor;
uniform float positionFactor;
uniform float stepwidth;
uniform int level;

float safeAcos(float v) {
	return acos(min(max(v, 0.0), 1.0));
}

vec4 DenoiseImage() {
	// Fetch origin data
	vec4 upscaledLight = texture(lightTex, vCoord);
	float sampleFrame = upscaledLight.a;
	float sf2 = sampleFrame*sampleFrame;
	vec3 color = upscaledLight.rgb / upscaledLight.a;
	vec3 normal = texture(gNormal, vCoord).rgb;
	vec4 positionAndMeshIndex = textureLinear(gPosition, vCoord);
	vec3 position = positionAndMeshIndex.rgb;

	// BG
	float meshIndex = positionAndMeshIndex.w;
	bool isBG = meshIndex > 0.0 ? false : true;
	if (isBG) {
		return upscaledLight;
	}

	vec2 size = vec2(textureSize(lightTex, 0));
	int kernelRadius = 9;
	float dx = 1. / size.x;
	float dy = 1. / size.y;
	float kernel[9] = float[9](
		1.0 / 16.0, 1.0 / 8.0, 1.0 / 16.0,
		1.0 / 8.0,  1.0 / 4.0, 1.0 / 8.0,
		1.0 / 16.0, 1.0 / 8.0, 1.0 / 16.0
	);
	vec2 offset[9] = vec2[9](
		vec2(-dx, -dy), vec2(0, -dy), vec2(dx, -dy),
		vec2(-dx, 0),  vec2(0, 0), vec2(dx, 0),
		vec2(-dx, dy),  vec2(0, dy), vec2(dx, dy)
	);

	vec3 colorSum = vec3(0.);
	float weightSum = 0.;

	float var;
	float varSum;
	float varSumWeight;

	for (int i = 0; i < kernelRadius; i++) {
		vec2 uv = vCoord + offset[i] * float(stepwidth);
		// Bound
		if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
			continue;
		}
		// BG
		vec4 positionAndMeshIndex = texture(gPosition, uv);
		float meshIndex = positionAndMeshIndex.w;
		bool isBG = meshIndex > 0.0 ? false : true;
		if (isBG) {
			continue;
		}
		// Edge-stopping weights
		// Color
		vec4 upscaledLight = texture(lightTex, uv);
		vec3 kernelColor = upscaledLight.rgb / upscaledLight.a;
		// Method 1:
		// vec3 t = color - kernelColor;
		// float Wc = min(exp(1.0-dot(t, t) / colorFactor * sf2), 1.0);
		// Method 2:
		float Dc = distance(color, kernelColor);
		float Wc;
		Wc = min(exp(-Dc / (colorFactor + 1e-6)), 1.0);
		// Method 3:
		// vec3 t = color - kernelColor;
		// float dist2 = dot(t,t);
		// float Wc = min(exp(-dist2 / colorFactor), 1.0);

		// Normal
		vec3 kernelNormal = texture(gNormal, uv).rgb;
		// Method 1:
		float Dn = distance(normal, kernelNormal);
		float dist2 = max(Dn / (stepwidth * stepwidth + 1e-6), 0.0);
		float Wn = min(exp(-(dist2) / normalFactor + 1e-6), 1.0);
		// Method 2:
		// float Dn = dot(normal, kernelNormal);
		// Dn = Dn / float(stepwidth * stepwidth + 1e-6);
		// if (Dn < 1e-3) {
		// 	continue;
		// }
		// float Wn = Dn;

		// Position
		vec3 kernelPosition = positionAndMeshIndex.rgb;
		// Method 1:
		// t = abs(position - kernelPosition); // use Depth?
		// float Wp = max(min(exp(1.0-dot(t, t) / positionFactor), 1.0),0.0);
		// Method 2:
		float Dp = distance(position, kernelPosition);
		float Wp = min(exp(-Dp / (positionFactor + 1e-6)), 1.0);
		// Method 3:
		// t = position - kernelPosition;
		// dist2 = dot(t,t);
		// float Wp = min(exp(-dist2 / positionFactor), 1.0);
		
		float weight = Wc * Wn * Wp * kernel[i];
		weightSum += weight;
		colorSum += kernelColor * weight;
	}
	colorSum = colorSum / weightSum;

	// Keep next/toneMapping pass correct
	return vec4(colorSum * sampleFrame, sampleFrame);
}

void main() {
	vec4 light = DenoiseImage();
	out_color = light;
}`},s=new Y(e,a);this.renderPass=s,this.fullscreenTriangle=n}initFrameBuffers(t,e){const{gl:n}=this;this.readBuffer=new j(n,{color:{0:new z(n,{width:t,height:e,storage:"float",magFilter:n.NEAREST,minFilter:n.NEAREST})}}),this.writeBuffer=new j(n,{color:{0:new z(n,{width:t,height:e,storage:"float",magFilter:n.NEAREST,minFilter:n.NEAREST})}})}swapBuffers(){let t=this.writeBuffer;this.writeBuffer=this.readBuffer,this.readBuffer=t}setSize(t,e){this.initFrameBuffers(t,e)}setGBuffers({position:t,normal:e,color:n}){this.renderPass.setTexture("gPosition",t),this.renderPass.setTexture("gNormal",e),this.renderPass.setTexture("gColor",n)}setColorFactor(t){this.colorFactor=t}setNormalFactor(t){this.normalFactor=t}setPositionFactor(t){this.positionFactor=t}draw(t){let{light:e}=t;const{gl:n,renderPass:a,fullscreenTriangle:s,level:r,colorFactor:l,normalFactor:o,positionFactor:c}=this;for(let u=0;u<r;u++)a.setUniform("level",u),a.setUniform("colorFactor",1/(1<<u)*l),a.setUniform("normalFactor",1/(1<<u)*o),a.setUniform("positionFactor",1/(1<<u)*c),a.setUniform("stepwidth",(1<<u+1)-1),u===0?a.setTexture("lightTex",e):a.setTexture("lightTex",this.readBuffer.color[0]),this.writeBuffer.bind(),n.clear(n.COLOR_BUFFER_BIT),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),a.useProgram(),s.draw(),this.writeBuffer.unbind(),this.swapBuffers();return this.readBuffer}dispose(){this.renderPass.dispose()}}class rn{constructor(t,e,n){this.gl=t,this.resourcePool=n,this.defaultLightScale=[1,1],this.fullscreenTriangle=e}createPipeline(t){const{gl:e,fullscreenTriangle:n}=this;this.renderSetting=t;const{toneMapping:a}=t,s={gl:e,vertex:n.vertexShader,fragment:`
layout(location = 0) out vec4 out_color;

in vec2 vCoord;

uniform sampler2D lightTex;
uniform vec2 lightScale;
uniform int toneMappingFun;

// Threejs
#ifndef saturate
	#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

// uniform float toneMappingExposure;
const float toneMappingExposure = 1.0;

vec3 linear(vec3 color) {
	return toneMappingExposure * color;
}
// https://www.cs.utah.edu/~reinhard/cdrom/
vec3 reinhard(vec3 color) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
// http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 cineon( vec3 color ) {
	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
// vec3 RRTAndODTFit( vec3 v ) {
// 	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
// 	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
// 	return a / b;
// }
// https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/
// return clamp((color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14), vec3(0.0), vec3(1.0));
// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.
// vec3 acesFilmic( vec3 color ) {
// 	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
// 	const mat3 ACESInputMat = mat3(
// 		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
// 		vec3( 0.35458, 0.90834, 0.13383 ),
// 		vec3( 0.04823, 0.01566, 0.83777 )
// 	);
// 	// ODT_SAT => XYZ => D60_2_D65 => sRGB
// 	const mat3 ACESOutputMat = mat3(
// 		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
// 		vec3( -0.53108,  1.10813, -0.07276 ),
// 		vec3( -0.07367, -0.00605,  1.07602 )
// 	);
// 	color *= toneMappingExposure / 0.6;
// 	color = ACESInputMat * color;
// 	// Apply RRT and ODT
// 	color = RRTAndODTFit( color );
// 	color = ACESOutputMat * color;
// 	// Clamp to [0, 1]
// 	return saturate( color );
// }
// vec3 LinearTosRGB( in vec3 value ) {
// 	return vec3( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ));
// }

// Old version
vec3 acesFilmic( vec3 color ) {
	return clamp((color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14), vec3(0.0), vec3(1.0));
}
vec3 LinearTosRGB(in vec3 light) {
	return pow(light, vec3(1.0 / 2.2));
}

void main() {
	vec4 upscaledLight = texture(lightTex, lightScale * vCoord);
	
	vec3 light = upscaledLight.rgb;
	
	// ToneMapping
	if (toneMappingFun == 0) {
		light = linear(light);
	}
	if (toneMappingFun == 1) {
		light = acesFilmic(light);
	}
	if (toneMappingFun == 2) {
		light = reinhard(light);
	}
	if (toneMappingFun == 3) {
		light = cineon(light);
	}
	
	light = LinearTosRGB(light); // gamma correction
	
	// premultipliedAlpha
	out_color = vec4(light * upscaledLight.a, upscaledLight.a);
}`},r=new Y(e,s);r.setUniform("toneMappingFun",a),this.renderPass=r}initFrameBuffers(t,e){const{gl:n,resourcePool:a}=this,s=new z(n,{width:t,height:e,storage:"byte",magFilter:n.LINEAR,minFilter:n.LINEAR});this.passBuffer=new j(n,{color:{0:s}}),a.updateResource("ScreenPassOutputTexture",s)}draw(t,e=!1){let{light:n,lightScale:a}=t;a||(a=this.defaultLightScale);const{gl:s,renderPass:r,passBuffer:l,fullscreenTriangle:o}=this;if(r.setTexture("lightTex",n),r.setUniform("lightScale",a),e&&l)return l.bind(),s.clear(s.COLOR_BUFFER_BIT),s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight),r.useProgram(),o.draw(),l.unbind(),l;r.useProgram(),o.draw()}setSize(t,e){this.initFrameBuffers(t,e)}setToneMapping(t){this.renderPass.setUniform("toneMappingFun",t)}dispose(){this.renderPass.dispose()}}class on{constructor(t,e){this.gl=t,this.fullscreenTriangle=e}createPipeline(){const{gl:t,fullscreenTriangle:e}=this,n={vertex:e.vertexShader,fragment:`layout(location = 0) out vec4 out_color;
in vec2 vCoord;
uniform sampler2D inputTex;

void main() {
	vec2 size = vec2(textureSize(inputTex, 0));
	vec4 accumulatedLight = texelFetch(inputTex, ivec2(vCoord * size), 0);
	
	out_color = accumulatedLight;
}`},a=new Y(t,n);this.renderPass=a}draw(t){const{gl:e,renderPass:n,fullscreenTriangle:a}=this;let{inputTex:s,outputTex:r,width:l=e.drawingBufferWidth,height:o=e.drawingBufferHeight}=t;return n.setTexture("inputTex",s),r.bind(),e.viewport(0,0,l,o),n.useProgram(),a.draw(),r.unbind(),r}dispose(){this.renderPass.dispose()}}class ln{constructor(t,e){this.strata=[];const n=t**e;for(let a=0;a<n;a++)this.strata[a]=a;this.index=this.strata.length,this.sample=[],this.strataCount=t,this.dimensions=e}restart(){this.index=0}next(){const{strata:t,strataCount:e,dimensions:n}=this;this.index>=t.length&&(function(s){for(let r=s.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1)),o=s[r];s[r]=s[l],s[l]=o}}(this.strata),this.restart());let a=t[this.index++];for(let s=0;s<n;s++)this.sample[s]=a%e+Math.random(),a=Math.floor(a/e);return this.sample}}class ee{constructor(t,e){this.strataObjs=[];for(const n of e)this.strataObjs.push(new ln(t,n));this.combined=[],this.strataCount=t}next(){const{strataObjs:t,combined:e}=this;let n=0;for(const a of t){const s=a.next();for(const r of s)e[n++]=r}return e}restart(){for(const t of this.strataObjs)t.restart()}}const St=class{constructor(i,t,e){this.gl=i,this.fullscreenTriangle=t,this.resourcePool=e,this.samplingDimensions=[],this.samples=new ee(1,this.samplingDimensions)}createPipeline(i,t=!1){const{gl:e,fullscreenTriangle:n,resourcePool:a}=this;let s;this.renderSetting=i;const r={SUPPORT_SG_WORKFLOW:i.supportSGWorkflow,SUPPORT_UV_TRANS:i.supportUVTrans,SUPPORT_TEX_WRAP:i.supportTexWrap,SUPPORT_ALPHA:i.supportAlpha,SUPPORT_ALPHA_SHADOW:i.supportAlphaShadow,SUPPORT_CAST_SHADOW:i.supportCastShadow,EXT_FLOAT_LINEAR:i.isFloatLinearSupport,NUM_LIGHTS:i.lightsNum,MAX_ALPHA_DEPTH:i.maxAlphaDepth,INTERSECT_EPS:i.minIntersectDistance,...i.bvhDefines,...i.materialDefines},l=JSON.stringify(r),o=a.getPipelineByCacheKey(St.ID,l);if(o){if(s=o,t)return}else s=new Y(e,{defines:r,fragment:`
#define PI 3.14159265359
#define TWOPI 6.28318530718
#define INVPI 0.31830988618
#define INVPI2 0.10132118364

#define EPS 0.0001
#define ONE_MINUS_EPS 0.999999
#define INF 1000000.0
// Mobile sync
// #define INTERSECT_EPS 1.0e-2
// #define ROUGHNESS_MIN 0.03 // Blender
#define ROUGHNESS_MIN 0.001 // PBRT
// #define ROUGHNESS_MIN 0.01

// Material type
#define DISNEY 0
// https://www.w3.org/WAI/GL/wiki/Relative_luminance
const vec3 luminance = vec3(0.2126, 0.7152, 0.0722);
float Luminance(vec3 color) { return dot(color, luminance); }
#define RAY_MAX_DISTANCE 9999.0

struct Ray {
	vec3 o;
	vec3 d;
};

struct Path {
	Ray ray;
	vec3 li;
	float alpha;
	vec3 beta;
	bool abort;
	float misWeight;

	vec3 absorption;
};

struct Camera {
	mat4 viewToWorldMat;
	mat4 clipToViewMat;
	float aperture;
	float focus;
};

#if defined(NUM_LIGHTS)
struct Lights {
	vec3 position[NUM_LIGHTS];
	vec3 emission[NUM_LIGHTS];
	vec3 p1[NUM_LIGHTS];
	vec3 p2[NUM_LIGHTS];
	vec4 params[NUM_LIGHTS];
};

struct Light {
	vec3 position;
	float radius;
	vec3 emission;
	float area;
	vec3 p1; // param1: u, target
	float type;
	vec3 p2; // param2: v
	float visible;
};
#endif

struct SurfaceInteraction {
	bool hit;
	bool isEmitter;
	float t;
	vec3 position;
	vec3 normal;
	vec3 ffnormal;
	float eta;

	// Material
	vec3 color;
	float workflow;
	
	float roughness;
	float metalness;
	float transmission;
	float ior;
	
	float sheen;
	float sheenTint;
	float clearcoat;
	float clearcoatRoughness;
	
	vec3 emissive;
	float alpha;
	
	float specularTint;
	float atDistance;


	vec3 specularColor;
	float subsurface;

	vec3 extinction;
};

struct BsdfSampleRec {
	vec3 L;
	vec3 f;
	float pdf;
};

struct LightSampleRec{
	vec3 normal;
	vec3 emission;
	vec3 direction;
	float dist;
	float pdf;
};

// given the index from a 1D array, retrieve corresponding position from packed 2D texture
ivec2 unpackTexel(int i, int columnsLog2) {
	ivec2 u;
	u.y = i >> columnsLog2; // equivalent to (i / 2^columnsLog2)
	u.x = i - (u.y << columnsLog2); // equivalent to (i % 2^columnsLog2)
	return u;
}
vec4 fetchData(sampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}
ivec4 fetchData(isampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}

uniform Camera camera;
uniform vec2 pixelSize; // 1 / screenResolution
uniform vec2 jitter;
uniform float frameCount;
uniform sampler2D accumulateTex;

in vec2 vCoord;

#if defined(NUM_LIGHTS)
uniform Lights lights;
#endif

uniform int bounces;
uniform vec3 backgroundColor;
uniform float envMapIntensity;
uniform float backgroundAlpha;
uniform float enviromentVisible;

uniform int useBackgroundColor;
uniform mat3 envRotMatrix;
uniform mat3 invEnvRotMatrix;

vec3 ndcToWorld(vec2 coord) {
	vec4 worldPos = camera.viewToWorldMat * camera.clipToViewMat * vec4(coord, -1.0, 1.0);
	return worldPos.xyz / worldPos.w;
}
vec3 localToWorld(vec3 X, vec3 Y, vec3 Z, vec3 V) {
    return vec3(
        X.x * V.x + Y.x * V.y + Z.x * V.z,
        X.y * V.x + Y.y * V.y + Z.y * V.z,
        X.z * V.x + Y.z * V.y + Z.z * V.z
    );
}
vec3 worldToLocal(vec3 X, vec3 Y, vec3 Z, vec3 V) {
    return vec3(dot(V, X), dot(V, Y), dot(V, Z));
}

// Noise texture used to generate a different random number for each pixel.
// We use blue noise in particular, but any type of noise will work.
uniform sampler2D noiseTex;

uniform float stratifiedSamples[71]; // bouncesMax(8) => [2,2,2,2] * 1 + (([2,2,2,2] + 1)* 7)
uniform float strataSize;

float pixelSeed;

float hashRandom(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// https://www.shadertoy.com/view/wltcRS
uvec4 seed;
ivec2 pixel;
void initRNGFromScreen(float frame) {
	pixel = ivec2(vCoord / pixelSize);
    seed = uvec4(pixel, int(frame), pixel.x + pixel.y);
}
void pcg4d(inout uvec4 v) {
    v = v * 1664525u + 1013904223u;
    v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
    v = v ^ (v >> 16u);
    v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
}
float rand() {
    pcg4d(seed); 
	return float(seed.x) / float(0xffffffffu);
}
vec2 rand2() {
    pcg4d(seed); 
	return vec2(seed.xy) / float(0xffffffffu);
}

void initRandom(float frame) {
	vec2 noiseSize = vec2(textureSize(noiseTex, 0));
	// tile the small noise texture across the entire screen
	pixelSeed = texture(noiseTex, vCoord / (pixelSize * noiseSize)).r;
	initRNGFromScreen(frame);
}

// MaterialSamples

// Every time we call randomSample() in the shader, and for every call to render,
// we want that specific bit of the shader to fetch a sample from the same position in stratifiedSamples
// This allows us to use stratified sampling for each random variable in our path tracing
int sampleIndex = 0;

float randomSample() {
	float stratifiedSample = stratifiedSamples[sampleIndex++];

	// stratified归一化
	float random = fract((stratifiedSample + pixelSeed) * strataSize); // blue noise + stratified samples 

	// transform random number between [0, 1] to (0, 1)
	return EPS + (1.0 - 2.0 * EPS) * random;
}

vec2 randomSampleVec2() {
	return vec2(randomSample(), randomSample());
}

struct MaterialSamples {
	vec2 s1;
	vec2 s2;
	vec2 s3;
	vec2 s4;
};

MaterialSamples getRandomMaterialSamples() {
	MaterialSamples samples;

	samples.s1 = randomSampleVec2();
	samples.s2 = randomSampleVec2();
	samples.s3 = randomSampleVec2();
	samples.s4 = randomSampleVec2();

	return samples;
}

vec4 textureLinear(sampler2D map, vec2 uv) {
	#ifdef EXT_FLOAT_LINEAR
		return texture(map, uv);
	#else
		vec2 size = vec2(textureSize(map, 0));
		vec2 texelSize = 1.0 / size;

		uv = uv * size - 0.5;
		vec2 f = fract(uv);
		uv = floor(uv) + 0.5;

		vec4 s1 = texture(map, (uv + vec2(0, 0)) * texelSize);
		vec4 s2 = texture(map, (uv + vec2(1, 0)) * texelSize);
		vec4 s3 = texture(map, (uv + vec2(0, 1)) * texelSize);
		vec4 s4 = texture(map, (uv + vec2(1, 1)) * texelSize);

		return mix(mix(s1, s2, f.x), mix(s3, s4, f.x), f.y);
	#endif
}

// Sample the environment map using a cumulative distribution function as described in
// http://www.pbr-book.org/3ed-2018/Light_Transport_I_Surface_Reflection/Sampling_Light_Sources.html#InfiniteAreaLights

uniform sampler2D envMap;
uniform float totalSumValue;
uniform sampler2D envMarginalWeights;
uniform sampler2D envConditionalWeights;

vec2 equirectDirToUV(vec3 pointOnSphere) {
	float phi = atan(pointOnSphere.z, pointOnSphere.x) / TWOPI;
	float theta = acos(pointOnSphere.y);
	return vec2(phi + 0.5, theta * INVPI);
}

vec3 equirectUVToDir(vec2 uv) {
	uv.x -= 0.5;
	float theta = uv.x * 2.0 * PI;
	float phi = uv.y * PI;
	float sinPhi = sin(phi);
	return vec3(sinPhi * cos(theta), cos(phi), sinPhi * sin(theta));
}

vec3 sampleEnvmapFromDirection(vec3 d) {
	vec2 uv = equirectDirToUV(d);
	return textureLinear(envMap, uv).rgb;
}

float equirectDirectionPdf(vec3 dir) {
	vec2 uv = equirectDirToUV(dir);
	float sinTheta = sin(uv.y * PI);
	if (sinTheta == 0.0) {
		return 0.0;
	}
	return INVPI2 / (2.0 * sinTheta);
}

float envMapPdf(vec3 dir) {
	vec2 uv = equirectDirToUV(dir);
	vec3 color = textureLinear(envMap, uv).rgb;
	float lum = Luminance(color);
	vec2 size = vec2(textureSize(envMap, 0));

	return (size.x * size.y) * (lum / totalSumValue) * equirectDirectionPdf(dir);
}

vec3 sampleEnvmap(vec2 random, out vec2 uv, out float pdf) {
	vec2 size = vec2(textureSize(envMap, 0));
	float sizeMarginalWeights = size.y;
	float v = texelFetch(envMarginalWeights, ivec2(random.x * sizeMarginalWeights, 0), 0).x;
	float u = texelFetch(envConditionalWeights, ivec2(random.y * size.x, v * size.y), 0).x;
	uv = vec2(u, v);

	vec3 dir = equirectUVToDir(uv);

	vec3 color = textureLinear(envMap, uv).rgb;
	float lum = Luminance(color);

	pdf = (size.x * size.y) * (lum / totalSumValue) * equirectDirectionPdf(dir);

	return dir;
}

// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
void OrthonormalBasis(in vec3 N, inout vec3 T, inout vec3 B) {
    if (N.z < -0.999999) {
        T = vec3(0., -1., 0.);
        B = vec3(-1., 0., 0.);
    } else {
        float a = 1.0 / (1. + N.z);
        float b = -N.x * N.y * a;
        T = vec3(1.0 - N.x * N.x * a, b, -N.x);
        B = vec3(b, 1.- N.y * N.y * a, -N.y);
    }
}

// Sampling the GGX Distribution of Visible Normals
// https://jcgt.org/published/0007/04/01/paper.pdf
vec3 SampleGGXVNDF(vec3 V, float rgh, float r1, float r2) {
    vec3 Vh = normalize(vec3(rgh * V.x, rgh * V.y, V.z));

    float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
    vec3 T1 = lensq > 0. ? vec3(-Vh.y, Vh.x, 0) * inversesqrt(lensq) : vec3(1., 0., 0.);
    vec3 T2 = cross(Vh, T1);

    float r = sqrt(r1);
    float phi = 2.0 * PI * r2;
    float t1 = r * cos(phi);
    float t2 = r * sin(phi);
    float s = 0.5 * (1.0 + Vh.z);
    t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

    vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

    return normalize(vec3(rgh * Nh.x, rgh * Nh.y, max(0.0, Nh.z)));
}

// http://www.pbr-book.org/3ed-2018/Monte_Carlo_Integration/2D_Sampling_with_Multidimensional_Transformations.html#SamplingaUnitDisk
vec2 sampleCircle(vec2 p) {
	p = 2.0 * p - 1.0;

	bool greater = abs(p.x) > abs(p.y);
	float r = greater ? p.x : p.y;
	float theta = greater ? 0.25 * PI * p.y / p.x : PI * (0.5 - 0.25 * p.x / p.y);

	return r * vec2(cos(theta), sin(theta));
}

// http://www.pbr-book.org/3ed-2018/Monte_Carlo_Integration/2D_Sampling_with_Multidimensional_Transformations.html#Cosine-WeightedHemisphereSampling
vec3 cosineSampleHemisphere(vec2 p) {
	vec2 h = sampleCircle(p);
	float z = sqrt(max(0.0, 1.0 - h.x * h.x - h.y * h.y));
	return vec3(h, z);
}
vec3 CosineSampleHemisphere(float r1, float r2) {
    vec3 dir;
    float r = sqrt(r1);
    float phi = TWOPI * r2;
    dir.x = r * cos(phi);
    dir.y = r * sin(phi);
    dir.z = sqrt(max(0.0, 1.0 - dir.x * dir.x - dir.y * dir.y));
    return dir;
}

vec3 UniformSampleSphere(float r1, float r2) {
    float z = 1.0 - 2.0 * r1;
    float r = sqrt(max(0.0, 1.0 - z * z));
    float phi = TWOPI * r2;

    return vec3(r * cos(phi), r * sin(phi), z);
}

float powerHeuristic(float f, float g) {
	return (f * f) / (f * f + g * g);
}

vec3 EmitterSample(in Ray r, int depth, in LightSampleRec lightSampleRec, in BsdfSampleRec bsdfSampleRec) {
    vec3 Le;

    if (depth == 0) {
        Le = lightSampleRec.emission;
    } else {
        // MIS bsdf
        Le = powerHeuristic(bsdfSampleRec.pdf, lightSampleRec.pdf) * lightSampleRec.emission;
    }

    return Le;
}

#if defined(NUM_LIGHTS)

void sampleAreaLight(in Light light, in vec3 surfacePos, inout LightSampleRec lightSampleRec, vec2 random) {
    float r1 = random.x - 0.5;
    float r2 = random.y - 0.5;

    vec3 lightSurfacePos = light.position + light.p1 * r1 + light.p2 * r2;
    lightSampleRec.direction = lightSurfacePos - surfacePos;
    lightSampleRec.dist = length(lightSampleRec.direction);
    float distSq = lightSampleRec.dist * lightSampleRec.dist;
    lightSampleRec.direction /= lightSampleRec.dist;
    lightSampleRec.normal = normalize(cross(light.p1, light.p2));
    lightSampleRec.emission = light.emission * float(NUM_LIGHTS);
    lightSampleRec.pdf = distSq / (light.area * abs(dot(lightSampleRec.normal, lightSampleRec.direction)));
}

void sampleDirectionLight(in Light light, in vec3 surfacePos, inout LightSampleRec lightSampleRec) {
    lightSampleRec.direction = normalize(light.position - light.p1);
    lightSampleRec.normal = normalize(surfacePos - light.position);
    // Keep lighting backface
    if (dot(lightSampleRec.direction, lightSampleRec.normal) > 0.0) {
        lightSampleRec.normal = -lightSampleRec.normal;
    }
    lightSampleRec.emission = light.emission * float(NUM_LIGHTS);
    lightSampleRec.dist = INF;
    lightSampleRec.pdf = 1.0;
}

void samplePointLight(in Light light, in vec3 surfacePos, inout LightSampleRec lightSampleRec) {
    lightSampleRec.direction = light.position - surfacePos;
    lightSampleRec.dist = length(lightSampleRec.direction);
    float distSq = lightSampleRec.dist * lightSampleRec.dist;

    lightSampleRec.direction = normalize(lightSampleRec.direction);
    lightSampleRec.normal = normalize(surfacePos - light.position);
    lightSampleRec.emission = light.emission * float(NUM_LIGHTS) / distSq;
    lightSampleRec.pdf = 1.0;
}

float getSpotAttenuation(const in float coneCosine, const in float penumbraCosine, const in float angleCosine) {
    return smoothstep( coneCosine, penumbraCosine, angleCosine );
}

void sampleSpotLight(in Light light, in vec3 surfacePos, inout LightSampleRec lightSampleRec) {
    lightSampleRec.direction = light.position - surfacePos;
    lightSampleRec.dist = length(lightSampleRec.direction);

    lightSampleRec.direction = normalize(lightSampleRec.direction);
    lightSampleRec.normal = normalize(light.p1);
    float cosTheta = dot(normalize(surfacePos - light.position), lightSampleRec.normal);
    // distanceAttenuation
    float distSq = pow(lightSampleRec.dist, light.p2.z);
    // spotAttenuation
    float spotAttenuation = getSpotAttenuation(light.p2.x, light.p2.y, cosTheta);
    
    lightSampleRec.emission = light.emission * spotAttenuation *  float(NUM_LIGHTS) / distSq;
    lightSampleRec.pdf = 1.0;
}

// Represents a direct illumination estimate for all light sources in the entire scene
void sampleOneLight(in Light light, in vec3 surfacePos, inout LightSampleRec lightSampleRec, vec2 random) {
	int type = int(light.type);
	if (type == 0) {
        sampleAreaLight(light, surfacePos, lightSampleRec, random);
    } else if (type == 1) {
        sampleDirectionLight(light, surfacePos, lightSampleRec);
    } else if (type == 2) {
        samplePointLight(light, surfacePos, lightSampleRec);
    } else if (type == 3) {
        sampleSpotLight(light, surfacePos, lightSampleRec);
    }
}
#endif

// UBO-1
#ifdef NUM_MATERIALS
uniform Materials {
	vec4 colorWorkflow[NUM_MATERIALS];
	vec4 roughMetalTransIOR[NUM_MATERIALS];
	vec4 sheenTintClearcoatRoughness[NUM_MATERIALS];
	vec4 emissiveAlpha[NUM_MATERIALS];
	vec4 specularTintAtDistanceNormalScale[NUM_MATERIALS];
	vec4 subsurfaceAndColor[NUM_MATERIALS];
	vec4 extinctionSubsurfaceMFP[NUM_MATERIALS];
	vec4 specularColorGlossiness[NUM_MATERIALS];

	ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
	ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];

} materials;
#endif

uniform mediump sampler2DArray materialTexArray;
vec3 srgbToLinear(vec3 srgb) { return pow(srgb, vec3(2.2)); }

#if defined(SUPPORT_UV_TRANS) || defined(SUPPORT_TEX_WRAP)
	uniform sampler2D uvTransBuffer;
	#define UV_TRANS_MAPS_LEN 7
#endif

#ifdef SUPPORT_UV_TRANS
	mat3 getMatUVTransform(int materialID, int mapKey) {
		int offset = materialID * UV_TRANS_MAPS_LEN * 3;
		int mapOffset = mapKey * 3;
		vec3 matRow1 = fetchData(uvTransBuffer, offset + mapOffset + 0, UV_TRANS_COLUMNS).xyz;
		vec3 matRow2 = fetchData(uvTransBuffer, offset + mapOffset + 1, UV_TRANS_COLUMNS).xyz;
		vec3 matRow3 = fetchData(uvTransBuffer, offset + mapOffset + 2, UV_TRANS_COLUMNS).xyz;
		mat3 uvTransMat = mat3(matRow1, matRow2, matRow3);
		return uvTransMat;
	}
#endif
#ifdef SUPPORT_TEX_WRAP
	vec3 getMatWrapping(int materialID, int mapKey) {
		int offset = TEX_WRAP_DATA_INDEX + materialID * UV_TRANS_MAPS_LEN;
		int mapOffset = mapKey;
		vec3 wrappingData = fetchData(uvTransBuffer, offset + mapOffset, UV_TRANS_COLUMNS).xyz;
		return wrappingData;
	}
	vec2 applyTextureWrapping(vec2 uv, vec3 warpping) {
		if (uv.x <= 0. || uv.x >= 1.) {
			int warpS = int(warpping.x);
			if (warpS == 1) {
				// ClampToEdgeWrapping
				uv.x = uv.x <= 0. ? 0. : 1.;
			} else if (warpS == 2) {
				// MirroredRepeatWrapping
            	uv.x = 1.0 - abs(fract(uv.x * 0.5) * 2.0 - 1.0);
			} else {
				// RepeatWrapping
				uv.x = fract(uv.x);
			}
		}
		if (uv.y <= 0. || uv.y >= 1.) {
			int warpT = int(warpping.y);
			if (warpT == 1) {
				uv.y = uv.y <= 0. ? 0. : 1.;
			} else if (warpT == 2) {
				uv.y = 1.0 - abs(fract(uv.y * 0.5) * 2.0 - 1.0);
			} else {
				uv.y = fract(uv.y);
			}
		}

		return uv;
	}
#endif

#ifdef SUPPORT_SG_WORKFLOW
	float max3(const vec3 v) { return max(v.x, max(v.y, v.z)); }
	float computeMetallicFromSpecularColor(const vec3 specularColor) { return max3(specularColor); }
	vec3 computeDiffuseColor(const vec3 baseColor, float metallic) { return baseColor * (1.0 - metallic); }

	vec3 getMatSpecularColor(int materialID, vec2 uv) {
		vec3 specularColor = materials.specularColorGlossiness[materialID].rgb;
		int specularMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].y;
		if (specularMapIndex > -1) {

	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 4);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 4);
		uv = applyTextureWrapping(uv, warpping);
	#endif

			vec3 texelSpecular = srgbToLinear(texture(materialTexArray, vec3(uv, specularMapIndex)).rgb);
			specularColor *= texelSpecular;
		}

		return specularColor;
	}

	float getMatGlossiness(int materialID, vec2 uv) {
		float glossiness = materials.specularColorGlossiness[materialID].a;
		int glossinessMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].z;
		if (glossinessMapIndex > -1) {

		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 5);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 5);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			float texelGlossiness = texture(materialTexArray, vec3(uv, glossinessMapIndex)).a;
			glossiness *= texelGlossiness;
		}
		return glossiness;
	}
#endif

vec4 getMatColorAlpha(int materialID, vec2 uv) {
	vec3 color = materials.colorWorkflow[materialID].rgb;
	float alpha =  materials.emissiveAlpha[materialID].a;

	int diffuseMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].x;
	if (diffuseMapIndex > -1) {
		
	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 0);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 0);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		vec4 texData = texture(materialTexArray, vec3(uv, diffuseMapIndex));
		color *= srgbToLinear(texData.rgb);
		alpha *= texData.a;
	}

#ifdef SUPPORT_SG_WORKFLOW
	float workflow = materials.colorWorkflow[materialID].w;
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialID, uv);
		color = computeDiffuseColor(color, computeMetallicFromSpecularColor(specularFactor));
	}
#endif

	return vec4(color, alpha);
}

float getMatRoughness(int materialID, vec2 uv) {
	float workflow = materials.colorWorkflow[materialID].w;
	float roughness = 0.0;

#ifdef SUPPORT_SG_WORKFLOW
	if (workflow > 0.1) {
		roughness = 1.0 - getMatGlossiness(materialID, uv);
	} else 
#endif

	{
		roughness = materials.roughMetalTransIOR[materialID].x;

		int roughnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].z;
		if (roughnessMapIndex > -1) {
		
		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 2);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 2);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			roughness *= texture(materialTexArray, vec3(uv, roughnessMapIndex)).g;
		}
	}
	// Remap
	return roughness * roughness;
}

float getMatMetalness(int materialID, vec2 uv) {
	float workflow = materials.colorWorkflow[materialID].w;
	float metalness = 0.0;

#ifdef SUPPORT_SG_WORKFLOW
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialID, uv);
		metalness = computeMetallicFromSpecularColor(specularFactor);
	} else 
#endif

	{
		metalness = materials.roughMetalTransIOR[materialID].y;

		int metalnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].w;
		if (metalnessMapIndex > -1) {

		#ifdef SUPPORT_UV_TRANS
			mat3 uvTransMat = getMatUVTransform(materialID, 3);
			uv = (uvTransMat * vec3(uv, 1)).xy;
		#endif
		#ifdef SUPPORT_TEX_WRAP
			vec3 warpping = getMatWrapping(materialID, 3);
			uv = applyTextureWrapping(uv, warpping);
		#endif

			metalness *= texture(materialTexArray, vec3(uv, metalnessMapIndex)).b;
		}
	}

	return metalness;
}

vec3 getMatEmissive(int materialID, vec2 uv) {
	vec3 emissive = materials.emissiveAlpha[materialID].xyz;

	int emissiveMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialID].x;
	if (emissiveMapIndex > -1) {

	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 6);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 6);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		emissive *= srgbToLinear(texture(materialTexArray, vec3(uv, emissiveMapIndex)).rgb);
	}
	
	return emissive;
}

vec3 getMatNormal(int materialID, vec2 uv, vec3 normal, vec3 dp1, vec3 dp2, vec2 duv1, vec2 duv2) {
	// http://www.thetenthplanet.de/archives/1180
	// Compute co-tangent and co-bitangent vectors
	vec3 dp2perp = cross(dp2, normal);
	vec3 dp1perp = cross(normal, dp1);
	vec3 dpdu = dp2perp * duv1.x + dp1perp * duv2.x;
	vec3 dpdv = dp2perp * duv1.y + dp1perp * duv2.y;
	float invmax = inversesqrt(max(dot(dpdu, dpdu), dot(dpdv, dpdv)));
	dpdu *= invmax;
	dpdv *= invmax;

	// All world space
	int normalMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialID].y;
	if (normalMapIndex > -1) {
		
	#ifdef SUPPORT_UV_TRANS
		mat3 uvTransMat = getMatUVTransform(materialID, 1);
		uv = (uvTransMat * vec3(uv, 1)).xy;
	#endif
	#ifdef SUPPORT_TEX_WRAP
		vec3 warpping = getMatWrapping(materialID, 1);
		uv = applyTextureWrapping(uv, warpping);
	#endif

		vec3 n = 2.0 * texture(materialTexArray, vec3(uv, normalMapIndex)).rgb - 1.0;
		n.xy *= materials.specularTintAtDistanceNormalScale[materialID].zw;

		mat3 tbn = mat3(dpdu, dpdv, normal);

		return normalize(tbn * n);
	} else {
		return normal;
	}

	return normal;
}


// specularTintAtDistanceNormalScale
float getMatSpecularTint(int materialID) {
	return materials.specularTintAtDistanceNormalScale[materialID].x;
}
float getMatAtDistance(int materialID) {
	return materials.specularTintAtDistanceNormalScale[materialID].y;
}

// subsurfaceAndColor
float getMatSubface(int materialID) {
	return materials.subsurfaceAndColor[materialID].x;
}
vec3 getMatSubfaceColor(int materialID) {
	return materials.subsurfaceAndColor[materialID].yzw;
}

// extinctionSubsurfaceMFP
vec3 getMatExtinction(int materialID) {
	return materials.extinctionSubsurfaceMFP[materialID].rgb;
}
float getMatSubsurfaceMFP(int materialID) {
	return materials.extinctionSubsurfaceMFP[materialID].a;
}

float getMatCastShadow(int materialID) {
	float workflow = materials.colorWorkflow[materialID].w;
	float castShadow = 0.0;
	
	if (workflow > 0.1) {
		castShadow = materials.roughMetalTransIOR[materialID].x;
	} else {
		castShadow = materials.specularColorGlossiness[materialID].a;
	}

	return castShadow;
}

uniform sampler2D positionBuffer;
uniform sampler2D normalBuffer;

#if defined(BVH_DYNAMIC)
	uniform sampler2D blasBuffer;
	uniform sampler2D tlasBuffer;
	uniform sampler2D tlasTransformBuffer;
#else
	uniform sampler2D bvhBuffer;
#endif


struct Triangle {
	vec3 p0;
	vec3 p1;
	vec3 p2;
};

struct TriangleIntersect {
	float t;
	vec3 barycentric;
};

float rectIntersect(in vec3 pos, in vec3 u, in vec3 v, in vec4 plane, in Ray r) {
    vec3 n = vec3(plane);
    float dt = dot(r.d, n);
    float t = (plane.w - dot(n, r.o)) / dt;
	// Plane
    if (t > EPS) {
        vec3 p = r.o + r.d * t;
        vec3 vi = p - pos;
        float a1 = dot(u, vi);
        if (abs( a1 ) <= 0.5) {
            float a2 = dot(v, vi);
            if (abs( a2 ) <= 0.5)
                return t;
        }
    }

    return INF;
}

// Möller–Trumbore closest intersection
// Method2: http://www.pbr-book.org/3ed-2018/Shapes/Triangle_Meshes.html#TriangleIntersection
TriangleIntersect intersectTriangle(Ray r, Triangle tri, float tMax) {
	vec3 v0 = tri.p0;
	vec3 v1 = tri.p1;
	vec3 v2 = tri.p2;

	TriangleIntersect ti;

	vec3 e0 = v1 - v0;
	vec3 e1 = v2 - v0;
	vec3 pv = cross(r.d, e1);
	float det = dot(e0, pv);

	vec3 tv = r.o - v0;
	vec3 qv = cross(tv, e0);

	vec4 uvt;
	uvt.x = dot(tv, pv);
	uvt.y = dot(r.d, qv);
	uvt.z = dot(e1, qv);
	uvt.xyz = uvt.xyz / det;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// Check if closer intersection already exists
	if(uvt.z >= tMax) {
		return ti;
	}

	// Check if intersection is inside triangle
	if (all(greaterThanEqual(uvt, vec4(0.0))) && uvt.z < INF) {
		ti.t = uvt.z;
		ti.barycentric = uvt.wxy;
	}
	
	return ti;
}

// Branchless ray/box intersection
// https://tavianator.com/fast-branchless-raybounding-box-intersections/
float intersectBox(Ray r, vec3 aabbMin, vec3 aabbMax, vec3 invDir, float tMax) {
	vec3 tBot = (aabbMin - r.o) * invDir;
	vec3 tTop = (aabbMax - r.o) * invDir;
	vec3 tNear = min(tBot, tTop);
	vec3 tFar = max(tBot, tTop);
	float t0 = max(tNear.x, max(tNear.y, tNear.z));
	float t1 = min(tFar.x, min(tFar.y, tFar.z));

	return (t0 > t1 || t0 > tMax) ? -1.0 : (t0 > 0.0 ? t0 : t1);
}

void surfaceInteractionFromBVH(inout SurfaceInteraction si, Triangle tri, vec3 barycentric, ivec3 index, vec3 u, int materialID) {
	si.hit = true;
	si.position = barycentric.x * tri.p0 + barycentric.y * tri.p1 + barycentric.z * tri.p2;
	ivec2 i0 = unpackTexel(index.x, VERTEX_COLUMNS);
	ivec2 i1 = unpackTexel(index.y, VERTEX_COLUMNS);
	ivec2 i2 = unpackTexel(index.z, VERTEX_COLUMNS);

	vec4 nv0 = texelFetch(normalBuffer, i0, 0);
	vec4 nv1 = texelFetch(normalBuffer, i1, 0);
	vec4 nv2 = texelFetch(normalBuffer, i2, 0);
	vec3 n0 = nv0.xyz;
	vec3 n1 = nv1.xyz;
	vec3 n2 = nv2.xyz;
	vec3 normal = normalize(barycentric.x * n0 + barycentric.y * n1 + barycentric.z * n2);

	vec2 uv0 = vec2(u.x, nv0.w);
	vec2 uv1 = vec2(u.y, nv1.w);
	vec2 uv2 = vec2(u.z, nv2.w);

	// vec2 uv = fract(barycentric.x * uv0 + barycentric.y * uv1 + barycentric.z * uv2);
	vec2 uv = barycentric.x * uv0 + barycentric.y * uv1 + barycentric.z * uv2;

	vec3 dp1 = tri.p0 - tri.p2;
	vec3 dp2 = tri.p1 - tri.p2;
	vec2 duv1 = uv0 - uv2;
	vec2 duv2 = uv1 - uv2;
	si.normal = getMatNormal(materialID, uv, normal, dp1, dp2, duv1, duv2);

	// Material
	si.workflow = materials.colorWorkflow[materialID].w;
	vec4 colorAlpha = getMatColorAlpha(materialID, uv);
	si.color = colorAlpha.rgb;
	si.alpha = colorAlpha.a;
	si.emissive = getMatEmissive(materialID, uv);

	si.roughness = clamp(getMatRoughness(materialID, uv), ROUGHNESS_MIN, 1.0);
	si.metalness = getMatMetalness(materialID, uv);
	si.transmission = materials.roughMetalTransIOR[materialID].z;
	si.ior = materials.roughMetalTransIOR[materialID].w;

	si.sheen = materials.sheenTintClearcoatRoughness[materialID].x;
	si.sheenTint = materials.sheenTintClearcoatRoughness[materialID].y;
	si.clearcoat = materials.sheenTintClearcoatRoughness[materialID].z;
	si.clearcoatRoughness = materials.sheenTintClearcoatRoughness[materialID].w;

    si.specularTint = materials.specularTintAtDistanceNormalScale[materialID].x;
	si.atDistance = materials.specularTintAtDistanceNormalScale[materialID].y;

	si.subsurface = materials.subsurfaceAndColor[materialID].x;
	si.extinction =  materials.extinctionSubsurfaceMFP[materialID].rgb;

#ifdef SUPPORT_SG_WORKFLOW
	si.specularColor = getMatSpecularColor(materialID, uv);
#endif
}

float surfaceMaterialAlphaFromBVH(Triangle tri, vec3 barycentric, ivec3 index, vec3 u, int materialID) {
	ivec2 i0 = unpackTexel(index.x, VERTEX_COLUMNS);
	ivec2 i1 = unpackTexel(index.y, VERTEX_COLUMNS);
	ivec2 i2 = unpackTexel(index.z, VERTEX_COLUMNS);

	vec4 nv0 = texelFetch(normalBuffer, i0, 0);
	vec4 nv1 = texelFetch(normalBuffer, i1, 0);
	vec4 nv2 = texelFetch(normalBuffer, i2, 0);
	
	vec2 uv0 = vec2(u.x, nv0.w);
	vec2 uv1 = vec2(u.y, nv1.w);
	vec2 uv2 = vec2(u.z, nv2.w);

	// vec2 uv = fract(barycentric.x * uv0 + barycentric.y * uv1 + barycentric.z * uv2);
	vec2 uv = barycentric.x * uv0 + barycentric.y * uv1 + barycentric.z * uv2;
	float alpha = getMatColorAlpha(materialID, uv).a;

	return alpha;
}
 

#ifndef BVH_DYNAMIC
// Static
bool intersectSceneShadow(inout Ray ray, float maxDist) {
	vec3 invDir = 1. / ray.d;
	float tMax = maxDist;

	int nodesToVisit[STACK_SIZE];
	nodesToVisit[0] = 0;
	int stack = 0;

	while(stack >= 0 && stack < STACK_SIZE) {
		int i = nodesToVisit[stack--];

		vec4 r1 = fetchData(bvhBuffer, i, BVH_COLUMNS);
		vec4 r2 = fetchData(bvhBuffer, i + 1, BVH_COLUMNS);

		// negative => Primitives
		// positive => Node
		int splitAxisOrNumPrimitives = int(r1.w);

		if (splitAxisOrNumPrimitives >= 0) {
			// Intersection is a bounding box. Test for box intersection and keep traversing BVH
			int splitAxis = splitAxisOrNumPrimitives;

			if (intersectBox(ray, r1.xyz, r2.xyz, invDir, tMax) > 0.0) {
				// traverse near node to ray first, and far node to ray last
				if (ray.d[splitAxis] > 0.0) {
					nodesToVisit[++stack] = int(r2.w);
					nodesToVisit[++stack] = i + 2;
				} else {
					nodesToVisit[++stack] = i + 2;
					nodesToVisit[++stack] = int(r2.w);
				}
			}
		} else {
			
			int materialID = int(r2.w);
		#ifdef SUPPORT_ALPHA
			// Sync shadow casting
			float castShadow = getMatCastShadow(materialID);
			if (castShadow == 0.) {
				return false;
			}
		#endif
			
			ivec3 index = ivec3(r1.xyz);
			
			vec4 pu0 = fetchData(positionBuffer, index.x, VERTEX_COLUMNS);
			vec4 pu1 = fetchData(positionBuffer, index.y, VERTEX_COLUMNS);
			vec4 pu2 = fetchData(positionBuffer, index.z, VERTEX_COLUMNS);
			Triangle tri = Triangle(pu0.xyz, pu1.xyz, pu2.xyz);
			
			TriangleIntersect hit = intersectTriangle(ray, tri, tMax);

			if (hit.t > 0.0) {

			#ifdef SUPPORT_ALPHA_SHADOW
				vec3 u = vec3(pu0.w, pu1.w, pu2.w);
				float alpha = surfaceMaterialAlphaFromBVH(tri, hit.barycentric, index, u, materialID);
				if (rand() > alpha) {
					return false;
				}
			#endif

				return true;
			}
		}
	}

	return false;
}

void intersectScene(Ray ray, inout SurfaceInteraction si, inout LightSampleRec lightSampleRec, int depth, float maxDist) {
	si.hit = false;
	float tMax = maxDist;
	vec3 invDir = 1. / ray.d;
	float curDist;
	// Intersect Emitters
	#if defined(NUM_LIGHTS)
		for (int i = 0; i < NUM_LIGHTS; i++) {
			// Light Data
			vec4 params = lights.params[i];
			float radius = params.x;
			float area = params.y;
			float type = params.z;
			float visible = params.w;
			if (depth == 0 && visible < 0.1) continue;

			vec3 position = lights.position[i];
			vec3 emission = lights.emission[i];
			vec3 p1 = lights.p1[i];
			vec3 p2 = lights.p2[i];
			// Area
			if (type == 0.) {
				vec3 normal = normalize(cross(p1, p2));
				// Hide backface
				if (dot(normal, ray.d) > 0.)
					continue;
				vec4 plane = vec4(normal, dot(normal, position));
				p1 *= 1.0 / dot(p1, p1);
				p2 *= 1.0 / dot(p2, p2);
				curDist = rectIntersect(position, p1, p2, plane, ray);

				if (curDist < 0.)
					curDist = INF;
				if (curDist < tMax) {
					tMax = curDist;
					float cosTheta = dot(-ray.d, normal);
					float pdf = (curDist * curDist) / (area * cosTheta);
					lightSampleRec.emission = emission;
					lightSampleRec.pdf = pdf;
					si.hit = true;
					si.isEmitter = true;
				}
			}
		}
	#endif

	int nodesToVisit[STACK_SIZE];
	nodesToVisit[0] = 0;

	int stack = 0;
	// Recursive => stack
	while(stack >= 0 && stack < STACK_SIZE) {
		int i = nodesToVisit[stack--];

		vec4 r1 = fetchData(bvhBuffer, i, BVH_COLUMNS);
		vec4 r2 = fetchData(bvhBuffer, i + 1, BVH_COLUMNS);

		// negative => Primitives
		// positive => Node
		int splitAxisOrNumPrimitives = int(r1.w);

		if (splitAxisOrNumPrimitives >= 0) {
			// Intersection is a bounding box. Test for box intersection and keep traversing BVH
			int splitAxis = splitAxisOrNumPrimitives;

			if (intersectBox(ray, r1.xyz, r2.xyz, invDir, tMax) > 0.0) {
				// traverse near node to ray first, and far node to ray last
				if (ray.d[splitAxis] > 0.0) {
					nodesToVisit[++stack] = int(r2.w);
					nodesToVisit[++stack] = i + 2;
				} else {
					nodesToVisit[++stack] = i + 2;
					nodesToVisit[++stack] = int(r2.w);
				}
			}
		} else {
			ivec3 index = ivec3(r1.xyz);
			vec4 pu0 = fetchData(positionBuffer, index.x, VERTEX_COLUMNS);
			vec4 pu1 = fetchData(positionBuffer, index.y, VERTEX_COLUMNS);
			vec4 pu2 = fetchData(positionBuffer, index.z, VERTEX_COLUMNS);
			Triangle tri = Triangle(pu0.xyz, pu1.xyz, pu2.xyz);

			TriangleIntersect hit = intersectTriangle(ray, tri, tMax);

			if (hit.t > 0.0) {
				int materialID = int(r2.w);
				vec3 faceNormal = r2.xyz;
				si.t = hit.t;
				si.isEmitter = false;
				tMax = hit.t;
				vec3 u = vec3(pu0.w, pu1.w, pu2.w);
				// get geometry/material info by index
				surfaceInteractionFromBVH(si, tri, hit.barycentric, index, u, materialID);
				si.ffnormal = dot(faceNormal, ray.d) <= 0.0 ? si.normal : -si.normal;
				// si.ffnormal = dot(si.normal, ray.d) <= 0.0 ? si.normal : -si.normal;
				si.eta = dot(si.normal, si.ffnormal) > 0.0 ? (1.0 / si.ior) : si.ior;
			}
		}
	}
}

#endif


#ifdef BVH_DYNAMIC
// Performance
bool intersectSceneShadow(Ray ray, float maxDist) {
	float tMax = maxDist;

	const int SHADOW_STACK_SIZE = 20;

	int nodesToVisit[SHADOW_STACK_SIZE];
	int nodesLevel[SHADOW_STACK_SIZE];
	nodesToVisit[0] = 0;
	nodesLevel[0] = 0;
	vec3 invDirWorld = 1. / ray.d;
	vec3 invDirLocal = vec3(1.);

	int tlasMatID = 0;
	int tlasMeshID = 0;
	mat4 tlasTransMat;
	mat4 tlasTransMatInverse;
	Ray rayTrans = Ray(ray.o, ray.d);
	bool throughBLASMark = false;

	int stack = 0;
	while(stack >= 0 && stack < SHADOW_STACK_SIZE) {
		int i = nodesToVisit[stack];
		int level = nodesLevel[stack];
		stack--;

		// If we've traversed the entire BLAS then switch to back to TLAS and resume where we left off
        if (throughBLASMark && i == -1) {
			throughBLASMark = false;
			rayTrans.o = ray.o;
			rayTrans.d = ray.d;
			// Next TLAS Node
			continue;
        }
		
		if (level == 0) {
			// TLAS info
			vec4 r1 = fetchData(tlasBuffer, i, TLAS_COLUMNS);
			vec4 r2 = fetchData(tlasBuffer, i + 1, TLAS_COLUMNS);
			// negative => Leaf => -1
			// positive => InteriorNode's splitAxis(0/1/2)
			int typeFlag = int(r1.w);
			if (typeFlag >= 0) {
				// TLAS-InteriorNode
				if (intersectBox(rayTrans, r1.xyz, r2.xyz, invDirWorld, tMax) > 0.0) {
					if (rayTrans.d[typeFlag] > 0.0) {
						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 0;

						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 0;
					} else {
						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 0;

						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 0;
					}
				}
			} else {
				// TLAS-Leaf
				// r1.xyz => blasBufferSplitIndex[p.geometryID]/materialID/meshID
				int visible = int(r2.x);
				if (visible == 0) {
					continue;
				}
				int instanceID = int(r1.z);
				
				vec4 matRow1 = fetchData(tlasTransformBuffer, instanceID * 4 + 0, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow2 = fetchData(tlasTransformBuffer, instanceID * 4 + 1, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow3 = fetchData(tlasTransformBuffer, instanceID * 4 + 2, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow4 = fetchData(tlasTransformBuffer, instanceID * 4 + 3, TLAS_TRANSFORM_COLUMNS).xyzw;

				tlasTransMat = mat4(matRow1, matRow2, matRow3, matRow4);
				tlasTransMatInverse = inverse(tlasTransMat);

				rayTrans.o = vec3(tlasTransMatInverse * vec4(ray.o, 1.0));
            	rayTrans.d = vec3(tlasTransMatInverse * vec4(ray.d, 0.0));
				invDirLocal = 1. / rayTrans.d;

				// Mark
				stack++;
				throughBLASMark = true;
				nodesToVisit[stack] = -1;
				nodesLevel[stack] = -1;

				stack++;
				nodesToVisit[stack] = int(r1.x);
				nodesLevel[stack] = 1;
				tlasMatID = int(r1.y);
				tlasMeshID = int(r1.z);
			}
		} else {
			// BLAS info
			vec4 r1 = fetchData(blasBuffer, i, BLAS_COLUMNS);
			vec4 r2 = fetchData(blasBuffer, i + 1, BLAS_COLUMNS);
			int typeFlag = int(r1.w);
			if (typeFlag >= 0) {
				// BLAS-InteriorNode
				if (intersectBox(rayTrans, r1.xyz, r2.xyz, invDirLocal, tMax) > 0.0) {
					if (rayTrans.d[typeFlag] > 0.0) {
						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 1;

						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 1;
					} else {
						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 1;

						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 1;
					}
				}
			} else {
				// BLAS-Leaf

			#ifdef SUPPORT_ALPHA
				// Sync shadow casting
				float castShadow = getMatCastShadow(tlasMatID);
				if (castShadow == 0.) {
					return false;
				}
			#endif
			
				ivec3 index = ivec3(r1.xyz);
				vec4 pu0 = fetchData(positionBuffer, index.x, VERTEX_COLUMNS);
				vec4 pu1 = fetchData(positionBuffer, index.y, VERTEX_COLUMNS);
				vec4 pu2 = fetchData(positionBuffer, index.z, VERTEX_COLUMNS);
				Triangle tri = Triangle(pu0.xyz, pu1.xyz,pu2.xyz);

				TriangleIntersect hit = intersectTriangle(rayTrans, tri, tMax);
				
				if (hit.t > 0.0) {

				#ifdef SUPPORT_ALPHA_SHADOW
					vec3 u = vec3(pu0.w, pu1.w, pu2.w);
					float alpha = surfaceMaterialAlphaFromBVH(tri, hit.barycentric, index, u, tlasMatID);
					if (rand() > alpha) {
						return false;
					}
				#endif

					return true;
				}
			}
		}
	}

	return false;
}

// Dynamic
void intersectScene(Ray ray, inout SurfaceInteraction si, inout LightSampleRec lightSampleRec, int depth, float maxDist) {
	si.hit = false;
	float tMax = maxDist;
	float curDist;
	// Intersect Emitters
	#if defined(NUM_LIGHTS)
		for (int i = 0; i < NUM_LIGHTS; i++) {
			// Light Data
			vec4 params = lights.params[i];
			float radius = params.x;
			float area = params.y;
			float type = params.z;
			float visible = params.w;
			if (depth == 0 && visible < 0.1) continue;

			vec3 position = lights.position[i];
			vec3 emission = lights.emission[i];
			vec3 p1 = lights.p1[i];
			vec3 p2 = lights.p2[i];
			// Area
			if (type == 0.) {
				vec3 normal = normalize(cross(p1, p2));
				// Hide backface
				if (dot(normal, ray.d) > 0.)
					continue;
				vec4 plane = vec4(normal, dot(normal, position));
				p1 *= 1.0 / dot(p1, p1);
				p2 *= 1.0 / dot(p2, p2);
				curDist = rectIntersect(position, p1, p2, plane, ray);

				if (curDist < 0.)
					curDist = INF;
				if (curDist < tMax) {
					tMax = curDist;
					float cosTheta = dot(-ray.d, normal);
					float pdf = (curDist * curDist) / (area * cosTheta);
					lightSampleRec.emission = emission;
					lightSampleRec.pdf = pdf;
					si.hit = true;
					si.isEmitter = true;
				}
			}
		}
	#endif

	int nodesToVisit[STACK_SIZE];
	int nodesLevel[STACK_SIZE];
	nodesToVisit[0] = 0;
	nodesLevel[0] = 0;
	vec3 invDirWorld = 1. / ray.d;
	vec3 invDirLocal = vec3(1.);

	int tlasMatID = 0;
	int tlasMeshID = 0;
	mat4 tlasTransMat;
	mat4 tlasTransMatInverse;
	Ray rayTrans = Ray(ray.o, ray.d);
	bool throughBLASMark = false;

	int stack = 0;
	// Recursive => stack
	while(stack >= 0 && stack < STACK_SIZE) {
		int i = nodesToVisit[stack];
		int level = nodesLevel[stack];
		stack--;

		// If we've traversed the entire BLAS then switch to back to TLAS and resume where we left off
        if (throughBLASMark && i == -1) {
			throughBLASMark = false;
			rayTrans.o = ray.o;
			rayTrans.d = ray.d;
			// Next TLAS Node
			continue;
        }
		
		if (level == 0) {
			// TLAS info
			vec4 r1 = fetchData(tlasBuffer, i, TLAS_COLUMNS);
			vec4 r2 = fetchData(tlasBuffer, i + 1, TLAS_COLUMNS);
			// negative => Leaf => -1
			// positive => InteriorNode's splitAxis(0/1/2)
			int typeFlag = int(r1.w);
			if (typeFlag >= 0) {
				// TLAS-InteriorNode
				if (intersectBox(rayTrans, r1.xyz, r2.xyz, invDirWorld, tMax) > 0.0) {
					if (rayTrans.d[typeFlag] > 0.0) {
						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 0;

						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 0;
					} else {
						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 0;

						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 0;
					}
				}
			} else {
				// TLAS-Leaf
				// r1.xyz => blasBufferSplitIndex[p.geometryID]/materialID/meshID
				int visible = int(r2.x);
				if (visible == 0) {
					continue;
				}
				int instanceID = int(r1.z);
				
				vec4 matRow1 = fetchData(tlasTransformBuffer, instanceID * 4 + 0, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow2 = fetchData(tlasTransformBuffer, instanceID * 4 + 1, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow3 = fetchData(tlasTransformBuffer, instanceID * 4 + 2, TLAS_TRANSFORM_COLUMNS).xyzw;
				vec4 matRow4 = fetchData(tlasTransformBuffer, instanceID * 4 + 3, TLAS_TRANSFORM_COLUMNS).xyzw;
				
				tlasTransMat = mat4(matRow1, matRow2, matRow3, matRow4);
				tlasTransMatInverse = inverse(tlasTransMat);

				rayTrans.o = vec3(tlasTransMatInverse * vec4(ray.o, 1.0));
            	rayTrans.d = vec3(tlasTransMatInverse * vec4(ray.d, 0.0));
				invDirLocal = 1. / rayTrans.d;

				// Mark
				stack++;
				throughBLASMark = true;
				nodesToVisit[stack] = -1;
				nodesLevel[stack] = -1;

				stack++;
				nodesToVisit[stack] = int(r1.x);
				nodesLevel[stack] = 1;
				tlasMatID = int(r1.y);
				tlasMeshID = int(r1.z);
			}
		} else {
			// BLAS info
			vec4 r1 = fetchData(blasBuffer, i, BLAS_COLUMNS);
			vec4 r2 = fetchData(blasBuffer, i + 1, BLAS_COLUMNS);
			int typeFlag = int(r1.w);
			
			if (typeFlag >= 0) {
				// BLAS-InteriorNode
				if (intersectBox(rayTrans, r1.xyz, r2.xyz, invDirLocal, tMax) > 0.0) {
					if (rayTrans.d[typeFlag] > 0.0) {
						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 1;

						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 1;
					} else {
						stack++;
						nodesToVisit[stack] = i + 2;
						nodesLevel[stack] = 1;

						stack++;
						nodesToVisit[stack] = int(r2.w);
						nodesLevel[stack] = 1;
					}
				}
			} else {
				// BLAS-Leaf
				ivec3 index = ivec3(r1.xyz);
				vec4 pu0 = fetchData(positionBuffer, index.x, VERTEX_COLUMNS);
				vec4 pu1 = fetchData(positionBuffer, index.y, VERTEX_COLUMNS);
				vec4 pu2 = fetchData(positionBuffer, index.z, VERTEX_COLUMNS);
				Triangle tri = Triangle(pu0.xyz, pu1.xyz,pu2.xyz);

				TriangleIntersect hit = intersectTriangle(rayTrans, tri, tMax);
				
				if (hit.t > 0.0) {
					vec3 faceNormal = r2.xyz;
					si.t = hit.t;
					si.isEmitter = false;
					tMax = hit.t;
					vec3 u = vec3(pu0.w, pu1.w, pu2.w);
					// get geometry/material info by index
					surfaceInteractionFromBVH(si, tri, hit.barycentric, index, u, tlasMatID);
					// To world space
					si.position = vec3(tlasTransMat * vec4(si.position, 1.0));
					mat3 inverseNormalMat = transpose(mat3(tlasTransMatInverse));
					si.normal = normalize(inverseNormalMat * si.normal);

					si.ffnormal = dot(normalize(inverseNormalMat * faceNormal), ray.d) <= 0.0 ? si.normal : -si.normal;
					si.eta = dot(si.normal, si.ffnormal) > 0.0 ? (1.0 / si.ior) : si.ior;
				}
			}
		}
	}
}

#endif


float SchlickR0FromEta(float eta) { 
    float sqrtR0 = (eta - 1.) / (eta + 1.);
    return sqrtR0 * sqrtR0;
}

float SchlickWeight(float u) {
    float m = clamp(1.0 - u, 0.0, 1.0);
    float m2 = m * m;
    return m2 * m2 * m; // pow(m,5)
}

float SchlickFresnel(float F0, float cosTheta) {
    return mix(F0, 1.0, SchlickWeight(cosTheta));
}
vec3 SchlickFresnel(vec3 F0, float cosTheta) {
    return mix(F0, vec3(1.), SchlickWeight(cosTheta));
}

float DielectricFresnel(float cosThetaI, float eta) {
    float sinThetaTSq = eta * eta * (1.0f - cosThetaI * cosThetaI);
    // Total internal reflection
    if (sinThetaTSq > 1.0)
        return 1.0;

    float cosThetaT = sqrt(max(1.0 - sinThetaTSq, 0.0));
    float rs = (eta * cosThetaT - cosThetaI) / (eta * cosThetaT + cosThetaI);
    float rp = (eta * cosThetaI - cosThetaT) / (eta * cosThetaI + cosThetaT);

    return 0.5 * (rs * rs + rp * rp);
}

vec3 DisneyFresnel(vec3 F0, float metalness, float eta, float cosThetaI) {
    // F0 Effect
    vec3 FrSchlick = SchlickFresnel(F0, cosThetaI);
    // IOR Effect
    float FrDielectric = DielectricFresnel(cosThetaI, eta);
    return mix(vec3(FrDielectric), FrSchlick, metalness);
}

// Fresnel estimates
float DisneyFresnel(float metalness, float eta, float cosThetaI) {
    float FrSchlick = SchlickWeight(cosThetaI);
    float FrDielectric = DielectricFresnel(cosThetaI, eta);
    return mix(FrDielectric, FrSchlick, metalness);
}

// The Implicit Masking Function
// https://zhuanlan.zhihu.com/p/81708753
float SmithG_GGX(float NDotV, float alphaG) {
    float a = alphaG * alphaG;
    float b = NDotV * NDotV;
    return 1.0 / (NDotV + sqrt(a + b - a * b));
}

float GTR1(float NDotH, float alpha) {
    float alpha2 = alpha * alpha;
    float t = 1.0 + (alpha2 - 1.0) * NDotH * NDotH;
    return (alpha2 - 1.0) / (PI * log(alpha2) * t);
}

float GTR2(float NDotH, float a) {
    float a2 = a * a;
    float t = 1.0 + (a2 - 1.0) * NDotH * NDotH;
    return a2 / (PI * t * t);
}

vec3 ISGTR1(float rgh, float r1, float r2) {
    float a = max(0.001, rgh);
    float a2 = a * a;

    float phi = r1 * TWOPI;

    float cosTheta = sqrt((1.0 - pow(a2, 1.0 - r1)) / (1.0 - a2));
    float sinTheta = clamp(sqrt(1.0 - (cosTheta * cosTheta)), 0.0, 1.0);
    float sinPhi = sin(phi);
    float cosPhi = cos(phi);

    return vec3(sinTheta * cosPhi, sinTheta * sinPhi, cosTheta);
}

vec3 ISGTR2(float rgh, float r1, float r2) {
    float a = max(0.001, rgh);

    float phi = r1 * TWOPI;

    float cosTheta = sqrt((1.0 - r2) / (1.0 + (a * a - 1.0) * r2));
    float sinTheta = clamp(sqrt(1.0 - (cosTheta * cosTheta)), 0.0, 1.0);
    float sinPhi = sin(phi);
    float cosPhi = cos(phi);

    return vec3(sinTheta * cosPhi, sinTheta * sinPhi, cosTheta);
}


vec3 DisneyDiffuse(SurfaceInteraction si, vec3 Csheen, vec3 V, vec3 L, vec3 H, out float pdf) {
    pdf = 0.0;
    if (L.z <= 0.0)
        return vec3(0.0);
    // CosineHemispherePdf => cosTheta * InvPi;
    pdf = L.z * INVPI;
    
    float LDotH = dot(L, H);

    // Diffuse
    float FL = SchlickWeight(L.z);
    float FV = SchlickWeight(V.z);
    float Fh = SchlickWeight(LDotH);
    float Fd90 = 0.5 + 2.0 * LDotH * LDotH * si.roughness;
    float Fd = mix(1.0, Fd90, FL) * mix(1.0, Fd90, FV);

    // Disney Fake Subsurface(BRDF approximate)
    // https://cseweb.ucsd.edu/~ravir/6998/papers/p165-hanrahan.pdf
    float Fss90 = LDotH * LDotH * si.roughness;
    float Fss = mix(1.0, Fss90, FL) * mix(1.0, Fss90, FV);
    float DisneyFakeSS = 1.25 * (Fss * (1.0 / (L.z + V.z) - 0.5) + 0.5);

    vec3 Fsheen = Fh * si.sheen * Csheen;
    // https://github.com/wdas/brdf/blob/main/src/brdfs/disney.brdf
    return (INVPI * mix(Fd, DisneyFakeSS, si.subsurface) * si.color + Fsheen) * (1.0 - si.metalness) * (1.0 - si.transmission);
}

vec3 DisneySpecular(SurfaceInteraction si, vec3 Cspec0, vec3 V, vec3 L, vec3 H, out float pdf) {
    pdf = 0.0;
    if (L.z <= 0.0)
        return vec3(0.0);

    float LDotH = dot(L, H);

    float D = GTR2(H.z, si.roughness);
    pdf = D * H.z / (4.0 * LDotH);
    
    // For the Fresnel call, make sure that wh is in the same hemisphere
    // as the surface normal, so that TIR is handled correctly.
    // PBRT:
    vec3 F = DisneyFresnel(Cspec0, si.metalness, si.eta, LDotH);
    // Blender
    // vec3 F = SchlickFresnel(Cspec0, LDotH);
    float G = SmithG_GGX(abs(L.z), si.roughness) * SmithG_GGX(abs(V.z), si.roughness);
    return F * D * G;
}

// https://www.pbr-book.org/3ed-2018/Reflection_Models/Microfacet_Models
vec3 DisneyTransmission(SurfaceInteraction si, vec3 Cspec0, vec3 V, vec3 L, vec3 H, out float pdf) {
    pdf = 0.0;
    if (L.z >= 0.0)
        return vec3(0.0);

    float F = DielectricFresnel(abs(dot(V, H)), si.eta);
    
    float D = GTR2(H.z, si.roughness);
    // DisneyTransmission::Pdf
    float denomSqrt = dot(L, H) + dot(V, H) * si.eta;
    pdf = D * H.z * abs(dot(L, H)) / (denomSqrt * denomSqrt);

    float G = SmithG_GGX(abs(L.z), si.roughness) * SmithG_GGX(abs(V.z), si.roughness);
    // Walter et al's model, with the provided transmissive term scaled
    // by sqrt(color), so that after two refractions, we're back to the
    // provided color.
    // Blender no do this
    vec3 specColor = pow(si.color, vec3(0.5));
    return specColor * (1.0 - si.metalness) * si.transmission * (1.0 - F) * D * G * abs(dot(V, H)) * abs(dot(L, H)) * 4.0 * si.eta * si.eta / (denomSqrt * denomSqrt);
}

vec3 DisneyClearcoat(SurfaceInteraction si, vec3 V, vec3 L, vec3 H, out float pdf) {
    pdf = 0.0;
    if (L.z <= 0.0)
        return vec3(0.0);
    
    float LDotH = dot(L, H);
    
    // float FH = DielectricFresnel(dot(V, H), 1.0 / 1.5);
    // float F = mix(0.04, 1.0, FH);
    // PBRT:
    float F = SchlickFresnel(.04, LDotH);
    
    float D = GTR1(H.z, mix(0.1, 0.001, 1. - si.clearcoatRoughness));
    pdf = D * H.z / (4.0 * LDotH);

    float G = SmithG_GGX(L.z, 0.25) * SmithG_GGX(V.z, 0.25);
    return vec3(0.25 * si.clearcoat * F * D * G);
}

vec3 ComputeColorTint(vec3 baseColor) {
    float luminance = Luminance(baseColor);
    return (luminance > 0.0) ? baseColor / luminance : vec3(1.);
}

void ComputeSpecularColor(SurfaceInteraction si, out vec3 Cspec0, out vec3 Csheen) {
    vec3 tint = ComputeColorTint(si.color);

#ifdef SUPPORT_SG_WORKFLOW
    if(si.workflow > 0.1) {
        Cspec0 = si.specularColor;
    } else 
#endif    

    {
        Cspec0 = mix(SchlickR0FromEta(si.ior) * mix(vec3(1.0), tint, min(si.specularTint, 0.99)), si.color, si.metalness);
    }
    Csheen = mix(vec3(1.0), tint, si.sheenTint);
}

void ComputeLobe(SurfaceInteraction si, vec3 Cspec0, float fresnelWeight, out float diffuseLobeWt, out float specularLobeWt, out float transLobeWt, out float clearcoatLobeWt) {
    diffuseLobeWt = max(Luminance(si.color), si.sheen) * (1.0 - si.metalness) * (1.0 - si.transmission);
    specularLobeWt = Luminance(Cspec0);
    transLobeWt = (1.0 - fresnelWeight) * (1.0 - si.metalness) * si.transmission * Luminance(si.color);
    clearcoatLobeWt = si.clearcoat * (1.0 - si.metalness);

    float weightSum = diffuseLobeWt + specularLobeWt + transLobeWt + clearcoatLobeWt;

    diffuseLobeWt /= weightSum;
    specularLobeWt /= weightSum;
    transLobeWt /= weightSum;
    clearcoatLobeWt /= weightSum;
}

vec3 PrincipledBSDFSample(SurfaceInteraction si, vec3 V, vec3 N, out vec3 L, out float pdf, MaterialSamples randomSamples) {
    pdf = 0.0;
    vec3 f = vec3(0.0);

    vec2 bounceDirSample = randomSamples.s3;
    // To use more
    vec2 diffuseOrSpecular = randomSamples.s4;
    float r1 = bounceDirSample.x;
    float r2 = bounceDirSample.y;
    
    vec3 Cspec0, Csheen;
    ComputeSpecularColor(si, Cspec0, Csheen);

    vec3 T, B;
    OrthonormalBasis(N, T, B);
    V = worldToLocal(T, B, N, V); // NDotL = L.z; NDotV = V.z; NDotH = H.z

    float diffuseLobeWt, specularLobeWt, transLobeWt, clearcoatLobeWt;
    // No L/H, use VoN here
    float fresnelWeight = DisneyFresnel(si.metalness, si.eta, V.z);
    ComputeLobe(si, Cspec0, fresnelWeight, diffuseLobeWt, specularLobeWt, transLobeWt, clearcoatLobeWt);

    float cdf[4];
    cdf[0] = diffuseLobeWt;
    cdf[1] = cdf[0] + specularLobeWt;
    cdf[2] = cdf[1] + transLobeWt;
    cdf[3] = cdf[2] + clearcoatLobeWt;

    // Diffuse Reflection Lobe
    if (r1 < cdf[0]) {
        r1 /= cdf[0];
        L = CosineSampleHemisphere(r1, r2);

        vec3 H = normalize(L + V);

        f = DisneyDiffuse(si, Csheen, V, L, H, pdf);
        pdf *= diffuseLobeWt;
    } else if (r1 < cdf[1]) {
        // Specular Reflection Lobe
        r1 = (r1 - cdf[0]) / (cdf[1] - cdf[0]);
        // vec3 H = SampleGGXVNDF(V, si.roughness, r1, r2);
        vec3 H = ISGTR2(si.roughness, r1, r2);

        if (dot(V, H) < 0.0)
            H = -H;

        L = normalize(reflect(-V, H));

        f = DisneySpecular(si, Cspec0, V, L, H, pdf);
        pdf *= specularLobeWt;
    } else if (r1 < cdf[2]) {
        // Transmission Lobe
        r1 = (r1 - cdf[1]) / (cdf[2] - cdf[1]);
        // vec3 H = SampleGGXVNDF(V, si.roughness, r1, r2);
        vec3 H = ISGTR2(si.roughness, r1, r2);

        if (dot(V, H) < 0.0)
            H = -H;

        vec3 R = reflect(-V, H);
        L = normalize(refract(-V, H, si.eta));
        f = DisneyTransmission(si, Cspec0, V, L, H, pdf);
        pdf *= transLobeWt;
    } else {
        // Clearcoat Lobe
        r1 = (r1 - cdf[2]) / (1.0 - cdf[2]);
        vec3 H = ISGTR1(mix(0.1, 0.001, 1. - si.clearcoatRoughness), r1, r2);

        if (dot(V, H) < 0.0)
            H = -H;

        L = normalize(reflect(-V, H));

        f = DisneyClearcoat(si, V, L, H, pdf);
        pdf *= clearcoatLobeWt;
    }

    L = localToWorld(T, B, N, L);
    return f * abs(dot(N, L));
}

vec3 PrincipledBSDFMaterial(inout SurfaceInteraction si, vec3 V, vec3 L, out float bsdfPdf) {
    bsdfPdf = 0.0;
    vec3 f = vec3(0.0);

    vec3 N = si.ffnormal;
    vec3 T, B;
    OrthonormalBasis(N, T, B);
    V = worldToLocal(T, B, N, V); // NDotL = L.z; NDotV = V.z; NDotH = H.z
    L = worldToLocal(T, B, N, L);
    
    vec3 H;
    
	if (L.z > 0.0) {
        H = normalize(L + V);
    } else {
        H = normalize(L + V * si.eta);
    }

    if (dot(V, H) < 0.0) {
        H = -H;
    }
    
    vec3 Cspec0, Csheen;
    ComputeSpecularColor(si, Cspec0, Csheen);

    float diffuseLobeWt, specularLobeWt, transLobeWt, clearcoatLobeWt;
    float fresnelWeight = DisneyFresnel(si.metalness, si.eta, abs(dot(L, H)));
    ComputeLobe(si, Cspec0, fresnelWeight, diffuseLobeWt, specularLobeWt, transLobeWt, clearcoatLobeWt);

    float pdf;

    // Diffuse
    if (diffuseLobeWt > 0.0 && L.z > 0.0) {
        f += DisneyDiffuse(si, Csheen, V, L, H, pdf);
		bsdfPdf += pdf * diffuseLobeWt;
    }

    // Specular Reflection
    if (specularLobeWt > 0.0 && L.z > 0.0 && V.z > 0.0) {
        f += DisneySpecular(si, Cspec0, V, L, H, pdf);
        bsdfPdf += pdf * specularLobeWt;
    }

    // Transmission
    if (transLobeWt > 0.0 && L.z < 0.0) {
        f += DisneyTransmission(si, Cspec0, V, L, H, pdf);
        bsdfPdf += pdf * transLobeWt;
    }

    // Clearcoat
    if (clearcoatLobeWt > 0.0 && L.z > 0.0 && V.z > 0.0)  {
        f += DisneyClearcoat(si, V, L, H, pdf);
        bsdfPdf += pdf * clearcoatLobeWt;
    }

	return f * abs(L.z);
}

// Estimate the direct lighting(Env Light + Analytic light) integral using multiple importance sampling
// http://www.pbr-book.org/3ed-2018/Light_Transport_I_Surface_Reflection/Direct_Lighting.html#EstimatingtheDirectLightingIntegral
// NEE End: Env/Analytic lights interaction

vec3 computeDirectLight(inout SurfaceInteraction si, in Path path, in vec2 s1, in vec2 s2) {
	vec3 viewDir = -path.ray.d;
	vec3 surfacePos = si.position + INTERSECT_EPS * si.ffnormal;

	vec3 Li = vec3(0.0);
	BsdfSampleRec bsdfSampleRec;

	// Stratified sample
	vec2 lightDirSample = s1;
	vec2 envDirSample = s2;

	vec3 lightDir;
	vec2 uv;
	float lightPdf;
	bool brdfSample = false;

	// Env light
	lightDir = invEnvRotMatrix * sampleEnvmap(envDirSample, uv, lightPdf);
	path.ray = Ray(surfacePos, lightDir);
	if (!intersectSceneShadow(path.ray, INF - EPS)) {
		vec3 irr = textureLinear(envMap, uv).rgb * envMapIntensity;
		bsdfSampleRec.f = PrincipledBSDFMaterial(si, viewDir, lightDir, bsdfSampleRec.pdf);

		if (bsdfSampleRec.pdf > 0.0) {
			float misWeight = powerHeuristic(lightPdf, bsdfSampleRec.pdf);
			if (misWeight > 0.0) {
				Li += misWeight * bsdfSampleRec.f * irr / lightPdf;
			}
		}
	}

	// Analytic lights
	#if defined(NUM_LIGHTS)
		LightSampleRec lightSampleRec;
		Light light;

		int i = int(lightDirSample.x * float(NUM_LIGHTS));

		// Light Data
		vec3 position = lights.position[i];
		vec3 emission = lights.emission[i];
		vec3 p1 = lights.p1[i];
		vec3 p2 = lights.p2[i];
		vec4 params = lights.params[i];
		float radius = params.x;
		float area = params.y;
		float type = params.z;
		float visible = params.w;

		light = Light(position, radius, emission, area, p1, type, p2, visible);
		sampleOneLight(light, surfacePos, lightSampleRec, lightDirSample);

		if (dot(lightSampleRec.direction, lightSampleRec.normal) < 0.0) {
			path.ray = Ray(surfacePos, lightSampleRec.direction);
			if (!intersectSceneShadow(path.ray, lightSampleRec.dist - EPS)) {
				// Check between si.position and light
				bsdfSampleRec.f = PrincipledBSDFMaterial(si, viewDir, lightSampleRec.direction, bsdfSampleRec.pdf);
				float misWeight = 1.0;
				if(light.area > 0.0 && bsdfSampleRec.pdf > 0.0) {
					misWeight = powerHeuristic(lightSampleRec.pdf, bsdfSampleRec.pdf);
				}
				if (misWeight > 0.0) {
					Li += misWeight * bsdfSampleRec.f * lightSampleRec.emission / lightSampleRec.pdf;
				}
			}
		}
	#endif
	
	return Li;
}

layout(location = 0) out vec4 out_light;

void computeBounce(inout Path path, int depth, inout SurfaceInteraction si, inout BsdfSampleRec bsdfSampleRec, in LightSampleRec lightSampleRec) {
	
	if (!si.hit) {
		vec3 envSampleDir = envRotMatrix * path.ray.d;

		if (depth == 0) {
			path.li += useBackgroundColor == 1 ? backgroundColor : sampleEnvmapFromDirection(envSampleDir) * envMapIntensity;
			path.alpha = backgroundAlpha;
			path.abort = true;
			return;
		}
		
		vec3 irr = sampleEnvmapFromDirection(envSampleDir) * envMapIntensity;
		float misWeight = 1.0;
		float lightPdf = envMapPdf(envSampleDir);
		// Trace bsdf sample ray if hit emitter(envmap/light) then use MIS
		misWeight = powerHeuristic(bsdfSampleRec.pdf, lightPdf);

		// Hit light source (the hdr map) / add contribution from light source
		if (misWeight > 0.) {
			path.li += misWeight * path.beta * irr;
		}
		path.abort = true;
		return;
	}
	
	if (si.isEmitter) {
		path.li += EmitterSample(path.ray, depth, lightSampleRec, bsdfSampleRec) * path.beta;
		path.abort = true;
		return;
	}

	// Reset absorption when ray is going out of surface
	if (dot(si.normal, si.ffnormal) > 0.0) {
		path.absorption = vec3(0.0);
	}
	
	// Emissive
	path.li += path.beta * si.emissive;

	// Add absoption
	path.beta *= exp(-path.absorption * si.t);

	// Stratified sample
	// lightDirSample/envDirSample/diffuseOrSpecular
	MaterialSamples randomSamples = getRandomMaterialSamples();

	// Sample Material
	path.li += computeDirectLight(si, path, randomSamples.s1, randomSamples.s2) * path.beta;
	
	// NEE：Next Event Estimation
	bsdfSampleRec.f = PrincipledBSDFSample(si, -path.ray.d, si.ffnormal, bsdfSampleRec.L, bsdfSampleRec.pdf, randomSamples);
	
	// Set absorption only if the ray is currently inside the object.
	if (dot(si.ffnormal, bsdfSampleRec.L) < 0.0) {
		path.absorption = -log(si.extinction) / si.atDistance;
	}

	if (bsdfSampleRec.pdf > 0.0) {
		path.beta *= bsdfSampleRec.f / bsdfSampleRec.pdf;
	} else {
		path.abort = true;
		return;
	}

	// Russian Roulette sampling
	if (depth >= 2) {
		// Luminance smooth
		float q = 1.0 - Luminance(path.beta);
		if (randomSample() < q) {
			path.abort = true;
			return;
		}
		path.beta /= 1.0 - q;
	}

	// Next
	path.ray = Ray(si.position + INTERSECT_EPS * bsdfSampleRec.L, bsdfSampleRec.L);
}

vec4 integrator(inout Ray ray) {
	SurfaceInteraction si;
	Path path;
	BsdfSampleRec bsdfSampleRec;
	LightSampleRec lightSampleRec;
	
	path.ray = ray;
	path.li = vec3(0);
	path.alpha = 1.0;
	path.abort = false;
	path.misWeight = 1.0;
	path.absorption = vec3(0.0);
	path.beta = vec3(1.0);

	int curAlphaDepth = 0;
	
	// No use GBuffer for first surface interaction because of texture unit limit
	for (int i = 0; i < bounces; i++) {
		if (path.abort) {
			return vec4(path.li, path.alpha);
		}
		intersectScene(path.ray, si, lightSampleRec, i, INF);
		
	#ifdef SUPPORT_ALPHA
		if (si.hit && !si.isEmitter && si.alpha < 1.0 && curAlphaDepth < MAX_ALPHA_DEPTH) {
			if (rand() > si.alpha) {
				path.ray.o = si.position + INTERSECT_EPS * path.ray.d;
				curAlphaDepth++;
				i--;
				continue;
			}
		}
	#endif

		computeBounce(path, i, si, bsdfSampleRec, lightSampleRec);
	}

	return vec4(path.li, path.alpha);
}

void main() {
	initRandom(frameCount);
	vec2 vCoordAntiAlias = vCoord + jitter;

	vCoordAntiAlias = (vCoordAntiAlias - 0.5) * 2.0;
	vec3 origin = ndcToWorld(vCoordAntiAlias);
	
	vec3 direction;
	if (camera.clipToViewMat[2].w == 0.) {
		direction = -camera.viewToWorldMat[2].xyz;
	} else {
		direction = normalize(mat3(camera.viewToWorldMat) * (camera.clipToViewMat * vec4(vCoordAntiAlias, 0.0, 1.0)).xyz);
	}

	if (camera.aperture > 0.0) {
		vec3 focusPoint = origin + camera.focus * normalize(direction);
		vec2 lensPoint = camera.aperture * sampleCircle(vec2(hashRandom(vCoordAntiAlias)));
		origin = vec3(camera.viewToWorldMat * vec4(lensPoint, 0.0, 1.0));
		direction = normalize(focusPoint - origin);
	}

	Ray cam = Ray(origin, direction);

	vec4 Li = integrator(cam);

	if (!(Li.x < INF && Li.x > -EPS)) {
		Li = vec4(0., 0., 0., 1.);
	}

	if (frameCount > 1.) {
		vec2 size = vec2(textureSize(accumulateTex, 0));
		vec4 accColor = texelFetch(accumulateTex, ivec2(vCoord * size), 0);
		Li = (Li + accColor * frameCount) / (frameCount + 1.);
	}

	out_light = Li;
	// Debug
	// out_light.rgb = texture(materialTexArray, vec3(vCoord, 0)).rgb;
	// out_light.rgb = texture(diffuseMap, vec3(vCoord, 0)).rgb;
}
`,vertex:n.vertexShader}),a.setPipelineByCacheKey(St.ID,l,s);this.renderPass=s,s.setTexture("materialTexArr",a.getRawResourceByName("MaterialTextureArray")),(i.supportUVTrans||i.supportTexWrap)&&s.setTexture("uvTransBuffer",a.getRawResourceByName("TextureUVTransformBuffer")),s.setTexture("positionBuffer",a.getRawResourceByName("PositionBuffer")),s.setTexture("normalBuffer",a.getRawResourceByName("NormalBuffer")),i.sceneMode=="Static"?s.setTexture("bvhBuffer",a.getRawResourceByName("BVHBuffer")):(s.setTexture("blasBuffer",a.getRawResourceByName("BLASBuffer")),s.setTexture("tlasBuffer",a.getRawResourceByName("TLASBuffer")),s.setTexture("tlasTransformBuffer",a.getRawResourceByName("TLASTransformBuffer"))),this.initBySettingParams()}initBySettingParams(){const{renderSetting:i}=this,{bounces:t,backgroundColor:e,enableBackgroundColor:n,envMapIntensity:a,backgroundAlpha:s,enviromentVisible:r,envRotMatrix:l,invEnvRotMatrix:o}=i;this.updateBounces(t),this.setEnvMapIntensity(a),this.setBackgroundAlpha(s),this.setEnviromentVisible(r),this.enableBackgroundColor(n),this.setBackgroundColor(e),this.setEnvRotMatrix(l,o),this.updateEnvLight(),this.updateMeshLight()}setAccumulateTex(i){this.renderPass&&this.renderPass.setTexture("accumulateTex",i)}updateBounces(i){const{renderPass:t,samples:e,samplingDimensions:n}=this;n.length=0;for(let a=1;a<=i;a++)n.push(2,2,2,2),a>=2&&n.push(1);t.setUniform("bounces",i),e&&(e.strataCount=-1)}updateEnvLight(){const{renderPass:i,resourcePool:t,renderSetting:e}=this,{totalSumValue:n}=e;i.setTexture("envMap",t.getRawResourceByName(J.ENVMAP_RES_NAME)),i.setUniform("totalSumValue",n),i.setTexture("envMarginalWeights",t.getRawResourceByName(J.ENVMAP_MARGINAL_WEIGHTS_RES_NAME)),i.setTexture("envConditionalWeights",t.getRawResourceByName(J.ENVMAP_CONDITIONAL_WEIGHTS_RES_NAME))}updateMeshLight(){const{renderPass:i,renderSetting:t}=this,{lightsData:e}=t;e&&(i.setUniform("lights.position[0]",e.position),i.setUniform("lights.emission[0]",e.emission),i.setUniform("lights.p1[0]",e.p1),i.setUniform("lights.p2[0]",e.p2),i.setUniform("lights.params[0]",e.params))}setEnvRotMatrix(i,t){const{renderPass:e}=this;e.setUniform("envRotMatrix",i),e.setUniform("invEnvRotMatrix",t)}rebindTLASBuffer(){const{renderPass:i,resourcePool:t}=this;i.setTexture("tlasBuffer",t.getRawResourceByName("TLASBuffer")),i.setTexture("tlasTransformBuffer",t.getRawResourceByName("TLASTransformBuffer"))}rebindTextureArr(){const{renderPass:i,resourcePool:t}=this;i.setTexture("materialTexArr",t.getRawResourceByName("MaterialTextureArray"))}updateMeshMaterial(i){}enableBackgroundColor(i){this.renderPass.setUniform("useBackgroundColor",Number(i))}setBackgroundColor(i){this.renderPass.setUniform("backgroundColor",i)}setEnvMapIntensity(i){this.renderPass.setUniform("envMapIntensity",i)}setBackgroundAlpha(i){this.renderPass.setUniform("backgroundAlpha",i)}setEnviromentVisible(i){this.renderPass.setUniform("enviromentVisible",Number(i))}setNoise(i){this.renderPass.setTexture("noiseTex",i)}setFrameCount(i){this.renderPass.setUniform("frameCount",i)}setJitter(i,t){this.renderPass.setUniform("jitter",i,t)}nextSeed(){this.renderPass.setUniform("stratifiedSamples[0]",this.samples.next())}setStrataCount(i){i>1&&i!==this.samples.strataCount?this.samples=new ee(i,this.samplingDimensions):this.samples.restart(),this.renderPass.setUniform("strataSize",1/i),this.nextSeed()}setSize(i,t){this.renderPass.setUniform("pixelSize",1/i,1/t)}setCamera(i){const{renderPass:t}=this;t.setUniform("camera.viewToWorldMat",i.viewToWorldMat),t.setUniform("camera.clipToViewMat",i.clipToViewMat),t.setUniform("camera.aperture",i.aperture),t.setUniform("camera.focus",i.focus)}bindTextures(){this.renderPass.bindTextures()}draw(){this.renderPass.useProgram(),this.fullscreenTriangle.draw()}dispose(){}};let Me=St;Me.ID="PTPass";class cn{constructor(){this.scale=new $(1,1)}get width(){return this.renderWidth}get height(){return this.renderHeight}calcDimensions(t){const{fullWidth:e,fullHeight:n}=this;this.renderWidth=Math.round(e/t),this.renderHeight=Math.round(n/t),this.scale.set(this.renderWidth/e,this.renderHeight/n)}setSize(t,e,n){this.fullWidth=t,this.fullHeight=e,this.calcDimensions(n)}}class un{constructor(t,e){this.gl=t,this.resourcePool=e,this.sampleCount=0,this.numUniformSamples=4,this.strataCount=6,this.forceUpdate=!1,this.firstFrame=!0,this.needsUpdateBG=!1,this.enableTileRender=!0,this.enableDenoise=!1,this.movingDownsampling=!0,this.downsamplingFactor=4;const n=new oe(t);this.integratorPass=new Me(t,n,e),this.toneMapPass=new rn(t,n,e),this.accumulatePass=new on(t,n),this.gBufferPass=new an(t,n,e),this.svgfAtrousPass=new sn(t,n),this.fxaaPass=new en(t,n),this.tileCalculator=new tn(t),this.previewSize=new cn}async buildPipeline(t,e,n){this.camera=e,this.lastCamera=e.clone(),this.renderSetting=Ct(t,0,n);const a=await this.initNoise();this.integratorPass.createPipeline(this.renderSetting),this.integratorPass.setNoise(a),this.gBufferPass.createPipeline(this.renderSetting,t),this.svgfAtrousPass.createPipeline(this.renderSetting),this.fxaaPass.createPipeline(this.renderSetting),this.toneMapPass.createPipeline(this.renderSetting),this.accumulatePass.createPipeline(),this.updateTileNumber(this.renderSetting.tileNumber)}updateScene(t,e){const{camera:n,resourcePool:a}=this;this.renderSetting=Ct(t,0,e),this.integratorPass.createPipeline(this.renderSetting),this.gBufferPass.createPipeline(this.renderSetting,t),this.svgfAtrousPass.createPipeline(this.renderSetting);const s=a.getRawResourceByName("NoiseTexture");this.integratorPass.setNoise(s),this.integratorPass.setAccumulateTex(this.accumulateBuffer.color[0])}async initNoise(){const{gl:t,resourcePool:e}=this,n=e.getRawResourceByName("NoiseTexture");if(n)return n;const a=new Image;return a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAAAAADfkvJBAAAbsklEQVR4nA3UhQIIvBoA0E830810M91MN9PNdDPd/ulmupluppvpZrqZbqabe89DHCiDv5GzaossZGYBp2PFIFqKdmMXIKW85edCB/RT11SD3JMQidRlL7n2ufRH1jVkFUNVc3NaZ7DP0T7/112kM1Qc3RDG0K/4uN7CPC7OmtFRZK3Jy3fhSSySKIZXopTsnIhN69JjLHJYYnfpZu44hnV+UkhG/lPd/D+fIVwWtdhhupVPJmtsLFIhjHA7UUqY4fPIQ2qdKxviqH2sugJ2nC+1ZdV0vEF3RGNcMd4KdvIXaJnujdPrKj4ifkeX2f04avjEbqO0ogI/rD7zhmy6GKG/2w32IetIX5vE9DbrS+CNy4sbmgXoiaug48lV4bVKZgluwPujd+Ioa+KjuntypepEEvl/YYCYTq6w4aaReGMShwLkC4nvq7jFKJmLpoepHJTag/h2aMklShou+tyip5wm67P2/CnvH7K6zuq+KGvy2rkkrR4mc4dpUNTEFHDId9TXQiST3RxHO0lHNgNFIA/Ub1kC0pOlNBf77EtyZ0ejxvikzySL8C8hNWyyc1GvcBCusv/otvBO3YSj+KvvRlKgoNaF/GEB64prsx8qFRwVJcRmMk8l5E5swfHMPuhlr9DmtrLeqs7KOrCMQSpeGW/zH5F2dc0AXZhcp9IthLZyuxpHrkNnp0JfnsY+55XkAtgSOvsWzps8uoJ5GtpAXRWZ5TK9cEM1WVRWC81ZUstPZHHkC7GDjZfl7BJ+VcXkI8RfVIMW0Jq95oxE0R+MDQnMX97DPhYjEXzHM0LvUNyODhdDCvJdNmXlfFp0RsbBNclTj8hpXofsCgVYsAnwPRTNTiTLxZkQW43BmK6wHk7Y0iSdXIfyK8/aQULdx1/hJc0JkRE/UgNDc/dGZWanTCs2WQ0W6Xh7PZGuDMXEaLtIRMZcZAM4ieOwO661Qf4xVyhLOOA2mLe0JyvIDrBhUA42ioUiMmrHJ9te6jwtbQ6xWrKf/ED3qKJ0qvzO2of57KkcyMBvNZndbLTX/iWNaWTezm9E8cleKOSEXK1B3LDfeGk4yx/b7L5+uAvp6UVC/UYAhvPLvSwTWm+qqO5saYjh79LadBJaAR90ct9S/GGZ7Q1zhKyTOUJ9MzT85IldVjLLduUOqovEaASJbXeZ37oFv0w/sOGhvMzpVrL/2MeQx8+ldfQU/QBXIqn8NtHAHjCzaTJk+CDS0e6Wk8N7GEDgoR4rG5M/Zig/LD6hEr6VHmxzmijoKu/oZ+p84oEeiwegquE7pBZPYXEoyLeQ66wRicLXmOzWoib6mq6KUoWxuriq62OQh647TUmn0RuuIjtPfuEkcMQtwJ/IaJabRRe9fRX2Q8Z1L2UNlMclpfMFdKYr+XkVEeb6vChZuOBfhNl+l/hly9L0/mzYIxPhBq4oimlnB273mkgwnr+S7Vnp8Fff8/3VC7IJCtqZ9AxZRnujo3wjmQ9n7WtayxwgvUhUNtJ0UjlEU9vPFhePxDLfkl6z43hhdQSW+xbyKooJEEwqTOkL1VHWc1vReFaVxbcnTGM2Uq1XNXRPos0bdtI8VBKXcZdCV1dNpLcL3DE7Cqfmi2w5JGhGFqATTUhzy7sG2+a0II4ZtupikC488mt9abdTvpYXVALXBU6wNzYLXUTPQwTxH/nNttjKDA7pQT47mopOQmxzW/f3GVhXWoguEUl5EHcUoKm8LdpiMoZV9JONpzZa7wa7hG4XzxvquHj2s5lsIrFbtrbew3+SKbiK6Ry+whAyXrTBC0kgDfwZHNOMNRnwOjHVVICdOGVo6LuFsn6GTKN6u4IeZqtN7B6vzlegD7ioW8i/u430kbtO2pABrgTPwb+xchSZ7jK/V6KxPEWK+K+oBXFmeuikt+HzrIU66KQsI9bRaGqQfKqSkMNumbnN4/ljkFsPxqnDElSF32L17D8UhxbUI8xnuwk/0znwXXcGGmD4QpPo5n6kTod70Zb2oI8Y6pFJKiuLoab7bXBEj+CXFTOH4A4kV/1JNjNRLrexaEX5Ht0xQ1RRskzmhCd+rmnFi9hLeqHe7svy7Lq+/+Mq6am+A/X8e+iptvqcbIjzqCOfbW6SpKQ22gPt8HgTFUMPd9kWgKd2O45Pr0EuOlK8waXFfriga7sXrLlKZZbrgeaPnmsrurd+n2H8hugjc+i1OCpJj2vYPyQ27+lT6/f4JM0c6sJIHwm/8AJS4tXuuo6g9qOCjvOZIrI9ZpaaauQAjwb9eTG0RMYPr2y5AHv8YhZLHvZl+DdQqrI5Z1L4QawT/FOLoQCOLR+EyTIrjcqb6YtiA4mg0/L27reYYg7JpvSVOM7G+p2uIb1iJ0hE+/DvvLW+qqfL034nLU5GQh02j8aHi/aDLS2b4ncYk/OcE+V+hhNqmF2rs1j4a1qziXYgaaDWQRetSbOwC60J8VhFSIf62k2osy7FXqpdrDAdZbuQxf5ZOCGLy6Reago9xBydmN9HBdUqX9VtUYdIKZOGbGAFxEDXjLxDmeVXsd5WIOmlhN0kqe2r84o1upy+z9KLRjY/ui5qGkhNiqoL5iXN6hPbeyGa+ckKwRM6l51Ao+EG/yKruXNsrWvHkuDPKKctS4bYRnq7eIQX+at4s8lD2ovy+D/xlXUWuf2jsNiNQx9xDRwjLAgJUSd5AvfTD80U0Qk91fP8DTkBfaXx1Qhv7FMXifZRMw0MlxtxVFVNzoOTrnjoK9ObCZy5HOwjbWgTib1kFo3BJa9t7oojdJK5RpGcifO66LQ2xuIHBvxcnMcLdEoUWc0QjVhs0k3f4dnoXvREODRB5KWJ2UFTX60WcXERxFQ7uo9mDz1YVbzQddDBHQ3QxD0MPfBnsdX+p9+xg+Sybmtum4hKoJW+CG0NGSQxP/TC0AulZ1tozfATr9Ld/QfURp1kg2FqaOQ2QBZ9JNyCoeQfO0eS+SOCa0lLshW6hnulWqHi/qrMTj6Z03gzB/LMzuaXmZXJSUm7nSKACjQDVzafbiNTqUayYpjDNpqhqIzf4SfRU/KF6S+vo0MhAS/v36BoolU4JbKQO3S3nmAL88puH0GoN6tF3vg2rCzscLVcUbmKzHS/dFroBdGk8bP4Hx8DRotKtJdMa4YZKhvR2OgbnULv+lzYUfjhFusD6KaLR8aHFSSPjYmT2MP6tU1L76u4uqJYrqawEqqpW+Onm4G6KIw2CU0Z29/EIc9gKVwjH3wxNV5v8fmxVunIGB94PxYBV+I3RRM4IO8x7Ab6ZXi3aoEeoUXmtzqHVrGCsrUYpOvIFXSMgX4YQp1Qmp6xf/Ae8gR1U19NUzEdSOjApK9nPuoItqt5HE7TXPIm3sff2fm+SbioN9GcPLltyTLKeeGBjGr668sYsfuymdjM8uHjYqL5BLn4SFqRdjbnZJKgyFHIA51lEjEebtEMfqN7LlORlgreiM3B26G2g82iqssbZBQq6k+rGn5J+MMvsVRus95vMpFR9K9K4errLmJFSMO/iepoBu6CfptR4QzqxpOYH6ERP4xmqS4uKzz3V2RS0SnMNwnYKvdW5Bd16FdS0kWlDeQ2VIMEJtgeVJ7GZIdDYQldWQ6UVK2mM1l000/MRyn5GpGZDkRbQ1RUCs/HLcMDV4hV1/OkEZFpRX+f5zfSHGQR7W2obdeiMnK3qQarTK7wEiq5vTqWXayqhyF4By5l6+HDPKK4AZtVRnoHjVBv8Syd1VocyY2UP9g8c15PpXBNVIET8MnVd8/oNlaGcnZJBZoQ7uAe4SjJAWNdX3AkNrQTQ+ClmMxO23i4nXseStC+4agkPDYeChdcOzLRJ2f/2S+ukJqsW/tvKoN4bP5/sOpHxuN5qC3p5VbaizIefWBKkKWkCc+DO5paPAHAP7wQj+VFRVp/zhPy3Ufw+8I4VsE1QVPtS1ZLf6eJ5Qr3Se3GxfURld71EhvEHJXVbLdJzUL/2nk6nX1mGcxdXUpvIg2gt7rADrkoYq0ogKbYXyK1pOwljuEO0rykAh5k2pMp6hR7rVO7h3IY2Y6gOYpsBqhWfp/sQcbbZa6m7uge0dx8pUgjd9GY5CyUldNEXX3L5JRLaHP2G5UhDtfnn8Qk3sak8Y1dUR5BatyTnyTR2PWwnCVCZe09NdwLG8tpvl3nJCd8dfzPNFMp1Wb4YuuihKIPWkP2k5I0o4OVJB96wDby2Oy2TAwv9VAxh8dFJ9EvU1S390Pdekx8d0jrxgik35GaLDoeZR7ZhH4IqyzO+/WiNzkkGNrOm8MvN4dmom9kbtuCzgy14K097SrhJuoeDEMJ7CI5Tjwn+3AmfjkUQpXUTR+DzdDPKVRgh23w1c0MUoI1EYchky6st4hefmS4bhZhr5vJ9/QYfUpbywukv9iib4S8msMqOE6iqH86px6L3oubJike6fJBB1ODDTZb6V+fAvapLL6DTGQ+2hm2k1svL8litoeKxZaRIXq2/U3HsDb6ghQBJqP4OB29iP4Lv/FaVZlctV9QM5tC1UGRbCWRBSfQs/UOFAGtlhX8VJJMLTD7VQY6HRU23ehdXAYlJHN5FlkRvXQHdDzx2I8Lx1A3sxTd8MXdOjVKH4BCOp2pIx6zrHwar6qO6uYB3FaXXdYNycNXCUNlY9TFLwq5SFuemg60UdhieVa8hml4v/2sHOsDNV1JGM5zmx/U2qKhk/lq+7jXaCuuYxaTPba1OuMHhY16GiuJVonzKBUtjEDVtwPxJP+cXUaRfD/1w5zS0Ulr9DXcQPnIK39Xdgkn+WJahGzGkI1cda/xFhfNn6KP1R7c2Y4JZSBnWK26kkJhs51E/tGk8m5oInvSjOI5risjuorqlI8X0oZh+JmKQeuhn7KLjKmvmd6iCVnIKtMH5KOM6zGu5nP5hmixMLo8Ge0P6jWyD0ukR7F0lqIPEMc/gv0OIsqZvCSug8eZ964gnYXr+LsqPmojHrG0apiIzg6TtkyHc7BHIDzTXuL/yQ38Dhsnm5OPfCorYK/LFTKPOU4xr+m/6WzydVCmPWwM5+UuN9e1Ce/8TRbfdJVzbCrWQJTUO+R8V5Ouh6m6T2jpqllYDfew5Ylcb1teraRxUFb8xxp6zFWH+eqtbIhzomc+DRunqvv3doVoKfOEJGoRKilzmAt4B69k+0FyN0m2ED5ss6NkNLTbn1LDAmHU/QDBj5oU8j9cxLxi2dUd+z5E8RfNT9NUHvApzRU/Bv1R0MEPlER9Nzuhpb/lhmsLxUJfP8EkYWdUCbyW3QzlbTco4AfhKEDNUfeY7pLt8U/a063mUaGD+4wtofwtmo0L2WWqlSxHErH0aDltYsbwqHqNq2CnuJ3qdKjJh/hlYYrsKLKwwTy2eOnzyrIMB1A0rmhiNc3Iz9tkvJt44ZqhJQ70F+jhW8CIgNQuO49/Q8bcJ5NxWlaVj6Yx/VVIZWeY2uK+zuw3hSEhIu2hE5NLfiC9p//I7vq6i6+fioJwF2Uyf2lzHoGt521FPlUJrH+AioQzvJtcJnaGEwHewSXxGFExyX7y81hVsQGng6shr9lG74TM5KdX/LyLIevpKyin6sz/Qj/0MjTQh2g594Yct6NVPL5QNUC3QlX/RR3hOXE9th5Nhf2hBswWfdVZVJsvMQNoGnOVfvNx6Qudgo9Ra/hMVJV8wdF1XQwFSYqwzgxjkVQ9kS+cZjHEhzAK6qMKYlZIjg+ZGqIvykCWBy4T0dlkBykCq33WsIAOAoJaQjH/V5w1uekes5plQOPRfBuTFmGvWRueVX9VW2V7GcccoE90CTSW7cXzaU+9hdflUeUTkk001/PDCAnbTRXb2h4jPeCZ2O0Gh1JuOu2M97PnZjBd6QrJDuqBL60+kuH4BK+Fo8uzLjmaoO4Z4DvsCpZM9DJtlWKvUEnVmTVVj/SOUFmOxBHCZV7CJJETIKA8rIuZKavxzKaxvQSlxD/exg9g130ifoH20pBJPKAz2F+bwyVUq2Qrd98mshdVNhVTtjJXSFx4wzegSfhAKECfcY1u4Wamu3pPqogO+Fu4bifDU1MZRfepxAh8EeLYn0i4Ey6NWwYD4Yhp6hfK8uiGimFPubcsYXiI/nO58QmN5V4+zm1kpdl3AtoeFLF0MT0Wbqk5KJ37rmqFTWYR+4vLsGN4BM3uGoYUJgLv5irINGiw+upKhA3qOIxkiQjVGfR+uo7dRAv4B1WLbqApcD472903Hz2T6/0jmR6G0xWmEWz2g3U7uYZF1FNgKX7PK5p85lXoGMBAMzzA17Kb+EnZmFfk/eghNI4W9r1pGjGZ14YvbIHcHQbYy/Cbb0FTcW61x83ySGRGjc0SOC/qqKE+p28MfV0hfJhNV0P4VdGQdICcYrKPz/Lb306IfSKl+66z83LiKPokGeuq4pI5oqFMzY6FSQC50RXxgifnnckXEUfkZS9kFNJCn0b38Q4aWXRRt2Rl/pLMkll4fdwuPNaRXW11xT1lBdE2KfBblwAdDz/dNhIJtSZZzFtdWq+BqHZPKB8ukbZwCkf0Ne19X1hMFAvsLZIWFyPGnTe36TC9Ej8U5Tkk8J/0Ai9JpnCJ7iLz+VWzFqqEdyaXGqSWk8I4vYovWonifKW2Iok7p8boFaozGsinis86MpknWoeJoazD4OW5UEXvcxNoUvdDdDdP5Ag7V2xypbHy/eGcjY56yF2qGQwUz1xSaE2jit++h9mpYZpqYwuYyrAGT+QlXDsjVSrUXcwiiaCxfsYOm2lmszyrh4tY/LbrY9+GQqK8+SdSyYO2qsmqbvEi+old7nrCaL1Ed7Gx8B05gJ82C1FGFds3FM9tDvUJa9E4vNJVZTLzy89i2dg4sLQmFMGZ8TkH61lUf4Q94D1xRPTYMZst/IK9vjhskJdJeTdKfXNMdOfvVR5eDS3STUlGczIYHEvdhxZ2LR1ud/NYpqYIMqEs7P6yTbIpz8eru61QjH4mg1AybF17mgESqAN4PRnl8uvTsBpT9SlsJ4tgBKtjIZXua36TRmirSIo+iqX8FIol7pKx5CNEox1EdpGC3WWR5C4/Qf+wm3Rc9Z+fhdraPGi8KsWdT0Y7idMylzVwldSXGf1MeGZSiFGe+1tin67kr6ixag26TYYaSi771i5ueEjr+U4+neqPY6H37KaEFzBGFqfpuZIXUEsyIJST01xd2walDwvtGd0Xr7al/ALSXKbRNHSh1/xe9cHVDs+1hv7ul6xPX5ppZAjlZm446vuIsuiiW+rf8Yhmil+Bc0N3Ej3UxAXcTzWdZxEhaN3HRJaX5VMyyR3jLXxZDTnkbrsM3cA1eD52UGL2imx3xA7FB2wN+c9Opo3UG3rZDeIn9Wz2kCfTRVwEesH2oCn0MRHFzZWZcHm4y8GmVp/4BBzd7pXZbBd+3Kehjfw/N0duh2e4hTmuouCuvjrbo4uZaX5DqOyT+PxsJXTBMIOfstFd2/BF/8fnyximG1rFk/Bb6AWOywqHHSYhPhjy0zjuOWSndcUAMwVVtGtDZrFT1FCF+Bboxaz+wYujXVBNPSRt3TBel3xHhVk/9xASyFLqjEhr+/FFxMh7YiKktkftn5CDNDW7xTd7kcU1MJRWMm9Vb55YbVIl5D36BxqFk6osFmqjl8GTjLp7qCnHWMPa24NoufkdWuo7+j/zxUx0N+hbaBqQW6VGia52kcsnkb1p1/I5vgo26CIertrZgMfT8jqxrkeJfAMtwmAWX95Uo/g814vXll5BStHMzzG50EN8RE4g1WgWNNwtUpG10jl8S1zZvvfT7Urzi5eCKOEtweoMJWKejoFKoTY0TliqpCCU+WsqI7ywhpzipVFyeKKikfE+o63t11qguWAP/Wau6OEQE52l5dkq3BGeqwimFMnktyn4J4uoS3aNakAj8XbqStjpC/nXpL354q/zo3SxATjjuEtpr7H5uiodjVHoivbLhvoxnCDdMdZn/RMz0x/k0UIz3lv/EdN0K3pYdrO72VeeH24La2aqJ7wjWeFLhjlus/jC89FaKC05oN6biWqpgGjYshGQTpdTP8ggEQ9mkuTmgqglsFkrE4UBUNreIbnEMHcE9xRN8P2wlZTjr0xKv1HOEvn531ApJFLt1WdXRk/UKSyjmdxIkke903Ftc7EEC1PVDiaNfToRT/c2j0km6I6mKqcW44GqobuOOyp4goU26hWewpfxE/QZaoo2+L50vx5N8rmG/IefiDeJeuqDiAUFwjqeWX3VU11fdoFn04N9PVhNJoSdZoDMztbZ42YhfaMvueW4Irkmp+sS+hlJLmL5y6aI2KYvhGr6kG1kopid1vuiNlY4aXO5KhJmmTo8AWmF8/qUugcq5rLxb7gCiunu2jnQhZ2C2CGD6gw71CMzw13kQ0xEVogsZdVtHHjLD4j7LiIvxpxswLwYRguoCG6H7isSi/qwwQ0Rp8U4/IeuNq/oSDsDfto8dJx9ExJJyVqwX3S9Hi2TazjLCsNtu1984NXMdnbPLbaTdCv1Xpf02+UTqMZe8QWquBlDKoeEtp3e6+qTa7gV+SnG+VIhOeWop/0g56o0EFf+QC1wOdwRPyJH1U/AvgPJYffZMqEtzo4jhfoiKdOyrT7uqqA1NIvricqK3ei1gBW8DwE5zM8Jl3CCUC8MRpH0EbscEoihOptLBntDP+/CH5RWLkfvQhn1TCahR/w201XcYEvUGZbJbnajXRWyh/Xgt/TqkIBOcEXkPBsZHtiaaKlMbWbDSdGf7ab3aSl51fe3qf3nMM3e9vF5W5/BwQT/21ZQ611W2YGPtb8hHbuuiBP+nG6Op6HVqJUlEMUexs1YH5qbTBILRCY2nORVUeh0V1X/hwrwJuy5u2KWupx0Bj1NXtBsuKkezra58+Ez9NGN1R3x0VRindg7mRGZMA8XNOd4jXCIL+IfXYMAN3RSbVUT+oTFdmfMOl1R72SvPQtpwl95zZUxn+g9MtnVMOvDbXVcRnOd+Hr6iDcWH0g6/xRvD99FYtwJR/YlbD05AmFUneyl71x3W17k8xNRMrnJR1djaUGxlsThY6ARjgBPUSc7kkeH/GQIKilgG+8KRCv8mVLcW+Z300I7NBzNJ0XZZhSR1OPSLmHdMOJF8Wf5HzD9K5zFFXG/sFIewu1RPFSOrULH1JTwUR1UMdUvNQAv5jHwTb3KxuWt8StXkuz3mfklNIcc0z3DPyhn9opkrClsVI/xqRBbwytYQq7gQTYNXi4bmGPyjk+CYuiHfj8fp3vDMZ+QZSRvzW6Yq7OilGQHFMfx3GyZXBa2DMa7S2YeuWeHyMy6p3lo29LNtDR3rq5Ljf+RI2guPkcHy9rkF2mJEvvqNI+4jRUs50FfgWy+u5uDaynIAq15dF4tPIB9KIp8L7PDUv1NVoWWJht6iQrIdfgcLu05vsbHBkGc5mECeyC2spv8F4rG++C80ICkoNXwOlIwXEOJzSyX23UIU0h/mklVoY9lfNdVL/E36VD20u4QbVxm6GeKyfGkEvrFUqPR/H9s/XjiBWp1EAAAAABJRU5ErkJggg==",new Promise(s=>{a.onload=()=>{const r=new z(t,{data:a,wrapS:t.REPEAT,wrapT:t.REPEAT,storage:"halfFloat"});e.setResource("NoiseTexture",r),s(r)}})}initFrameBuffers(t,e){const{gl:n,renderSetting:a}=this,s="float";this.lightBuffer=new j(n,{color:{0:new z(n,{width:t,height:e,storage:s})}}),this.accumulateBuffer=new j(n,{color:{0:new z(n,{width:t,height:e,storage:s})}}),this.integratorPass.setAccumulateTex(this.accumulateBuffer.color[0]);const r=new z(n,{width:t,height:e,storage:"float"}),l=new z(n,{width:t,height:e,storage:"halfFloat"}),o=new z(n,{width:t,height:e,storage:"byte"}),c=new Ge(n,t,e);this.gBuffer=new j(n,{color:{0:r,1:l,2:o},depth:c})}syncTracerSetting(t){Object.assign(this.renderSetting,t)}updateMaterialParams(t){}rebindTLASBuffer(){this.integratorPass.rebindTLASBuffer()}rebindTextureArr(){this.integratorPass.rebindTextureArr()}updateEnvLight(){this.integratorPass.updateEnvLight()}updateMeshLight(){this.integratorPass.updateMeshLight()}setEnvRotMatrix(t,e){this.integratorPass.setEnvRotMatrix(t,e)}enableBackgroundColor(t){this.integratorPass.enableBackgroundColor(t)}setBackgroundColor(t){this.integratorPass.setBackgroundColor(t)}updateTileNumber(t){this.tileCalculator.setTileCount(t),this.reset()}setTileCountSyncRender(t){this.tileCalculator.setTileCount(t),this.tileCalculator.reset()}updateBounces(t){this.integratorPass.updateBounces(t)}setEnvMapIntensity(t){this.integratorPass.setEnvMapIntensity(t)}setBackgroundAlpha(t){this.integratorPass.setBackgroundAlpha(t)}setEnviromentVisible(t){this.integratorPass.setEnviromentVisible(t)}setToneMapping(t){this.toneMapPass.setToneMapping(t)}setDenoiseColorFactor(t){this.svgfAtrousPass.setColorFactor(t)}setDenoiseNormalFactor(t){this.svgfAtrousPass.setNormalFactor(t)}setDenoisePositionFactor(t){this.svgfAtrousPass.setPositionFactor(t)}setCameras(t){this.integratorPass.setCamera(t),this.gBufferPass.setCamera(t),this.lastCamera.copy(t)}updateSeed(t,e,n=!0){const{enableDenoise:a,integratorPass:s,sampleCount:r,numUniformSamples:l,strataCount:o}=this;s.setSize(t,e),s.setFrameCount(r);const c=n?(Math.random()-.5)/t:0,u=n?(Math.random()-.5)/e:0;a||s.setJitter(c,u),r===0?s.setStrataCount(1):r===l?s.setStrataCount(o):s.nextSeed()}clearBuffer(t){const{gl:e}=this;t&&(t.bind(),e.clear(e.COLOR_BUFFER_BIT),t.unbind())}renderGBuffer(){const{gBuffer:t,gBufferPass:e,svgfAtrousPass:n,gl:a,screenWidth:s,screenHeight:r}=this;t.bind(),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.viewport(0,0,s,r),e.draw(),t.unbind(),n.setGBuffers({position:t.color[0],normal:t.color[1],color:t.color[2]})}svgfDraw(){const{svgfAtrousPass:t,lightBuffer:e}=this,n=t.draw({light:e.color[0]});this.toneMapWithAAToScreen(n.color[0])}addSampleToBuffer(t,e,n){const{gl:a,integratorPass:s,accumulatePass:r,lightBuffer:l,accumulateBuffer:o}=this;t.bind(),a.viewport(0,0,e,n),s.draw(),t.unbind(),r.draw({inputTex:l.color[0],outputTex:o})}newSampleToBuffer(t,e,n){const{gl:a,integratorPass:s}=this;t.bind(),a.viewport(0,0,e,n),s.draw(),t.unbind()}toneMapToScreen(t,e=[1,1]){const{gl:n,toneMapPass:a}=this,{renderToScreen:s}=this.renderSetting;n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),a.draw({light:t,lightScale:e},!s)}toneMapWithAAToScreen(t){const{renderToScreen:e}=this.renderSetting;let n=this.toneMapPass.draw({light:t},!0);e&&this.fxaaPass.draw({light:n.color[0]})}reset(){this.forceUpdate=!0,this.sampleCount=0,this.tileCalculator.reset(),this.clearBuffer(this.lightBuffer)}setSize(t,e){this.sampleCount=0,this.screenWidth=t,this.screenHeight=e,this.reset(),this.tileCalculator.setSize(t,e),this.previewSize.setSize(t,e,this.downsamplingFactor),this.initFrameBuffers(t,e),this.svgfAtrousPass.setSize(t,e),this.fxaaPass.setSize(t,e),this.toneMapPass.setSize(t,e)}drawPreview(){const{previewSize:t,lightBuffer:e}=this;this.updateSeed(t.width,t.height,!1),this.newSampleToBuffer(e,t.width,t.height),this.toneMapToScreen(e.color[0],t.scale)}renderPerTile(t,e,n,a,s){const{gl:r,screenWidth:l,screenHeight:o}=this;r.scissor(e,n,a,s),r.enable(r.SCISSOR_TEST),this.addSampleToBuffer(t,l,o),r.disable(r.SCISSOR_TEST)}drawTile(t=!1){const{enableDenoise:e,integratorPass:n,lightBuffer:a,screenWidth:s,screenHeight:r}=this,{x:l,y:o,tileWidth:c,tileHeight:u,isFirstTile:d,isLastTile:p}=this.tileCalculator.nextTile();d&&(this.sampleCount===0&&this.clearBuffer(a),this.updateSeed(s,r,!0),e&&this.renderGBuffer()),this.renderPerTile(a,l,o,c,u),t&&!p&&this.toneMapToScreen(a.color[0]),p&&(e?this.svgfDraw():this.toneMapToScreen(a.color[0]),this.sampleCount++)}renderTile(t){const{lastCamera:e}=this;!xt(t,e)||this.forceUpdate?(this.forceUpdate=!1,this.setCameras(t),this.firstFrame?this.firstFrame=!1:this.drawPreview(),this.sampleCount=0,this.tileCalculator.reset()):this.drawTile()}renderFull(t){const{enableDenoise:e,integratorPass:n,lightBuffer:a,screenWidth:s,screenHeight:r,lastCamera:l,movingDownsampling:o}=this;if(!xt(t,l)||this.forceUpdate){if(this.forceUpdate=!1,o)return this.setCameras(t),this.sampleCount=0,void this.drawPreview();this.sampleCount=0,this.clearBuffer(a)}else this.sampleCount++;this.setCameras(t),this.updateSeed(s,r,!0),e&&this.renderGBuffer(),this.addSampleToBuffer(a,s,r),e?this.svgfDraw():this.toneMapToScreen(a.color[0])}render(t){this.enableTileRender?this.renderTile(t):this.renderFull(t)}dispose(){}}var bt=(i=>(i[i.Linear=0]="Linear",i[i.ACES=1]="ACES",i))(bt||{});class dn{constructor(t={}){this.pixelRatio=1,this.geoType="Mesh",this.targetSampleCount=0,this._viewportSize=[],this.inited=!1,this.isBuilding=!1,this.needsUpdate=!1,this._bounces=2,this._backgroundColor=new C,this._enableBackgroundColor=!1,this._backgroundAlpha=1,this._envMapIntensity=1,this._envRotation=0,this._envRotMatrix=new O,this._invEnvRotMatrix=new O,this._totalSumValue=0,this._toneMapping="Linear",this._downsamplingFactor=4,this._enviromentVisible=!0,this._tileNumber=4,this._denoiseColorFactor=.05,this._denoiseNormalFactor=.02,this._denoisePositionFactor=.35,this.isFloatLinearSupport=!0,this.forceUpdateOneFullSample=!1,this.onBuildingProgressCallback=()=>{},this.canvas=t.canvas||document.createElement("canvas"),this.gl=this.canvas.getContext("webgl2",{alpha:t.canvasAlpha||!0,depth:!1,stencil:!1,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0,failIfMajorPerformanceCaveat:!0}),this.checkSupported(this.gl),this.sceneMode=t.sceneMode||"Static",this.useWebWorker=t.useWebWorker==null||t.useWebWorker,this.renderToScreen=t.renderToScreen==null||t.renderToScreen,this.resourcePool=new We,this.environmentLoader=new J(this.gl,this.resourcePool),this.sceneMode=="Static"?this.sceneBuilder=new je(this.gl,this.resourcePool):this.sceneBuilder=new $e(this.gl,this.resourcePool),this.renderer=new un(this.gl,this.resourcePool),this.featureOption={supportSGWorkflow:!0,supportUVTrans:!0,supportTexWrap:!0,supportAlpha:!0,supportAlphaShadow:!0,supportCastShadow:!1},t.featureOption&&Object.assign(this.featureOption,t.featureOption),this.rayParamsOption={maxAlphaDepth:5,minIntersectDistance:1e-4},t.rayParamsOption&&Object.assign(this.rayParamsOption,t.rayParamsOption)}checkSupported(t){if(!t)throw new Error("webgl2 no supported!");const e=Vt(t,ye);for(let a in e)if(!e[a])throw new Error(`require extension ${a} no supported!`);const n=Vt(t,Le);for(let a in n)n[a]||(a==="OES_texture_float_linear"&&(this.isFloatLinearSupport=!1),console.error(`extension ${a} no supported!`))}set bounces(t){this._bounces=le(t,2,8),this.inited&&this.renderer.updateBounces(t),this._syncTracerSetting()}get bounces(){return this._bounces}set envMapIntensity(t){this._envMapIntensity=t,this.inited&&this.renderer.setEnvMapIntensity(t),this._syncTracerSetting()}get envMapIntensity(){return this._envMapIntensity}set enableBackgroundColor(t){this._enableBackgroundColor=t,this.inited&&this.renderer.enableBackgroundColor(t),this._syncTracerSetting()}get enableBackgroundColor(){return this._enableBackgroundColor}set backgroundColor(t){typeof t=="string"?this._backgroundColor.fromHex(t):Array.isArray(t)&&this._backgroundColor.fromArray(t),this._backgroundColor.SRGBToLinear(),this.inited&&this.renderer.setBackgroundColor(this._backgroundColor),this._syncTracerSetting()}get backgroundColor(){return this._backgroundColor}set backgroundAlpha(t){this._backgroundAlpha=t,this.inited&&this.renderer.setBackgroundAlpha(t),this._syncTracerSetting()}get backgroundAlpha(){return this._backgroundAlpha}set envRotation(t){this._envRotation=t;let e=function(n){return n*Math.PI/180}(t);this._envRotMatrix.fromMatrix4(new V().rotateY(e)),this._invEnvRotMatrix.inverse(this._envRotMatrix),this.inited&&this.renderer.setEnvRotMatrix(this._envRotMatrix,this._invEnvRotMatrix),this._syncTracerSetting()}get envRotation(){return this._envRotation}set toneMapping(t){this._toneMapping=t,this.inited&&this.renderer.setToneMapping(bt[t]),this.forceUpdateOneFullSample=!0,this._syncTracerSetting()}get toneMapping(){return this._toneMapping}set enableTileRender(t){this.renderer.enableTileRender=t,this.renderer.reset(),this._syncTracerSetting()}get enableTileRender(){return this.renderer.enableTileRender}set tileNumber(t){this._tileNumber=t,this.inited&&this.renderer.updateTileNumber(t)}get tileNumber(){return this._tileNumber}set movingDownsampling(t){this.inited&&(this.renderer.movingDownsampling=t),this._syncTracerSetting()}get movingDownsampling(){return this.renderer.movingDownsampling}set enableDenoise(t){this.renderer.enableDenoise=t,this.forceUpdateOneFullSample=!0,this._syncTracerSetting()}get enableDenoise(){return this.renderer.enableDenoise}set denoiseColorFactor(t){t=Math.max(t,.1),this._denoiseColorFactor=t,this.inited&&this.renderer.setDenoiseColorFactor(t),this._syncTracerSetting(),this.forceUpdateOneFullSample=!0}get denoiseColorFactor(){return this._denoiseColorFactor}set denoiseNormalFactor(t){t=Math.max(t,.1),this._denoiseNormalFactor=t,this.inited&&this.renderer.setDenoiseNormalFactor(t),this._syncTracerSetting(),this.forceUpdateOneFullSample=!0}get denoiseNormalFactor(){return this._denoiseNormalFactor}set denoisePositionFactor(t){t=Math.max(t,.1),this._denoisePositionFactor=t,this.inited&&this.renderer.setDenoisePositionFactor(t),this._syncTracerSetting(),this.forceUpdateOneFullSample=!0}get denoisePositionFactor(){return this._denoisePositionFactor}set downsamplingFactor(t){this._downsamplingFactor=Math.floor(Math.max(t,1)),this.renderer.downsamplingFactor=this._downsamplingFactor,this.renderer.previewSize.calcDimensions(this._downsamplingFactor)}get downsamplingFactor(){return this._downsamplingFactor}get sampleCount(){return this.renderer.sampleCount}get size(){return this._viewportSize}set enviromentVisible(t){this._enviromentVisible=t,this.inited&&this.renderer.setEnviromentVisible(t)}get enviromentVisible(){return this._enviromentVisible}_syncTracerSetting(){const{geoType:t,integrator:e,sceneMode:n,bounces:a,backgroundColor:s,enableBackgroundColor:r,backgroundAlpha:l,envMapIntensity:o,enviromentVisible:c,featureOption:u,rayParamsOption:d,renderToScreen:p,_envRotMatrix:f,_invEnvRotMatrix:h,_toneMapping:m,_totalSumValue:T,isFloatLinearSupport:x,enableTileRender:S,tileNumber:v,enableDenoise:g,denoiseColorFactor:b,denoiseNormalFactor:A,denoisePositionFactor:M}=this;this.tracerSetting={geoType:t,integrator:e,sceneMode:n,bounces:a,backgroundColor:s,enableBackgroundColor:r,backgroundAlpha:l,envMapIntensity:o,enviromentVisible:c,envRotMatrix:f,invEnvRotMatrix:h,totalSumValue:T,toneMapping:bt[m],supportSGWorkflow:u.supportSGWorkflow,supportUVTrans:u.supportUVTrans,supportTexWrap:u.supportTexWrap,supportAlpha:u.supportAlpha,supportAlphaShadow:u.supportAlphaShadow,supportCastShadow:u.supportCastShadow,maxAlphaDepth:d.maxAlphaDepth,minIntersectDistance:d.minIntersectDistance,renderToScreen:p,isFloatLinearSupport:x,enableTileRender:S,tileNumber:v,enableDenoise:g,denoiseColorFactor:b,denoiseNormalFactor:A,denoisePositionFactor:M},this.inited&&this.renderer.syncTracerSetting(this.tracerSetting)}async buildPipeline(t,e){this.isBuilding=!0;const{sceneInfo:n,camera:a}=function(s,r){return{sceneInfo:Ut(s,!0),camera:Dt(r)}}(t,e);this.sceneInfo=n,this.camera=a,this.onBuildingBeginCallback&&this.onBuildingBeginCallback(),this.environmentLoader.load(this.environment),this._totalSumValue=this.environmentLoader.totalSumValue,this._syncTracerSetting(),await this.sceneBuilder.build(n,this.onBuildingProgressCallback),await this.renderer.buildPipeline(n,a,this.tracerSetting),this.setSize(this.canvas.width,this.canvas.height),this.inited=!0,this.isBuilding=!1,this.onBuildingEndCallback&&this.onBuildingEndCallback()}getRenderResGPUTexture(){if(!this.renderToScreen)return this.resourcePool.getRawResourceByName("ScreenPassOutputTexture").texture;console.error("Need to set init tracer renderToScreen to false first")}getMeshByTHREEID(t){const{meshes:e}=this.sceneInfo,n=`LGL_${t}`;return e.find(a=>n==a.id)}static linkMeshWithTHREEMesh(t,e){var n;t.id=`LGL_${e.id}`,t.name=`LGL_${e.name}`,t.tlasMask=!!((n=e.userData)!=null&&n.lgl_tlasMask),t.visible=e.visible,t.localToWorldMat.fromArray(e.matrixWorld.elements)}updateMeshTransformFromTHREE(t){t.updateMatrixWorld(!0),this.getMeshByTHREEID(t.id).localToWorldMat.fromArray(t.matrixWorld.toArray())}async updateMeshMaterialParamsFromTHREE(t){mt(t.material,this.getMeshByTHREEID(t.id).material),await this.updateMaterialParams()}async rebuildMeshMaterialFromTHREE(t){if(U(),this.isBuilding)return;this.isBuilding=!0;const e=mt(t.material);this.getMeshByTHREEID(t.id).material=e,this.updateSceneStructure(),this.needsUpdate=!0,this.isBuilding=!1}updateSceneStructure(t=!1){if(this.sceneMode=="Static")return;const e=pt(this.sceneInfo.meshes);this.sceneInfo.materialIndexMap=e,this.sceneInfo.materials=Array.from(e.keys()),this.sceneBuilder.rebuildMaterialBuffer(this.sceneInfo),this.sceneBuilder.rebuildTLAS(this.sceneInfo,!0),this.renderer.rebindTextureArr(),this.renderer.rebindTLASBuffer()}rebuildMaterial(){const{meshes:t}=this.sceneInfo,e=pt(t);this.sceneInfo.materialIndexMap=e,this.sceneInfo.materials=Array.from(e.keys()),this.sceneBuilder.rebuildMaterialBuffer(this.sceneInfo),this.renderer.rebindTextureArr()}async addSceneFromTHREE(t){U(),await this.updateScene(t)}async replaceMainSceneFromTHREE(t){await this.updateScene(t)}setMeshTLASMaskStatusFromTHREE(t,e){const n=this.getMeshByTHREEID(t.id);return n.visible=!e,n}setMeshVisibleFromTHREE(t,e){const n=this.getMeshByTHREEID(t.id);return n.visible=e,n}async syncCastShadowStatusFromTHREE(t){this.featureOption.supportCastShadow?(Array.isArray(t)||(t=[t]),t.forEach(e=>{const n=this.getMeshByTHREEID(e.id).material;n.workflow=="Metalness"?n.glossiness=e.castShadow?1:0:n.roughness=e.castShadow?1:0}),await this.updateMaterialParams()):console.error("Need to set tracer.featureOption.supportCastShadow to true first!")}updateTLAS(){this.sceneMode=="Static"||this.isBuilding||(this.sceneBuilder.rebuildTLAS(this.sceneInfo),this.renderer.rebindTLASBuffer(),this.needsUpdate=!0,this.renderer.forceUpdate=!0)}rebuildTLAS(){this.updateTLAS()}updateMaterialParams(){this.isBuilding||(this.isBuilding=!0,function(t){const{materials:e}=t;let n=!1;e.forEach(a=>{a.subsurface>0&&(n=!0)}),t.includeSSS=n}(this.sceneInfo),this.renderer.updateMaterialParams(this.sceneInfo),this.sceneBuilder.updateMaterialParams(this.sceneInfo),this.renderer.reset(),this.isBuilding=!1)}async updateScene(t){if(this.isBuilding)return;this.isBuilding=!0,this.onBuildingBeginCallback&&this.onBuildingBeginCallback();const e=Ut(t);await this.sceneBuilder.build(e,this.onBuildingProgressCallback),this.sceneInfo=e,this.renderer.updateScene(e,this.tracerSetting),this.isBuilding=!1,this.onBuildingEndCallback&&this.onBuildingEndCallback()}updateEnvLight(t){this.environment=t,this.environmentLoader.load(this.environment),this._totalSumValue=this.environmentLoader.totalSumValue,this._syncTracerSetting(),this.renderer.updateEnvLight(),this.needsUpdate=!0}updateMeshLight(){this.renderer.updateMeshLight(),this.needsUpdate=!0}getLightByTHREEID(t){U()}static linkLightWithTHREELight(t,e){U()}async addMeshFromTHREE(t){U()}async removeMeshFromTHREE(t){U()}cloneMeshFromTHREE(t,e,n=!0){U()}updateTextureParamsFromTHREE(t){U()}addLightFromTHREE(t){U()}removeLightFromTHREE(t){U()}updateLightFromTHREE(t){U()}addTracerInstanceMeshes(t){U()}syncCamera(t){if(!t)throw new Error("Need to pass camera into render(camera) method!");t.updateMatrixWorld(),Dt(t,this.renderer.camera)}setTileCountSyncRender(t){this._tileNumber=t,this.renderer.setTileCountSyncRender(t)}setSize(t,e,n=!0){const{canvas:a,pixelRatio:s}=this,r=Math.floor(t*s),l=Math.floor(e*s);a.width=r,a.height=l,this._viewportSize=[r,l],n&&(a.style.width=`${t}px`,a.style.height=`${e}px`),this.inited&&this.renderer.setSize(r,l)}setPixelRatio(t,e=!1){const{_viewportSize:n}=this;this.pixelRatio=t,this.setSize(n[0]/t,n[1]/t,e)}render(t){if(this.isBuilding||!this.inited)return;this.syncCamera(t);const{camera:e,lastCamera:n}=this.renderer;if(this.needsUpdate&&(this.needsUpdate=!1,this.renderer.reset()),this.targetSampleCount!=0&&this.renderer.sampleCount>=this.targetSampleCount&&!this.forceUpdateOneFullSample&&xt(e,n))return;let a=this.renderer.sampleCount;this.renderer.render(e);let s=this.renderer.sampleCount;this.onSampleFinCallback&&a!=s&&typeof this.onSampleFinCallback=="function"&&this.onSampleFinCallback(),a!=s&&this.forceUpdateOneFullSample&&(this.forceUpdateOneFullSample=!1)}dispose(){this.renderer.dispose()}}export{dn as LGLTracer,it as Mesh,tt as PrincipledBSDFMaterial};
