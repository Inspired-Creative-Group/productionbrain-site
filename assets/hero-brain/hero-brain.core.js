var el=0,Do=1,tl=2;var Ts=1,nl=2,Hi=3,Cn=0,Ot=1,pn=2,mn=0,oi=1,hi=2,Lo=3,No=4,ta=5;var Gn=100,il=101,sl=102,rl=103,al=104,ol=200,ui=201,cl=202,ll=203,pr=204,mr=205,dl=206,hl=207,ul=208,fl=209,pl=210,ml=211,gl=212,_l=213,xl=214,gr=0,_r=1,xr=2,ci=3,yr=4,br=5,vr=6,Mr=7,Uo=0,yl=1,bl=2,en=0,Fo=1,ko=2,Oo=3,Bo=4,zo=5,Vo=6,Go=7;var Ho=300,Zn=301,fi=302,na=303,ia=304,As=306,Sr=1e3,cn=1001,Er=1002,Tt=1003,vl=1004;var ws=1005;var wt=1006,sa=1007;var Jn=1008;var Xt=1009,Wo=1010,jo=1011,Wi=1012,ra=1013,tn=1014,nn=1015,gn=1016,aa=1017,oa=1018,ji=1020,Xo=35902,qo=35899,Yo=1021,Zo=1022,Zt=1023,ln=1026,$n=1027,Jo=1028,ca=1029,Kn=1030,la=1031;var da=1033,Cs=33776,Rs=33777,Ps=33778,Is=33779,ha=35840,ua=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,ya=37489,Ds=37490,ba=37491,va=37808,Ma=37809,Sa=37810,Ea=37811,Ta=37812,Aa=37813,wa=37814,Ca=37815,Ra=37816,Pa=37817,Ia=37818,Da=37819,La=37820,Na=37821,Ua=36492,Fa=36494,ka=36495,Oa=36283,Ba=36284,Ls=36285,za=36286;var is=2300,Tr=2301,fr=2302,Eo=2303,To=2400,Ao=2401,wo=2402;var Ml=3200;var $o=0,Sl=1,Pn="",Ht="srgb",li="srgb-linear",ss="linear",$e="srgb";var ri=7680;var Co=519,El=512,Tl=513,Al=514,Va=515,wl=516,Cl=517,Ga=518,Rl=519,Ar=35044,In=35048;var Ko="300 es",Qt=2e3,rs=2001;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pl(){let i=as("canvas");return i.style.display="block",i}var Cc={},Ui=null;function os(...i){let e="THREE."+i.shift();Ui?Ui("log",e,...i):console.log(e,...i)}function Il(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Il(i);let e="THREE."+i.shift();if(Ui)Ui("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Il(i);let e="THREE."+i.shift();if(Ui)Ui("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ai(...i){let e=i.join(" ");e in Cc||(Cc[e]=!0,De(...i))}function Dl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ll={[gr]:_r,[xr]:vr,[yr]:Mr,[ci]:br,[_r]:gr,[vr]:xr,[Mr]:yr,[br]:ci},dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,wr=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Rd(i,e){return(i%e+e)%e}function Qa(i,e,t){return(1-t)*i+t*e}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(f!==v||c!==d||l!==p||h!==x){let m=c*d+l*p+h*x+f*v;m<0&&(d=-d,p=-p,x=-x,v=-v,m=-m);let u=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);u=Math.sin(u*M)/A,o=Math.sin(o*M)/A,c=c*u+d*o,l=l*u+p*o,h=h*u+x*o,f=f*u+v*o}else{c=c*u+d*o,l=l*u+p*o,h=h*u+x*o,f=f*u+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*f+c*p-l*d,e[t+1]=c*x+h*d+l*f-o*p,e[t+2]=l*x+h*p+o*d-c*f,e[t+3]=h*x-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f+d*p*x;break;case"YZX":this._x=d*h*f+l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f-d*p*x;break;case"XZY":this._x=d*h*f-l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f+d*p*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new L,Rc=new hn,Ue=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],v=s[0],m=s[3],u=s[6],M=s[1],A=s[4],b=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*v+o*M+c*w,r[3]=a*m+o*A+c*E,r[6]=a*u+o*b+c*R,r[1]=l*v+h*M+f*w,r[4]=l*m+h*A+f*E,r[7]=l*u+h*b+f*R,r[2]=d*v+p*M+x*w,r[5]=d*m+p*A+x*E,r[8]=d*u+p*b+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,p=l*r-a*c,x=t*f+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(e,t)),this}rotate(e){return ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-e)),this}translate(e,t){return ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ue,Pc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){let i={enabled:!0,workingColorSpace:li,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[li]:{primaries:e,whitePoint:n,transfer:ss,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var He=Pd();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xi,Cr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=as("canvas")),xi.width=e.width,xi.height=e.height;let s=xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Id=0,Fi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Dd=0,io=new L,Ft=class i extends dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=cn,s=cn,r=wt,a=Jn,o=Zt,c=Xt,l=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Vn(),this.name="",this.source=new Fi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ho;Ft.DEFAULT_ANISOTROPY=1;var pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],x=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,b=(p+1)/2,w=(u+1)/2,E=(h+d)/4,R=(f+v)/4,_=(x+m)/4;return A>b&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=R/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rr=class extends dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ft(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Rr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cs=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pr=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,f,d,p,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,d,p,x,v,m)}set(e,t,n,s,r,a,o,c,l,h,f,d,p,x,v,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+x*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,x=l*h,v=l*f;t[0]=d+v*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,x=l*h,v=l*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=x*l-p,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=v-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+x,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*c,p=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+v,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ld,e,Nd)}lookAt(e,t,n){let s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Un.crossVectors(n,Vt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Un.crossVectors(n,Vt)),Un.normalize(),zs.crossVectors(Vt,Un),s[0]=Un.x,s[4]=zs.x,s[8]=Vt.x,s[1]=Un.y,s[5]=zs.y,s[9]=Vt.y,s[2]=Un.z,s[6]=zs.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],v=n[6],m=n[10],u=n[14],M=n[3],A=n[7],b=n[11],w=n[15],E=s[0],R=s[4],_=s[8],T=s[12],P=s[1],I=s[5],k=s[9],K=s[13],Q=s[2],B=s[6],Z=s[10],X=s[14],ne=s[3],se=s[7],ue=s[11],fe=s[15];return r[0]=a*E+o*P+c*Q+l*ne,r[4]=a*R+o*I+c*B+l*se,r[8]=a*_+o*k+c*Z+l*ue,r[12]=a*T+o*K+c*X+l*fe,r[1]=h*E+f*P+d*Q+p*ne,r[5]=h*R+f*I+d*B+p*se,r[9]=h*_+f*k+d*Z+p*ue,r[13]=h*T+f*K+d*X+p*fe,r[2]=x*E+v*P+m*Q+u*ne,r[6]=x*R+v*I+m*B+u*se,r[10]=x*_+v*k+m*Z+u*ue,r[14]=x*T+v*K+m*X+u*fe,r[3]=M*E+A*P+b*Q+w*ne,r[7]=M*R+A*I+b*B+w*se,r[11]=M*_+A*k+b*Z+w*ue,r[15]=M*T+A*K+b*X+w*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],v=e[7],m=e[11],u=e[15],M=c*p-l*d,A=o*p-l*f,b=o*d-c*f,w=a*p-l*h,E=a*d-c*h,R=a*f-o*h;return t*(v*M-m*A+u*b)-n*(x*M-m*w+u*E)+s*(x*A-v*w+u*R)-r*(x*b-v*E+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],v=e[13],m=e[14],u=e[15],M=t*o-n*a,A=t*c-s*a,b=t*l-r*a,w=n*c-s*o,E=n*l-r*o,R=s*l-r*c,_=h*v-f*x,T=h*m-d*x,P=h*u-p*x,I=f*m-d*v,k=f*u-p*v,K=d*u-p*m,Q=M*K-A*k+b*I+w*P-E*T+R*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/Q;return e[0]=(o*K-c*k+l*I)*B,e[1]=(s*k-n*K-r*I)*B,e[2]=(v*R-m*E+u*w)*B,e[3]=(d*E-f*R-p*w)*B,e[4]=(c*P-a*K-l*T)*B,e[5]=(t*K-s*P+r*T)*B,e[6]=(m*b-x*R-u*A)*B,e[7]=(h*R-d*b+p*A)*B,e[8]=(a*k-o*P+l*_)*B,e[9]=(n*P-t*k-r*_)*B,e[10]=(x*E-v*b+u*M)*B,e[11]=(f*b-h*E-p*M)*B,e[12]=(o*T-a*I-c*_)*B,e[13]=(t*I-n*T+s*_)*B,e[14]=(v*A-x*w-m*M)*B,e[15]=(h*w-f*A+d*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,p=r*h,x=r*f,v=a*h,m=a*f,u=o*f,M=c*l,A=c*h,b=c*f,w=n.x,E=n.y,R=n.z;return s[0]=(1-(v+u))*w,s[1]=(p+b)*w,s[2]=(x-A)*w,s[3]=0,s[4]=(p-b)*E,s[5]=(1-(d+u))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(x+A)*R,s[9]=(m-M)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=yi.set(s[0],s[1],s[2]).length(),o=yi.set(s[4],s[5],s[6]).length(),c=yi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jt.copy(this);let l=1/a,h=1/o,f=1/c;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Qt,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===Qt)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===rs)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qt,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===Qt)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===rs)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yi=new L,Jt=new dt,Ld=new L(0,0,0),Nd=new L(1,1,1),Un=new L,zs=new L,Vt=new L,Dc=new dt,Lc=new hn,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ud=0,Nc=new L,bi=new hn,bn=new dt,Vs=new L,Zi=new L,Fd=new L,kd=new hn,Uc=new L(1,0,0),Fc=new L(0,1,0),kc=new L(0,0,1),Oc={type:"added"},Od={type:"removed"},vi={type:"childadded",child:null},so={type:"childremoved",child:null},kt=class i extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Hn,n=new hn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ue}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Zi,Vs,this.up):bn.lookAt(Vs,Zi,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),vi.child=e,this.dispatchEvent(vi),vi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=He.workingColorSpace){if(e=Rd(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ro(a,r,e+1/3),this.g=ro(a,r,e),this.b=ro(a,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return He.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(It.copy(this),t);let n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ht){He.workingToColorSpace(It.copy(this),e);let t=It.r,n=It.g,s=It.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Gs);let n=Qa(Fn.h,Gs.h,t),s=Qa(Fn.s,Gs.s,t),r=Qa(Fn.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new ke;ke.NAMES=Nl;var ds=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$t=new L,vn=new L,ao=new L,Mn=new L,Mi=new L,Si=new L,Bc=new L,oo=new L,co=new L,lo=new L,ho=new pt,uo=new pt,fo=new pt,Tn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),vn.subVectors(n,t),ao.subVectors(e,t);let a=$t.dot($t),o=$t.dot(vn),c=$t.dot(ao),l=vn.dot(vn),h=vn.dot(ao),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(uo,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),vn.subVectors(e,t),$t.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),$t.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),oo.subVectors(e,n);let c=Mi.dot(oo),l=Si.dot(oo);if(c<=0&&l<=0)return t.copy(n);co.subVectors(e,s);let h=Mi.dot(co),f=Si.dot(co);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Mi,a);lo.subVectors(e,r);let p=Mi.dot(lo),x=Si.dot(lo);if(x>=0&&p<=x)return t.copy(r);let v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Si,o);let m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return Bc.subVectors(r,s),o=(f-h)/(f-h+(p-x)),t.copy(s).addScaledVector(Bc,o);let u=1/(m+v+d);return a=v*u,o=d*u,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ws.subVectors(this.max,Ji),Ei.subVectors(e.a,Ji),Ti.subVectors(e.b,Ji),Ai.subVectors(e.c,Ji),kn.subVectors(Ti,Ei),On.subVectors(Ai,Ti),ti.subVectors(Ei,Ai);let t=[0,-kn.z,kn.y,0,-On.z,On.y,0,-ti.z,ti.y,kn.z,0,-kn.x,On.z,0,-On.x,ti.z,0,-ti.x,-kn.y,kn.x,0,-On.y,On.x,0,-ti.y,ti.x,0];return!po(t,Ei,Ti,Ai,Ws)||(t=[1,0,0,0,1,0,0,0,1],!po(t,Ei,Ti,Ai,Ws))?!1:(js.crossVectors(kn,On),t=[js.x,js.y,js.z],po(t,Ei,Ti,Ai,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sn=[new L,new L,new L,new L,new L,new L,new L,new L],Kt=new L,Hs=new Wn,Ei=new L,Ti=new L,Ai=new L,kn=new L,On=new L,ti=new L,Ji=new L,Ws=new L,js=new L,ni=new L;function po(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);let o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var bt=new L,Xs=new Fe,zd=0,ut=class extends dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ar,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ar&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var hs=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var us=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vd=new Wn,$i=new L,mo=new L,jn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(mo)),this.expandByPoint($i.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gd=0,Yt=new dt,go=new kt,wi=new L,Gt=new Wn,Ki=new Wn,Et=new L,vt=class i extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?us:hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Gt.min,Ki.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,Ki.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(Ki.min),Gt.expandByPoint(Ki.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(wi.fromBufferAttribute(e,l),Et.add(wi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new L,c[_]=new L;let l=new L,h=new L,f=new L,d=new Fe,p=new Fe,x=new Fe,v=new L,m=new L;function u(_,T,P){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),h.sub(l),f.sub(l),p.sub(d),x.sub(d);let I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[P].add(v),c[_].add(m),c[T].add(m),c[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){let P=M[_],I=P.start,k=P.count;for(let K=I,Q=I+k;K<Q;K+=3)u(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let A=new L,b=new L,w=new L,E=new L;function R(_){w.fromBufferAttribute(s,_),E.copy(w);let T=o[_];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(E,T);let I=b.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,I)}for(let _=0,T=M.length;_<T;++_){let P=M[_],I=P.start,k=P.count;for(let K=I,Q=I+k;K<Q;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let u=0;u<h;u++)d[x++]=l[p++]}return new ut(d,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ar,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new L,fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hd=0,un=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=oi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ci,Qi=new L,Ri=new L,Pi=new L,Ii=new Fe,es=new Fe,Ul=new dt,qs=new L,ts=new L,Ys=new L,zc=new Fe,_o=new Fe,Vc=new Fe,di=class extends kt{constructor(e=new Oi){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ir(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new fs(n,3,0,!1)),Ci.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Ul.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Pi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Zs(qs.set(-.5,-.5,0),Pi,a,Ri,s,r),Zs(ts.set(.5,-.5,0),Pi,a,Ri,s,r),Zs(Ys.set(.5,.5,0),Pi,a,Ri,s,r),zc.set(0,0),_o.set(1,0),Vc.set(1,1);let o=e.ray.intersectTriangle(qs,ts,Ys,!1,Qi);if(o===null&&(Zs(ts.set(-.5,.5,0),Pi,a,Ri,s,r),_o.set(0,1),o=e.ray.intersectTriangle(qs,Ys,ts,!1,Qi),o===null))return;let c=e.ray.origin.distanceTo(Qi);c<e.near||c>e.far||t.push({distance:c,point:Qi.clone(),uv:Tn.getInterpolation(Qi,qs,ts,Ys,zc,_o,Vc,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zs(i,e,t,n,s,r){Ii.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(es.x=r*Ii.x-s*Ii.y,es.y=s*Ii.x+r*Ii.y):es.copy(Ii),i.copy(e),i.x+=es.x,i.y+=es.y,i.applyMatrix4(Ul)}var En=new L,xo=new L,Js=new L,Bn=new L,yo=new L,$s=new L,bo=new L,Bi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=Bn.dot(this.direction),c=-Bn.dot(Js),l=Bn.lengthSq(),h=Math.abs(1-a*a),f,d,p,x;if(h>0)if(f=a*c-o,d=a*o-c,x=r*h,f>=0)if(d>=-x)if(d<=x){let v=1/h;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xo).addScaledVector(Js,d),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){yo.subVectors(t,e),$s.subVectors(n,e),bo.crossVectors(yo,$s);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);let c=o*this.direction.dot($s.crossVectors(Bn,$s));if(c<0)return null;let l=o*this.direction.dot(yo.cross(Bn));if(l<0||c+l>a)return null;let h=-o*Bn.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new dt,ii=new Bi,Ks=new jn,Hc=new L,Qs=new L,er=new L,tr=new L,vo=new L,nr=new L,Wc=new L,ir=new L,Ct=class extends kt{constructor(e=new vt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(vo.fromBufferAttribute(f,e),a?nr.addScaledVector(vo,h):nr.addScaledVector(vo.sub(t),h))}t.add(nr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(Ks.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ks,Hc)===null||ii.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),ii.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let m=d[x],u=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,w=A;b<w;b+=3){let E=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);s=sr(this,u,e,n,l,h,f,E,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){let M=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=sr(this,a,e,n,l,h,f,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let m=d[x],u=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,w=A;b<w;b+=3){let E=b,R=b+1,_=b+2;s=sr(this,u,e,n,l,h,f,E,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){let M=m,A=m+1,b=m+2;s=sr(this,a,e,n,l,h,f,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Wd(i,e,t,n,s,r,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Cn,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Qs),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);let h=Wd(i,e,t,n,Qs,er,tr,Wc);if(h){let f=new L;Tn.getBarycoord(Wc,Qs,er,tr,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,c,l,f,new Fe)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,c,l,f,new Fe)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Tn.getNormal(Qs,er,tr,d.normal),h.face=d,h.barycoord=f}return h}var Dr=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Tt,h=Tt,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mo=new L,jd=new L,Xd=new Ue,an=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Mo.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Mo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xd.getNormalMatrix(e),s=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new jn,qd=new Fe(.5,.5),rr=new L,ps=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],p=r[7],x=r[8],v=r[9],m=r[10],u=r[11],M=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,p-h,u-x,w-M).normalize(),s[1].setComponents(l+a,p+h,u+x,w+M).normalize(),s[2].setComponents(l+o,p+f,u+v,w+A).normalize(),s[3].setComponents(l-o,p-f,u-v,w-A).normalize(),n)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,p-d,u-m,w-b).normalize();else if(s[4].setComponents(l-c,p-d,u-m,w-b).normalize(),t===Qt)s[5].setComponents(l+c,p+d,u+m,w+b).normalize();else if(t===rs)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);let t=qd.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nr=new L,Ur=new L,jc=new dt,ns=new Bi,ar=new jn,So=new L,Xc=new L,Fr=class extends kt{constructor(e=new vt,t=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nr.fromBufferAttribute(t,s-1),Ur.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nr.distanceTo(Ur);e.setAttribute("lineDistance",new ft(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;jc.copy(s).invert(),ns.copy(e.ray).applyMatrix4(jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=p,m=x-1;v<m;v+=l){let u=h.getX(v),M=h.getX(v+1),A=or(this,e,ns,c,u,M,v);A&&t.push(A)}if(this.isLineLoop){let v=h.getX(x-1),m=h.getX(p),u=or(this,e,ns,c,v,m,x-1);u&&t.push(u)}}else{let p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=p,m=x-1;v<m;v+=l){let u=or(this,e,ns,c,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){let v=or(this,e,ns,c,x-1,p,x-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function or(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Nr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Ur,So,Xc)>n)return;So.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(So);if(!(l<e.near||l>e.far))return{distance:l,point:Xc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qc=new L,Yc=new L,ms=class extends Fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qc.fromBufferAttribute(t,s),Yc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(Yc);e.setAttribute("lineDistance",new ft(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var kr=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zc=new dt,Ro=new Bi,cr=new jn,lr=new L,zi=class extends kt{constructor(e=new vt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Zc.copy(s).invert(),Ro.copy(e.ray).applyMatrix4(Zc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=d,v=p;x<v;x++){let m=l.getX(x);lr.fromBufferAttribute(f,m),Jc(lr,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,v=p;x<v;x++)lr.fromBufferAttribute(f,x),Jc(lr,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jc(i,e,t,n,s,r,a){let o=Ro.distanceSqToPoint(i);if(o<t){let c=new L;Ro.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var gs=class extends Ft{constructor(e=[],t=Zn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_s=class extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rn=class extends Ft{constructor(e,t,n=tn,s,r,a,o=Tt,c=Tt,l,h=ln,f=1){if(h!==ln&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Or=class extends Rn{constructor(e,t=tn,n=Zn,s,r,a=Tt,o=Tt,c,l=ln){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xs=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function x(v,m,u,M,A,b,w,E,R,_,T){let P=b/R,I=w/_,k=b/2,K=w/2,Q=E/2,B=R+1,Z=_+1,X=0,ne=0,se=new L;for(let ue=0;ue<Z;ue++){let fe=ue*I-K;for(let _e=0;_e<B;_e++){let Ne=_e*P-k;se[v]=Ne*M,se[m]=fe*A,se[u]=Q,l.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[u]=E>0?1:-1,h.push(se.x,se.y,se.z),f.push(_e/R),f.push(1-ue/_),X+=1}}for(let ue=0;ue<_;ue++)for(let fe=0;fe<R;fe++){let _e=d+fe+B*ue,Ne=d+fe+B*(ue+1),Ze=d+(fe+1)+B*(ue+1),Ve=d+(fe+1)+B*ue;c.push(_e,Ne,Ve),c.push(Ne,Ze,Ve),ne+=6}o.addGroup(p,ne,T),p+=ne,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Br=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new L,b=new L,w=new L;for(let E=0;E<t.length;E+=3)p(t[E+0],A),p(t[E+1],b),p(t[E+2],w),c(A,b,w,M)}function c(M,A,b,w){let E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let T=M.clone().lerp(b,_/E),P=A.clone().lerp(b,_/E),I=E-_;for(let k=0;k<=I;k++)k===0&&_===E?R[_][k]=T:R[_][k]=T.clone().lerp(P,k/I)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let P=Math.floor(T/2);T%2===0?(d(R[_][P+1]),d(R[_+1][P]),d(R[_][P])):(d(R[_][P+1]),d(R[_+1][P+1]),d(R[_+1][P]))}}function l(M){let A=new L;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(M),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function h(){let M=new L;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let b=m(M)/2/Math.PI+.5,w=u(M)/Math.PI+.5;a.push(b,1-w)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let A=a[M+0],b=a[M+2],w=a[M+4],E=Math.max(A,b,w),R=Math.min(A,b,w);E>.9&&R<.1&&(A<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,A){let b=M*3;A.x=e[b+0],A.y=e[b+1],A.z=e[b+2]}function x(){let M=new L,A=new L,b=new L,w=new L,E=new Fe,R=new Fe,_=new Fe;for(let T=0,P=0;T<r.length;T+=9,P+=6){M.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),w.copy(M).add(A).add(b).divideScalar(3);let I=m(w);v(E,P+0,M,I),v(R,P+2,A,I),v(_,P+4,b,I)}}function v(M,A,b,w){w<0&&M.x===1&&(a[A]=M.x-1),b.x===0&&b.z===0&&(a[A]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ys=class i extends Br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var bs=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,p=[],x=[],v=[],m=[];for(let u=0;u<h;u++){let M=u*d-a;for(let A=0;A<l;A++){let b=A*f-r;x.push(b,-M,0),v.push(0,0,1),m.push(A/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){let A=M+l*u,b=M+l*(u+1),w=M+1+l*(u+1),E=M+1+l*u;p.push(A,b,E),p.push(b,w,E)}this.setIndex(p),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gi=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new L,d=new L,p=[],x=[],v=[],m=[];for(let u=0;u<=n;u++){let M=[],A=u/n,b=a+A*o,w=e*Math.cos(b),E=Math.sqrt(e*e-w*w),R=0;u===0&&a===0?R=.5/t:u===n&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let T=_/t,P=s+T*r;f.x=-E*Math.cos(P),f.y=w,f.z=E*Math.sin(P),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(T+R,1-A),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let A=h[u][M+1],b=h[u][M],w=h[u+1][M],E=h[u+1][M+1];(u!==0||a>0)&&p.push(A,b,E),(u!==n-1||c<Math.PI)&&p.push(b,w,E)}this.setIndex(p),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vs=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new L,p=new L,x=new L;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let u=0;u<=s;u++){let M=u/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),f.push(u/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let u=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,A=(s+1)*(v-1)+m,b=(s+1)*v+m;c.push(u,M,b),c.push(M,A,b)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($c(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($c(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=pi(i[t]);for(let s in n)e[s]=n[s]}return e}function $c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Fl={clone:pi,merge:Nt},Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zr=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vr=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gr=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Xn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:To,endingEnd:To}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ao:r=e,o=2*t-n;break;case wo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ao:a=e,c=2*n-t;break;case wo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,u=-d*m+2*d*v-d*x,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*x+1,A=(-1-p)*m+(1.5+p)*v+.5*x,b=p*m-p*v;for(let w=0;w!==o;++w)r[w]=u*a[h+w]+M*a[l+w]+A*a[c+w]+b*a[f+w];return r}},Wr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},jr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xr=class extends Xn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),v=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*x;return r}let d=o*2,p=e-1;for(let x=0;x!==o;++x){let v=a[l+x],m=a[c+x],u=p*d+x*2,M=f[u],A=f[u+1],b=e*d+x*2,w=h[b],E=h[b+1],R=(n-t)/(s-t),_,T,P,I,k;for(let K=0;K<8;K++){_=R*R,T=_*R,P=1-R,I=P*P,k=I*P;let B=k*t+3*I*R*M+3*P*_*w+T*s-n;if(Math.abs(B)<1e-10)break;let Z=3*I*(M-t)+6*P*R*(w-M)+3*_*(s-w);if(Math.abs(Z)<1e-10)break;R=R-B/Z,R=Math.max(0,Math.min(1,R))}r[x]=k*v+3*I*R*A+3*P*_*E+T*m}return r}},jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case fr:t=this.InterpolantFactoryMethodSmooth;break;case Eo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return fr;case this.InterpolantFactoryMethodBezier:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Cd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[d+x]||v!==t[p+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Tr;var qn=class extends jt{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=is;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};qr.prototype.ValueTypeName="color";var Yr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="number";var Zr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ms=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zr(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends jt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=is;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="vector";var $r=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let p=l[f],x=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kl=new $r,Kr=class{constructor(e){this.manager=e!==void 0?e:kl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=new L,ur=new hn,rn=new L,Ss=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hr,ur,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hr,ur,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zn=new L,Kc=new Fe,Qc=new Fe,Dt=class extends Ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Qc),t.subVectors(Qc,Kc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Es=class extends Ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Di=-90,Li=1,Qr=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Di,Li,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Di,Li,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Di,Li,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Di,Li,e,t);o.layers=this.layers,this.add(o);let c=new Dt(Di,Li,e,t);c.layers=this.layers,this.add(c);let l=new Dt(Di,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ea=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ec="\\[\\]\\.:\\/",$d=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",Kd="[^"+ec.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",tc),eh=/(WCOD+)?/.source.replace("WCOD",Kd),th=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),nh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),ih=new RegExp("^"+Qd+eh+th+nh+"$"),sh=["material","materials","bones","map"],Po=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($d,"")}static parseTrackName(e){let t=ih.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Po;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l0=new Float32Array(1);var Io=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function nc(i,e,t,n){let s=rh(n);switch(t){case Yo:return i*e;case Jo:return i*e/s.components*s.byteLength;case ca:return i*e/s.components*s.byteLength;case Kn:return i*e*2/s.components*s.byteLength;case la:return i*e*2/s.components*s.byteLength;case Zo:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case da:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:case pa:return Math.max(i,16)*Math.max(e,8)/4;case ha:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case Ds:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fa:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ls:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rh(i){switch(i){case Xt:case Wo:return{byteLength:1,components:1};case Wi:case jo:case gn:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case tn:case ra:case nn:return{byteLength:4,components:1};case Xo:case qo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function ad(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function oh(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){let x=f[d],v=f[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){let v=f[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ph=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,au=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ou=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$u=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,If=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:ch,alphahash_pars_fragment:lh,alphamap_fragment:dh,alphamap_pars_fragment:hh,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:gh,batching_vertex:_h,begin_vertex:xh,beginnormal_vertex:yh,bsdfs:bh,iridescence_fragment:vh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:wh,color_pars_fragment:Ch,color_pars_vertex:Rh,color_vertex:Ph,common:Ih,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Nh,displacementmap_vertex:Uh,emissivemap_fragment:Fh,emissivemap_pars_fragment:kh,colorspace_fragment:Oh,colorspace_pars_fragment:Bh,envmap_fragment:zh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Gh,envmap_pars_vertex:Hh,envmap_physical_pars_fragment:eu,envmap_vertex:Wh,fog_vertex:jh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_pars_fragment:Jh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:Qh,lights_toon_fragment:tu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:su,lights_physical_fragment:ru,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:cu,lights_fragment_end:lu,lightprobes_pars_fragment:du,logdepthbuf_fragment:hu,logdepthbuf_pars_fragment:uu,logdepthbuf_pars_vertex:fu,logdepthbuf_vertex:pu,map_fragment:mu,map_pars_fragment:gu,map_particle_fragment:_u,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:bu,morphinstance_vertex:vu,morphcolor_vertex:Mu,morphnormal_vertex:Su,morphtarget_pars_vertex:Eu,morphtarget_vertex:Tu,normal_fragment_begin:Au,normal_fragment_maps:wu,normal_pars_fragment:Cu,normal_pars_vertex:Ru,normal_vertex:Pu,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Uu,opaque_fragment:Fu,packing:ku,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:zu,dithering_pars_fragment:Vu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:ju,shadowmap_vertex:Xu,shadowmask_pars_fragment:qu,skinbase_vertex:Yu,skinning_pars_vertex:Zu,skinning_vertex:Ju,skinnormal_vertex:$u,specularmap_fragment:Ku,specularmap_pars_fragment:Qu,tonemapping_fragment:ef,tonemapping_pars_fragment:tf,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:cf,background_vert:lf,background_frag:df,backgroundCube_vert:hf,backgroundCube_frag:uf,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distance_vert:_f,distance_frag:xf,equirect_vert:yf,equirect_frag:bf,linedashed_vert:vf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:Tf,meshlambert_frag:Af,meshmatcap_vert:wf,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:If,meshphong_frag:Df,meshphysical_vert:Lf,meshphysical_frag:Nf,meshtoon_vert:Uf,meshtoon_frag:Ff,points_vert:kf,points_frag:Of,shadow_vert:Bf,shadow_frag:zf,sprite_vert:Vf,sprite_frag:Gf},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},xn={basic:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Nt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Nt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Nt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Nt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Nt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Nt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Nt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Nt([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};xn.physical={uniforms:Nt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Ha={r:0,b:0,g:0},Hf=new dt,od=new Ue;od.set(-1,0,0,0,1,0,0,0,1);function Wf(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function x(M){let A=!1,b=p(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,A){let b=p(A);b&&(b.isCubeTexture||b.mapping===As)?(l===void 0&&(l=new Ct(new Vi(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:pi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(od),l.material.toneMapped=He.getTransfer(b.colorSpace)!==$e,(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ct(new bs(2,2),new Lt({name:"BackgroundMaterial",uniforms:pi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(b.colorSpace)!==$e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(Ha,Qo(i)),t.buffers.color.setClear(Ha.r,Ha.g,Ha.b,A,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:v,dispose:u}}function jf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,k,K,Q,B){let Z=!1,X=f(I,Q,K,k);r!==X&&(r=X,l(r.object)),Z=p(I,Q,K,B),Z&&x(I,Q,K,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(I,k,K,Q),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,k,K,Q){let B=Q.wireframe===!0,Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);let X=I.isInstancedMesh===!0?I.id:0,ne=Z[X];ne===void 0&&(ne={},Z[X]=ne);let se=ne[K.id];se===void 0&&(se={},ne[K.id]=se);let ue=se[B];return ue===void 0&&(ue=d(c()),se[B]=ue),ue}function d(I){let k=[],K=[],Q=[];for(let B=0;B<t;B++)k[B]=0,K[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:Q,object:I,attributes:{},index:null}}function p(I,k,K,Q){let B=r.attributes,Z=k.attributes,X=0,ne=K.getAttributes();for(let se in ne)if(ne[se].location>=0){let fe=B[se],_e=Z[se];if(_e===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),fe===void 0||fe.attribute!==_e||_e&&fe.data!==_e.data)return!0;X++}return r.attributesNum!==X||r.index!==Q}function x(I,k,K,Q){let B={},Z=k.attributes,X=0,ne=K.getAttributes();for(let se in ne)if(ne[se].location>=0){let fe=Z[se];fe===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor));let _e={};_e.attribute=fe,fe&&fe.data&&(_e.data=fe.data),B[se]=_e,X++}r.attributes=B,r.attributesNum=X,r.index=Q}function v(){let I=r.newAttributes;for(let k=0,K=I.length;k<K;k++)I[k]=0}function m(I){u(I,0)}function u(I,k){let K=r.newAttributes,Q=r.enabledAttributes,B=r.attributeDivisors;K[I]=1,Q[I]===0&&(i.enableVertexAttribArray(I),Q[I]=1),B[I]!==k&&(i.vertexAttribDivisor(I,k),B[I]=k)}function M(){let I=r.newAttributes,k=r.enabledAttributes;for(let K=0,Q=k.length;K<Q;K++)k[K]!==I[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function A(I,k,K,Q,B,Z,X){X===!0?i.vertexAttribIPointer(I,k,K,B,Z):i.vertexAttribPointer(I,k,K,Q,B,Z)}function b(I,k,K,Q){v();let B=Q.attributes,Z=K.getAttributes(),X=k.defaultAttributeValues;for(let ne in Z){let se=Z[ne];if(se.location>=0){let ue=B[ne];if(ue===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){let fe=ue.normalized,_e=ue.itemSize,Ne=e.get(ue);if(Ne===void 0)continue;let Ze=Ne.buffer,Ve=Ne.type,$=Ne.bytesPerElement,oe=Ve===i.INT||Ve===i.UNSIGNED_INT||ue.gpuType===ra;if(ue.isInterleavedBufferAttribute){let re=ue.data,Ie=re.stride,Ee=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<se.locationSize;Ae++)u(se.location+Ae,re.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<se.locationSize;Ae++)m(se.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<se.locationSize;Ae++)A(se.location+Ae,_e/se.locationSize,Ve,fe,Ie*$,(Ee+_e/se.locationSize*Ae)*$,oe)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<se.locationSize;re++)u(se.location+re,ue.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<se.locationSize;re++)m(se.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<se.locationSize;re++)A(se.location+re,_e/se.locationSize,Ve,fe,_e*$,_e/se.locationSize*re*$,oe)}}else if(X!==void 0){let fe=X[ne];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(se.location,fe);break;case 3:i.vertexAttrib3fv(se.location,fe);break;case 4:i.vertexAttrib4fv(se.location,fe);break;default:i.vertexAttrib1fv(se.location,fe)}}}}M()}function w(){T();for(let I in n){let k=n[I];for(let K in k){let Q=k[K];for(let B in Q){let Z=Q[B];for(let X in Z)h(Z[X].object),delete Z[X];delete Q[B]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let k=n[I.id];for(let K in k){let Q=k[K];for(let B in Q){let Z=Q[B];for(let X in Z)h(Z[X].object),delete Z[X];delete Q[B]}}delete n[I.id]}function R(I){for(let k in n){let K=n[k];for(let Q in K){let B=K[Q];if(B[I.id]===void 0)continue;let Z=B[I.id];for(let X in Z)h(Z[X].object),delete Z[X];delete B[I.id]}}}function _(I){for(let k in n){let K=n[k],Q=I.isInstancedMesh===!0?I.id:0,B=K[Q];if(B!==void 0){for(let Z in B){let X=B[Z];for(let ne in X)h(X[ne].object),delete X[ne];delete B[Z]}delete K[Q],Object.keys(K).length===0&&delete n[k]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Xf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Xt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:E}}function Yf(i){let e=this,t=null,n=0,s=!1,r=!1,a=new an,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,A=M*4,b=u.clippingState||null;c.value=b,b=h(x,d,A,p);for(let w=0;w!==A;++w)b[w]=t[w];u.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,x!==!0||m===null){let u=p+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,b=p;A!==v;++A,b+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Qn=4,Ol=[.125,.215,.35,.446,.526,.582],mi=20,Zf=256,Ns=new Es,Bl=new ke,ic=null,sc=0,rc=0,ac=!1,Jf=new L,ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jf}=r;ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=ac,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:gn,format:Zt,colorSpace:li,depthBuffer:!1},s=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$f(r)),this._blurMaterial=Qf(r,e,t),this._ggxMaterial=Kf(r,e,t)}return s}_compileMaterial(e){let t=new Ct(new vt,e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,s,r){let c=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Bl),f.toneMapping=en,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new Vi,new fn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,u=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,u=!0):(m.color.copy(Bl),u=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):b===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let w=this._cubeSize;Xi(s,b*w,A>2?w:0,w,w),f.setRenderTarget(s),u&&f.render(v,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zn||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Xi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ns)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=0+l*1.25,p=f*d,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Qn?n-x+Qn:0),u=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Xi(r,m,u,3*v,2*v),s.setRenderTarget(r),s.render(o,Ns),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Xi(e,m,u,3*v,2*v),s.setRenderTarget(e),s.render(o,Ns)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):mi;m>mi&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);let u=[],M=0;for(let R=0;R<mi;++R){let _=R/v,T=Math.exp(-_*_/2);u.push(T),R===0?M+=T:R<m&&(M+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-n;let b=this._sizeLods[s],w=3*b*(s>A-Qn?s-A+Qn:0),E=4*(this._cubeSize-b);Xi(t,w,E,3*b,2*b),c.setRenderTarget(t),c.render(f,Ns)}};function $f(i){let e=[],t=[],n=[],s=i,r=i-Qn+1+Ol.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Qn?c=Ol[a-i+Qn-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,v=3,m=2,u=1,M=new Float32Array(v*x*p),A=new Float32Array(m*x*p),b=new Float32Array(u*x*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,_=E>2?0:-1,T=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(T,v*x*E),A.set(d,m*x*E);let P=[E,E,E,E,E,E];b.set(P,u*x*E)}let w=new vt;w.setAttribute("position",new ut(M,v)),w.setAttribute("uv",new ut(A,m)),w.setAttribute("faceIndex",new ut(b,u)),n.push(new Ct(w,null)),s>Qn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zl(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kf(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Qf(i,e,t){let n=new Float32Array(mi),s=new L(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Vl(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Gl(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xa=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vi(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:mn});r.uniforms.tEquirect.value=t;let a=new Ct(s,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=wt),new Qr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ep(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===na||p===ia)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let v=new Xa(x.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,x=p===na||p===ia,v=p===Zn||p===fi;if(x||v){let m=t.get(d),u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new ja(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return x&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new ja(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===na?d.mapping=Zn:p===ia&&(d.mapping=fi),d}function c(d){let p=0,x=6;for(let v=0;v<x;v++)d[v]!==void 0&&p++;return p===x}function l(d){let p=d.target;p.removeEventListener("dispose",l);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function tp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ai("WebGLRenderer: "+n+" extension not supported."),s}}}function np(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){let d=[],p=f.index,x=f.attributes.position,v=0;if(x===void 0)return;if(p!==null){let M=p.array;v=p.version;for(let A=0,b=M.length;A<b;A+=3){let w=M[A+0],E=M[A+1],R=M[A+2];d.push(w,E,E,R,R,w)}}else{let M=x.array;v=x.version;for(let A=0,b=M.length/3-1;A<b;A+=3){let w=A+0,E=A+1,R=A+2;d.push(w,E,E,R,R,w)}}let m=new(x.count>=65535?us:hs)(d,1);m.version=v;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function ip(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function sp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;p===!0&&(A=1),x===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*w*4*f),R=new cs(E,b,w,f);R.type=nn,R.needsUpdate=!0;let _=A*4;for(let P=0;P<f;P++){let I=m[P],k=u[P],K=M[P],Q=b*w*4*P;for(let B=0;B<I.count;B++){let Z=B*_;p===!0&&(s.fromBufferAttribute(I,B),E[Q+Z+0]=s.x,E[Q+Z+1]=s.y,E[Q+Z+2]=s.z,E[Q+Z+3]=0),x===!0&&(s.fromBufferAttribute(k,B),E[Q+Z+4]=s.x,E[Q+Z+5]=s.y,E[Q+Z+6]=s.z,E[Q+Z+7]=0),v===!0&&(s.fromBufferAttribute(K,B),E[Q+Z+8]=s.x,E[Q+Z+9]=s.y,E[Q+Z+10]=s.z,E[Q+Z+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new Fe(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ap(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var op={[Fo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[Vo]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function cp(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Rn(e,t):void 0}),o=new Wt(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new vt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let l=new zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ct(c,l),f=new Es(-1,1,1,-1,0,1),d=null,p=null,x=!1,v,m=null,u=[],M=!1;this.setSize=function(A,b){a.setSize(A,b),o.setSize(A,b);for(let w=0;w<u.length;w++){let E=u[w];E.setSize&&E.setSize(A,b)}},this.setEffects=function(A){u=A,M=u.length>0&&u[0].isRenderPass===!0;let b=a.width,w=a.height;for(let E=0;E<u.length;E++){let R=u[E];R.setSize&&R.setSize(b,w)}},this.begin=function(A,b){if(x||A.toneMapping===en&&u.length===0)return!1;if(m=b,b!==null){let w=b.width,E=b.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return M===!1&&A.setRenderTarget(a),v=A.toneMapping,A.toneMapping=en,!0},this.hasRenderPass=function(){return M},this.end=function(A,b){A.toneMapping=v,x=!0;let w=a,E=o;for(let R=0;R<u.length;R++){let _=u[R];if(_.enabled!==!1&&(_.render(A,E,w,b),_.needsSwap!==!1)){let T=w;w=E,E=T}}if(d!==A.outputColorSpace||p!==A.toneMapping){d=A.outputColorSpace,p=A.toneMapping,l.defines={},He.getTransfer(d)===$e&&(l.defines.SRGB_TRANSFER="");let R=op[p];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(h,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var cd=new Ft,lc=new Rn(1,1),ld=new cs,dd=new Pr,hd=new gs,Hl=[],Wl=[],jl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function Yi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),St(t,n)}}function pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),St(t,n)}}function mp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),St(t,n)}}function gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Ep(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?Ga:Va,r=lc):r=cd,t.setTexture2D(e||r,s)}function Tp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dd,s)}function Ap(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hd,s)}function wp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ld,s)}function Cp(i){switch(i){case 5126:return lp;case 35664:return dp;case 35665:return hp;case 35666:return up;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return bp;case 36294:return vp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return wp}}function Rp(i,e){i.uniform1fv(this.addr,e)}function Pp(i,e){let t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ip(i,e){let t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Dp(i,e){let t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Lp(i,e){let t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Np(i,e){let t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Up(i,e){let t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fp(i,e){i.uniform1iv(this.addr,e)}function kp(i,e){i.uniform2iv(this.addr,e)}function Op(i,e){i.uniform3iv(this.addr,e)}function Bp(i,e){i.uniform4iv(this.addr,e)}function zp(i,e){i.uniform1uiv(this.addr,e)}function Vp(i,e){i.uniform2uiv(this.addr,e)}function Gp(i,e){i.uniform3uiv(this.addr,e)}function Hp(i,e){i.uniform4uiv(this.addr,e)}function Wp(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lc:a=cd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function jp(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dd,r[a])}function Xp(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hd,r[a])}function qp(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ld,r[a])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Ip;case 35666:return Dp;case 35674:return Lp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return kp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Vp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}var dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}},hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oc=/(\w+)(\])?(\[|\.)?/g;function Yl(i,e){i.seq.push(e),i.map[e.id]=e}function Zp(i,e,t){let n=i.name,s=n.length;for(oc.lastIndex=0;;){let r=oc.exec(n),a=oc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yl(t,l===void 0?new dc(o,i,e):new hc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new uc(o),Yl(t,f)),t=f}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Zp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Zl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jp=37297,$p=0;function Kp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Jl=new Ue;function Qp(i){He._getMatrix(Jl,He.workingColorSpace,i);let e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case ss:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $l(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kp(i.getShaderSource(e),o)}else return r}function em(i,e){let t=Qp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var tm={[Fo]:"Linear",[ko]:"Reinhard",[Oo]:"Cineon",[Bo]:"ACESFilmic",[Vo]:"AgX",[Go]:"Neutral",[zo]:"Custom"};function nm(i,e){let t=tm[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new L;function im(){He.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function rm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function am(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function Kl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var om=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(om,lm)}var cm=new Map;function lm(i,e){let t=ze[e];if(t===void 0){let n=cm.get(e);if(n!==void 0)t=ze[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fc(t)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(dm,hm)}function hm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var um={[Ts]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function fm(i){return um[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pm={[Zn]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE_UV"};function mm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gm={[fi]:"ENVMAP_MODE_REFRACTION"};function _m(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xm={[Uo]:"ENVMAP_BLENDING_MULTIPLY",[yl]:"ENVMAP_BLENDING_MIX",[bl]:"ENVMAP_BLENDING_ADD"};function ym(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xm[i.combine]||"ENVMAP_BLENDING_NONE"}function bm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=fm(t),l=mm(t),h=_m(t),f=ym(t),d=bm(t),p=sm(t),x=rm(r),v=s.createProgram(),m,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),u.length>0&&(u+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),u=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?ze.tonemapping_pars_fragment:"",t.toneMapping!==en?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,em("linearToOutputTexel",t.outputColorSpace),im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=fc(a),a=Kl(a,t),a=Ql(a,t),o=fc(o),o=Kl(o,t),o=Ql(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=M+m+a,b=M+u+o,w=Zl(s,s.VERTEX_SHADER,A),E=Zl(s,s.FRAGMENT_SHADER,b);s.attachShader(v,w),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",K=s.getShaderInfoLog(w)||"",Q=s.getShaderInfoLog(E)||"",B=k.trim(),Z=K.trim(),X=Q.trim(),ne=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,E);else{let ue=$l(s,w,"vertex"),fe=$l(s,E,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ue+`
`+fe)}else B!==""?De("WebGLProgram: Program Info Log:",B):(Z===""||X==="")&&(se=!1);se&&(I.diagnostics={runnable:ne,programLog:B,vertexShader:{log:Z,prefix:m},fragmentShader:{log:X,prefix:u}})}s.deleteShader(w),s.deleteShader(E),_=new qi(s,v),T=am(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,Jp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$p++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}var Mm=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}};function Sm(i){return i===Kn||i===Ds||i===Ls}function Em(i,e,t,n,s,r){let a=new ls,o=new pc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,P,I,k,K){let Q=I.fog,B=k.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||Z,X),se=ne&&ne.mapping===As?ne.image.height:null,ue=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=fe!==void 0?fe.length:0,Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let Ze,Ve,$,oe;if(ue){let de=xn[ue];Ze=de.vertexShader,Ve=de.fragmentShader}else{Ze=_.vertexShader,Ve=_.fragmentShader;let de=o.getVertexShaderStage(_),Ce=o.getFragmentShaderStage(_);o.update(_,de,Ce),$=de.id,oe=Ce.id}let re=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ee=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,et=!!_.map,Be=!!_.matcap,Je=!!ne,je=!!_.aoMap,We=!!_.lightMap,st=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,mt=!!_.displacementMap,tt=!!_.emissiveMap,at=!!_.metalnessMap,ot=!!_.roughnessMap,D=_.anisotropy>0,At=_.clearcoat>0,Xe=_.dispersion>0,S=_.iridescence>0,g=_.sheen>0,U=_.transmission>0,V=D&&!!_.anisotropyMap,q=At&&!!_.clearcoatMap,ae=At&&!!_.clearcoatNormalMap,ce=At&&!!_.clearcoatRoughnessMap,Y=S&&!!_.iridescenceMap,ee=S&&!!_.iridescenceThicknessMap,he=g&&!!_.sheenColorMap,Me=g&&!!_.sheenRoughnessMap,pe=!!_.specularMap,le=!!_.specularColorMap,Se=!!_.specularIntensityMap,we=U&&!!_.transmissionMap,F=U&&!!_.thicknessMap,C=!!_.gradientMap,W=!!_.alphaMap,O=_.alphaTest>0,J=!!_.alphaHash,ie=!!_.extensions,j=en;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(j=i.toneMapping);let te={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:Ze,fragmentShader:Ve,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,instancingMorph:Ee&&k.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:et,matcap:Be,envMap:Je,envMapMode:Je&&ne.mapping,envMapCubeUVHeight:se,aoMap:je,lightMap:We,bumpMap:st,normalMap:lt,displacementMap:mt,emissiveMap:tt,normalMapObjectSpace:lt&&_.normalMapType===Sl,normalMapTangentSpace:lt&&_.normalMapType===$o,packedNormalMap:lt&&_.normalMapType===$o&&Sm(_.normalMap.format),metalnessMap:at,roughnessMap:ot,anisotropy:D,anisotropyMap:V,clearcoat:At,clearcoatMap:q,clearcoatNormalMap:ae,clearcoatRoughnessMap:ce,dispersion:Xe,iridescence:S,iridescenceMap:Y,iridescenceThicknessMap:ee,sheen:g,sheenColorMap:he,sheenRoughnessMap:Me,specularMap:pe,specularColorMap:le,specularIntensityMap:Se,transmission:U,transmissionMap:we,thicknessMap:F,gradientMap:C,opaque:_.transparent===!1&&_.blending===oi&&_.alphaToCoverage===!1,alphaMap:W,alphaTest:O,alphaHash:J,combine:_.combine,mapUv:et&&x(_.map.channel),aoMapUv:je&&x(_.aoMap.channel),lightMapUv:We&&x(_.lightMap.channel),bumpMapUv:st&&x(_.bumpMap.channel),normalMapUv:lt&&x(_.normalMap.channel),displacementMapUv:mt&&x(_.displacementMap.channel),emissiveMapUv:tt&&x(_.emissiveMap.channel),metalnessMapUv:at&&x(_.metalnessMap.channel),roughnessMapUv:ot&&x(_.roughnessMap.channel),anisotropyMapUv:V&&x(_.anisotropyMap.channel),clearcoatMapUv:q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(_.sheenRoughnessMap.channel),specularMapUv:pe&&x(_.specularMap.channel),specularColorMapUv:le&&x(_.specularColorMap.channel),specularIntensityMapUv:Se&&x(_.specularIntensityMap.channel),transmissionMapUv:we&&x(_.transmissionMap.channel),thicknessMapUv:F&&x(_.thicknessMap.channel),alphaMapUv:W&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(lt||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(et||W),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:et&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&He.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function u(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let T=p[_.type],P;if(T){let I=xn[T];P=Fl.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new vm(i,T,_,s),l.push(P),h.set(T,P)),P}function w(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function Tm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function id(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,v,m,u){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:u},i[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=x,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=u),e++,M}function c(d,p,x,v,m,u){let M=o(d,p,x,v,m,u);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function l(d,p,x,v,m,u){let M=o(d,p,x,v,m,u);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,p,x){t.length>1&&t.sort(d||Am),n.length>1&&n.sort(p||nd),s.length>1&&s.sort(p||nd),x&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let d=e,p=i.length;d<p;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function wm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Rm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Pm=0;function Im(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dm(i){let e=new Cm,t=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new dt,a=new dt;function o(l){let h=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,x=0,v=0,m=0,u=0,M=0,A=0,b=0,w=0,E=0,R=0;l.sort(Im);for(let T=0,P=l.length;T<P;T++){let I=l[T],k=I.color,K=I.intensity,Q=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Kn?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*K,f+=k.g*K,d+=k.b*K;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],K);R++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,ne=t.get(I);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=Z,p++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(k).multiplyScalar(K),Z.distance=Q,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[v]=Z;let X=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,X.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=X.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=B,b++}v++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(k).multiplyScalar(K),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let X=I.shadow,ne=t.get(I);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,ne.shadowCameraNear=X.camera.near,ne.shadowCameraFar=X.camera.far,n.pointShadow[x]=ne,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=I.shadow.matrix,A++}n.point[x]=Z,x++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(K),Z.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==p||_.pointLength!==x||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==u||_.numDirectionalShadows!==M||_.numPointShadows!==A||_.numSpotShadows!==b||_.numSpotMaps!==w||_.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,_.directionalLength=p,_.pointLength=x,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=u,_.numDirectionalShadows=M,_.numPointShadows=A,_.numSpotShadows=b,_.numSpotMaps=w,_.numLightProbes=R,n.version=Pm++)}function c(l,h){let f=0,d=0,p=0,x=0,v=0,m=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){let A=l[u];if(A.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(A.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function sd(i){let e=new Dm(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Lm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sd(i),e.set(s,[o])):r>=a.length?(o=new sd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fm=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],km=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rd=new dt,Us=new L,cc=new L;function Om(i,e,t){let n=new ps,s=new Fe,r=new Fe,a=new pt,o=new Vr,c=new Gr,l={},h=t.maxTextureSize,f={[Cn]:Ot,[Ot]:Cn,[pn]:pn},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Nm,fragmentShader:Um}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new vt;x.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ct(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let u=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nl&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ts);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(mn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=u!==this.type;K&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=E.length;Q<B;Q++){let Z=E[Q],X=Z.shadow;if(X===void 0){De("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ne=X.getFrameExtents();s.multiply(ne),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,X.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=se,X.map===null||K===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Hi){if(Z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Wt(s.x,s.y,{format:Kn,type:gn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new Rn(s.x,s.y,nn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=ln,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tt,X.map.depthTexture.magFilter=Tt}else Z.isPointLight?(X.map=new Xa(s.x),X.map.depthTexture=new Or(s.x,tn)):(X.map=new Wt(s.x,s.y),X.map.depthTexture=new Rn(s.x,s.y,tn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=ln,this.type===Ts?(X.map.depthTexture.compareFunction=se?Ga:Va,X.map.depthTexture.minFilter=wt,X.map.depthTexture.magFilter=wt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tt,X.map.depthTexture.magFilter=Tt);X.camera.updateProjectionMatrix()}let ue=X.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ue;fe++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(X.map),i.clear());let _e=X.getViewport(fe);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),k.viewport(a)}if(Z.isPointLight){let _e=X.camera,Ne=X.matrix,Ze=Z.distance||_e.far;Ze!==_e.far&&(_e.far=Ze,_e.updateProjectionMatrix()),Us.setFromMatrixPosition(Z.matrixWorld),_e.position.copy(Us),cc.copy(_e.position),cc.add(Fm[fe]),_e.up.copy(km[fe]),_e.lookAt(cc),_e.updateMatrixWorld(),Ne.makeTranslation(-Us.x,-Us.y,-Us.z),rd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),X._frustum.setFromProjectionMatrix(rd,_e.coordinateSystem,_e.reversedDepth)}else X.updateMatrices(Z);n=X.getFrustum(),b(R,_,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Hi&&M(X,_),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,I)};function M(E,R){let _=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wt(s.x,s.y,{format:Kn,type:gn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,p,v,null)}function A(E,R,_,T){let P=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=P.uuid,K=R.uuid,Q=l[k];Q===void 0&&(Q={},l[k]=Q);let B=Q[K];B===void 0&&(B=P.clone(),Q[K]=B,R.addEventListener("dispose",w)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Hi?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=_}return P}function b(E,R,_,T,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let K=e.update(E),Q=E.material;if(Array.isArray(Q)){let B=K.groups;for(let Z=0,X=B.length;Z<X;Z++){let ne=B[Z],se=Q[ne.materialIndex];if(se&&se.visible){let ue=A(E,se,T,P);E.onBeforeShadow(i,E,R,_,K,ue,ne),i.renderBufferDirect(_,null,K,ue,E,ne),E.onAfterShadow(i,E,R,_,K,ue,ne)}}}else if(Q.visible){let B=A(E,Q,T,P);E.onBeforeShadow(i,E,R,_,K,B,null),i.renderBufferDirect(_,null,K,B,E,null),E.onAfterShadow(i,E,R,_,K,B,null)}}let k=E.children;for(let K=0,Q=k.length;K<Q;K++)b(k[K],R,_,T,P)}function w(E){E.target.removeEventListener("dispose",w);for(let _ in l){let T=l[_],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Bm(i,e){function t(){let C=!1,W=new pt,O=null,J=new pt(0,0,0,0);return{setMask:function(ie){O!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),O=ie)},setLocked:function(ie){C=ie},setClear:function(ie,j,te,de,Ce){Ce===!0&&(ie*=de,j*=de,te*=de),W.set(ie,j,te,de),J.equals(W)===!1&&(i.clearColor(ie,j,te,de),J.copy(W))},reset:function(){C=!1,O=null,J.set(-1,0,0,0)}}}function n(){let C=!1,W=!1,O=null,J=null,ie=null;return{setReversed:function(j){if(W!==j){let te=e.get("EXT_clip_control");j?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),W=j;let de=ie;ie=null,this.setClear(de)}},getReversed:function(){return W},setTest:function(j){j?re(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(j){O!==j&&!C&&(i.depthMask(j),O=j)},setFunc:function(j){if(W&&(j=Ll[j]),J!==j){switch(j){case gr:i.depthFunc(i.NEVER);break;case _r:i.depthFunc(i.ALWAYS);break;case xr:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case br:i.depthFunc(i.GEQUAL);break;case vr:i.depthFunc(i.GREATER);break;case Mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=j}},setLocked:function(j){C=j},setClear:function(j){ie!==j&&(ie=j,W&&(j=1-j),i.clearDepth(j))},reset:function(){C=!1,O=null,J=null,ie=null,W=!1}}}function s(){let C=!1,W=null,O=null,J=null,ie=null,j=null,te=null,de=null,Ce=null;return{setTest:function(Pe){C||(Pe?re(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Pe){W!==Pe&&!C&&(i.stencilMask(Pe),W=Pe)},setFunc:function(Pe,ht,yt){(O!==Pe||J!==ht||ie!==yt)&&(i.stencilFunc(Pe,ht,yt),O=Pe,J=ht,ie=yt)},setOp:function(Pe,ht,yt){(j!==Pe||te!==ht||de!==yt)&&(i.stencilOp(Pe,ht,yt),j=Pe,te=ht,de=yt)},setLocked:function(Pe){C=Pe},setClear:function(Pe){Ce!==Pe&&(i.clearStencil(Pe),Ce=Pe)},reset:function(){C=!1,W=null,O=null,J=null,ie=null,j=null,te=null,de=null,Ce=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d={},p=new WeakMap,x=[],v=null,m=!1,u=null,M=null,A=null,b=null,w=null,E=null,R=null,_=new ke(0,0,0),T=0,P=!1,I=null,k=null,K=null,Q=null,B=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(se)[1]),X=ne>=1):se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),X=ne>=2);let ue=null,fe={},_e=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ze=new pt().fromArray(_e),Ve=new pt().fromArray(Ne);function $(C,W,O,J){let ie=new Uint8Array(4),j=i.createTexture();i.bindTexture(C,j),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<O;te++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(W+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return j}let oe={};oe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(ci),st(!1),lt(Do),re(i.CULL_FACE),je(mn);function re(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ie(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ee(C,W){return d[C]!==W?(i.bindFramebuffer(C,W),d[C]=W,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=W),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=W),!0):!1}function Ae(C,W){let O=x,J=!1;if(C){O=p.get(W),O===void 0&&(O=[],p.set(W,O));let ie=C.textures;if(O.length!==ie.length||O[0]!==i.COLOR_ATTACHMENT0){for(let j=0,te=ie.length;j<te;j++)O[j]=i.COLOR_ATTACHMENT0+j;O.length=ie.length,J=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,J=!0);J&&i.drawBuffers(O)}function et(C){return v!==C?(i.useProgram(C),v=C,!0):!1}let Be={[Gn]:i.FUNC_ADD,[il]:i.FUNC_SUBTRACT,[sl]:i.FUNC_REVERSE_SUBTRACT};Be[rl]=i.MIN,Be[al]=i.MAX;let Je={[ol]:i.ZERO,[ui]:i.ONE,[cl]:i.SRC_COLOR,[pr]:i.SRC_ALPHA,[pl]:i.SRC_ALPHA_SATURATE,[ul]:i.DST_COLOR,[dl]:i.DST_ALPHA,[ll]:i.ONE_MINUS_SRC_COLOR,[mr]:i.ONE_MINUS_SRC_ALPHA,[fl]:i.ONE_MINUS_DST_COLOR,[hl]:i.ONE_MINUS_DST_ALPHA,[ml]:i.CONSTANT_COLOR,[gl]:i.ONE_MINUS_CONSTANT_COLOR,[_l]:i.CONSTANT_ALPHA,[xl]:i.ONE_MINUS_CONSTANT_ALPHA};function je(C,W,O,J,ie,j,te,de,Ce,Pe){if(C===mn){m===!0&&(Ie(i.BLEND),m=!1);return}if(m===!1&&(re(i.BLEND),m=!0),C!==ta){if(C!==u||Pe!==P){if((M!==Gn||w!==Gn)&&(i.blendEquation(i.FUNC_ADD),M=Gn,w=Gn),Pe)switch(C){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",C);break}else switch(C){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lo:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case No:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",C);break}A=null,b=null,E=null,R=null,_.set(0,0,0),T=0,u=C,P=Pe}return}ie=ie||W,j=j||O,te=te||J,(W!==M||ie!==w)&&(i.blendEquationSeparate(Be[W],Be[ie]),M=W,w=ie),(O!==A||J!==b||j!==E||te!==R)&&(i.blendFuncSeparate(Je[O],Je[J],Je[j],Je[te]),A=O,b=J,E=j,R=te),(de.equals(_)===!1||Ce!==T)&&(i.blendColor(de.r,de.g,de.b,Ce),_.copy(de),T=Ce),u=C,P=!1}function We(C,W){C.side===pn?Ie(i.CULL_FACE):re(i.CULL_FACE);let O=C.side===Ot;W&&(O=!O),st(O),C.blending===oi&&C.transparent===!1?je(mn):je(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let J=C.stencilWrite;o.setTest(J),J&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),tt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(C){I!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),I=C)}function lt(C){C!==el?(re(i.CULL_FACE),C!==k&&(C===Do?i.cullFace(i.BACK):C===tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),k=C}function mt(C){C!==K&&(X&&i.lineWidth(C),K=C)}function tt(C,W,O){C?(re(i.POLYGON_OFFSET_FILL),(Q!==W||B!==O)&&(Q=W,B=O,a.getReversed()&&(W=-W),i.polygonOffset(W,O))):Ie(i.POLYGON_OFFSET_FILL)}function at(C){C?re(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function ot(C){C===void 0&&(C=i.TEXTURE0+Z-1),ue!==C&&(i.activeTexture(C),ue=C)}function D(C,W,O){O===void 0&&(ue===null?O=i.TEXTURE0+Z-1:O=ue);let J=fe[O];J===void 0&&(J={type:void 0,texture:void 0},fe[O]=J),(J.type!==C||J.texture!==W)&&(ue!==O&&(i.activeTexture(O),ue=O),i.bindTexture(C,W||oe[C]),J.type=C,J.texture=W)}function At(){let C=fe[ue];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function g(){try{i.texSubImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function U(){try{i.texSubImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function ae(){try{i.texStorage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function ce(){try{i.texStorage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function Y(){try{i.texImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function ee(){try{i.texImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function he(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function Me(C,W){f[C]!==W&&(i.pixelStorei(C,W),f[C]=W)}function pe(C){Ze.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Ze.copy(C))}function le(C){Ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ve.copy(C))}function Se(C,W){let O=l.get(W);O===void 0&&(O=new WeakMap,l.set(W,O));let J=O.get(C);J===void 0&&(J=i.getUniformBlockIndex(W,C.name),O.set(C,J))}function we(C,W){let J=l.get(W).get(C);c.get(W)!==J&&(i.uniformBlockBinding(W,J,C.__bindingPointIndex),c.set(W,J))}function F(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ue=null,fe={},d={},p=new WeakMap,x=[],v=null,m=!1,u=null,M=null,A=null,b=null,w=null,E=null,R=null,_=new ke(0,0,0),T=0,P=!1,I=null,k=null,K=null,Q=null,B=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Ie,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:et,setBlending:je,setMaterial:We,setFlipSided:st,setCullFace:lt,setLineWidth:mt,setPolygonOffset:tt,setScissorTest:at,activeTexture:ot,bindTexture:D,unbindTexture:At,compressedTexImage2D:Xe,compressedTexImage3D:S,texImage2D:Y,texImage3D:ee,pixelStorei:Me,getParameter:he,updateUBOMapping:Se,uniformBlockBinding:we,texStorage2D:ae,texStorage3D:ce,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:pe,viewport:le,reset:F}}function zm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap,f=new Set,d,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,g){return x?new OffscreenCanvas(S,g):as("canvas")}function m(S,g,U){let V=1,q=Xe(S);if((q.width>U||q.height>U)&&(V=U/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ae=Math.floor(V*q.width),ce=Math.floor(V*q.height);d===void 0&&(d=v(ae,ce));let Y=g?v(ae,ce):d;return Y.width=ae,Y.height=ce,Y.getContext("2d").drawImage(S,0,0,ae,ce),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ae+"x"+ce+")."),Y}else return"data"in S&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),S;return S}function u(S){return S.generateMipmaps}function M(S){i.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,g,U,V,q,ae=!1){if(S!==null){if(i[S]!==void 0)return i[S];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce;V&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8),U===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),U===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),g===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8),U===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),U===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),U===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){let ee=ae?ss:He.getTransfer(q);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=ee===$e?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),U===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(S,g){let U;return S?g===null||g===tn||g===ji?U=i.DEPTH24_STENCIL8:g===nn?U=i.DEPTH32F_STENCIL8:g===Wi&&(U=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===tn||g===ji?U=i.DEPTH_COMPONENT24:g===nn?U=i.DEPTH_COMPONENT32F:g===Wi&&(U=i.DEPTH_COMPONENT16),U}function E(S,g){return u(S)===!0||S.isFramebufferTexture&&S.minFilter!==Tt&&S.minFilter!==wt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function R(S){let g=S.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(S){let g=S.target;g.removeEventListener("dispose",_),I(g)}function T(S){let g=n.get(S);if(g.__webglInit===void 0)return;let U=S.source,V=p.get(U);if(V){let q=V[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(S),Object.keys(V).length===0&&p.delete(U)}n.remove(S)}function P(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let U=S.source,V=p.get(U);delete V[g.__cacheKey],a.memory.textures--}function I(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let q=0;q<g.__webglFramebuffer[V].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[V][q]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=S.textures;for(let V=0,q=U.length;V<q;V++){let ae=n.get(U[V]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(U[V])}n.remove(S)}let k=0;function K(){k=0}function Q(){return k}function B(S){k=S}function Z(){let S=k;return S>=s.maxTextures&&De("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),k+=1,S}function X(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ne(S,g){let U=n.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){let V=S.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(U,S,g);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function se(S,g){let U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Ie(U,S,g);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function ue(S,g){let U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Ie(U,S,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function fe(S,g){let U=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&U.__version!==S.version){Ee(U,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let _e={[Sr]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},Ne={[Tt]:i.NEAREST,[vl]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Ze={[El]:i.NEVER,[Rl]:i.ALWAYS,[Tl]:i.LESS,[Va]:i.LEQUAL,[Al]:i.EQUAL,[Ga]:i.GEQUAL,[wl]:i.GREATER,[Cl]:i.NOTEQUAL};function Ve(S,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wt||g.magFilter===sa||g.magFilter===ws||g.magFilter===Jn||g.minFilter===wt||g.minFilter===sa||g.minFilter===ws||g.minFilter===Jn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,_e[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,_e[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,_e[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Ne[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Ne[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ze[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Tt||g.minFilter!==ws&&g.minFilter!==Jn||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $(S,g){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",R));let V=g.source,q=p.get(V);q===void 0&&(q={},p.set(V,q));let ae=X(g);if(ae!==S.__cacheKey){q[ae]===void 0&&(q[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),q[ae].usedTimes++;let ce=q[S.__cacheKey];ce!==void 0&&(q[S.__cacheKey].usedTimes--,ce.usedTimes===0&&P(g)),S.__cacheKey=ae,S.__webglTexture=q[ae].texture}return U}function oe(S,g,U){return Math.floor(Math.floor(S/U)/g)}function re(S,g,U,V){let ae=S.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,V,g.data);else{ae.sort((Me,pe)=>Me.start-pe.start);let ce=0;for(let Me=1;Me<ae.length;Me++){let pe=ae[ce],le=ae[Me],Se=pe.start+pe.count,we=oe(le.start,g.width,4),F=oe(pe.start,g.width,4);le.start<=Se+1&&we===F&&oe(le.start+le.count-1,g.width,4)===we?pe.count=Math.max(pe.count,le.start+le.count-pe.start):(++ce,ae[ce]=le)}ae.length=ce+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Me=0,pe=ae.length;Me<pe;Me++){let le=ae[Me],Se=Math.floor(le.start/4),we=Math.ceil(le.count/4),F=Se%g.width,C=Math.floor(Se/g.width),W=we,O=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,F),t.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,F,C,W,O,U,V,g.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Ie(S,g,U){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);let q=$(S,g),ae=g.source;t.bindTexture(V,S.__webglTexture,i.TEXTURE0+U);let ce=n.get(ae);if(ae.version!==ce.__version||q===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let O=He.getPrimaries(He.workingColorSpace),J=g.colorSpace===Pn?null:He.getPrimaries(g.colorSpace),ie=g.colorSpace===Pn||O===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,s.maxTextureSize);ee=At(g,ee);let he=r.convert(g.format,g.colorSpace),Me=r.convert(g.type),pe=b(g.internalFormat,he,Me,g.normalized,g.colorSpace,g.isVideoTexture);Ve(V,g);let le,Se=g.mipmaps,we=g.isVideoTexture!==!0,F=ce.__version===void 0||q===!0,C=ae.dataReady,W=E(g,ee);if(g.isDepthTexture)pe=w(g.format===$n,g.type),F&&(we?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Me,null));else if(g.isDataTexture)if(Se.length>0){we&&F&&t.texStorage2D(i.TEXTURE_2D,W,pe,Se[0].width,Se[0].height);for(let O=0,J=Se.length;O<J;O++)le=Se[O],we?C&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,le.width,le.height,he,Me,le.data):t.texImage2D(i.TEXTURE_2D,O,pe,le.width,le.height,0,he,Me,le.data);g.generateMipmaps=!1}else we?(F&&t.texStorage2D(i.TEXTURE_2D,W,pe,ee.width,ee.height),C&&re(g,ee,he,Me)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Me,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,pe,Se[0].width,Se[0].height,ee.depth);for(let O=0,J=Se.length;O<J;O++)if(le=Se[O],g.format!==Zt)if(he!==null)if(we){if(C)if(g.layerUpdates.size>0){let ie=nc(le.width,le.height,g.format,g.type);for(let j of g.layerUpdates){let te=le.data.subarray(j*ie/le.data.BYTES_PER_ELEMENT,(j+1)*ie/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,j,le.width,le.height,1,he,te)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,le.width,le.height,ee.depth,he,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,pe,le.width,le.height,ee.depth,0,le.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,le.width,le.height,ee.depth,he,Me,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,pe,le.width,le.height,ee.depth,0,he,Me,le.data)}else{we&&F&&t.texStorage2D(i.TEXTURE_2D,W,pe,Se[0].width,Se[0].height);for(let O=0,J=Se.length;O<J;O++)le=Se[O],g.format!==Zt?he!==null?we?C&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(i.TEXTURE_2D,O,pe,le.width,le.height,0,le.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?C&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,le.width,le.height,he,Me,le.data):t.texImage2D(i.TEXTURE_2D,O,pe,le.width,le.height,0,he,Me,le.data)}else if(g.isDataArrayTexture)if(we){if(F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,pe,ee.width,ee.height,ee.depth),C)if(g.layerUpdates.size>0){let O=nc(ee.width,ee.height,g.format,g.type);for(let J of g.layerUpdates){let ie=ee.data.subarray(J*O/ee.data.BYTES_PER_ELEMENT,(J+1)*O/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,he,Me,ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Me,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,he,Me,ee.data);else if(g.isData3DTexture)we?(F&&t.texStorage3D(i.TEXTURE_3D,W,pe,ee.width,ee.height,ee.depth),C&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Me,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,he,Me,ee.data);else if(g.isFramebufferTexture){if(F)if(we)t.texStorage2D(i.TEXTURE_2D,W,pe,ee.width,ee.height);else{let O=ee.width,J=ee.height;for(let ie=0;ie<W;ie++)t.texImage2D(i.TEXTURE_2D,ie,pe,O,J,0,he,Me,null),O>>=1,J>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let O=i.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),ee.parentNode!==O){O.appendChild(ee),f.add(g),O.onpaint=J=>{let ie=J.changedElements;for(let j of f)ie.includes(j.image)&&(j.needsUpdate=!0)},O.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ie=i.RGBA,j=i.RGBA,te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,j,te,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(we&&F){let O=Xe(Se[0]);t.texStorage2D(i.TEXTURE_2D,W,pe,O.width,O.height)}for(let O=0,J=Se.length;O<J;O++)le=Se[O],we?C&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,he,Me,le):t.texImage2D(i.TEXTURE_2D,O,pe,he,Me,le);g.generateMipmaps=!1}else if(we){if(F){let O=Xe(ee);t.texStorage2D(i.TEXTURE_2D,W,pe,O.width,O.height)}C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Me,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,he,Me,ee);u(g)&&M(V),ce.__version=ae.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ee(S,g,U){if(g.image.length!==6)return;let V=$(S,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+U);let ae=n.get(q);if(q.version!==ae.__version||V===!0){t.activeTexture(i.TEXTURE0+U);let ce=He.getPrimaries(He.workingColorSpace),Y=g.colorSpace===Pn?null:He.getPrimaries(g.colorSpace),ee=g.colorSpace===Pn||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let he=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!he&&!Me?pe[j]=m(g.image[j],!0,s.maxCubemapSize):pe[j]=Me?g.image[j].image:g.image[j],pe[j]=At(g,pe[j]);let le=pe[0],Se=r.convert(g.format,g.colorSpace),we=r.convert(g.type),F=b(g.internalFormat,Se,we,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,W=ae.__version===void 0||V===!0,O=q.dataReady,J=E(g,le);Ve(i.TEXTURE_CUBE_MAP,g);let ie;if(he){C&&W&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,F,le.width,le.height);for(let j=0;j<6;j++){ie=pe[j].mipmaps;for(let te=0;te<ie.length;te++){let de=ie[te];g.format!==Zt?Se!==null?C?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,F,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,de.width,de.height,Se,we,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,F,de.width,de.height,0,Se,we,de.data)}}}else{if(ie=g.mipmaps,C&&W){ie.length>0&&J++;let j=Xe(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,F,j.width,j.height)}for(let j=0;j<6;j++)if(Me){C?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Se,we,pe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,F,pe[j].width,pe[j].height,0,Se,we,pe[j].data);for(let te=0;te<ie.length;te++){let Ce=ie[te].image[j].image;C?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,Ce.width,Ce.height,Se,we,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,F,Ce.width,Ce.height,0,Se,we,Ce.data)}}else{C?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se,we,pe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,F,Se,we,pe[j]);for(let te=0;te<ie.length;te++){let de=ie[te];C?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,Se,we,de.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,F,Se,we,de.image[j])}}}u(g)&&M(i.TEXTURE_CUBE_MAP),ae.__version=q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ae(S,g,U,V,q,ae){let ce=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),ee=b(U.internalFormat,ce,Y,U.normalized,U.colorSpace),he=n.get(g),Me=n.get(U);if(Me.__renderTarget=g,!he.__hasExternalTextures){let pe=Math.max(1,g.width>>ae),le=Math.max(1,g.height>>ae);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ae,ee,pe,le,g.depth,0,ce,Y,null):t.texImage2D(q,ae,ee,pe,le,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,q,Me.__webglTexture,0,at(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,q,Me.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(S,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let V=g.depthTexture,q=V&&V.isDepthTexture?V.type:null,ae=w(g.stencilBuffer,q),ce=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(g),ae,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(g),ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ae,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,S)}else{let V=g.textures;for(let q=0;q<V.length;q++){let ae=V[q],ce=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),ee=b(ae.internalFormat,ce,Y,ae.normalized,ae.colorSpace);ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(g),ee,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(S,g,U){let V=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g.depthTexture);let he=r.convert(g.depthTexture.format),Me=r.convert(g.depthTexture.type),pe;g.depthTexture.format===ln?pe=i.DEPTH_COMPONENT24:g.depthTexture.format===$n&&(pe=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,pe,g.width,g.height,0,he,Me,null)}}else ne(g.depthTexture,0);let ae=q.__webglTexture,ce=at(g),Y=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ee=g.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===ln)ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,ae,0);else if(g.depthTexture.format===$n)ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(S){let g=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let V=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=V}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let V=0;V<6;V++)Be(g.__webglFramebuffer[V],S,V);else{let V=S.texture.mipmaps;V&&V.length>0?Be(g.__webglFramebuffer[0],S,0):Be(g.__webglFramebuffer,S,0)}else if(U){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),et(g.__webglDepthbuffer[V],S,!1);else{let q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}else{let V=S.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),et(g.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(S,g,U){let V=n.get(S);g!==void 0&&Ae(V.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Je(S)}function We(S){let g=S.texture,U=n.get(S),V=n.get(g);S.addEventListener("dispose",_);let q=S.textures,ae=S.isWebGLCubeRenderTarget===!0,ce=q.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),ae){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let ee=0;ee<g.mipmaps.length;ee++)U.__webglFramebuffer[Y][ee]=i.createFramebuffer()}else U.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)U.__webglFramebuffer[Y]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,ee=q.length;Y<ee;Y++){let he=n.get(q[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ot(S)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let ee=q[Y];U.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let he=r.convert(ee.format,ee.colorSpace),Me=r.convert(ee.type),pe=b(ee.internalFormat,he,Me,ee.normalized,ee.colorSpace,S.isXRRenderTarget===!0),le=at(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,pe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),et(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Ae(U.__webglFramebuffer[Y][ee],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else Ae(U.__webglFramebuffer[Y],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);u(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let Y=0,ee=q.length;Y<ee;Y++){let he=q[Y],Me=n.get(he),pe=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Me.__webglTexture),Ve(pe,he),Ae(U.__webglFramebuffer,S,he,i.COLOR_ATTACHMENT0+Y,pe,0),u(he)&&M(pe)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Y=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),Ve(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Ae(U.__webglFramebuffer[ee],S,g,i.COLOR_ATTACHMENT0,Y,ee);else Ae(U.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,Y,0);u(g)&&M(Y),t.unbindTexture()}S.depthBuffer&&Je(S)}function st(S){let g=S.textures;for(let U=0,V=g.length;U<V;U++){let q=g[U];if(u(q)){let ae=A(S),ce=n.get(q).__webglTexture;t.bindTexture(ae,ce),M(ae),t.unbindTexture()}}}let lt=[],mt=[];function tt(S){if(S.samples>0){if(ot(S)===!1){let g=S.textures,U=S.width,V=S.height,q=i.COLOR_BUFFER_BIT,ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(S),Y=g.length>1;if(Y)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ee=S.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<g.length;he++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Me=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,U,V,0,0,U,V,q,i.NEAREST),c===!0&&(lt.length=0,mt.length=0,lt.push(i.COLOR_ATTACHMENT0+he),S.depthBuffer&&S.resolveDepthBuffer===!1&&(lt.push(ae),mt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Me=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function at(S){return Math.min(s.maxSamples,S.samples)}function ot(S){let g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(S){let g=a.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function At(S,g){let U=S.colorSpace,V=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==li&&U!==Pn&&(He.getTransfer(U)===$e?(V!==Zt||q!==Xt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",U)),g}function Xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=fe,this.rebindTextures=je,this.setupRenderTarget=We,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vm(i,e){function t(n,s=Pn){let r,a=He.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===jo)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Yo)return i.ALPHA;if(n===Zo)return i.RGB;if(n===Zt)return i.RGBA;if(n===ln)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===Kn)return i.RG;if(n===la)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Is)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===xa||n===ya||n===Ds||n===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return r.COMPRESSED_R11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ds)return r.COMPRESSED_RG11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===va||n===Ma||n===Sa||n===Ea||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Pa||n===Ia||n===Da||n===La||n===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===Ls||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Gm,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,x=null,v=typeof XRWebGLBinding<"u",m=new gc,u={},M=t.getContextAttributes(),A=null,b=null,w=[],E=[],R=new Fe,_=null,T=new Dt;T.viewport=new pt;let P=new Dt;P.viewport=new pt;let I=[T,P],k=new ea,K=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=w[$];return oe===void 0&&(oe=new ki,w[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=w[$];return oe===void 0&&(oe=new ki,w[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=w[$];return oe===void 0&&(oe=new ki,w[$]=oe),oe.getHandSpace()};function B($){let oe=E.indexOf($.inputSource);if(oe===-1)return;let re=w[oe];re!==void 0&&(re.update($.inputSource,$.frame,l||a),re.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",X);for(let $=0;$<w.length;$++){let oe=E[$];oe!==null&&(E[$]=null,w[$].disconnect(oe))}K=null,Q=null,m.reset();for(let $ in u)delete u[$];e.setRenderTarget(A),p=null,d=null,f=null,s=null,b=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ie=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?$n:ln,Ie=M.stencil?ji:tn);let Ae={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Wt(d.textureWidth,d.textureHeight,{format:Zt,type:Xt,depthTexture:new Rn(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Wt(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let oe=0;oe<$.removed.length;oe++){let re=$.removed[oe],Ie=E.indexOf(re);Ie>=0&&(E[Ie]=null,w[Ie].disconnect(re))}for(let oe=0;oe<$.added.length;oe++){let re=$.added[oe],Ie=E.indexOf(re);if(Ie===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=E.length){E.push(re),Ie=Ae;break}else if(E[Ae]===null){E[Ae]=re,Ie=Ae;break}if(Ie===-1)break}let Ee=w[Ie];Ee&&Ee.connect(re)}}let ne=new L,se=new L;function ue($,oe,re){ne.setFromMatrixPosition(oe.matrixWorld),se.setFromMatrixPosition(re.matrixWorld);let Ie=ne.distanceTo(se),Ee=oe.projectionMatrix.elements,Ae=re.projectionMatrix.elements,et=Ee[14]/(Ee[10]-1),Be=Ee[14]/(Ee[10]+1),Je=(Ee[9]+1)/Ee[5],je=(Ee[9]-1)/Ee[5],We=(Ee[8]-1)/Ee[0],st=(Ae[8]+1)/Ae[0],lt=et*We,mt=et*st,tt=Ie/(-We+st),at=tt*-We;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(at),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ot=et+tt,D=Be+tt,At=lt-at,Xe=mt+(Ie-at),S=Je*Be/D*ot,g=je*Be/D*ot;$.projectionMatrix.makePerspective(At,Xe,S,g,ot,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,re=$.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),k.near=P.near=T.near=oe,k.far=P.far=T.far=re,(K!==k.near||Q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),K=k.near,Q=k.far),k.layers.mask=$.layers.mask|6,T.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ie=$.parent,Ee=k.cameras;fe(k,Ie);for(let Ae=0;Ae<Ee.length;Ae++)fe(Ee[Ae],Ie);Ee.length===2?ue(k,T,P):k.projectionMatrix.copy(T.projectionMatrix),_e($,k,Ie)};function _e($,oe,re){re===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return u[$]};let Ne=null;function Ze($,oe){if(h=oe.getViewerPose(l||a),x=oe,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ie=!1;re.length!==k.cameras.length&&(k.cameras.length=0,Ie=!0);for(let Be=0;Be<re.length;Be++){let Je=re[Be],je=null;if(p!==null)je=p.getViewport(Je);else{let st=f.getViewSubImage(d,Je);je=st.viewport,Be===0&&(e.setRenderTargetTextures(b,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(b))}let We=I[Be];We===void 0&&(We=new Dt,We.layers.enable(Be),We.viewport=new pt,I[Be]=We),We.matrix.fromArray(Je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Be===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ie===!0&&k.cameras.push(We)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Be=f.getDepthInformation(re[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<re.length;Be++){let Je=re[Be].camera;if(Je){let je=u[Je];je||(je=new xs,u[Je]=je);let We=f.getCameraImage(Je);je.sourceTexture=We}}}}for(let re=0;re<w.length;re++){let Ie=E[re],Ee=w[re];Ie!==null&&Ee!==void 0&&Ee.update(Ie,oe,l||a)}Ne&&Ne($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),x=null}let Ve=new ad;Ve.setAnimationLoop(Ze),this.setAnimationLoop=function($){Ne=$},this.dispose=function(){}}},Wm=new dt,ud=new Ue;ud.set(-1,0,0,0,1,0,0,0,1);function jm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Qo(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,A,b){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,M,A):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ot&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ot&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let M=e.get(u),A=M.envMap,b=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ud),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,M,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let M=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let E=w.program;n.uniformBlockBinding(b,E)}function l(b,w){let E=s[b.id];E===void 0&&(m(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",M));let R=w.program;n.updateUBOMapping(b,R);let _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function h(b){let w=f();b.__bindingPointIndex=w;let E=i.createBuffer(),R=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],E=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,T=E.length;_<T;_++){let P=E[_];if(Array.isArray(P))for(let I=0,k=P.length;I<k;I++)p(P[I],_,I,R);else p(P,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,E,R){if(v(b,w,E,R)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let k=T[I],K=u(k);x(k,b.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function x(b,w,E){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,E)}function v(b,w,E,R){let _=b.value,T=w+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(b){let w=b.uniforms,E=0,R=16;for(let T=0,P=w.length;T<P;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let k=0,K=I.length;k<K;k++){let Q=I[k],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let Z=0,X=B.length;Z<X;Z++){let ne=B[Z],se=u(ne),ue=E%R,fe=ue%se.boundary,_e=ue+fe;E+=fe,_e!==0&&R-_e<se.storage&&(E+=R-_e),Q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=se.storage}}}let _=E%R;return _>0&&(E+=R-_),b.__size=E,b.__cache={},this}function u(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):De("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_n=null;function Ym(){return _n===null&&(_n=new Dr(qm,16,16,Kn,gn),_n.name="DFG_LUT",_n.minFilter=wt,_n.magFilter=wt,_n.wrapS=cn,_n.wrapT=cn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}var qa=class{constructor(e={}){let{canvas:t=Pl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Xt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let v=p,m=new Set([da,la,ca]),u=new Set([Xt,tn,Wi,ji,aa,oa]),M=new Uint32Array(4),A=new Int32Array(4),b=new L,w=null,E=null,R=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,k=null,K=null,Q=null,B=null;this._outputColorSpace=Ht;let Z=0,X=0,ne=null,se=-1,ue=null,fe=new pt,_e=new pt,Ne=null,Ze=new ke(0),Ve=0,$=t.width,oe=t.height,re=1,Ie=null,Ee=null,Ae=new pt(0,0,$,oe),et=new pt(0,0,$,oe),Be=!1,Je=new ps,je=!1,We=!1,st=new dt,lt=new L,mt=new pt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function ot(){return ne===null?re:1}let D=n;function At(y,N){return t.getContext(y,N)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ht,!1),D===null){let N="webgl2";if(D=At(N,y),D===null)throw At(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Le("WebGLRenderer: "+y.message),y}let Xe,S,g,U,V,q,ae,ce,Y,ee,he,Me,pe,le,Se,we,F,C,W,O,J,ie,j;function te(){Xe=new tp(D),Xe.init(),J=new Vm(D,Xe),S=new qf(D,Xe,e,J),g=new Bm(D,Xe),S.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),K=D.createFramebuffer(),Q=D.createFramebuffer(),B=D.createFramebuffer(),U=new sp(D),V=new Tm,q=new zm(D,Xe,g,V,S,J,U),ae=new ep(P),ce=new oh(D),ie=new jf(D,ce),Y=new np(D,ce,U,ie),ee=new ap(D,Y,ce,ie,U),C=new rp(D,S,q),Se=new Yf(V),he=new Em(P,ae,Xe,S,ie,Se),Me=new jm(P,V),pe=new wm,le=new Lm(Xe),F=new Wf(P,ae,g,ee,x,c),we=new Om(P,ee,S),j=new Xm(D,U,S,g),W=new Xf(D,Xe,U),O=new ip(D,Xe,U),U.programs=he.programs,P.capabilities=S,P.extensions=Xe,P.properties=V,P.renderLists=pe,P.shadowMap=we,P.state=g,P.info=U}te(),v!==Xt&&(T=new cp(v,t.width,t.height,o,s,r));let de=new _c(P,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(y){y!==void 0&&(re=y,this.setSize($,oe,!1))},this.getSize=function(y){return y.set($,oe)},this.setSize=function(y,N,H=!0){if(de.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,oe=N,t.width=Math.floor(y*re),t.height=Math.floor(N*re),H===!0&&(t.style.width=y+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set($*re,oe*re).floor()},this.setDrawingBufferSize=function(y,N,H){$=y,oe=N,re=H,t.width=Math.floor(y*H),t.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(v===Xt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(fe)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,N,H,z){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,N,H,z),g.viewport(fe.copy(Ae).multiplyScalar(re).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,N,H,z){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,N,H,z),g.scissor(_e.copy(et).multiplyScalar(re).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(y){g.setScissorTest(Be=y)},this.setOpaqueSort=function(y){Ie=y},this.setTransparentSort=function(y){Ee=y},this.getClearColor=function(y){return y.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let z=0;if(y){let G=!1;if(ne!==null){let xe=ne.texture.format;G=m.has(xe)}if(G){let xe=ne.texture.type,be=u.has(xe),ge=F.getClearColor(),ve=F.getClearAlpha(),Te=ge.r,Oe=ge.g,Ge=ge.b;be?(M[0]=Te,M[1]=Oe,M[2]=Ge,M[3]=ve,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Te,A[1]=Oe,A[2]=Ge,A[3]=ve,D.clearBufferiv(D.COLOR,0,A))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),F.dispose(),pe.dispose(),le.dispose(),V.dispose(),ae.dispose(),ee.dispose(),ie.dispose(),j.dispose(),he.dispose(),de.dispose(),de.removeEventListener("sessionstart",bc),de.removeEventListener("sessionend",vc),ei.stop()};function Ce(y){y.preventDefault(),os("WebGLRenderer: Context Lost."),I=!0}function Pe(){os("WebGLRenderer: Context Restored."),I=!1;let y=U.autoReset,N=we.enabled,H=we.autoUpdate,z=we.needsUpdate,G=we.type;te(),U.autoReset=y,we.enabled=N,we.autoUpdate=H,we.needsUpdate=z,we.type=G}function ht(y){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function yt(y){let N=y.target;N.removeEventListener("dispose",yt),yn(N)}function yn(y){vd(y),V.remove(y)}function vd(y){let N=V.get(y).programs;N!==void 0&&(N.forEach(function(H){he.releaseProgram(H)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,z,G,xe){N===null&&(N=tt);let be=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Ed(y,N,H,z,G);g.setMaterial(z,be);let ve=H.index,Te=1;if(z.wireframe===!0){if(ve=Y.getWireframeAttribute(H),ve===void 0)return;Te=2}let Oe=H.drawRange,Ge=H.attributes.position,Re=Oe.start*Te,Ke=(Oe.start+Oe.count)*Te;xe!==null&&(Re=Math.max(Re,xe.start*Te),Ke=Math.min(Ke,(xe.start+xe.count)*Te)),ve!==null?(Re=Math.max(Re,0),Ke=Math.min(Ke,ve.count)):Ge!=null&&(Re=Math.max(Re,0),Ke=Math.min(Ke,Ge.count));let _t=Ke-Re;if(_t<0||_t===1/0)return;ie.setup(G,z,ge,H,ve);let gt,nt=W;if(ve!==null&&(gt=ce.get(ve),nt=O,nt.setIndex(gt)),G.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*ot()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(G.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),g.setLineWidth(Rt*ot()),G.isLineSegments?nt.setMode(D.LINES):G.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else G.isPoints?nt.setMode(D.POINTS):G.isSprite&&nt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Rt=G._multiDrawStarts,ye=G._multiDrawCounts,zt=G._multiDrawCount,Ye=ve?ce.get(ve).bytesPerElement:1,qt=V.get(z).currentProgram.getUniforms();for(let sn=0;sn<zt;sn++)qt.setValue(D,"_gl_DrawID",sn),nt.render(Rt[sn]/Ye,ye[sn])}else if(G.isInstancedMesh)nt.renderInstances(Re,_t,G.count);else if(H.isInstancedBufferGeometry){let Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,Rt);nt.renderInstances(Re,_t,ye)}else nt.render(Re,_t)};function yc(y,N,H){y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=Ot,y.needsUpdate=!0,Bs(y,N,H),y.side=Cn,y.needsUpdate=!0,Bs(y,N,H),y.side=pn):Bs(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),E=le.get(H),E.init(N),_.push(E),H.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),y!==H&&y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();let z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){let ge=xe[be];yc(ge,H,G),z.add(ge)}else yc(xe,H,G),z.add(xe)}),E=_.pop(),z},this.compileAsync=function(y,N,H=null){let z=this.compile(y,N,H);return new Promise(G=>{function xe(){if(z.forEach(function(be){V.get(be).currentProgram.isReady()&&z.delete(be)}),z.size===0){G(y);return}setTimeout(xe,10)}Xe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ja=null;function Md(y){Ja&&Ja(y)}function bc(){ei.stop()}function vc(){ei.start()}let ei=new ad;ei.setAnimationLoop(Md),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(y){Ja=y,de.setAnimationLoop(y),y===null?ei.stop():ei.start()},de.addEventListener("sessionstart",bc),de.addEventListener("sessionend",vc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(y,N);let H=de.enabled===!0&&de.isPresenting===!0,z=T!==null&&(ne===null||H)&&T.begin(P,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,N,ne),E=le.get(y,_.length),E.init(N),E.state.textureUnits=q.getTextureUnits(),_.push(E),st.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(st,Qt,N.reversedDepth),We=this.localClippingEnabled,je=Se.init(this.clippingPlanes,We),w=pe.get(y,R.length),w.init(),R.push(w),de.enabled===!0&&de.isPresenting===!0){let be=P.xr.getDepthSensingMesh();be!==null&&$a(be,N,-1/0,P.sortObjects)}$a(y,N,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Ie,Ee,N.reversedDepth),at=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,at&&F.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Se.beginShadows();let G=E.state.shadowsArray;if(we.render(G,y,N),je===!0&&Se.endShadows(),(z&&T.hasRenderPass())===!1){let be=w.opaque,ge=w.transmissive;if(E.setupLights(),N.isArrayCamera){let ve=N.cameras;if(ge.length>0)for(let Te=0,Oe=ve.length;Te<Oe;Te++){let Ge=ve[Te];Sc(be,ge,y,Ge)}at&&F.render(y);for(let Te=0,Oe=ve.length;Te<Oe;Te++){let Ge=ve[Te];Mc(w,y,Ge,Ge.viewport)}}else ge.length>0&&Sc(be,ge,y,N),at&&F.render(y),Mc(w,y,N)}ne!==null&&X===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),z&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,N),ie.resetDefaultState(),se=-1,ue=null,_.pop(),_.length>0?(E=_[_.length-1],q.setTextureUnits(E.state.textureUnits),je===!0&&Se.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,k!==null&&k.renderEnd()};function $a(y,N,H,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Je.intersectsSprite(y)){z&&mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);let be=ee.update(y),ge=y.material;ge.visible&&w.push(y,be,ge,H,mt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Je.intersectsObject(y))){let be=ee.update(y),ge=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),mt.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),mt.copy(be.boundingSphere.center)),mt.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){let ve=be.groups;for(let Te=0,Oe=ve.length;Te<Oe;Te++){let Ge=ve[Te],Re=ge[Ge.materialIndex];Re&&Re.visible&&w.push(y,be,Re,H,mt.z,Ge)}}else ge.visible&&w.push(y,be,ge,H,mt.z,null)}}let xe=y.children;for(let be=0,ge=xe.length;be<ge;be++)$a(xe[be],N,H,z)}function Mc(y,N,H,z){let{opaque:G,transmissive:xe,transparent:be}=y;E.setupLightsView(H),je===!0&&Se.setGlobalState(P.clippingPlanes,H),z&&g.viewport(fe.copy(z)),G.length>0&&Os(G,N,H),xe.length>0&&Os(xe,N,H),be.length>0&&Os(be,N,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Sc(y,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Re=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Wt(1,1,{generateMipmaps:!0,type:Re?gn:Xt,minFilter:Jn,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let xe=E.state.transmissionRenderTarget[z.id],be=z.viewport||fe;xe.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),ve=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(Ze),Ve=P.getClearAlpha(),Ve<1&&P.setClearColor(16777215,.5),P.clear(),at&&F.render(H);let Oe=P.toneMapping;P.toneMapping=en;let Ge=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),je===!0&&Se.setGlobalState(P.clippingPlanes,z),Os(y,H,z),q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ke=0,_t=N.length;Ke<_t;Ke++){let gt=N[Ke],{object:nt,geometry:Rt,material:ye,group:zt}=gt;if(ye.side===pn&&nt.layers.test(z.layers)){let Ye=ye.side;ye.side=Ot,ye.needsUpdate=!0,Ec(nt,H,z,Rt,ye,zt),ye.side=Ye,ye.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,ve,Te),P.setClearColor(Ze,Ve),Ge!==void 0&&(z.viewport=Ge),P.toneMapping=Oe}function Os(y,N,H){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xe=y.length;G<xe;G++){let be=y[G],{object:ge,geometry:ve,group:Te}=be,Oe=be.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ge.layers.test(H.layers)&&Ec(ge,N,H,ve,Oe,Te)}}function Ec(y,N,H,z,G,xe){y.onBeforeRender(P,N,H,z,G,xe),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(P,N,H,z,y,xe),G.transparent===!0&&G.side===pn&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,P.renderBufferDirect(H,N,z,G,y,xe),G.side=Cn,G.needsUpdate=!0,P.renderBufferDirect(H,N,z,G,y,xe),G.side=pn):P.renderBufferDirect(H,N,z,G,y,xe),y.onAfterRender(P,N,H,z,G,xe)}function Bs(y,N,H){N.isScene!==!0&&(N=tt);let z=V.get(y),G=E.state.lights,xe=E.state.shadowsArray,be=G.state.version,ge=he.getParameters(y,G.state,xe,N,H,E.state.lightProbeGridArray),ve=he.getProgramCacheKey(ge),Te=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=ae.get(y.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",yt),Te=new Map,z.programs=Te);let Ge=Te.get(ve);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===be)return Ac(y,ge),Ge}else ge.uniforms=he.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,H,ge),y.onBeforeCompile(ge,P),Ge=he.acquireProgram(ge,ve),Te.set(ve,Ge),z.uniforms=ge.uniforms;let Re=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=Se.uniform),Ac(y,ge),z.needsLights=Ad(y),z.lightsStateVersion=be,z.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Ge,z.uniformsList=null,Ge}function Tc(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=qi.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ac(y,N){let H=V.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Sd(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let H=0,z=y.length;H<z;H++){let G=y[H];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function Ed(y,N,H,z,G){N.isScene!==!0&&(N=tt),q.resetTextureUnits();let xe=N.fog,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ge=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:He.workingColorSpace,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=ae.get(z.envMap||be,ve),Oe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color,gt=en;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(gt=P.toneMapping);let nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=nt!==void 0?nt.length:0,ye=V.get(z),zt=E.state.lights;if(je===!0&&(We===!0||y!==ue)){let rt=y===ue&&z.id===se;Se.setState(z,y,rt)}let Ye=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==zt.state.version||ye.outputColorSpace!==ge||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Te||z.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Oe||ye.vertexTangents!==Ge||ye.morphTargets!==Re||ye.morphNormals!==Ke||ye.morphColors!==_t||ye.toneMapping!==gt||ye.morphTargetsCount!==Rt||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,ye.__version=z.version);let qt=ye.currentProgram;Ye===!0&&(qt=Bs(z,N,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,qt,ye));let sn=!1,Dn=!1,gi=!1,it=qt.getUniforms(),xt=ye.uniforms;if(g.useProgram(qt.program)&&(sn=!0,Dn=!0,gi=!0),z.id!==se&&(se=z.id,Dn=!0),ye.needsLights){let rt=Sd(E.state.lightProbeGridArray,G);ye.lightProbeGrid!==rt&&(ye.lightProbeGrid=rt,Dn=!0)}if(sn||ue!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(D,"projectionMatrix",y.projectionMatrix),it.setValue(D,"viewMatrix",y.matrixWorldInverse);let Nn=it.map.cameraPosition;Nn!==void 0&&Nn.setValue(D,lt.setFromMatrixPosition(y.matrixWorld)),S.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),ue!==y&&(ue=y,Dn=!0,gi=!0)}if(ye.needsLights&&(zt.state.directionalShadowMap.length>0&&it.setValue(D,"directionalShadowMap",zt.state.directionalShadowMap,q),zt.state.spotShadowMap.length>0&&it.setValue(D,"spotShadowMap",zt.state.spotShadowMap,q),zt.state.pointShadowMap.length>0&&it.setValue(D,"pointShadowMap",zt.state.pointShadowMap,q)),G.isSkinnedMesh){it.setOptional(D,G,"bindMatrix"),it.setOptional(D,G,"bindMatrixInverse");let rt=G.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),it.setValue(D,"boneTexture",rt.boneTexture,q))}G.isBatchedMesh&&(it.setOptional(D,G,"batchingTexture"),it.setValue(D,"batchingTexture",G._matricesTexture,q),it.setOptional(D,G,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",G._indirectTexture,q),it.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",G._colorsTexture,q));let Ln=H.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&C.update(G,H,qt),(Dn||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,it.setValue(D,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(xt.envMapIntensity.value=N.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Ym()),Dn){if(it.setValue(D,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&Td(xt,gi),xe&&z.fog===!0&&Me.refreshFogUniforms(xt,xe),Me.refreshMaterialUniforms(xt,z,re,oe,E.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.lightProbeGrid){let rt=ye.lightProbeGrid;xt.probesSH.value=rt.texture,xt.probesMin.value.copy(rt.boundingBox.min),xt.probesMax.value.copy(rt.boundingBox.max),xt.probesResolution.value.copy(rt.resolution)}qi.upload(D,Tc(ye),xt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(D,Tc(ye),xt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(D,"center",G.center),it.setValue(D,"modelViewMatrix",G.modelViewMatrix),it.setValue(D,"normalMatrix",G.normalMatrix),it.setValue(D,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let rt=z.uniformsGroups;for(let Nn=0,_i=rt.length;Nn<_i;Nn++){let wc=rt[Nn];j.update(wc,qt),j.bind(wc,qt)}}return qt}function Td(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ad(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,N,H){let z=V.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=N,V.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let H=V.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,H=0){ne=y,Z=N,X=H;let z=null,G=!1,xe=!1;if(y){let ge=V.get(y);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),fe.copy(y.viewport),_e.copy(y.scissor),Ne=y.scissorTest,g.viewport(fe),g.scissor(_e),g.setScissorTest(Ne),se=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(y);else if(ge.__hasExternalTextures)q.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Oe=y.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&V.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(xe=!0);let Te=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?z=Te[N][H]:z=Te[N],G=!0):y.samples>0&&q.useMultisampledRTT(y)===!1?z=V.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[H]:z=Te,fe.copy(y.viewport),_e.copy(y.scissor),Ne=y.scissorTest}else fe.copy(Ae).multiplyScalar(re).floor(),_e.copy(et).multiplyScalar(re).floor(),Ne=Be;if(H!==0&&(z=K),g.bindFramebuffer(D.FRAMEBUFFER,z)&&g.drawBuffers(y,z),g.viewport(fe),g.scissor(_e),g.setScissorTest(Ne),G){let ge=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,H)}else if(xe){let ge=N;for(let ve=0;ve<y.textures.length;ve++){let Te=V.get(y.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Te.__webglTexture,H,ge)}}else if(y!==null&&H!==0){let ge=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,H)}se=-1},this.readRenderTargetPixels=function(y,N,H,z,G,xe,be,ge=0){if(!(y&&y.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be]),ve){g.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Te=y.textures[ge],Oe=Te.format,Ge=Te.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!S.textureFormatReadable(Oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(Ge)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&H>=0&&H<=y.height-G&&D.readPixels(N,H,z,G,J.convert(Oe),J.convert(Ge),xe)}finally{let Te=ne!==null?V.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,z,G,xe,be,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be]),ve)if(N>=0&&N<=y.width-z&&H>=0&&H<=y.height-G){g.bindFramebuffer(D.FRAMEBUFFER,ve);let Te=y.textures[ge],Oe=Te.format,Ge=Te.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!S.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(N,H,z,G,J.convert(Oe),J.convert(Ge),0);let Ke=ne!==null?V.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ke);let _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dl(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Re),D.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){let z=Math.pow(2,-H),G=Math.floor(y.image.width*z),xe=Math.floor(y.image.height*z),be=N!==null?N.x:0,ge=N!==null?N.y:0;q.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,be,ge,G,xe),g.unbindTexture()},this.copyTextureToTexture=function(y,N,H=null,z=null,G=0,xe=0){let be,ge,ve,Te,Oe,Ge,Re,Ke,_t,gt=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(H!==null)be=H.max.x-H.min.x,ge=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,Oe=H.min.y,Ge=H.isBox3?H.min.z:0;else{let xt=Math.pow(2,-G);be=Math.floor(gt.width*xt),ge=Math.floor(gt.height*xt),y.isDataArrayTexture?ve=gt.depth:y.isData3DTexture?ve=Math.floor(gt.depth*xt):ve=1,Te=0,Oe=0,Ge=0}z!==null?(Re=z.x,Ke=z.y,_t=z.z):(Re=0,Ke=0,_t=0);let nt=J.convert(N.format),Rt=J.convert(N.type),ye;N.isData3DTexture?(q.setTexture3D(N,0),ye=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),ye=D.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),ye=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let zt=g.getParameter(D.UNPACK_ROW_LENGTH),Ye=g.getParameter(D.UNPACK_IMAGE_HEIGHT),qt=g.getParameter(D.UNPACK_SKIP_PIXELS),sn=g.getParameter(D.UNPACK_SKIP_ROWS),Dn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let gi=y.isDataArrayTexture||y.isData3DTexture,it=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let xt=V.get(y),Ln=V.get(N),rt=V.get(xt.__renderTarget),Nn=V.get(Ln.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let _i=0;_i<ve;_i++)gi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(y).__webglTexture,G,Ge+_i),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(N).__webglTexture,xe,_t+_i)),D.blitFramebuffer(Te,Oe,be,ge,Re,Ke,be,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||V.has(y)){let xt=V.get(y),Ln=V.get(N);g.bindFramebuffer(D.READ_FRAMEBUFFER,Q),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let rt=0;rt<ve;rt++)gi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,G,Ge+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,G),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,xe,_t+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,xe),G!==0?D.blitFramebuffer(Te,Oe,be,ge,Re,Ke,be,ge,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(ye,xe,Re,Ke,_t+rt,Te,Oe,be,ge):D.copyTexSubImage2D(ye,xe,Re,Ke,Te,Oe,be,ge);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ye,xe,Re,Ke,_t,be,ge,ve,nt,Rt,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,xe,Re,Ke,_t,be,ge,ve,nt,gt.data):D.texSubImage3D(ye,xe,Re,Ke,_t,be,ge,ve,nt,Rt,gt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Re,Ke,be,ge,nt,Rt,gt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Re,Ke,gt.width,gt.height,nt,gt.data):D.texSubImage2D(D.TEXTURE_2D,xe,Re,Ke,be,ge,nt,Rt,gt);g.pixelStorei(D.UNPACK_ROW_LENGTH,zt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),g.pixelStorei(D.UNPACK_SKIP_PIXELS,qt),g.pixelStorei(D.UNPACK_SKIP_ROWS,sn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Dn),xe===0&&N.generateMipmaps&&D.generateMipmap(ye),g.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?q.setTextureCube(y,0):y.isData3DTexture?q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?q.setTexture2DArray(y,0):q.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){Z=0,X=0,ne=null,g.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function pd(i,e){e.forEach((t,n)=>{let s=i.filter(r=>r.source===t.id).sort((r,a)=>r.id.localeCompare(a.id));s.forEach((r,a)=>{let o=1-2*((a+.5)/s.length),c=a*.61803398875%1,l=(n+.08+c*.84)/e.length*Math.PI*2,h=350+100*(a*.754877666%1),f=Math.sqrt(1-o*o);r.x=r.fx=h*f*Math.sin(l),r.y=r.fy=h*o,r.z=r.fz=h*f*Math.cos(l)})})}function md(i,e={}){let t=[new ke(e.ring1||"#D9963A"),new ke(e.ring2||"#F2EDE6")],n=new ke(e.glow||"#D9963A"),s=new An;i.add(s);let r=[];for(let p=0;p<2;p++){let x=490+p*35,v=new Ct(new vs(x,1.6,8,240),new fn({color:t[p],transparent:!0,opacity:.3,depthWrite:!1}));v.rotation.set(p?.9:-.5,p?-.45:.4,.2),s.add(v);let m=new Ct(new Gi(4.2,12,10),new fn({color:t[p]}));v.add(m);let u=new Ct(new Gi(9,12,10),new fn({color:t[p],transparent:!0,opacity:.18,depthWrite:!1}));m.add(u),r.push({ring:v,bead:m,radius:x})}let a=new Ct(new ys(44,1),new fn({color:n,wireframe:!0,transparent:!0,opacity:.16,depthWrite:!1}));s.add(a);let o=document.createElement("canvas");o.width=o.height=128;let c=o.getContext("2d"),l=n,h=`${Math.round(l.r*255)},${Math.round(l.g*255)},${Math.round(l.b*255)}`,f=c.createRadialGradient(64,64,0,64,64,64);f.addColorStop(0,`rgba(${h},.5)`),f.addColorStop(.25,`rgba(${h},.14)`),f.addColorStop(1,`rgba(${h},0)`),c.fillStyle=f,c.fillRect(0,0,128,128);let d=new di(new Oi({map:new _s(o),transparent:!0,depthWrite:!1,blending:hi}));return d.scale.set(360,360,1),s.add(d),{update(p,x,v=1){a.rotation.set(p*.09,p*.12,0),d.material.opacity=x?.25:.7+Math.sin(p*.7)*.1,r.forEach(({ring:m,bead:u,radius:M},A)=>{m.visible=v>.01,m.scale.setScalar(.2+.8*Math.min(1,v)),m.rotation.z=p*(A?-.018:.012),u.position.set(Math.cos(p*.16+A*2)*M,Math.sin(p*.16+A*2)*M,0),m.material.opacity=(x?.09:.3)*Math.min(1,v)})}}}function gd(i,e){let t=new Map(i.map(h=>[h.id,h])),n=new Map(i.map(h=>[h.id,[]])),s=h=>typeof h=="object"?h.id:h;for(let h of e){let f=s(h.source),d=s(h.target);!t.has(f)||!t.has(d)||(n.get(f).push({id:d,link:h}),n.get(d).push({id:f,link:h}))}let r=[...i].sort((h,f)=>(f.source==="wiki")-(h.source==="wiki")||(f.degree||0)-(h.degree||0)||h.id.localeCompare(f.id));for(let h of n.values())h.sort((f,d)=>(t.get(d.id).degree||0)-(t.get(f.id).degree||0)||f.id.localeCompare(d.id));let a=new Set,o=[],c=new Map,l=(h,f=null,d=null)=>{let p={node:h,parent:f,link:d,index:o.length,home:{x:h.x,y:h.y,z:h.z},born:0,origin:null};return o.push(p),c.set(h.id,p),a.add(h.id),p};for(let h of r){if(a.has(h.id))continue;let f=[l(h)];for(let d=0;d<f.length;d++){let p=f[d],x=n.get(p.node.id).filter(v=>!a.has(v.id));for(let v of x.slice(0,3))f.push(l(t.get(v.id),p,v.link));x.length>3&&f.push(p)}}return o.forEach((h,f)=>{h.born=f===0?0:f===1?1.2:f===2?2.4:3+23*Math.pow((f-2)/Math.max(1,o.length-3),.62)}),{records:o,byNode:c,treeLinks:new Set(o.map(h=>h.link).filter(Boolean)),duration:29}}function _d(i,e){let t=Math.max(0,e-i.born),n=Math.min(1,t/1.6),s=n>=1?1:1-Math.exp(-5*n)*Math.cos(7*n),r=.17+.83*Math.min(1,e/26),a=i.origin||{x:0,y:0,z:0},o=i.index===0?Math.min(1,e/18):s;return Object.fromEntries(["x","y","z"].map(c=>[c,a[c]+(i.home[c]*r-a[c])*o]))}var ks={sources:[{id:"projects",color:"#D9262E"},{id:"operations",color:"#7C8894"},{id:"people",color:"#4E9E7E"},{id:"decisions",color:"#D18A3A"},{id:"research",color:"#4A90B8"},{id:"ideas",color:"#B5647E"},{id:"memory",color:"#CBBF9A"}],nodes:[{id:"projects:ade1671a0fc3",s:"projects",d:1,t:"Alderpoint Brand Compliance Audio Adjustment"},{id:"projects:0f0b18f9922d",s:"projects",d:2,t:"Alderpoint Brand Guidelines Enforcement Concerns"},{id:"projects:7d08872da56d",s:"projects",d:5,t:"Alderpoint internal comms template review workflow"},{id:"projects:1b32ddc20396",s:"projects",d:3,t:"Alderpoint Network Graphic Change Approval Issues"},{id:"projects:3dcc92d9f1e2",s:"projects",d:6,t:"Alderpoint network spec file transfer issues"},{id:"projects:1786b5236fce",s:"projects",d:3,t:"Alderpoint Network spec review and invoice sign off"},{id:"projects:cbd0df0ebb88",s:"projects",d:4,t:"Alderpoint Spec-Sensitive Brand Mandate Changes"},{id:"projects:805ff00d7133",s:"projects",d:2,t:"Alderpoint's Multi-layered Brand Veto Process"},{id:"projects:c3836e78e4e0",s:"projects",d:2,t:"Third site interview material received"},{id:"projects:2a459de7bdc2",s:"projects",d:5,t:"Alderpoint brand guidelines conflict resolution notes"},{id:"projects:c2ce15ae175b",s:"projects",d:4,t:"Alderpoint Health graphic template migration review"},{id:"projects:1e1fe5956f7f",s:"projects",d:7,t:"Alderpoint Health sign-off delay causes logistical strain"},{id:"projects:36d5ac5c4b8e",s:"projects",d:5,t:"Alderpoint Health Spec Sensitive Data Constraints"},{id:"projects:2e3a05ff63f2",s:"projects",d:7,t:"Alderpoint Health two-site shoot logistics plan"},{id:"projects:0e10d5a9f2de",s:"projects",d:6,t:"Alderpoint internal comms review checklist items"},{id:"projects:4544f34aab28",s:"projects",d:7,t:"Alderpoint Network Audio Subtitles and WCAG Standards"},{id:"projects:b07648de7606",s:"projects",d:3,t:"Alderpoint Network interviewee list and scheduling difficulties"},{id:"projects:59ba21553f8a",s:"projects",d:19,t:"Alderpoint Q3 internal film"},{id:"projects:dd75759c7ef4",s:"projects",d:4,t:"Q3 film delivery log"},{id:"projects:d8aa8e6fb545",s:"projects",d:2,t:"Alderpoint Health Brand Specification Review Notes"},{id:"projects:32284f612903",s:"projects",d:5,t:"Alderpoint Health remote asset delivery logistics"},{id:"projects:9150e078ee40",s:"projects",d:2,t:"Drybank brewery live event delivery pipeline issues"},{id:"projects:b027e0d66c9b",s:"projects",d:4,t:"Ilias\u2019s first deliverable for Tallgrass Outfitters"},{id:"projects:7c05f2f0b348",s:"projects",d:3,t:"Kettleridge initial brief scope review"},{id:"projects:9234c42659f7",s:"projects",d:4,t:"Vantrell's two year project profile assessment"},{id:"projects:bcf0398d3fb6",s:"projects",d:4,t:"Alderpoint Health Internal Comms Review"},{id:"projects:1e7da5ca116b",s:"projects",d:0,t:"Cape Line rebrand animation delivery specs"},{id:"projects:1133f2511847",s:"projects",d:4,t:"Drybank Agency Contract Scope Clarification Notes"},{id:"projects:171ffaa09f8a",s:"projects",d:1,t:"Drybank Brewing colour grading test results"},{id:"projects:d8a2b8ede917",s:"projects",d:2,t:"Kettleridge Lecture Capture Experiment Scope Check"},{id:"projects:258a4d06eb13",s:"projects",d:3,t:"Startup explainer asset requirements sign-off"},{id:"projects:9d1f4c1e516c",s:"projects",d:2,t:"Tallgrass Outfitters new range colour grading notes"},{id:"projects:0ea8313f7b5b",s:"projects",d:6,t:"Wedding Film Agreement Status and Follow Up"},{id:"projects:3ed515ad94ec",s:"projects",d:2,t:"Year End Reel Delivery Complications"},{id:"projects:a765a7b0168a",s:"projects",d:3,t:"Alderpoint Health Corporate Event Sound Mix Notes"},{id:"projects:3bc50625ca13",s:"projects",d:1,t:"Alderpoint Network Spec Sensitivity and Delivery Timeline"},{id:"projects:baa4c8e81547",s:"projects",d:2,t:"Appeal Film Script Feedback Needs Aditi Review"},{id:"projects:d771f3e5bb79",s:"projects",d:4,t:"Cape Line delivery specs required for overflow project"},{id:"projects:b987fb41db6e",s:"projects",d:1,t:"Cape Line Museum Exhibit Spec Check"},{id:"projects:e1d6d99e5667",s:"projects",d:1,t:"Conference Sizzle Delivery Requirements Review"},{id:"projects:55ea8a9663e1",s:"projects",d:6,t:"Developer Site Tour Rough Cut Notes"},{id:"projects:88da2f855e09",s:"projects",d:3,t:"Drybank Brewery restaurant launch delivery notes"},{id:"projects:6b4d427a894f",s:"projects",d:2,t:"Drybank Brewing booth presentation loop fix"},{id:"projects:1151241ebf46",s:"projects",d:4,t:"Drybank Brewing short film pre-retainer specs"},{id:"projects:b7e1eeb4daba",s:"projects",d:1,t:"Kettleridge Open Day footage colour grade feedback"},{id:"projects:b460ef337da8",s:"projects",d:5,t:"Manufacturer Recruitment Film VFX Review Notes"},{id:"projects:f6375c1edf01",s:"projects",d:6,t:"Music Video Delivery Scheduling Conflicts and Feedback"},{id:"projects:eb239ac41ab5",s:"projects",d:5,t:"Reine\u2019s rationale for Cape Line delivery specs"},{id:"projects:8042fe4829bd",s:"projects",d:3,t:"Sports Club Season Review Final Deliverable Issues"},{id:"projects:dd057a791d15",s:"projects",d:3,t:"Standardization of Asset Handoff Protocol"},{id:"projects:fd84b25234d1",s:"projects",d:3,t:"Tallgrass apparel product shoot logistics issues"},{id:"projects:362bf9c0854f",s:"projects",d:1,t:"Tallgrass Outfitters Rebrand Launch Film Delivery Notes"},{id:"projects:91059f80ea43",s:"projects",d:3,t:"The Unplaced Documentary Short from Early 2024"},{id:"projects:1502221c1ec1",s:"projects",d:4,t:"Year End Reel Scope Creep and Deliverables Review"},{id:"projects:d9cdb861a093",s:"projects",d:10,t:"Agency Overreach on Drybank Delivery Timeline"},{id:"projects:e7da4b5d259b",s:"projects",d:5,t:"Drybank asset library status for seasonal campaigns"},{id:"projects:441c3eacd655",s:"projects",d:5,t:"Drybank Brewing Agency Delivery Requirements Clarification"},{id:"projects:f7b1124c3f14",s:"projects",d:4,t:"Drybank Brewing first batch delivery concerns"},{id:"projects:b940cd8a5518",s:"projects",d:4,t:"Drybank Brewing library music sourcing issues"},{id:"projects:e34dea37826e",s:"projects",d:2,t:"Drybank Brewing seasonal content delivery status"},{id:"projects:624f7fc6a6a7",s:"projects",d:4,t:"Vertical Capture Required For Drybank Brewing Campaign"},{id:"projects:b9a040b19e70",s:"projects",d:5,t:"Volume cap implications for Drybank Brewing deliverables"},{id:"projects:a7d5c7147514",s:"projects",d:4,t:"Broadcast cutdown delivery plan"},{id:"projects:66eede52cc76",s:"projects",d:3,t:"Dagny colour timing for Drybank asset review"},{id:"projects:5ffbcbc45f10",s:"projects",d:4,t:"Drybank Agency sign off and internal routing"},{id:"projects:6d425528f387",s:"projects",d:5,t:"Drybank Brewing asset delivery review spring cycle"},{id:"projects:84873a0addeb",s:"projects",d:3,t:"Drybank Brewing Endframe Legal Copy Review"},{id:"projects:005856be1e96",s:"projects",d:22,t:"Drybank broadcast cutdown"},{id:"projects:74e850a8d2d6",s:"projects",d:6,t:"Drybank Grade Differences for Agency and Social"},{id:"projects:3e0fba38b6ab",s:"projects",d:5,t:"Drybank revisions causing timeline drag"},{id:"projects:cc9d9032fc16",s:"projects",d:2,t:"Agency Feedback on Drybank's second round"},{id:"projects:e23ec9dac87c",s:"projects",d:6,t:"Drybank Asset Delivery Conflicts With Tallgrass Review"},{id:"projects:5048206ddf3c",s:"projects",d:2,t:"Drybank Brewing Agency Redlines on Hero Cut Timing"},{id:"projects:e7850ad76880",s:"projects",d:2,t:"Drybank Brewing Asset Checklist Post-Delivery"},{id:"projects:40a0a456da19",s:"projects",d:6,t:"Drybank Brewing call sheet discrepancies noted"},{id:"projects:e45ffa60b7f5",s:"projects",d:3,t:"Drybank Brewing cut revisions after agency review"},{id:"projects:cbbd09c31020",s:"projects",d:4,t:"Drybank Brewing cutbacks on social rollout"},{id:"projects:00499cc29465",s:"projects",d:3,t:"Drybank Brewing Grade Review with Dagny Restrepo"},{id:"projects:f0f49614d0df",s:"projects",d:5,t:"Drybank Brewing invoice query re colour grading"},{id:"projects:c8da728ff0a3",s:"projects",d:21,t:"Drybank Brewing spring campaign"},{id:"projects:41b5204b98af",s:"projects",d:2,t:"Drybank Brewing text treatment and mandated colour rules"},{id:"projects:f38dd8fc24f3",s:"projects",d:1,t:"Drybank Brewing VO replacement decision log"},{id:"projects:7078340e6b9f",s:"projects",d:5,t:"Harbour Site Suitability Assessment for Tallgrass Shoot"},{id:"projects:d8cc307ffba6",s:"projects",d:3,t:"Harbour Unit Access and Crane Placement Notes"},{id:"projects:5849e46d5775",s:"projects",d:3,t:"Spring campaign brief v3"},{id:"projects:17f1af198bf7",s:"projects",d:3,t:"Spring campaign edit notes"},{id:"projects:982c7d1a4cad",s:"projects",d:2,t:"Alumni series episode planning"},{id:"projects:33842c5ef674",s:"projects",d:3,t:"Alumni Series Feedback Lag on Recruitment Films"},{id:"projects:718ec56d5de1",s:"projects",d:3,t:"Budgetary scope creep on Kettleridge recruitment films"},{id:"projects:c892b9bcdec2",s:"projects",d:4,t:"Kettleridge alumni series archive access issues"},{id:"projects:92f6a06a14ca",s:"projects",d:6,t:"Kettleridge Alumni Series Edit Revisions Summary"},{id:"projects:6d7285846a3b",s:"projects",d:20,t:"Kettleridge alumni series"},{id:"projects:431f381b2585",s:"projects",d:2,t:"Kettleridge Campus Access and Location Constraints"},{id:"projects:5b6d808f2e14",s:"projects",d:2,t:"Kettleridge series visual sign off and asset lock"},{id:"projects:44d972b37afb",s:"projects",d:3,t:"Kettleridge Uni Episode One Asset Signoff"},{id:"projects:ca087d5dba90",s:"projects",d:3,t:"Kettleridge University Travel Costs Overrun"},{id:"projects:8f95659d8d58",s:"projects",d:3,t:"KU Travel Shoot Contingency Planning for Episode Two"},{id:"projects:bb1633b88041",s:"projects",d:4,t:"Kettleridge alumni series stalled on asset delivery"},{id:"projects:749d7854ad15",s:"projects",d:2,t:"Kettleridge campus access restrictions and sign-off"},{id:"projects:083061a421bc",s:"projects",d:6,t:"Kettleridge Open Day video asset delivery status"},{id:"projects:b289c8064262",s:"projects",d:5,t:"Kettleridge Recruitment Film Structure Assessment"},{id:"projects:7529b93c14a5",s:"projects",d:19,t:"Kettleridge recruitment films 2026"},{id:"projects:ca49a7ee6ae6",s:"projects",d:2,t:"Kettleridge University alumni series cancellation implications"},{id:"projects:331efd86f0c3",s:"projects",d:1,t:"Kettleridge University Alumni Series Contributor Change"},{id:"projects:24f20331f7b0",s:"projects",d:3,t:"Kettleridge university alumni series status update"},{id:"projects:9a670359c4c2",s:"projects",d:6,t:"Kettleridge University second library music notes"},{id:"projects:33c0f58961e7",s:"projects",d:3,t:"Kettleridge University Social Caption Review Status"},{id:"projects:5bc16329a872",s:"projects",d:4,t:"Kettleridge vertical asset requirements tracking"},{id:"projects:723ab07c3ec8",s:"projects",d:5,t:"Kettleridge web team delivery requirements check"},{id:"projects:b03d94729bc2",s:"projects",d:2,t:"Student pool for Kettleridge recruitment films"},{id:"projects:6de99e59b673",s:"projects",d:3,t:"Motion template system"},{id:"projects:53f3a35116c9",s:"projects",d:3,t:"Stills Requirements For Tallgrass Outfitters Campaign"},{id:"projects:3baf1de5dbd4",s:"projects",d:2,t:"Tallgrass Outfitters final file spec requirements"},{id:"projects:dc7ad9f3f453",s:"projects",d:1,t:"Tallgrass Outfitters High Resolution Retouching Mandate"},{id:"projects:a5a49ac259c7",s:"projects",d:2,t:"Tallgrass Outfitters review process bottlenecks"},{id:"projects:acaa78da4ac5",s:"projects",d:2,t:"Tallgrass Outfitters usage rights negotiation status"},{id:"projects:11d6d012865a",s:"projects",d:6,t:"Tallgrass Stills Distribution Rights Specification"},{id:"projects:6312fb234768",s:"projects",d:1,t:"Tallgrass mountain material colour correction notes"},{id:"projects:473a90cf47ba",s:"projects",d:4,t:"Tallgrass outdoor apparel delivery pipeline issues"},{id:"projects:9d48ce9c1a19",s:"projects",d:3,t:"Tallgrass Outfits Moodboard Review Issues"},{id:"projects:c9a12bc2469d",s:"projects",d:4,t:"Tallgrass Outfitters Final Invoice Reconciliation Issues"},{id:"projects:ada2fc952daf",s:"projects",d:5,t:"Tallgrass Outfitters High Altitude Deliverables Prep"},{id:"projects:091b03402fe0",s:"projects",d:3,t:"Tallgrass Outfitters model release signatures"},{id:"projects:3166404d17cc",s:"projects",d:3,t:"Tallgrass Outfitters music search needs update"},{id:"projects:999a257409e5",s:"projects",d:3,t:"Tallgrass Outfitters specific product reshoot logistics"},{id:"projects:28d1ff44049d",s:"projects",d:5,t:"Tallgrass screen specs high resolution requirements"},{id:"projects:d4cc6839a6f1",s:"projects",d:5,t:"Tallgrass spring range deliverables timeline discussion"},{id:"projects:a4400d70f8ef",s:"projects",d:1,t:"Tallgrass vertical cutdowns review and spec sheet"},{id:"projects:fa2866f703ae",s:"projects",d:3,t:"Tallgrass visual selection workflow review"},{id:"projects:ac0614ceb006",s:"projects",d:1,t:"Tallgrass winter range battery and field requirements"},{id:"projects:e3a41bd9b1e6",s:"projects",d:24,t:"Tallgrass winter range films"},{id:"operations:1a3c959f5b72",s:"operations",d:3,t:"Annual Subscription Costs And Renewal Dates"},{id:"operations:ada4ded60d2f",s:"operations",d:3,t:"Booking Chaos Regarding the Small Conference Room"},{id:"operations:8e78147c1f97",s:"operations",d:2,t:"Captioning and Subtitling Deliverable Handover Protocol"},{id:"operations:48e676a0dea2",s:"operations",d:5,t:"Client Payment Schedule and Standard Terms"},{id:"operations:afcc8de6075f",s:"operations",d:3,t:"Client Raw Media Intake Protocol"},{id:"operations:8fe340438117",s:"operations",d:4,t:"Client Requesting Source Project Files Protocol"},{id:"operations:ee934e3e1275",s:"operations",d:10,t:"Cape Line supplier agreement"},{id:"operations:d99c1a32c08e",s:"operations",d:14,t:"Drybank Brewing retainer 2026"},{id:"operations:4533c30f1919",s:"operations",d:20,t:"Tallgrass Outfitters master agreement 2026"},{id:"operations:a6eee751e736",s:"operations",d:6,t:"Council Permits For Tallgrass Outdoor Shoots"},{id:"operations:d2fed580dd0f",s:"operations",d:3,t:"Current Status of the Post Production Reel"},{id:"operations:f988bf333d81",s:"operations",d:19,t:"Alderpoint Health brand guidelines"},{id:"operations:cc03a3090742",s:"operations",d:1,t:"Cape Line delivery specification 2025"},{id:"operations:100a2fae4a51",s:"operations",d:9,t:"Cape Line delivery specification 2026 update"},{id:"operations:d0213106e05f",s:"operations",d:3,t:"Finished Job Master File Storage Protocol"},{id:"operations:5d88eabe2d86",s:"operations",d:3,t:"Fire Safety Checklist Review Annual Building Check"},{id:"operations:30ae30eb7633",s:"operations",d:3,t:"Freelancer Workflow Requirements and Deliverable Handover"},{id:"operations:a5c884a200b7",s:"operations",d:3,t:"Grading Monitor Calibration Needs Attention"},{id:"operations:c627ab4e0bb6",s:"operations",d:4,t:"Guest Network and Internal Device Access Protocol"},{id:"operations:04d7d7bfc7db",s:"operations",d:6,t:"Insurance and errors and omissions"},{id:"operations:b0c9cd50e1d2",s:"operations",d:5,t:"Keystock footage distributor has gone dark"},{id:"operations:669059ca8381",s:"operations",d:8,t:"Drybank spring campaign music clearance"},{id:"operations:a2cf4dec74c6",s:"operations",d:6,t:"Music library accounts"},{id:"operations:59450030097e",s:"operations",d:1,t:"LTO Archive Contents Breakdown by Tape Label"},{id:"operations:3f56087e937e",s:"operations",d:4,t:"New Client Intake Procedure Checklist"},{id:"operations:e23dc12fda0c",s:"operations",d:2,t:"Office Plant Care and Watering Schedule"},{id:"operations:1ed76b3575c8",s:"operations",d:3,t:"Physical Media Requirements and Dispatch Process"},{id:"operations:0b1f677b3fee",s:"operations",d:3,t:"Project Milestone Naming and Internal Tracking"},{id:"operations:aa08fb1fcbe8",s:"operations",d:4,t:"Q3 Office Equipment and Liability Policy Review"},{id:"operations:cf406eaaa8c2",s:"operations",d:8,t:"Reimbursement procedure for freelance subcontractors"},{id:"operations:76f6b3757732",s:"operations",d:4,t:"Render Farm Downtime Schedule and Contingency Planning"},{id:"operations:5d2975ca9170",s:"operations",d:4,t:"Required Delivery File Structure Protocol"},{id:"operations:86a09aab4e1d",s:"operations",d:3,t:"Required Monitoring Standards for Sound Mix Checks"},{id:"operations:8a1fa85dbbf1",s:"operations",d:4,t:"Retainer Invoicing and Client Chase Protocol"},{id:"operations:d9e4ea08522d",s:"operations",d:3,t:"Rush Job Quoting Process Steps"},{id:"operations:681e4dca2b9e",s:"operations",d:5,t:"Second Suite Colour Calibration Procedure and Issues"},{id:"operations:61419b1b0f81",s:"operations",d:4,t:"Source File Retention Policy For Project Archives"},{id:"operations:d862e3cae668",s:"operations",d:3,t:"Stock Library Usage and Licensing Restrictions"},{id:"operations:d043fbae1bd1",s:"operations",d:3,t:"Studio Key Distribution and Access Protocols"},{id:"operations:39a543e8c62a",s:"operations",d:23,t:"Project kickoff template"},{id:"operations:304316f72231",s:"operations",d:43,t:"Vantrell delivery checklist"},{id:"operations:8d200a040bc3",s:"operations",d:3,t:"The external archive drive failure in 2024"},{id:"operations:af477bc78673",s:"operations",d:3,t:"The reason shared drive folders are never the same"},{id:"operations:f1cb70a10508",s:"operations",d:44,t:"Vantrell rate card 2026"},{id:"operations:3e1d95ef7a24",s:"operations",d:2,t:"When talent releases are required and filed"},{id:"people:2183b8a7f795",s:"people",d:7,t:"Aditi Raval"},{id:"people:6cc7f846b08a",s:"people",d:8,t:"Alderpoint Health comms point of contact status"},{id:"people:94942648d174",s:"people",d:5,t:"Alderpoint Health prior agency briefing review"},{id:"people:fb090c544632",s:"people",d:5,t:"Broker contact details and renewal cycle notes"},{id:"people:8e49ecdcab81",s:"people",d:4,t:"Cape Line broadcast contact details and handover process"},{id:"people:e550a5cef532",s:"people",d:3,t:"Cape Line contact requires specific delivery signoff procedures"},{id:"people:c34ad8d17ed3",s:"people",d:30,t:"Client and supplier contacts"},{id:"people:edce48a07c77",s:"people",d:13,t:"Dagny Restrepo"},{id:"people:f27ce6a59c45",s:"people",d:4,t:"Drybank Agency Producer Communication Style and Delays"},{id:"people:da53a836eb3c",s:"people",d:3,t:"Drybank Brewing new marketing contact updates"},{id:"people:5ea566bb9042",s:"people",d:4,t:"External field recording specialist notes"},{id:"people:ddaa1b924478",s:"people",d:4,t:"Freelance DOP preferred for outdoor shoots"},{id:"people:7cf4b4381104",s:"people",d:7,t:"Ilias Novak"},{id:"people:5d03a440b050",s:"people",d:4,t:"Kettleridge alumni series dead and the recruitment files"},{id:"people:27bdea058a52",s:"people",d:4,t:"Kettleridge University office point of contact details"},{id:"people:4b315d644077",s:"people",d:11,t:"Kofi Mensah-Barr"},{id:"people:e3490b1bd43d",s:"people",d:4,t:"Need for second freelance editor capacity"},{id:"people:597a3593909f",s:"people",d:9,t:"Reine Okonjo"},{id:"people:45c64c9fc514",s:"people",d:12,t:"Sunniva Aalto"},{id:"people:180982616a8a",s:"people",d:4,t:"Tallgrass Outfitters Client Interaction Observations"},{id:"people:3242278a3321",s:"people",d:4,t:"Temporary Support Staffing During School Holidays"},{id:"people:f88b51f38ae6",s:"people",d:4,t:"The ongoing battle with external financial processing"},{id:"people:976c938c62fc",s:"people",d:5,t:"Tomas Bergeron"},{id:"people:594c2d7cc49d",s:"people",d:7,t:"Wren Castellanos"},{id:"decisions:1f711d572af7",s:"decisions",d:3,t:"Alderpoint health network rate adjustment rationale"},{id:"decisions:922f13d73070",s:"decisions",d:3,t:"Annual Reel Rebuild Triggers Account Strategy Shifts"},{id:"decisions:c63ab69e993d",s:"decisions",d:4,t:"Billing Rate for New Client Kickoff Meetings"},{id:"decisions:1f9faf63084e",s:"decisions",d:5,t:"Consolidating Project Tracking Systems Across Accounts"},{id:"decisions:67385950e96d",s:"decisions",d:3,t:"Dagny Restrepo colour grading dependency review"},{id:"decisions:4fa1f0c2f73f",s:"decisions",d:12,t:"Deliver everything to broadcast specification"},{id:"decisions:de749e1c3abf",s:"decisions",d:8,t:"Delivery Date Agreement Authority Levels"},{id:"decisions:69a726c7087c",s:"decisions",d:4,t:"Invoice Trigger Shifts From Client Approval to Final Delivery"},{id:"decisions:d33e9a1328f2",s:"decisions",d:5,t:"Junior role fills specific capacity gap"},{id:"decisions:6508c383006e",s:"decisions",d:4,t:"Keep Secondary Music Library Subscription"},{id:"decisions:f1af11c7e68b",s:"decisions",d:3,t:"Legacy Edit Suite Maintenance Protocol for Archive Conforms"},{id:"decisions:b6e35688d973",s:"decisions",d:4,t:"Migrate archive from unreliable spinning disks"},{id:"decisions:21acd9a36dc7",s:"decisions",d:5,t:"Need for second rendering node due to capacity issues"},{id:"decisions:a1a0cf0da04e",s:"decisions",d:5,t:"Reel Scope Exclusions Policy Post Alderpoint Review"},{id:"decisions:d74b8653a513",s:"decisions",d:12,t:"Standardise on one edit pipeline"},{id:"decisions:994afea4d58f",s:"decisions",d:4,t:"Standardised Captions Workflow Requirement Set"},{id:"decisions:8d6b467654af",s:"decisions",d:10,t:"Take the Tallgrass exclusivity"},{id:"decisions:54d927368366",s:"decisions",d:3,t:"Unpaid Pitches Are Not Part Of Our Scope"},{id:"decisions:67f38682f382",s:"decisions",d:5,t:"Weddings Do Not Align With Studio Focus"},{id:"decisions:42f8a2905283",s:"decisions",d:2,t:"weekend rates do not cover emergency revisions"},{id:"decisions:ed530142f678",s:"decisions",d:8,t:"Who uses which AI tools"},{id:"research:f1cc8b10efdb",s:"research",d:3,t:"Accented Voice Recognition Fails On Sound Design"},{id:"research:81033a116a04",s:"research",d:5,t:"Audio description workflow for visual content"},{id:"research:ba0b8ec93e1a",s:"research",d:3,t:"Brand Film Length Varies By Client Goals"},{id:"research:f68d12cab680",s:"research",d:7,t:"Broadcast loudness standards, a plain explanation"},{id:"research:937a2573e0e0",s:"research",d:4,t:"Burned Captions Versus Separate Sidecar Delivery"},{id:"research:569802adaaef",s:"research",d:3,t:"Client Tolerance for Remote Review Platforms"},{id:"research:aed45f3e8f30",s:"research",d:4,t:"Documentary funding relies heavily on regional council decisions"},{id:"research:38f43580097c",s:"research",d:3,t:"Drybank Brewing Agency Markup Process Observations"},{id:"research:f2964af4898c",s:"research",d:3,t:"Drybank Brewing feedback tends to involve agencies"},{id:"research:9271e8ea83a3",s:"research",d:4,t:"DSLR versus Cinema Camera Logistics"},{id:"research:3c8c12b9afae",s:"research",d:3,t:"European short film festival submission requirements and fees"},{id:"research:d7103994ac4b",s:"research",d:3,t:"HDR requirement status across current clients"},{id:"research:c6c00f95fb1c",s:"research",d:4,t:"Market Rates for High End Short Form Content"},{id:"research:69af4b1bd02c",s:"research",d:3,t:"Need for Dedicated Studio Space Assessment"},{id:"research:e4ab4c934dc8",s:"research",d:3,t:"Platform Encoding Loss and Delivery Specs"},{id:"research:82ce923df093",s:"research",d:3,t:"Podcast video feasibility and studio capacity"},{id:"research:5d6f7d9e4f15",s:"research",d:4,t:"Provincial drone flight regulations for outdoor shoots"},{id:"research:a849e4d7510f",s:"research",d:3,t:"Questions That Bypass Client Gloss"},{id:"research:b5dc6830fe06",s:"research",d:3,t:"Recruitment Films Must Show the Day To Day Reality"},{id:"research:37d65b79086a",s:"research",d:18,t:"Regional production companys, a look at the competition"},{id:"research:3d0acfc7eef0",s:"research",d:3,t:"Social Media Frame Rate Conversion Guidance"},{id:"research:7afb31b06056",s:"research",d:3,t:"Stock Music Licensing Versus Custom Scoring Budgeting"},{id:"research:94ffb9c8706e",s:"research",d:3,t:"Technical hurdles of live stream delivery"},{id:"research:bb5c5276c300",s:"research",d:3,t:"Three-point lighting standard for doc interviews"},{id:"research:0ab1a718e29d",s:"research",d:8,t:"Vertical formats for recruitment, what actually works"},{id:"ideas:ef419dd7c8da",s:"ideas",d:4,t:"Archive Material Digitisation Service Pitch"},{id:"ideas:eff4c454b659",s:"ideas",d:3,t:"Cape Line delivery spec briefing for clients"},{id:"ideas:8b0c25b192bf",s:"ideas",d:3,t:"Drybank Brewing agency demands rebrand narrative"},{id:"ideas:0626eb523f4a",s:"ideas",d:4,t:"Drybank Brewing Christmas content concept"},{id:"ideas:ebd35b42ad69",s:"ideas",d:4,t:"Ferry Operator Pitch Needs Quick Review"},{id:"ideas:5f6e055b4894",s:"ideas",d:3,t:"Grade Suite Booking Policy and Costs"},{id:"ideas:edfe81dd39c5",s:"ideas",d:3,t:"Harbour documentary potential scope and constraints"},{id:"ideas:ee8b335ee767",s:"ideas",d:3,t:"Health Communications Niche Viability Assessment"},{id:"ideas:67f4ab6bcaa5",s:"ideas",d:3,t:"Local Trades Documentary Series Potential Pitch"},{id:"ideas:c3192da73c80",s:"ideas",d:3,t:"Monthly Social Content Package Feasibility Study"},{id:"ideas:857d88865476",s:"ideas",d:4,t:"Our own marketing is the job nobody books"},{id:"ideas:f71029b803c3",s:"ideas",d:3,t:"Regional tourism board"},{id:"ideas:c889074992d0",s:"ideas",d:4,t:"Ridgeway Gear approach"},{id:"ideas:e55291f87627",s:"ideas",d:3,t:"Short Form Abstract for Reel Showcase"},{id:"ideas:c1dc429d2ff5",s:"ideas",d:3,t:"Stills photographer for product content"},{id:"ideas:c6fa08104bac",s:"ideas",d:4,t:"Studio Podcast Scope and Resource Assessment"},{id:"ideas:c47dd0f59771",s:"ideas",d:3,t:"Using Kettleridge materials for student modules"},{id:"memory:aa1f83764640",s:"memory",d:4,t:"24 June 2026"},{id:"memory:554c29c83836",s:"memory",d:5,t:"11 September 2026"},{id:"memory:d2af40c89466",s:"memory",d:6,t:"Alderpoint comms review stalled by spec lock"},{id:"memory:d5e55cab0b0d",s:"memory",d:6,t:"Alderpoint comms review stuck on branding guidelines"},{id:"memory:8542d12a741d",s:"memory",d:4,t:"Alderpoint health comms review stalled on brand guidelines"},{id:"memory:cbc196f92b1e",s:"memory",d:5,t:"Alderpoint Health spec review stalled by sound pass"},{id:"memory:5b5a459a325c",s:"memory",d:4,t:"Alderpoint spec review stalled by colour grade feedback"},{id:"memory:08535ef271a7",s:"memory",d:5,t:"Cape Line delivery specs causing Alderpoint review delays"},{id:"memory:23d2f2c7d216",s:"memory",d:4,t:"Cape Line delivery specs still pending approval"},{id:"memory:7b9e8af3cc00",s:"memory",d:4,t:"Cape Line spec delay and Drybank revisions"},{id:"memory:d286467d044d",s:"memory",d:4,t:"Cape Line spec requirements causing sound mix hold up"},{id:"memory:e3f2600c9539",s:"memory",d:5,t:"Drybank agency call stall and Tallgrass colour review"},{id:"memory:1336c80422b9",s:"memory",d:4,t:"Drybank Agency delivery specs causing Sunday night panic"},{id:"memory:83c46db56942",s:"memory",d:4,t:"Drybank agency feedback cycle and Ilias's confusion"},{id:"memory:e4e54235d234",s:"memory",d:4,t:"Drybank agency feedback cycle stall"},{id:"memory:dfd2f57520f7",s:"memory",d:3,t:"Drybank brewery agency calls stall delivery flow"},{id:"memory:9774544dd95a",s:"memory",d:3,t:"Drybank Brewing agency query and Alderpoint spec review"},{id:"memory:5c53fdc0e437",s:"memory",d:5,t:"Drybank Brewing agency review stalled on colour grade"},{id:"memory:844c92809f5d",s:"memory",d:4,t:"Drybank brewing reel is stuck on colour grade"},{id:"memory:f6142de2b599",s:"memory",d:5,t:"Drybank Brewing review cycle stalls again"},{id:"memory:2ea3ec1a3eac",s:"memory",d:4,t:"Drybank Brewing review delayed by agency sign-off"},{id:"memory:cab15ca96571",s:"memory",d:4,t:"Drybank cutdown held up by agency feedback"},{id:"memory:64a3c9e4be30",s:"memory",d:4,t:"Drybank deliverables stall over legal review"},{id:"memory:337815036a53",s:"memory",d:4,t:"Drybank delivery blocked by agency sign-off"},{id:"memory:a8609806d16d",s:"memory",d:5,t:"Drybank delivery blocked by Alderpoint spec query"},{id:"memory:ab0770a23f25",s:"memory",d:5,t:"Drybank delivery stalls waiting for Alderpoint sign-off"},{id:"memory:3c029334a42a",s:"memory",d:6,t:"Drybank delivery timeline confusion and Alderpoint strictness"},{id:"memory:30f47cf750ff",s:"memory",d:3,t:"Drybank demands re-sizzle before Cape Line delivery"},{id:"memory:5ba9910071b4",s:"memory",d:4,t:"Drybank reel pacing and Kettleridge asset handover"},{id:"memory:6117ac647e01",s:"memory",d:4,t:"Drybank review cycle stalled awaiting agency signoff"},{id:"memory:5c349f38776e",s:"memory",d:4,t:"Drybank review delays impacting Tallgrass finalisation"},{id:"memory:8523095d2859",s:"memory",d:3,t:"Drybank review feedback causes Alderpoint delivery delays"},{id:"memory:656ad266e551",s:"memory",d:4,t:"Drybank review feedback cycle and Kettleridge archive access"},{id:"memory:5bec3c83fe2f",s:"memory",d:5,t:"Drybank revisions and Cape Line specs stall"},{id:"memory:108f93445dea",s:"memory",d:5,t:"Ilias's new footage confusion on Tallgrass delivery"},{id:"memory:bf0f340ad304",s:"memory",d:3,t:"Kettleridge alumni reel stuck in colour grade"},{id:"memory:04562399d01e",s:"memory",d:4,t:"Kettleridge script review stalled on agency feedback"},{id:"memory:4b4472e9afef",s:"memory",d:4,t:"Tallgrass colour grading stalled after briefing"},{id:"memory:e6e39539bd3b",s:"memory",d:3,t:"Tallgrass colour review and Alderpoint spec hold up"},{id:"memory:cb7f3035d848",s:"memory",d:3,t:"Tallgrass Colouring Delay Affects Alderpoint Deliverables"},{id:"memory:e674341d0685",s:"memory",d:3,t:"Tallgrass review cycle stalling over colour grade feedback"}],links:[["projects:ade1671a0fc3","people:c34ad8d17ed3","link"],["projects:0f0b18f9922d","operations:f988bf333d81","link"],["projects:7d08872da56d","operations:304316f72231","link"],["projects:1b32ddc20396","operations:f988bf333d81","link"],["projects:3dcc92d9f1e2","operations:f988bf333d81","link"],["projects:3dcc92d9f1e2","operations:f1cb70a10508","link"],["projects:1786b5236fce","operations:f988bf333d81","link"],["projects:cbd0df0ebb88","operations:f988bf333d81","link"],["projects:805ff00d7133","decisions:d74b8653a513","link"],["projects:c3836e78e4e0","operations:f988bf333d81","link"],["projects:2a459de7bdc2","operations:304316f72231","link"],["projects:c2ce15ae175b","projects:59ba21553f8a","link"],["projects:c2ce15ae175b","operations:39a543e8c62a","link"],["projects:1e1fe5956f7f","operations:f988bf333d81","link"],["projects:36d5ac5c4b8e","operations:39a543e8c62a","link"],["projects:2e3a05ff63f2","operations:f988bf333d81","link"],["projects:0e10d5a9f2de","operations:100a2fae4a51","link"],["projects:4544f34aab28","operations:304316f72231","link"],["projects:b07648de7606","projects:59ba21553f8a","link"],["projects:b07648de7606","operations:f1cb70a10508","link"],["projects:59ba21553f8a","operations:f988bf333d81","link"],["projects:dd75759c7ef4","projects:59ba21553f8a","link"],["projects:dd75759c7ef4","operations:304316f72231","link"],["projects:d8aa8e6fb545","operations:f988bf333d81","link"],["projects:32284f612903","operations:39a543e8c62a","link"],["projects:32284f612903","operations:f1cb70a10508","link"],["projects:9150e078ee40","operations:304316f72231","link"],["projects:9150e078ee40","operations:39a543e8c62a","link"],["projects:b027e0d66c9b","decisions:d74b8653a513","link"],["projects:7c05f2f0b348","operations:39a543e8c62a","link"],["projects:7c05f2f0b348","operations:f1cb70a10508","link"],["projects:9234c42659f7","operations:39a543e8c62a","link"],["projects:bcf0398d3fb6","decisions:4fa1f0c2f73f","link"],["projects:1133f2511847","operations:f1cb70a10508","link"],["projects:1133f2511847","operations:39a543e8c62a","link"],["projects:171ffaa09f8a","operations:ee934e3e1275","link"],["projects:d8a2b8ede917","projects:7529b93c14a5","link"],["projects:d8a2b8ede917","projects:6d7285846a3b","link"],["projects:258a4d06eb13","operations:f988bf333d81","link"],["projects:9d1f4c1e516c","operations:4533c30f1919","link"],["projects:0ea8313f7b5b","operations:304316f72231","link"],["projects:a765a7b0168a","operations:304316f72231","link"],["projects:3bc50625ca13","operations:39a543e8c62a","link"],["projects:baa4c8e81547","operations:39a543e8c62a","link"],["projects:d771f3e5bb79","people:c34ad8d17ed3","link"],["projects:b987fb41db6e","decisions:4fa1f0c2f73f","link"],["projects:e1d6d99e5667","operations:304316f72231","link"],["projects:55ea8a9663e1","operations:f1cb70a10508","link"],["projects:55ea8a9663e1","operations:39a543e8c62a","link"],["projects:88da2f855e09","people:c34ad8d17ed3","link"],["projects:6b4d427a894f","operations:39a543e8c62a","link"],["projects:6b4d427a894f","operations:304316f72231","link"],["projects:1151241ebf46","operations:f1cb70a10508","link"],["projects:b7e1eeb4daba","projects:7529b93c14a5","link"],["projects:b460ef337da8","operations:a2cf4dec74c6","link"],["projects:f6375c1edf01","operations:f1cb70a10508","link"],["projects:f6375c1edf01","operations:304316f72231","link"],["projects:eb239ac41ab5","operations:304316f72231","link"],["projects:8042fe4829bd","operations:39a543e8c62a","link"],["projects:dd057a791d15","operations:304316f72231","link"],["projects:fd84b25234d1","operations:304316f72231","link"],["projects:fd84b25234d1","operations:f1cb70a10508","link"],["projects:362bf9c0854f","operations:4533c30f1919","link"],["projects:91059f80ea43","operations:39a543e8c62a","link"],["projects:91059f80ea43","operations:f1cb70a10508","link"],["projects:1502221c1ec1","decisions:d74b8653a513","link"],["projects:d9cdb861a093","operations:d99c1a32c08e","link"],["projects:e7da4b5d259b","operations:d99c1a32c08e","link"],["projects:441c3eacd655","projects:005856be1e96","link"],["projects:f7b1124c3f14","operations:d99c1a32c08e","link"],["projects:b940cd8a5518","operations:d99c1a32c08e","link"],["projects:e34dea37826e","operations:f1cb70a10508","link"],["projects:624f7fc6a6a7","operations:d99c1a32c08e","link"],["projects:b9a040b19e70","operations:d99c1a32c08e","link"],["projects:a7d5c7147514","projects:005856be1e96","link"],["projects:a7d5c7147514","operations:304316f72231","link"],["projects:66eede52cc76","projects:c8da728ff0a3","link"],["projects:5ffbcbc45f10","projects:005856be1e96","link"],["projects:6d425528f387","projects:005856be1e96","link"],["projects:6d425528f387","operations:f1cb70a10508","link"],["projects:84873a0addeb","projects:005856be1e96","link"],["projects:84873a0addeb","operations:304316f72231","link"],["projects:005856be1e96","projects:c8da728ff0a3","link"],["projects:005856be1e96","operations:d99c1a32c08e","link"],["projects:74e850a8d2d6","projects:005856be1e96","link"],["projects:3e0fba38b6ab","operations:f1cb70a10508","link"],["projects:cc9d9032fc16","decisions:ed530142f678","link"],["projects:e23ec9dac87c","projects:c8da728ff0a3","link"],["projects:e23ec9dac87c","operations:f1cb70a10508","link"],["projects:5048206ddf3c","projects:c8da728ff0a3","link"],["projects:e7850ad76880","decisions:4fa1f0c2f73f","link"],["projects:40a0a456da19","projects:c8da728ff0a3","link"],["projects:40a0a456da19","operations:304316f72231","link"],["projects:e45ffa60b7f5","operations:d99c1a32c08e","link"],["projects:cbbd09c31020","projects:c8da728ff0a3","link"],["projects:cbbd09c31020","operations:39a543e8c62a","link"],["projects:00499cc29465","projects:c8da728ff0a3","link"],["projects:00499cc29465","operations:39a543e8c62a","link"],["projects:f0f49614d0df","operations:d99c1a32c08e","link"],["projects:f0f49614d0df","projects:005856be1e96","link"],["projects:c8da728ff0a3","operations:39a543e8c62a","link"],["projects:c8da728ff0a3","operations:d99c1a32c08e","link"],["operations:669059ca8381","projects:c8da728ff0a3","link"],["projects:41b5204b98af","projects:c8da728ff0a3","link"],["projects:f38dd8fc24f3","projects:c8da728ff0a3","link"],["projects:7078340e6b9f","projects:c8da728ff0a3","link"],["projects:7078340e6b9f","operations:39a543e8c62a","link"],["projects:d8cc307ffba6","projects:005856be1e96","link"],["projects:5849e46d5775","projects:c8da728ff0a3","link"],["projects:17f1af198bf7","projects:c8da728ff0a3","link"],["projects:6d7285846a3b","projects:982c7d1a4cad","link"],["projects:33842c5ef674","projects:59ba21553f8a","link"],["projects:718ec56d5de1","projects:6d7285846a3b","link"],["projects:c892b9bcdec2","people:c34ad8d17ed3","link"],["projects:92f6a06a14ca","operations:304316f72231","link"],["projects:431f381b2585","projects:6d7285846a3b","link"],["projects:5b6d808f2e14","projects:7529b93c14a5","link"],["projects:44d972b37afb","projects:6d7285846a3b","link"],["projects:ca087d5dba90","projects:6d7285846a3b","link"],["projects:8f95659d8d58","projects:6d7285846a3b","link"],["projects:bb1633b88041","projects:7529b93c14a5","link"],["projects:749d7854ad15","operations:39a543e8c62a","link"],["projects:083061a421bc","operations:39a543e8c62a","link"],["projects:b289c8064262","projects:7529b93c14a5","link"],["projects:b289c8064262","operations:304316f72231","link"],["projects:ca49a7ee6ae6","projects:7529b93c14a5","link"],["projects:331efd86f0c3","projects:7529b93c14a5","link"],["projects:24f20331f7b0","operations:304316f72231","link"],["projects:9a670359c4c2","projects:7529b93c14a5","link"],["projects:33c0f58961e7","people:c34ad8d17ed3","link"],["projects:5bc16329a872","people:c34ad8d17ed3","link"],["projects:723ab07c3ec8","projects:7529b93c14a5","link"],["projects:b03d94729bc2","projects:6d7285846a3b","link"],["projects:3baf1de5dbd4","operations:4533c30f1919","link"],["projects:dc7ad9f3f453","operations:304316f72231","link"],["projects:a5a49ac259c7","operations:4533c30f1919","link"],["projects:acaa78da4ac5","operations:4533c30f1919","link"],["projects:acaa78da4ac5","operations:f1cb70a10508","link"],["projects:11d6d012865a","operations:4533c30f1919","link"],["operations:f1cb70a10508","projects:11d6d012865a","link"],["projects:6312fb234768","people:c34ad8d17ed3","link"],["projects:473a90cf47ba","projects:e3a41bd9b1e6","link"],["projects:9d48ce9c1a19","projects:e3a41bd9b1e6","link"],["projects:c9a12bc2469d","operations:f1cb70a10508","link"],["projects:ada2fc952daf","operations:4533c30f1919","link"],["projects:091b03402fe0","operations:304316f72231","link"],["projects:3166404d17cc","operations:a2cf4dec74c6","link"],["projects:999a257409e5","operations:4533c30f1919","link"],["projects:28d1ff44049d","projects:e3a41bd9b1e6","link"],["projects:28d1ff44049d","operations:f1cb70a10508","link"],["projects:d4cc6839a6f1","projects:e3a41bd9b1e6","link"],["operations:304316f72231","projects:d4cc6839a6f1","link"],["projects:a4400d70f8ef","projects:e3a41bd9b1e6","link"],["projects:fa2866f703ae","projects:e3a41bd9b1e6","link"],["projects:ac0614ceb006","projects:e3a41bd9b1e6","link"],["projects:e3a41bd9b1e6","operations:4533c30f1919","link"],["operations:1a3c959f5b72","operations:304316f72231","link"],["operations:1a3c959f5b72","projects:11d6d012865a","link"],["operations:1a3c959f5b72","projects:2e3a05ff63f2","link"],["operations:8e78147c1f97","people:c34ad8d17ed3","link"],["operations:8e78147c1f97","operations:04d7d7bfc7db","link"],["operations:48e676a0dea2","people:c34ad8d17ed3","link"],["operations:48e676a0dea2","projects:0e10d5a9f2de","link"],["operations:48e676a0dea2","projects:5849e46d5775","link"],["operations:afcc8de6075f","operations:4533c30f1919","link"],["operations:afcc8de6075f","projects:53f3a35116c9","link"],["operations:afcc8de6075f","projects:258a4d06eb13","link"],["operations:8fe340438117","projects:17f1af198bf7","link"],["operations:8fe340438117","projects:441c3eacd655","link"],["operations:04d7d7bfc7db","operations:ee934e3e1275","link"],["operations:ee934e3e1275","operations:100a2fae4a51","link"],["operations:d99c1a32c08e","operations:f1cb70a10508","link"],["operations:d99c1a32c08e","projects:5bc16329a872","link"],["operations:d99c1a32c08e","projects:0ea8313f7b5b","link"],["decisions:8d6b467654af","operations:4533c30f1919","link"],["operations:4533c30f1919","projects:74e850a8d2d6","link"],["operations:4533c30f1919","projects:55ea8a9663e1","link"],["operations:a6eee751e736","projects:6d7285846a3b","link"],["operations:a6eee751e736","projects:11d6d012865a","link"],["operations:d2fed580dd0f","projects:6d7285846a3b","link"],["operations:d2fed580dd0f","projects:44d972b37afb","link"],["operations:d2fed580dd0f","projects:3ed515ad94ec","link"],["operations:f988bf333d81","operations:304316f72231","link"],["operations:100a2fae4a51","operations:cc03a3090742","link"],["operations:100a2fae4a51","operations:304316f72231","link"],["operations:100a2fae4a51","projects:8f95659d8d58","link"],["operations:100a2fae4a51","projects:258a4d06eb13","link"],["operations:d0213106e05f","operations:4533c30f1919","link"],["operations:d0213106e05f","projects:88da2f855e09","link"],["operations:d0213106e05f","projects:005856be1e96","link"],["operations:5d88eabe2d86","people:c34ad8d17ed3","link"],["operations:5d88eabe2d86","projects:92f6a06a14ca","link"],["operations:5d88eabe2d86","projects:083061a421bc","link"],["operations:a5c884a200b7","operations:f1cb70a10508","link"],["operations:c627ab4e0bb6","operations:39a543e8c62a","link"],["operations:c627ab4e0bb6","projects:7529b93c14a5","link"],["operations:c627ab4e0bb6","projects:d9cdb861a093","link"],["operations:04d7d7bfc7db","people:c34ad8d17ed3","link"],["operations:04d7d7bfc7db","projects:f6375c1edf01","link"],["operations:04d7d7bfc7db","projects:d4cc6839a6f1","link"],["operations:b0c9cd50e1d2","people:c34ad8d17ed3","link"],["operations:b0c9cd50e1d2","projects:7078340e6b9f","link"],["operations:b0c9cd50e1d2","projects:e23ec9dac87c","link"],["operations:669059ca8381","projects:7d08872da56d","link"],["operations:669059ca8381","projects:ca087d5dba90","link"],["operations:a2cf4dec74c6","operations:669059ca8381","link"],["operations:a2cf4dec74c6","projects:ada2fc952daf","link"],["operations:a2cf4dec74c6","projects:b289c8064262","link"],["operations:59450030097e","operations:4533c30f1919","link"],["operations:3f56087e937e","operations:f1cb70a10508","link"],["operations:3f56087e937e","projects:55ea8a9663e1","link"],["operations:3f56087e937e","projects:5048206ddf3c","link"],["operations:e23dc12fda0c","people:c34ad8d17ed3","link"],["operations:1ed76b3575c8","operations:f988bf333d81","link"],["operations:0b1f677b3fee","operations:4533c30f1919","link"],["operations:0b1f677b3fee","projects:f6375c1edf01","link"],["operations:0b1f677b3fee","projects:624f7fc6a6a7","link"],["operations:aa08fb1fcbe8","operations:304316f72231","link"],["operations:aa08fb1fcbe8","projects:d8cc307ffba6","link"],["operations:aa08fb1fcbe8","projects:0ea8313f7b5b","link"],["operations:cf406eaaa8c2","operations:4533c30f1919","link"],["operations:cf406eaaa8c2","projects:a5a49ac259c7","link"],["operations:cf406eaaa8c2","projects:40a0a456da19","link"],["operations:76f6b3757732","people:c34ad8d17ed3","link"],["operations:5d2975ca9170","people:c34ad8d17ed3","link"],["operations:5d2975ca9170","operations:f1cb70a10508","link"],["operations:5d2975ca9170","projects:d9cdb861a093","link"],["operations:5d2975ca9170","projects:55ea8a9663e1","link"],["operations:86a09aab4e1d","operations:304316f72231","link"],["operations:86a09aab4e1d","projects:9a670359c4c2","link"],["operations:86a09aab4e1d","projects:6d7285846a3b","link"],["operations:8a1fa85dbbf1","operations:4533c30f1919","link"],["operations:8a1fa85dbbf1","projects:59ba21553f8a","link"],["operations:8a1fa85dbbf1","projects:c8da728ff0a3","link"],["operations:d9e4ea08522d","operations:f1cb70a10508","link"],["operations:681e4dca2b9e","projects:bcf0398d3fb6","link"],["operations:681e4dca2b9e","projects:f6375c1edf01","link"],["operations:61419b1b0f81","operations:f988bf333d81","link"],["operations:61419b1b0f81","projects:c8da728ff0a3","link"],["operations:61419b1b0f81","projects:723ab07c3ec8","link"],["operations:d862e3cae668","people:c34ad8d17ed3","link"],["operations:d862e3cae668","projects:1e1fe5956f7f","link"],["operations:d862e3cae668","projects:17f1af198bf7","link"],["operations:d043fbae1bd1","projects:c8da728ff0a3","link"],["operations:d043fbae1bd1","projects:9234c42659f7","link"],["operations:d043fbae1bd1","projects:d771f3e5bb79","link"],["operations:39a543e8c62a","projects:24f20331f7b0","link"],["operations:39a543e8c62a","projects:a7d5c7147514","link"],["operations:304316f72231","projects:431f381b2585","link"],["operations:8d200a040bc3","projects:59ba21553f8a","link"],["operations:af477bc78673","operations:304316f72231","link"],["operations:f1cb70a10508","projects:f0f49614d0df","link"],["operations:3e1d95ef7a24","people:c34ad8d17ed3","link"],["people:2183b8a7f795","projects:ada2fc952daf","link"],["people:2183b8a7f795","decisions:67f38682f382","link"],["people:2183b8a7f795","projects:cbd0df0ebb88","link"],["people:6cc7f846b08a","operations:f988bf333d81","link"],["people:6cc7f846b08a","projects:c9a12bc2469d","link"],["people:6cc7f846b08a","projects:f6375c1edf01","link"],["people:6cc7f846b08a","projects:cbd0df0ebb88","link"],["people:94942648d174","people:c34ad8d17ed3","link"],["people:94942648d174","operations:f1cb70a10508","link"],["people:94942648d174","decisions:de749e1c3abf","link"],["people:94942648d174","projects:0ea8313f7b5b","link"],["people:94942648d174","projects:9234c42659f7","link"],["people:fb090c544632","operations:f1cb70a10508","link"],["people:fb090c544632","people:c34ad8d17ed3","link"],["people:fb090c544632","decisions:b6e35688d973","link"],["people:fb090c544632","projects:b03d94729bc2","link"],["people:fb090c544632","projects:1502221c1ec1","link"],["people:8e49ecdcab81","operations:ee934e3e1275","link"],["people:8e49ecdcab81","decisions:6508c383006e","link"],["people:8e49ecdcab81","projects:fa2866f703ae","link"],["people:8e49ecdcab81","projects:33842c5ef674","link"],["people:e550a5cef532","projects:a765a7b0168a","link"],["people:e550a5cef532","projects:e23ec9dac87c","link"],["people:e550a5cef532","decisions:a1a0cf0da04e","link"],["people:c34ad8d17ed3","projects:005856be1e96","link"],["people:c34ad8d17ed3","projects:eb239ac41ab5","link"],["people:c34ad8d17ed3","projects:40a0a456da19","link"],["people:c34ad8d17ed3","projects:e45ffa60b7f5","link"],["people:edce48a07c77","projects:5bc16329a872","link"],["people:edce48a07c77","projects:5b6d808f2e14","link"],["people:edce48a07c77","decisions:d33e9a1328f2","link"],["people:f27ce6a59c45","people:c34ad8d17ed3","link"],["people:f27ce6a59c45","projects:1151241ebf46","link"],["people:f27ce6a59c45","projects:999a257409e5","link"],["people:f27ce6a59c45","projects:74e850a8d2d6","link"],["people:da53a836eb3c","projects:32284f612903","link"],["people:da53a836eb3c","projects:091b03402fe0","link"],["people:da53a836eb3c","projects:1786b5236fce","link"],["people:5ea566bb9042","operations:f1cb70a10508","link"],["people:5ea566bb9042","projects:1133f2511847","link"],["people:5ea566bb9042","projects:88da2f855e09","link"],["people:5ea566bb9042","projects:53f3a35116c9","link"],["people:ddaa1b924478","people:c34ad8d17ed3","link"],["people:ddaa1b924478","projects:fd84b25234d1","link"],["people:ddaa1b924478","projects:1151241ebf46","link"],["people:ddaa1b924478","decisions:8d6b467654af","link"],["people:7cf4b4381104","people:c34ad8d17ed3","link"],["people:7cf4b4381104","operations:f1cb70a10508","link"],["people:7cf4b4381104","projects:28d1ff44049d","link"],["people:7cf4b4381104","projects:dd75759c7ef4","link"],["people:7cf4b4381104","projects:bcf0398d3fb6","link"],["people:5d03a440b050","projects:7529b93c14a5","link"],["people:5d03a440b050","projects:b460ef337da8","link"],["people:5d03a440b050","projects:36d5ac5c4b8e","link"],["people:5d03a440b050","projects:441c3eacd655","link"],["people:27bdea058a52","operations:304316f72231","link"],["people:27bdea058a52","projects:36d5ac5c4b8e","link"],["people:27bdea058a52","projects:1786b5236fce","link"],["people:27bdea058a52","projects:d771f3e5bb79","link"],["people:4b315d644077","operations:4533c30f1919","link"],["people:4b315d644077","ideas:c889074992d0","link"],["people:4b315d644077","projects:9a670359c4c2","link"],["people:4b315d644077","decisions:4fa1f0c2f73f","link"],["people:4b315d644077","projects:473a90cf47ba","link"],["people:e3490b1bd43d","operations:f1cb70a10508","link"],["people:e3490b1bd43d","projects:473a90cf47ba","link"],["people:e3490b1bd43d","projects:091b03402fe0","link"],["people:e3490b1bd43d","projects:8042fe4829bd","link"],["people:597a3593909f","projects:7c05f2f0b348","link"],["people:597a3593909f","projects:3dcc92d9f1e2","link"],["people:597a3593909f","projects:b460ef337da8","link"],["people:45c64c9fc514","operations:304316f72231","link"],["people:45c64c9fc514","projects:7d08872da56d","link"],["people:45c64c9fc514","projects:b027e0d66c9b","link"],["people:45c64c9fc514","projects:7529b93c14a5","link"],["people:180982616a8a","operations:f1cb70a10508","link"],["people:180982616a8a","projects:b940cd8a5518","link"],["people:180982616a8a","projects:d4cc6839a6f1","link"],["people:180982616a8a","projects:cbbd09c31020","link"],["people:3242278a3321","operations:f1cb70a10508","link"],["people:3242278a3321","projects:0ea8313f7b5b","link"],["people:3242278a3321","projects:9d1f4c1e516c","link"],["people:3242278a3321","projects:eb239ac41ab5","link"],["people:f88b51f38ae6","operations:f1cb70a10508","link"],["people:f88b51f38ae6","projects:32284f612903","link"],["people:f88b51f38ae6","projects:1e1fe5956f7f","link"],["people:f88b51f38ae6","projects:718ec56d5de1","link"],["people:976c938c62fc","projects:b027e0d66c9b","link"],["people:976c938c62fc","decisions:1f9faf63084e","link"],["people:976c938c62fc","projects:e7da4b5d259b","link"],["people:594c2d7cc49d","projects:6de99e59b673","link"],["people:594c2d7cc49d","projects:1e1fe5956f7f","link"],["people:594c2d7cc49d","projects:3dcc92d9f1e2","link"],["people:594c2d7cc49d","projects:55ea8a9663e1","link"],["decisions:1f711d572af7","projects:c8da728ff0a3","link"],["decisions:1f711d572af7","operations:04d7d7bfc7db","link"],["decisions:1f711d572af7","projects:bcf0398d3fb6","link"],["decisions:922f13d73070","decisions:ed530142f678","link"],["decisions:922f13d73070","projects:28d1ff44049d","link"],["decisions:922f13d73070","projects:1502221c1ec1","link"],["decisions:c63ab69e993d","decisions:ed530142f678","link"],["decisions:c63ab69e993d","decisions:8d6b467654af","link"],["decisions:c63ab69e993d","projects:d771f3e5bb79","link"],["decisions:c63ab69e993d","projects:6d7285846a3b","link"],["decisions:1f9faf63084e","decisions:d74b8653a513","link"],["decisions:1f9faf63084e","projects:92f6a06a14ca","link"],["decisions:1f9faf63084e","projects:0f0b18f9922d","link"],["decisions:67385950e96d","projects:e3a41bd9b1e6","link"],["decisions:67385950e96d","projects:b289c8064262","link"],["decisions:67385950e96d","projects:5ffbcbc45f10","link"],["decisions:4fa1f0c2f73f","projects:59ba21553f8a","link"],["decisions:4fa1f0c2f73f","operations:304316f72231","link"],["decisions:4fa1f0c2f73f","projects:1133f2511847","link"],["decisions:4fa1f0c2f73f","projects:c9a12bc2469d","link"],["decisions:de749e1c3abf","projects:00499cc29465","link"],["decisions:de749e1c3abf","projects:9234c42659f7","link"],["decisions:69a726c7087c","decisions:8d6b467654af","link"],["decisions:69a726c7087c","decisions:d74b8653a513","link"],["decisions:69a726c7087c","projects:4544f34aab28","link"],["decisions:69a726c7087c","operations:a5c884a200b7","link"],["decisions:d33e9a1328f2","decisions:ed530142f678","link"],["decisions:d33e9a1328f2","decisions:8d6b467654af","link"],["decisions:d33e9a1328f2","projects:805ff00d7133","link"],["decisions:d33e9a1328f2","operations:8a1fa85dbbf1","link"],["decisions:6508c383006e","decisions:8d6b467654af","link"],["decisions:6508c383006e","operations:a6eee751e736","link"],["decisions:6508c383006e","operations:61419b1b0f81","link"],["decisions:f1af11c7e68b","decisions:4fa1f0c2f73f","link"],["decisions:f1af11c7e68b","projects:3166404d17cc","link"],["decisions:f1af11c7e68b","operations:d9e4ea08522d","link"],["decisions:b6e35688d973","people:c34ad8d17ed3","link"],["decisions:b6e35688d973","projects:7078340e6b9f","link"],["decisions:b6e35688d973","projects:999a257409e5","link"],["decisions:21acd9a36dc7","decisions:4fa1f0c2f73f","link"],["decisions:21acd9a36dc7","decisions:ed530142f678","link"],["decisions:21acd9a36dc7","projects:c892b9bcdec2","link"],["decisions:21acd9a36dc7","projects:d8cc307ffba6","link"],["decisions:a1a0cf0da04e","decisions:8d6b467654af","link"],["decisions:a1a0cf0da04e","projects:1e1fe5956f7f","link"],["decisions:a1a0cf0da04e","projects:d8aa8e6fb545","link"],["decisions:d74b8653a513","operations:76f6b3757732","link"],["decisions:d74b8653a513","projects:473a90cf47ba","link"],["decisions:994afea4d58f","operations:f988bf333d81","link"],["decisions:994afea4d58f","projects:749d7854ad15","link"],["decisions:994afea4d58f","projects:eb239ac41ab5","link"],["decisions:8d6b467654af","operations:af477bc78673","link"],["decisions:8d6b467654af","projects:d9cdb861a093","link"],["decisions:54d927368366","operations:304316f72231","link"],["decisions:54d927368366","projects:11d6d012865a","link"],["decisions:54d927368366","projects:3baf1de5dbd4","link"],["decisions:67f38682f382","decisions:d74b8653a513","link"],["decisions:67f38682f382","decisions:8d6b467654af","link"],["decisions:67f38682f382","operations:b0c9cd50e1d2","link"],["decisions:67f38682f382","projects:1502221c1ec1","link"],["decisions:42f8a2905283","projects:6d425528f387","link"],["decisions:42f8a2905283","projects:1b32ddc20396","link"],["decisions:ed530142f678","projects:7d08872da56d","link"],["decisions:ed530142f678","projects:59ba21553f8a","link"],["research:f1cc8b10efdb","research:37d65b79086a","link"],["research:f1cc8b10efdb","operations:76f6b3757732","link"],["research:f1cc8b10efdb","projects:083061a421bc","link"],["research:81033a116a04","operations:304316f72231","link"],["research:81033a116a04","projects:6de99e59b673","link"],["research:81033a116a04","projects:005856be1e96","link"],["research:ba0b8ec93e1a","operations:304316f72231","link"],["research:ba0b8ec93e1a","projects:7078340e6b9f","link"],["research:ba0b8ec93e1a","operations:3f56087e937e","link"],["research:f68d12cab680","operations:100a2fae4a51","link"],["research:f68d12cab680","operations:76f6b3757732","link"],["research:f68d12cab680","projects:6d425528f387","link"],["research:937a2573e0e0","research:37d65b79086a","link"],["research:937a2573e0e0","research:0ab1a718e29d","link"],["research:937a2573e0e0","operations:8d200a040bc3","link"],["research:937a2573e0e0","projects:e23ec9dac87c","link"],["research:569802adaaef","projects:59ba21553f8a","link"],["research:569802adaaef","projects:f0f49614d0df","link"],["research:569802adaaef","projects:92f6a06a14ca","link"],["research:aed45f3e8f30","research:0ab1a718e29d","link"],["research:aed45f3e8f30","research:37d65b79086a","link"],["research:aed45f3e8f30","projects:bb1633b88041","link"],["research:aed45f3e8f30","operations:681e4dca2b9e","link"],["research:38f43580097c","operations:f1cb70a10508","link"],["research:38f43580097c","projects:723ab07c3ec8","link"],["research:38f43580097c","projects:c2ce15ae175b","link"],["research:f2964af4898c","operations:f988bf333d81","link"],["research:f2964af4898c","projects:f7b1124c3f14","link"],["research:f2964af4898c","projects:fa2866f703ae","link"],["research:9271e8ea83a3","decisions:d74b8653a513","link"],["research:9271e8ea83a3","projects:f0f49614d0df","link"],["research:9271e8ea83a3","operations:3e1d95ef7a24","link"],["research:3c8c12b9afae","operations:ee934e3e1275","link"],["research:3c8c12b9afae","operations:d9e4ea08522d","link"],["research:3c8c12b9afae","projects:32284f612903","link"],["research:d7103994ac4b","research:37d65b79086a","link"],["research:d7103994ac4b","projects:4544f34aab28","link"],["research:d7103994ac4b","projects:723ab07c3ec8","link"],["research:c6c00f95fb1c","projects:bb1633b88041","link"],["research:c6c00f95fb1c","projects:40a0a456da19","link"],["research:69af4b1bd02c","research:37d65b79086a","link"],["research:69af4b1bd02c","projects:0ea8313f7b5b","link"],["research:69af4b1bd02c","projects:1e1fe5956f7f","link"],["research:e4ab4c934dc8","research:0ab1a718e29d","link"],["research:e4ab4c934dc8","projects:1151241ebf46","link"],["research:e4ab4c934dc8","projects:cc9d9032fc16","link"],["research:82ce923df093","operations:f1cb70a10508","link"],["research:82ce923df093","projects:723ab07c3ec8","link"],["research:82ce923df093","projects:0e10d5a9f2de","link"],["research:5d6f7d9e4f15","research:f68d12cab680","link"],["research:5d6f7d9e4f15","research:37d65b79086a","link"],["research:5d6f7d9e4f15","projects:baa4c8e81547","link"],["research:5d6f7d9e4f15","operations:ee934e3e1275","link"],["research:a849e4d7510f","research:37d65b79086a","link"],["research:a849e4d7510f","projects:2e3a05ff63f2","link"],["research:a849e4d7510f","projects:ada2fc952daf","link"],["research:b5dc6830fe06","research:f68d12cab680","link"],["research:b5dc6830fe06","operations:a6eee751e736","link"],["research:b5dc6830fe06","projects:c9a12bc2469d","link"],["research:37d65b79086a","research:0ab1a718e29d","link"],["research:37d65b79086a","research:f68d12cab680","link"],["research:37d65b79086a","projects:8042fe4829bd","link"],["research:37d65b79086a","operations:669059ca8381","link"],["research:3d0acfc7eef0","projects:005856be1e96","link"],["research:3d0acfc7eef0","projects:53f3a35116c9","link"],["research:3d0acfc7eef0","operations:1ed76b3575c8","link"],["research:7afb31b06056","research:37d65b79086a","link"],["research:7afb31b06056","projects:c3836e78e4e0","link"],["research:7afb31b06056","projects:7d08872da56d","link"],["research:94ffb9c8706e","research:f68d12cab680","link"],["research:94ffb9c8706e","operations:ee934e3e1275","link"],["research:94ffb9c8706e","projects:92f6a06a14ca","link"],["research:bb5c5276c300","projects:59ba21553f8a","link"],["research:bb5c5276c300","projects:eb239ac41ab5","link"],["research:bb5c5276c300","operations:1ed76b3575c8","link"],["research:0ab1a718e29d","projects:7529b93c14a5","link"],["research:0ab1a718e29d","operations:39a543e8c62a","link"],["research:0ab1a718e29d","operations:8fe340438117","link"],["research:0ab1a718e29d","projects:5ffbcbc45f10","link"],["ideas:ef419dd7c8da","research:37d65b79086a","link"],["ideas:ef419dd7c8da","operations:f1cb70a10508","link"],["ideas:ef419dd7c8da","operations:48e676a0dea2","link"],["ideas:ef419dd7c8da","projects:b460ef337da8","link"],["ideas:eff4c454b659","research:37d65b79086a","link"],["ideas:eff4c454b659","projects:e3a41bd9b1e6","link"],["ideas:eff4c454b659","projects:11d6d012865a","link"],["ideas:8b0c25b192bf","operations:304316f72231","link"],["ideas:8b0c25b192bf","operations:b0c9cd50e1d2","link"],["ideas:8b0c25b192bf","operations:c627ab4e0bb6","link"],["ideas:0626eb523f4a","research:37d65b79086a","link"],["ideas:0626eb523f4a","operations:f1cb70a10508","link"],["ideas:0626eb523f4a","operations:a6eee751e736","link"],["ideas:0626eb523f4a","projects:e45ffa60b7f5","link"],["ideas:ebd35b42ad69","operations:f1cb70a10508","link"],["ideas:ebd35b42ad69","research:37d65b79086a","link"],["ideas:ebd35b42ad69","projects:b460ef337da8","link"],["ideas:ebd35b42ad69","operations:af477bc78673","link"],["ideas:5f6e055b4894","operations:a5c884a200b7","link"],["ideas:5f6e055b4894","projects:2e3a05ff63f2","link"],["ideas:edfe81dd39c5","operations:f1cb70a10508","link"],["ideas:edfe81dd39c5","projects:9a670359c4c2","link"],["ideas:edfe81dd39c5","projects:d9cdb861a093","link"],["ideas:ee8b335ee767","operations:f1cb70a10508","link"],["ideas:ee8b335ee767","projects:cbd0df0ebb88","link"],["ideas:ee8b335ee767","projects:982c7d1a4cad","link"],["ideas:67f4ab6bcaa5","projects:e3a41bd9b1e6","link"],["ideas:67f4ab6bcaa5","projects:6d7285846a3b","link"],["ideas:67f4ab6bcaa5","projects:d4cc6839a6f1","link"],["ideas:c3192da73c80","operations:f1cb70a10508","link"],["ideas:c3192da73c80","projects:28d1ff44049d","link"],["ideas:c3192da73c80","projects:44d972b37afb","link"],["ideas:857d88865476","research:37d65b79086a","link"],["ideas:857d88865476","operations:f1cb70a10508","link"],["ideas:857d88865476","projects:91059f80ea43","link"],["ideas:857d88865476","projects:b07648de7606","link"],["ideas:f71029b803c3","operations:f1cb70a10508","link"],["ideas:f71029b803c3","operations:48e676a0dea2","link"],["ideas:f71029b803c3","projects:a765a7b0168a","link"],["ideas:c889074992d0","projects:24f20331f7b0","link"],["ideas:c889074992d0","projects:624f7fc6a6a7","link"],["ideas:e55291f87627","projects:e3a41bd9b1e6","link"],["ideas:e55291f87627","operations:669059ca8381","link"],["ideas:e55291f87627","projects:b027e0d66c9b","link"],["ideas:c1dc429d2ff5","projects:e3a41bd9b1e6","link"],["ideas:c1dc429d2ff5","projects:9d48ce9c1a19","link"],["ideas:c1dc429d2ff5","operations:aa08fb1fcbe8","link"],["ideas:c6fa08104bac","research:37d65b79086a","link"],["ideas:c6fa08104bac","operations:f1cb70a10508","link"],["ideas:c6fa08104bac","projects:e7850ad76880","link"],["ideas:c6fa08104bac","projects:d9cdb861a093","link"],["ideas:c47dd0f59771","operations:f1cb70a10508","link"],["ideas:c47dd0f59771","operations:669059ca8381","link"],["ideas:c47dd0f59771","projects:9d48ce9c1a19","link"],["memory:aa1f83764640","decisions:d74b8653a513","link"],["memory:aa1f83764640","projects:ada2fc952daf","link"],["memory:aa1f83764640","projects:3dcc92d9f1e2","link"],["memory:aa1f83764640","projects:1b32ddc20396","link"],["memory:554c29c83836","ideas:c889074992d0","link"],["memory:554c29c83836","projects:59ba21553f8a","link"],["memory:554c29c83836","decisions:ed530142f678","link"],["memory:554c29c83836","people:45c64c9fc514","link"],["memory:554c29c83836","projects:e7da4b5d259b","link"],["memory:d2af40c89466","people:597a3593909f","link"],["memory:d2af40c89466","projects:083061a421bc","link"],["memory:d2af40c89466","projects:d9cdb861a093","link"],["memory:d2af40c89466","people:594c2d7cc49d","link"],["memory:d5e55cab0b0d","operations:304316f72231","link"],["memory:d5e55cab0b0d","projects:005856be1e96","link"],["memory:d5e55cab0b0d","projects:c2ce15ae175b","link"],["memory:d5e55cab0b0d","projects:3e0fba38b6ab","link"],["memory:d5e55cab0b0d","projects:59ba21553f8a","link"],["memory:d5e55cab0b0d","people:6cc7f846b08a","link"],["memory:8542d12a741d","projects:b940cd8a5518","link"],["memory:8542d12a741d","projects:624f7fc6a6a7","link"],["memory:8542d12a741d","projects:f7b1124c3f14","link"],["memory:cbc196f92b1e","projects:7529b93c14a5","link"],["memory:cbc196f92b1e","projects:e3a41bd9b1e6","link"],["memory:cbc196f92b1e","projects:dd75759c7ef4","link"],["memory:cbc196f92b1e","projects:0e10d5a9f2de","link"],["memory:cbc196f92b1e","people:597a3593909f","link"],["memory:5b5a459a325c","people:c34ad8d17ed3","link"],["memory:5b5a459a325c","projects:66eede52cc76","link"],["memory:5b5a459a325c","people:976c938c62fc","link"],["memory:08535ef271a7","projects:59ba21553f8a","link"],["memory:08535ef271a7","projects:e3a41bd9b1e6","link"],["memory:08535ef271a7","projects:9a670359c4c2","link"],["memory:08535ef271a7","projects:3e0fba38b6ab","link"],["memory:08535ef271a7","projects:e7da4b5d259b","link"],["memory:23d2f2c7d216","projects:c8da728ff0a3","link"],["memory:23d2f2c7d216","people:c34ad8d17ed3","link"],["memory:23d2f2c7d216","projects:cbbd09c31020","link"],["memory:23d2f2c7d216","projects:36d5ac5c4b8e","link"],["memory:7b9e8af3cc00","projects:4544f34aab28","link"],["memory:7b9e8af3cc00","projects:e7da4b5d259b","link"],["memory:7b9e8af3cc00","projects:441c3eacd655","link"],["memory:d286467d044d","operations:304316f72231","link"],["memory:d286467d044d","people:597a3593909f","link"],["memory:d286467d044d","projects:0e10d5a9f2de","link"],["memory:d286467d044d","projects:4544f34aab28","link"],["memory:e3f2600c9539","projects:e3a41bd9b1e6","link"],["memory:e3f2600c9539","projects:bb1633b88041","link"],["memory:e3f2600c9539","projects:b289c8064262","link"],["memory:e3f2600c9539","people:edce48a07c77","link"],["memory:e3f2600c9539","projects:ca49a7ee6ae6","link"],["memory:1336c80422b9","operations:304316f72231","link"],["memory:1336c80422b9","projects:083061a421bc","link"],["memory:1336c80422b9","projects:9a670359c4c2","link"],["memory:1336c80422b9","projects:33c0f58961e7","link"],["memory:83c46db56942","operations:304316f72231","link"],["memory:83c46db56942","projects:33c0f58961e7","link"],["memory:83c46db56942","projects:4544f34aab28","link"],["memory:83c46db56942","projects:005856be1e96","link"],["memory:e4e54235d234","projects:7529b93c14a5","link"],["memory:e4e54235d234","projects:005856be1e96","link"],["memory:e4e54235d234","projects:5ffbcbc45f10","link"],["memory:e4e54235d234","projects:6d425528f387","link"],["memory:dfd2f57520f7","projects:005856be1e96","link"],["memory:dfd2f57520f7","projects:2a459de7bdc2","link"],["memory:dfd2f57520f7","people:6cc7f846b08a","link"],["memory:9774544dd95a","people:c34ad8d17ed3","link"],["memory:9774544dd95a","people:6cc7f846b08a","link"],["memory:9774544dd95a","projects:84873a0addeb","link"],["memory:5c53fdc0e437","operations:f988bf333d81","link"],["memory:5c53fdc0e437","projects:4544f34aab28","link"],["memory:5c53fdc0e437","projects:f7b1124c3f14","link"],["memory:5c53fdc0e437","projects:d9cdb861a093","link"],["memory:844c92809f5d","projects:e3a41bd9b1e6","link"],["memory:844c92809f5d","projects:7529b93c14a5","link"],["memory:844c92809f5d","projects:083061a421bc","link"],["memory:844c92809f5d","projects:2a459de7bdc2","link"],["memory:f6142de2b599","operations:304316f72231","link"],["memory:f6142de2b599","projects:3166404d17cc","link"],["memory:f6142de2b599","operations:ee934e3e1275","link"],["memory:f6142de2b599","operations:100a2fae4a51","link"],["memory:f6142de2b599","projects:40a0a456da19","link"],["memory:2ea3ec1a3eac","projects:e3a41bd9b1e6","link"],["memory:2ea3ec1a3eac","projects:41b5204b98af","link"],["memory:2ea3ec1a3eac","operations:669059ca8381","link"],["memory:2ea3ec1a3eac","projects:718ec56d5de1","link"],["memory:cab15ca96571","projects:7529b93c14a5","link"],["memory:cab15ca96571","projects:59ba21553f8a","link"],["memory:cab15ca96571","projects:74e850a8d2d6","link"],["memory:cab15ca96571","projects:3e0fba38b6ab","link"],["memory:64a3c9e4be30","operations:304316f72231","link"],["memory:64a3c9e4be30","people:594c2d7cc49d","link"],["memory:64a3c9e4be30","projects:74e850a8d2d6","link"],["memory:64a3c9e4be30","decisions:4fa1f0c2f73f","link"],["memory:337815036a53","projects:e3a41bd9b1e6","link"],["memory:337815036a53","people:4b315d644077","link"],["memory:337815036a53","people:7cf4b4381104","link"],["memory:337815036a53","people:6cc7f846b08a","link"],["memory:a8609806d16d","operations:304316f72231","link"],["memory:a8609806d16d","projects:e3a41bd9b1e6","link"],["memory:a8609806d16d","projects:36d5ac5c4b8e","link"],["memory:a8609806d16d","projects:d9cdb861a093","link"],["memory:a8609806d16d","projects:2a459de7bdc2","link"],["memory:ab0770a23f25","projects:e3a41bd9b1e6","link"],["memory:ab0770a23f25","projects:7529b93c14a5","link"],["memory:ab0770a23f25","projects:5bc16329a872","link"],["memory:ab0770a23f25","projects:3dcc92d9f1e2","link"],["memory:ab0770a23f25","projects:e23ec9dac87c","link"],["memory:3c029334a42a","projects:92f6a06a14ca","link"],["memory:3c029334a42a","projects:c892b9bcdec2","link"],["memory:3c029334a42a","projects:8f95659d8d58","link"],["memory:3c029334a42a","projects:ca087d5dba90","link"],["memory:30f47cf750ff","projects:59ba21553f8a","link"],["memory:30f47cf750ff","operations:ee934e3e1275","link"],["memory:30f47cf750ff","projects:33842c5ef674","link"],["memory:5ba9910071b4","projects:005856be1e96","link"],["memory:5ba9910071b4","people:597a3593909f","link"],["memory:5ba9910071b4","projects:441c3eacd655","link"],["memory:5ba9910071b4","projects:b940cd8a5518","link"],["memory:6117ac647e01","projects:59ba21553f8a","link"],["memory:6117ac647e01","projects:b9a040b19e70","link"],["memory:6117ac647e01","projects:74e850a8d2d6","link"],["memory:6117ac647e01","projects:1e1fe5956f7f","link"],["memory:5c349f38776e","decisions:994afea4d58f","link"],["memory:5c349f38776e","decisions:1f9faf63084e","link"],["memory:5c349f38776e","operations:e23dc12fda0c","link"],["memory:5c349f38776e","projects:6d7285846a3b","link"],["memory:8523095d2859","decisions:d74b8653a513","link"],["memory:8523095d2859","people:7cf4b4381104","link"],["memory:8523095d2859","projects:66eede52cc76","link"],["memory:656ad266e551","projects:7529b93c14a5","link"],["memory:656ad266e551","projects:a7d5c7147514","link"],["memory:656ad266e551","projects:b9a040b19e70","link"],["memory:656ad266e551","projects:005856be1e96","link"],["memory:5bec3c83fe2f","projects:6de99e59b673","link"],["memory:5bec3c83fe2f","projects:b9a040b19e70","link"],["memory:5bec3c83fe2f","projects:3e0fba38b6ab","link"],["memory:108f93445dea","decisions:a1a0cf0da04e","link"],["memory:108f93445dea","decisions:d74b8653a513","link"],["memory:108f93445dea","projects:c892b9bcdec2","link"],["memory:bf0f340ad304","projects:59ba21553f8a","link"],["memory:bf0f340ad304","projects:2a459de7bdc2","link"],["memory:bf0f340ad304","projects:2e3a05ff63f2","link"],["memory:04562399d01e","operations:d99c1a32c08e","link"],["memory:04562399d01e","operations:a6eee751e736","link"],["memory:04562399d01e","projects:0e10d5a9f2de","link"],["memory:04562399d01e","projects:d9cdb861a093","link"],["memory:4b4472e9afef","projects:e3a41bd9b1e6","link"],["memory:4b4472e9afef","projects:005856be1e96","link"],["memory:4b4472e9afef","projects:b9a040b19e70","link"],["memory:4b4472e9afef","projects:2e3a05ff63f2","link"],["memory:e6e39539bd3b","projects:005856be1e96","link"],["memory:e6e39539bd3b","projects:2e3a05ff63f2","link"],["memory:e6e39539bd3b","people:45c64c9fc514","link"],["memory:cb7f3035d848","projects:59ba21553f8a","link"],["memory:cb7f3035d848","decisions:21acd9a36dc7","link"],["memory:cb7f3035d848","projects:5849e46d5775","link"],["memory:e674341d0685","people:45c64c9fc514","link"],["memory:e674341d0685","projects:e34dea37826e","link"],["projects:3ed515ad94ec","operations:a2cf4dec74c6","mention"],["projects:dd057a791d15","people:45c64c9fc514","mention"],["projects:dd057a791d15","people:4b315d644077","mention"],["operations:ada4ded60d2f","people:4b315d644077","mention"],["operations:ada4ded60d2f","people:2183b8a7f795","mention"],["operations:ada4ded60d2f","projects:c8da728ff0a3","mention"],["operations:8fe340438117","people:4b315d644077","mention"],["operations:30ae30eb7633","people:edce48a07c77","mention"],["operations:30ae30eb7633","people:2183b8a7f795","mention"],["operations:30ae30eb7633","people:45c64c9fc514","mention"],["operations:cf406eaaa8c2","people:2183b8a7f795","mention"],["operations:cf406eaaa8c2","people:597a3593909f","mention"],["operations:cf406eaaa8c2","people:edce48a07c77","mention"],["operations:cf406eaaa8c2","people:4b315d644077","mention"],["operations:cf406eaaa8c2","people:45c64c9fc514","mention"],["operations:681e4dca2b9e","people:594c2d7cc49d","mention"],["operations:681e4dca2b9e","people:edce48a07c77","mention"],["operations:8d200a040bc3","people:edce48a07c77","mention"],["decisions:de749e1c3abf","people:2183b8a7f795","mention"],["decisions:de749e1c3abf","people:597a3593909f","mention"],["decisions:de749e1c3abf","people:976c938c62fc","mention"],["decisions:de749e1c3abf","people:45c64c9fc514","mention"],["decisions:de749e1c3abf","people:4b315d644077","mention"],["research:81033a116a04","people:edce48a07c77","mention"],["research:81033a116a04","people:45c64c9fc514","mention"],["research:9271e8ea83a3","people:edce48a07c77","mention"],["research:c6c00f95fb1c","people:edce48a07c77","mention"],["research:c6c00f95fb1c","decisions:4fa1f0c2f73f","mention"],["ideas:5f6e055b4894","people:edce48a07c77","mention"],["memory:d2af40c89466","operations:f988bf333d81","mention"],["memory:d2af40c89466","projects:6d7285846a3b","mention"],["memory:8542d12a741d","projects:e3a41bd9b1e6","mention"],["memory:5b5a459a325c","people:edce48a07c77","mention"],["memory:7b9e8af3cc00","projects:6d7285846a3b","mention"],["memory:5c53fdc0e437","projects:6d7285846a3b","mention"],["memory:3c029334a42a","projects:e3a41bd9b1e6","mention"],["memory:3c029334a42a","operations:4533c30f1919","mention"],["memory:5bec3c83fe2f","projects:6d7285846a3b","mention"],["memory:5bec3c83fe2f","operations:ee934e3e1275","mention"],["memory:108f93445dea","operations:100a2fae4a51","mention"],["memory:108f93445dea","projects:6d7285846a3b","mention"],["memory:e674341d0685","projects:6d7285846a3b","mention"]]};var xd=`/* Injected by hero-brain.core.js so the page needs no stylesheet link. */
.hero-brain{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden}
.hero-brain canvas{
  position:absolute;display:block;pointer-events:none;
  opacity:0;transition:opacity 1.1s ease;
  /* Plain compositing on purpose. The canvas is premultiplied and additive inside,
     so the light already sums onto the photo; mix-blend-mode: plus-lighter looked
     the same and gave headless Chrome blank frames. */
}
.hero-brain canvas.is-on{opacity:var(--hero-brain-opacity,.85)}
/* Interaction: only the canvas square takes the pointer, the rest of the mount stays
   transparent to clicks. Vertical touch still scrolls the page; a sideways drag turns
   the brain. The hero's text overlay covers the whole section, so it has to let the
   pointer through everywhere except the text itself. */
.hero-brain canvas.is-interactive{pointer-events:auto;touch-action:pan-y;cursor:grab}
.hero-brain canvas.is-interactive.is-over{cursor:pointer}
.hero-brain canvas.is-interactive.is-dragging{cursor:grabbing}
.mm-over{pointer-events:none}
.mm-over .partners-hero-content{pointer-events:auto}
.hero-brain canvas.is-fading{transition-duration:1.4s;opacity:0}

/* Labels for the selected note and its neighbours. Positioned by the script. */
.hero-brain-labels{position:absolute;pointer-events:none;overflow:visible}
.hero-brain-labels span{position:absolute;left:0;top:0;white-space:nowrap;visibility:hidden;
  font:500 12px/1.2 'Inter',system-ui,sans-serif;letter-spacing:.01em;opacity:.94;
  text-shadow:0 0 6px #000,0 0 14px #000,0 1px 2px #000;will-change:transform}
.hero-brain-labels span.is-selected{font-size:14px;font-weight:600}
@media (max-width:1000px){.hero-brain-labels span{font-size:11px}.hero-brain-labels span.is-selected{font-size:12px}}

/* The heartbeat. Two rings and a flash centred on the brain, --reach wide so the
   outer ring crosses the whole hero. Only runs while .is-beating is on. */
.hero-brain-beat{position:absolute;width:0;height:0;pointer-events:none;--reach:2000px}
.hero-brain-beat i{position:absolute;left:0;top:0;display:block;border-radius:50%;opacity:0;
  transform:translate(-50%,-50%) scale(0);will-change:transform,opacity}
.hero-brain-ring{width:var(--reach);height:var(--reach);
  background:radial-gradient(circle,rgba(217,150,58,0) 46%,rgba(217,150,58,.28) 49%,rgba(242,237,230,.34) 50%,rgba(217,150,58,.22) 51.5%,rgba(217,150,58,0) 56%)}
.hero-brain-flash{width:calc(var(--reach) * .55);height:calc(var(--reach) * .55);
  background:radial-gradient(circle,rgba(242,237,230,.55) 0%,rgba(217,150,58,.32) 18%,rgba(217,150,58,.08) 45%,rgba(217,150,58,0) 70%)}
.hero-brain-beat.is-beating .hero-brain-ring{animation:hero-brain-ring 1.7s cubic-bezier(.16,.84,.3,1) both}
.hero-brain-beat.is-beating .hero-brain-ring-2{animation-delay:.42s;animation-duration:1.5s}
.hero-brain-beat.is-beating .hero-brain-flash{animation:hero-brain-flash 1.1s ease-out both}
@keyframes hero-brain-ring{0%{opacity:0;transform:translate(-50%,-50%) scale(.02)}8%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) scale(1)}}
@keyframes hero-brain-flash{0%{opacity:0;transform:translate(-50%,-50%) scale(.3)}10%{opacity:1;transform:translate(-50%,-50%) scale(.6)}30%{opacity:.35;transform:translate(-50%,-50%) scale(.75)}42%{opacity:.8;transform:translate(-50%,-50%) scale(.85)}100%{opacity:0;transform:translate(-50%,-50%) scale(1)}}
@media (prefers-reduced-motion:reduce){.hero-brain-beat{display:none}}
`;var $m=560,yd=50,Km=.18,Qm=.45;function xc(i,e,t,n){let s=e/t,r=Math.min(1,Math.max(0,i)/s);return e*(1-Math.pow(1-r,n))}function e0(i,e=.97){let t=i%e/e,n=(s,r,a)=>a*Math.exp(-((t-s)*(t-s))/(2*r*r));return n(.09,.038,1)+n(.27,.05,.55)}function Bt(i,e){let t=parseFloat(i);return Number.isFinite(t)?t:e}function t0(i){let e=i.dataset;return{image:e.image||".mm-machine img",avoid:e.avoid==null?".partners-hero-ctas":e.avoid,boxX:Bt(e.boxX,50),boxY:Bt(e.boxY,51),size:Bt(e.size,30),lift:Bt(e.lift,0),boxXPhone:Bt(e.boxXPhone,44),boxYPhone:Bt(e.boxYPhone,39),sizePhone:Bt(e.sizePhone,42),mode:e.mode==="loop"?"loop":"hold",speed:Bt(e.speed,1.8),warp:Bt(e.warp,1.6),turn:Bt(e.turn,1.5),pulse:e.pulse!=="0",heart:e.heart!=="0",labels:e.labels!=="0",interactive:e.interactive!=="0",holdSeconds:Bt(e.holdSeconds,8),phone:e.phone||"off",opacity:Bt(e.opacity,.85),rings:e.rings!=="0",glow:Bt(e.glow,.5),minSide:Bt(e.minSide,140)}}function n0(i){let e=i.getBoundingClientRect(),t=i.naturalWidth,n=i.naturalHeight;if(!t||!n||!e.width||!e.height||getComputedStyle(i).objectFit!=="cover")return e;let r=Math.max(e.width/t,e.height/n),a=t*r,o=n*r;return{left:e.left+(e.width-a)/2,top:e.top+(e.height-o)/2,width:a,height:o,right:0,bottom:0}}var i0=`
  attribute float size; attribute float alpha; attribute vec3 color;
  varying vec3 vColor; varying float vAlpha;
  uniform float halfHeight;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * halfHeight * projectionMatrix[1][1] / max(1.0, -mv.z);
    vColor = color; vAlpha = alpha;
  }`,s0=`
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.72, d) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a + vec3(0.18) * a * (1.0 - smoothstep(0.0, 0.5, d)), a);
  }`,r0=`
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = min(1.0, length(gl_PointCoord - 0.5) * 2.0);
    float a = pow(1.0 - d, 2.2) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a, a);
  }`,a0=`
  attribute vec4 tint; varying vec4 vTint;
  void main() { vTint = tint; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,o0=`
  varying vec4 vTint;
  void main() { if (vTint.a < 0.003) discard; gl_FragColor = vec4(vTint.rgb * vTint.a, vTint.a); }`;function bd(i){return i.blending=ta,i.blendSrc=ui,i.blendDst=ui,i.blendSrcAlpha=ui,i.blendDstAlpha=ui,i.transparent=!0,i.depthWrite=!1,i.depthTest=!1,i}function c0(i){let e=t0(i),t=document.querySelector(e.image);if(!t)return;let n=matchMedia("(prefers-reduced-motion: reduce)"),s=matchMedia("(max-width:1000px)"),r=s.matches;if(r&&e.phone==="off")return;let a;try{a=new qa({alpha:!0,antialias:!r,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{return}if(He.enabled=!1,a.outputColorSpace=li,!document.getElementById("hero-brain-css")){let F=document.createElement("style");F.id="hero-brain-css",F.textContent=xd,document.head.appendChild(F)}i.style.setProperty("--hero-brain-opacity",String(e.opacity)),a.setClearColor(0,0),a.setPixelRatio(Math.min(devicePixelRatio||1,r?1.25:1.6));let o=a.domElement;o.setAttribute("aria-hidden","true"),i.appendChild(o);let c=document.createElement("div");c.className="hero-brain-beat",c.innerHTML='<i class="hero-brain-flash"></i><i class="hero-brain-ring"></i><i class="hero-brain-ring hero-brain-ring-2"></i>',i.appendChild(c);let l=.55,h=document.createElement("div");h.className="hero-brain-labels",i.appendChild(h);let f=new Map,d=Object.fromEntries(ks.sources.map(F=>[F.id,new ke(F.color)])),p=ks.nodes.map(F=>({id:F.id,source:F.s,degree:F.d,title:F.t||""}));r&&(p=p.filter(F=>F.degree>=2));let x=new Map(p.map(F=>[F.id,F])),v=ks.links.map(([F,C,W])=>({source:F,target:C,kind:W})).filter(F=>x.has(F.source)&&x.has(F.target));pd(p,ks.sources);for(let F of p)F.r=Math.min(11,2.2+Math.sqrt(F.degree||0)*.85),F.home={x:F.x,y:F.y,z:F.z};let m=new Map(p.map(F=>[F.id,new Set]));for(let F of v)m.get(F.source).add(F.target),m.get(F.target).add(F.source);let u=new Set;v.forEach((F,C)=>{let W=x.get(F.source),O=x.get(F.target);(Math.hypot(W.x-O.x,W.y-O.y,W.z-O.z)<330||C%7===0)&&u.add(F)});let M=new ds,A=new Dt(yd,1,1,8e3),b=p.length,w=new ut(new Float32Array(b*3),3).setUsage(In),E=new ut(new Float32Array(b*3),3),R=new ut(new Float32Array(b),1).setUsage(In),_=new ut(new Float32Array(b),1).setUsage(In),T=new ut(new Float32Array(b),1).setUsage(In),P=new ut(new Float32Array(b),1).setUsage(In);p.forEach((F,C)=>{let W=d[F.source]||new ke("#ffffff");E.setXYZ(C,W.r,W.g,W.b),F.i=C});let I={value:1},k=(F,C,W)=>{let O=new vt;O.setAttribute("position",w),O.setAttribute("color",E),O.setAttribute("size",F),O.setAttribute("alpha",C);let J=bd(new Lt({uniforms:{halfHeight:I},vertexShader:i0,fragmentShader:W})),ie=new zi(O,J);return ie.frustumCulled=!1,ie},K=new vt,Q=new ut(new Float32Array(v.length*6),3).setUsage(In),B=new ut(new Float32Array(v.length*8),4).setUsage(In);K.setAttribute("position",Q),K.setAttribute("tint",B);let Z=new ms(K,bd(new Lt({vertexShader:a0,fragmentShader:o0})));Z.frustumCulled=!1,M.add(Z);let X=r?null:k(T,P,r0);X&&M.add(X),M.add(k(R,_,s0));let ne=e.rings?md(M,{ring1:"#D9963A",ring2:"#F2EDE6",glow:"#D9963A"}):null,se=null,ue=null;ne&&M.traverse(F=>{F instanceof di&&(se=F),F.geometry&&F.geometry.type==="IcosahedronGeometry"&&(ue=F),F.material&&F!==Z&&!(F instanceof zi)&&(F.material.blending=hi,F.material.depthTest=!1,F.material.depthWrite=!1)});let fe=new ke("#F2EDE6"),_e=n.matches,Ne,Ze=0,Ve=.35,$=.04,oe="grow",re=0,Ie=!1,Ee=null,Ae=0,et=0,Be=0,Je=!1;function je(){for(let F of p)F.x=F.home.x,F.y=F.home.y,F.z=F.home.z;Ne=gd(p,v);for(let F of Ne.records)F.origin=null,F.node.x=F.node.y=F.node.z=0;Ze=e.pulse&&!_e?-l:0,oe="grow"}function We(){!e.pulse||_e||!tt||(c.classList.remove("is-beating"),c.offsetWidth,c.classList.add("is-beating"))}je();function st(F){let C=F>=Ne.duration,W=0;for(let J of Ne.records){let ie=J.node,j=ie.i;if(J.born>F){_.setX(j,0),P.setX(j,0),R.setX(j,0),T.setX(j,0);continue}W++;let te;C?te=J.home:(J.origin||(J.origin=J.parent?{x:J.parent.node.x,y:J.parent.node.y,z:J.parent.node.z}:{x:0,y:0,z:0}),te=_d(J,F)),ie.x=te.x,ie.y=te.y,ie.z=te.z,w.setXYZ(j,te.x,te.y,te.z);let de=C?1:Math.min(1,Math.max(.05,(F-J.born)/.6)),Ce=Ee&&Ee.id===ie.id,Pe=Ee&&m.get(Ee.id).has(ie.id),ht=Ee&&!Ce&&!Pe,yt=Ce?1.5:Pe?1.15:1;R.setX(j,ie.r*2*(.3+.7*de)*yt),_.setX(j,(ht?.19:Ce?1:.95)*de),T.setX(j,ie.r*2*(3.2+3*(1-de))*yt),P.setX(j,ht?0:(Ce?.5:.3)+.35*(1-de))}w.needsUpdate=R.needsUpdate=_.needsUpdate=T.needsUpdate=P.needsUpdate=!0;let O=0;for(let J of v){let ie=x.get(J.source),j=x.get(J.target),te=Ne.byNode.get(ie.id),de=Ne.byNode.get(j.id),Ce=0,Pe=d[j.source]||fe;if(C&&Ee)ie===Ee||j===Ee?(Ce=.72,Pe=d[Ee.source]||fe):u.has(J)&&(Ce=.05,Pe=fe);else if(C)u.has(J)&&(Ce=J.kind==="bridge"?.18:.2,Pe=J.kind==="bridge"?fe:d[ie.source]||fe);else if(te&&de&&Math.max(te.born,de.born)<=F){let ht=F-Math.max(te.born,de.born),yt=Ne.treeLinks.has(J);yt&&(ht<4||W<20)?Ce=.5:(F>13&&u.has(J)||yt)&&(Ce=.12)}Q.setXYZ(O,ie.x,ie.y,ie.z),Q.setXYZ(O+1,j.x,j.y,j.z),B.setXYZW(O,Pe.r,Pe.g,Pe.b,Ce),B.setXYZW(O+1,Pe.r,Pe.g,Pe.b,Ce),O+=2}return Q.needsUpdate=B.needsUpdate=!0,C}let lt=0,mt=1,tt=!1;function at(){let F=i.getBoundingClientRect(),C=n0(t),W=s.matches;if(!C.width||W&&e.phone==="off"){tt&&(tt=!1,o.style.display="none");return}let O=C.width*(W?e.sizePhone:e.size)/100,J=C.left+C.width*(W?e.boxXPhone:e.boxX)/100,j=C.top+C.height*(W?e.boxYPhone:e.boxY)/100-C.height*e.lift/100,te=j-O,de=e.avoid?document.querySelector(e.avoid):null;if(de){let yn=de.getBoundingClientRect().bottom+6;te<yn&&(te=yn,O=Math.max(0,j-te))}let Ce=O>=e.minSide;if(Ce!==tt&&(tt=Ce,o.style.display=Ce?"block":"none"),!Ce)return;let Pe=Math.round(O);o.style.left=`${Math.round(J-Pe/2-F.left)}px`,o.style.top=`${Math.round(te-F.top)}px`,o.style.width=o.style.height=`${Pe}px`,h.style.left=o.style.left,h.style.top=o.style.top,h.style.width=h.style.height=`${Pe}px`;let ht=Math.ceil(2*Math.hypot(Math.max(J-F.left,F.right-J),Math.max(te+Pe/2-F.top,F.bottom-te-Pe/2)));c.style.left=`${Math.round(J-F.left)}px`,c.style.top=`${Math.round(te+Pe/2-F.top)}px`,c.style.setProperty("--reach",`${ht}px`),Pe!==lt&&(lt=Pe,a.setSize(Pe,Pe,!1),A.aspect=1,A.updateProjectionMatrix(),I.value=a.getDrawingBufferSize(new Fe).y/2,mt=$m/(.96*Math.tan(yd/2*Math.PI/180)))}function ot(F){let C=mt*(.56+.44*Math.min(1,F/26));A.position.set(Math.sin(Ve)*Math.cos($)*C,Math.sin($)*C,Math.cos(Ve)*Math.cos($)*C),A.lookAt(0,0,0)}let D=new L;function At(F,C){let W=o.getBoundingClientRect(),O=F-W.left,J=C-W.top,ie=null,j=1e9;for(let te of p){if(_.getX(te.i)<=0||(D.set(te.x,te.y,te.z).project(A),D.z>1))continue;let de=(D.x+1)/2*W.width,Ce=(1-D.y)/2*W.height,Pe=Math.max(9,te.r*1.4*W.height/470+6),ht=Math.hypot(de-O,Ce-J);ht<Pe&&ht<j&&(ie=te,j=ht)}return ie}let Xe=[];function S(){if(!Xe.length)return;let F=o.getBoundingClientRect(),C=[];for(let W of Xe){let O=f.get(W.id);D.set(W.x,W.y,W.z).project(A);let J=(D.x+1)/2*F.width,ie=(1-D.y)/2*F.height,j=O.offsetWidth||W.title.length*6.5+10,te=16,de=Math.round(W.r*1.4*F.height/470+10),Ce={l:J-j/2,r:J+j/2,t:ie-de-te,b:ie-de},Pe=D.z<1&&Ce.l>-F.width*.7&&Ce.r<F.width*1.7&&Ce.t>-40&&Ce.b<F.height+40,ht=C.some(yn=>Ce.l<yn.r+6&&Ce.r>yn.l-6&&Ce.t<yn.b+3&&Ce.b>yn.t-3),yt=Pe&&(!ht||W===Ee);O.style.visibility=yt?"visible":"hidden",yt&&(C.push(Ce),O.style.transform=`translate(${Math.round(J)}px, ${Math.round(ie-de)}px) translate(-50%, -100%)`)}}function g(F){if(h.textContent="",f.clear(),Xe=[],!F||!e.labels)return;let C=[...m.get(F.id)].map(W=>x.get(W)).filter(Boolean).sort((W,O)=>O.degree-W.degree).slice(0,9);Xe=[F,...C];for(let W of Xe){let O=document.createElement("span");O.textContent=W.title.length>42?W.title.slice(0,40).replace(/\s+\S*$/,"")+"\u2026":W.title,O.className=W===F?"is-selected":"",O.style.color=W===F?"#fff":d[W.source]?"#"+d[W.source].getHexString():"#fff",h.appendChild(O),f.set(W.id,O)}S()}function U(F){Ee=F,g(F),o.classList.toggle("has-selection",!!F),oe!=="grow"&&(st(Ne.duration),_e&&we())}function V(){return e.interactive&&tt&&oe!=="grow"&&!Ie}if(e.interactive){o.classList.add("is-interactive");let F=0,C=0,W=0,O=0,J=!1,ie=null;o.addEventListener("pointerdown",te=>{!V()||te.button>0||(ie=te.pointerId,F=W=te.clientX,C=O=te.clientY,J=!1,Ae=et=0,o.setPointerCapture(te.pointerId))}),o.addEventListener("pointermove",te=>{if(ie===te.pointerId){let de=te.clientX-W,Ce=te.clientY-O;W=te.clientX,O=te.clientY,!J&&Math.hypot(te.clientX-F,te.clientY-C)>6&&(J=!0,Je=!0,o.classList.add("is-dragging")),J&&(Ve-=de*.006,$=Math.max(-1.2,Math.min(1.2,$+Ce*.004)),Ae=-de*.006,et=Ce*.004,Be=performance.now(),_e&&we())}else V()&&te.pointerType==="mouse"&&o.classList.toggle("is-over",!!At(te.clientX,te.clientY))});let j=te=>{ie===te.pointerId&&(ie=null,Je=!1,o.classList.remove("is-dragging"),Be=performance.now(),!J&&V()&&U(At(te.clientX,te.clientY)))};o.addEventListener("pointerup",j),o.addEventListener("pointercancel",j)}let q=!1,ae=0,ce=0,Y=!0,ee=0;function he(F){if(ae=0,!q)return;ee++;let C=Math.min((F-ce)/1e3,.1);ce=F;let W=oe!=="grow";if(oe==="grow")Ze+=C,W=st(xc(Ze,Ne.duration,e.speed,e.warp)),W&&(oe="hold",re=F),Ve+=C*2*Math.PI/60*Km*e.turn;else{let J=performance.now()-Be>4e3;Je||(Math.abs(Ae)>4e-4||Math.abs(et)>4e-4?(Ve+=Ae,$=Math.max(-1.2,Math.min(1.2,$+et)),Ae*=.94,et*=.94):J&&!Ee&&(Ve+=C*2*Math.PI/60*Qm*e.turn,$+=(.04-$)*Math.min(1,C*.6))),e.mode==="loop"&&!Ee&&J&&!Ie&&F-re>e.holdSeconds*1e3&&(Ie=!0,o.classList.add("is-fading"),setTimeout(()=>{U(null),je(),st(0),ot(0),a.render(M,A),o.classList.remove("is-fading"),Ie=!1,We()},1500))}let O=oe==="grow"?xc(Ze,Ne.duration,e.speed,e.warp):Ne.duration;if(ne&&(ne.update(F/1e3,!1,oe==="grow"?Math.max(0,(O-8)/20):1),se&&(se.material.opacity*=e.glow)),ue&&e.heart&&Ze>=0){let J=e0(F/1e3);ue.scale.setScalar(1+.16*J),ue.material.opacity=.16+.34*J,se&&(se.material.opacity+=.18*J*e.glow)}ot(O),S(),o.style.visibility=oe==="grow"&&Ze<0?"hidden":"",a.render(M,A),ae=requestAnimationFrame(he)}function Me(){q||_e||(q=!0,ce=performance.now(),ae=requestAnimationFrame(he))}function pe(){q=!1,ae&&cancelAnimationFrame(ae),ae=0}function le(){Y&&!document.hidden&&tt?Me():pe()}new IntersectionObserver(F=>{Y=F.some(C=>C.isIntersecting),le()},{threshold:0}).observe(i),document.addEventListener("visibilitychange",le);let Se=()=>{at(),_e&&we(),le()};window.addEventListener("resize",Se,{passive:!0}),window.ResizeObserver&&new ResizeObserver(Se).observe(t),t.complete||t.addEventListener("load",Se,{once:!0});function we(){tt&&(st(Ne.duration),ne&&(ne.update(4,!1,1),se&&(se.material.opacity*=e.glow)),ot(Ne.duration),S(),a.render(M,A))}window.heroBrain={settings:e,set(F){Object.assign(e,F),lt=0,Se(),i.style.setProperty("--hero-brain-opacity",String(e.opacity))},replay(){U(null),je(),Ie=!1,o.classList.remove("is-fading"),_e?we():We()},select(F){U(F&&x.get(F)||null)},state(){return{selected:Ee&&Ee.id,angle:+Ve.toFixed(3),pitch:+$.toFixed(3),elapsed:Ze,growthTime:oe==="grow"?xc(Ze,Ne.duration,e.speed,e.warp):Ne.duration,phase:oe,running:q,visible:tt,onScreen:Y,frames:ee,side:lt,still:_e}},snap(){a.render(M,A);let F=a.getContext(),C=F.drawingBufferWidth,W=F.drawingBufferHeight,O=new Uint8Array(C*W*4);F.readPixels(0,0,C,W,F.RGBA,F.UNSIGNED_BYTE,O);let J=0;for(let te=3;te<O.length;te+=4)O[te]&&J++;let ie=0,j=0;for(let te=0;te<b;te++)_.getX(te)>0&&ie++,j+=R.getX(te);return{lit:J,of:C*W,alive:ie,meanSize:j/b,cam:A.position.toArray().map(Math.round),pos0:[w.getX(0),w.getY(0),w.getZ(0)].map(Math.round),halfHeight:I.value,distance:mt}}},at(),_e?we():(st(0),ot(0),a.render(M,A)),requestAnimationFrame(()=>{o.classList.add("is-on"),We(),le()})}try{let i=document.querySelector("[data-hero-brain]");i&&!i.dataset.heroBrainRunning&&(i.dataset.heroBrainRunning="1",c0(i))}catch{}export{c0 as start};
