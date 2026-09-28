var ol=0,Xo=1,cl=2;var zs=1,ll=2,ss=3,Gn=0,Zt=1,Pn=2,In=0,vi=1,Ai=2,qo=3,Yo=4,ga=5;var ii=100,dl=101,hl=102,ul=103,fl=104,pl=200,wi=201,ml=202,gl=203,Rr=204,Pr=205,_l=206,xl=207,yl=208,bl=209,vl=210,Ml=211,Sl=212,El=213,Tl=214,Ir=0,Dr=1,Lr=2,Mi=3,Ur=4,Nr=5,Fr=6,kr=7,Zo=0,Al=1,wl=2,_n=0,Jo=1,$o=2,Ko=3,Qo=4,ec=5,tc=6,nc=7;var ic=300,di=301,Ci=302,_a=303,xa=304,Vs=306,Or=1e3,En=1001,Br=1002,Nt=1003,Cl=1004;var Gs=1005;var Ft=1006,ya=1007;var hi=1008;var on=1009,sc=1010,rc=1011,rs=1012,ba=1013,xn=1014,yn=1015,Dn=1016,va=1017,Ma=1018,as=1020,ac=35902,oc=35899,cc=1021,lc=1022,hn=1023,Tn=1026,ui=1027,dc=1028,Sa=1029,fi=1030,Ea=1031;var Ta=1033,Hs=33776,Ws=33777,js=33778,Xs=33779,Aa=35840,wa=35841,Ca=35842,Ra=35843,Pa=36196,Ia=37492,Da=37496,La=37488,Ua=37489,qs=37490,Na=37491,Fa=37808,ka=37809,Oa=37810,Ba=37811,za=37812,Va=37813,Ga=37814,Ha=37815,Wa=37816,ja=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Ja=36492,$a=36494,Ka=36495,Qa=36283,eo=36284,Ys=36285,to=36286;var xs=2300,zr=2301,Cr=2302,Oo=2303,Bo=2400,zo=2401,Vo=2402;var Rl=3200;var hc=0,Pl=1,Wn="",sn="srgb",Si="srgb-linear",ys="linear",ct="srgb";var yi=7680;var Go=519,Il=512,Dl=513,Ll=514,no=515,Ul=516,Nl=517,io=518,Fl=519,Vr=35044,$t=35048;var uc="300 es",mn=2e3,bs=2001;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kl(){let i=vs("canvas");return i.style.display="block",i}var Nc={},$i=null;function Ms(...i){let e="THREE."+i.shift();$i?$i("log",e,...i):console.log(e,...i)}function Ol(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=Ol(i);let e="THREE."+i.shift();if($i)$i("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=Ol(i);let e="THREE."+i.shift();if($i)$i("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bi(...i){let e=i.join(" ");e in Nc||(Nc[e]=!0,Ue(...i))}function Bl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zl={[Ir]:Dr,[Lr]:Fr,[Ur]:kr,[Mi]:Nr,[Dr]:Ir,[Fr]:Lr,[kr]:Ur,[Nr]:Mi},An=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fo=Math.PI/180,Gr=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Ld(i,e){return(i%e+e)%e}function po(i,e,t){return(1-t)*i+t*e}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],v=r[a+3];if(f!==v||c!==d||l!==m||h!==x){let p=c*d+l*m+h*x+f*v;p<0&&(d=-d,m=-m,x=-x,v=-v,p=-p);let u=1-o;if(p<.9995){let M=Math.acos(p),w=Math.sin(M);u=Math.sin(u*M)/w,o=Math.sin(o*M)/w,c=c*u+d*o,l=l*u+m*o,h=h*u+x*o,f=f*u+v*o}else{c=c*u+d*o,l=l*u+m*o,h=h*u+x*o,f=f*u+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*f+c*m-l*d,e[t+1]=c*x+h*d+l*f-o*m,e[t+2]=l*x+h*m+o*d-c*f,e[t+3]=h*x-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"YZX":this._x=d*h*f+l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f-d*m*x;break;case"XZY":this._x=d*h*f-l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f+d*m*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new U,Fc=new wn,Ve=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],v=s[0],p=s[3],u=s[6],M=s[1],w=s[4],b=s[7],A=s[2],S=s[5],C=s[8];return r[0]=a*v+o*M+c*A,r[3]=a*p+o*w+c*S,r[6]=a*u+o*b+c*C,r[1]=l*v+h*M+f*A,r[4]=l*p+h*w+f*S,r[7]=l*u+h*b+f*C,r[2]=d*v+m*M+x*A,r[5]=d*p+m*w+x*S,r[8]=d*u+m*b+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,m=l*r-a*c,x=t*f+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(go.makeScale(e,t)),this}rotate(e){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(go.makeRotation(-e)),this}translate(e,t){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new Ve,kc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){let i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:kc,fromXYZ:Oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:kc,fromXYZ:Oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var $e=Ud();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Hr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=vs("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nd=0,Ki=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Fd=0,xo=new U,qt=class i extends An{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=Ft,a=hi,o=hn,c=on,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ni(),this.name="",this.source=new Ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ic;qt.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],x=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(m+1)/2,A=(u+1)/2,S=(h+d)/4,C=(f+v)/4,_=(x+p)/4;return w>b&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=C/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wr=class extends An{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ki(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Wr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var St=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,f,d,m,x,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,d,m,x,v,p)}set(e,t,n,s,r,a,o,c,l,h,f,d,m,x,v,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=x,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,x=l*h,v=l*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,x=l*h,v=l*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=x*l-m,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*c,m=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+v,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Od)}lookAt(e,t,n){let s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),tr.crossVectors(tn,Jn),s[0]=Jn.x,s[4]=tr.x,s[8]=tn.x,s[1]=Jn.y,s[5]=tr.y,s[9]=tn.y,s[2]=Jn.z,s[6]=tr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],v=n[6],p=n[10],u=n[14],M=n[3],w=n[7],b=n[11],A=n[15],S=s[0],C=s[4],_=s[8],T=s[12],R=s[1],P=s[5],F=s[9],q=s[13],Z=s[2],B=s[6],X=s[10],H=s[14],K=s[3],te=s[7],ue=s[11],pe=s[15];return r[0]=a*S+o*R+c*Z+l*K,r[4]=a*C+o*P+c*B+l*te,r[8]=a*_+o*F+c*X+l*ue,r[12]=a*T+o*q+c*H+l*pe,r[1]=h*S+f*R+d*Z+m*K,r[5]=h*C+f*P+d*B+m*te,r[9]=h*_+f*F+d*X+m*ue,r[13]=h*T+f*q+d*H+m*pe,r[2]=x*S+v*R+p*Z+u*K,r[6]=x*C+v*P+p*B+u*te,r[10]=x*_+v*F+p*X+u*ue,r[14]=x*T+v*q+p*H+u*pe,r[3]=M*S+w*R+b*Z+A*K,r[7]=M*C+w*P+b*B+A*te,r[11]=M*_+w*F+b*X+A*ue,r[15]=M*T+w*q+b*H+A*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],u=e[15],M=c*m-l*d,w=o*m-l*f,b=o*d-c*f,A=a*m-l*h,S=a*d-c*h,C=a*f-o*h;return t*(v*M-p*w+u*b)-n*(x*M-p*A+u*S)+s*(x*w-v*A+u*C)-r*(x*b-v*S+p*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],u=e[15],M=t*o-n*a,w=t*c-s*a,b=t*l-r*a,A=n*c-s*o,S=n*l-r*o,C=s*l-r*c,_=h*v-f*x,T=h*p-d*x,R=h*u-m*x,P=f*p-d*v,F=f*u-m*v,q=d*u-m*p,Z=M*q-w*F+b*P+A*R-S*T+C*_;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/Z;return e[0]=(o*q-c*F+l*P)*B,e[1]=(s*F-n*q-r*P)*B,e[2]=(v*C-p*S+u*A)*B,e[3]=(d*S-f*C-m*A)*B,e[4]=(c*R-a*q-l*T)*B,e[5]=(t*q-s*R+r*T)*B,e[6]=(p*b-x*C-u*w)*B,e[7]=(h*C-d*b+m*w)*B,e[8]=(a*F-o*R+l*_)*B,e[9]=(n*R-t*F-r*_)*B,e[10]=(x*S-v*b+u*M)*B,e[11]=(f*b-h*S-m*M)*B,e[12]=(o*T-a*P-c*_)*B,e[13]=(t*P-n*T+s*_)*B,e[14]=(v*w-x*A-p*M)*B,e[15]=(h*A-f*w+d*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,m=r*h,x=r*f,v=a*h,p=a*f,u=o*f,M=c*l,w=c*h,b=c*f,A=n.x,S=n.y,C=n.z;return s[0]=(1-(v+u))*A,s[1]=(m+b)*A,s[2]=(x-w)*A,s[3]=0,s[4]=(m-b)*S,s[5]=(1-(d+u))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(x+w)*C,s[9]=(p-M)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),c=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);let l=1/a,h=1/o,f=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s),x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===mn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===bs)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s),x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===mn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===bs)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new U,un=new St,kd=new U(0,0,0),Od=new U(1,1,1),Jn=new U,tr=new U,tn=new U,Bc=new St,zc=new wn,si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bd=0,Vc=new U,Fi=new wn,Nn=new St,nr=new U,ds=new U,zd=new U,Vd=new wn,Gc=new U(1,0,0),Hc=new U(0,1,0),Wc=new U(0,0,1),jc={type:"added"},Gd={type:"removed"},ki={type:"childadded",child:null},yo={type:"childremoved",child:null},Yt=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new si,n=new wn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ve}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ds,nr,this.up):Nn.lookAt(nr,ds,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),ki.child=e,this.dispatchEvent(ki),ki.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new U(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hd={type:"move"},Qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ir={h:0,s:0,l:0};function bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Ld(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=Vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return $e.workingToColorSpace(Vt.copy(this),e),Math.round(tt(Vt.r*255,0,255))*65536+Math.round(tt(Vt.g*255,0,255))*256+Math.round(tt(Vt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=sn){$e.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ir);let n=po($n.h,ir.h,t),s=po($n.s,ir.s,t),r=po($n.l,ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new He;He.NAMES=Vl;var Ts=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new U,Fn=new U,vo=new U,kn=new U,Oi=new U,Bi=new U,Xc=new U,Mo=new U,So=new U,Eo=new U,To=new Tt,Ao=new Tt,wo=new Tt,zn=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Fn.subVectors(n,t),vo.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(Fn),c=fn.dot(vo),l=Fn.dot(Fn),h=Fn.dot(vo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return To.setScalar(0),Ao.setScalar(0),wo.setScalar(0),To.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,n),wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Fn.subVectors(e,t),fn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),Mo.subVectors(e,n);let c=Oi.dot(Mo),l=Bi.dot(Mo);if(c<=0&&l<=0)return t.copy(n);So.subVectors(e,s);let h=Oi.dot(So),f=Bi.dot(So);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Oi,a);Eo.subVectors(e,r);let m=Oi.dot(Eo),x=Bi.dot(Eo);if(x>=0&&m<=x)return t.copy(r);let v=m*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Bi,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Xc.subVectors(r,s),o=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Xc,o);let u=1/(p+v+d);return a=v*u,o=d*u,t.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),rr.subVectors(this.max,hs),zi.subVectors(e.a,hs),Vi.subVectors(e.b,hs),Gi.subVectors(e.c,hs),Kn.subVectors(Vi,zi),Qn.subVectors(Gi,Vi),mi.subVectors(zi,Gi);let t=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!Co(t,zi,Vi,Gi,rr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,zi,Vi,Gi,rr))?!1:(ar.crossVectors(Kn,Qn),t=[ar.x,ar.y,ar.z],Co(t,zi,Vi,Gi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},On=[new U,new U,new U,new U,new U,new U,new U,new U],pn=new U,sr=new ri,zi=new U,Vi=new U,Gi=new U,Kn=new U,Qn=new U,mi=new U,hs=new U,rr=new U,ar=new U,gi=new U;function Co(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pt=new U,or=new Ge,Wd=0,ut=class extends An{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vr,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ws=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},jd=new ri,us=new U,Ro=new U,ai=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Ro)),this.expandByPoint(us.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xd=0,dn=new St,Po=new Yt,Hi=new U,nn=new ri,fs=new ri,Ut=new U,It=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?ws:As)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(nn.min,fs.min),nn.expandByPoint(Ut),Ut.addVectors(nn.max,fs.max),nn.expandByPoint(Ut)):(nn.expandByPoint(fs.min),nn.expandByPoint(fs.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(e,l),Ut.add(Hi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new U,c[_]=new U;let l=new U,h=new U,f=new U,d=new Ge,m=new Ge,x=new Ge,v=new U,p=new U;function u(_,T,R){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),h.sub(l),f.sub(l),m.sub(d),x.sub(d);let P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(P),o[_].add(v),o[T].add(v),o[R].add(v),c[_].add(p),c[T].add(p),c[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){let R=M[_],P=R.start,F=R.count;for(let q=P,Z=P+F;q<Z;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let w=new U,b=new U,A=new U,S=new U;function C(_){A.fromBufferAttribute(s,_),S.copy(A);let T=o[_];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),b.crossVectors(S,T);let P=b.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,T=M.length;_<T;++_){let R=M[_],P=R.start,F=R.count;for(let q=P,Z=P+F;q<Z;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){let x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),m=0,x=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let u=0;u<h;u++)d[x++]=l[m++]}return new ut(d,h,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vr,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new U,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ms("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ms("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qd=0,Cn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=vi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Pr,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},es=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wi,ps=new U,ji=new U,Xi=new U,qi=new Ge,ms=new Ge,Gl=new St,cr=new U,gs=new U,lr=new U,qc=new Ge,Io=new Ge,Yc=new Ge,Ei=class extends Yt{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xr(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Cs(n,3,0,!1)),Wi.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Gl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;dr(cr.set(-.5,-.5,0),Xi,a,ji,s,r),dr(gs.set(.5,-.5,0),Xi,a,ji,s,r),dr(lr.set(.5,.5,0),Xi,a,ji,s,r),qc.set(0,0),Io.set(1,0),Yc.set(1,1);let o=e.ray.intersectTriangle(cr,gs,lr,!1,ps);if(o===null&&(dr(gs.set(-.5,.5,0),Xi,a,ji,s,r),Io.set(0,1),o=e.ray.intersectTriangle(cr,lr,gs,!1,ps),o===null))return;let c=e.ray.origin.distanceTo(ps);c<e.near||c>e.far||t.push({distance:c,point:ps.clone(),uv:zn.getInterpolation(ps,cr,gs,lr,qc,Io,Yc,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dr(i,e,t,n,s,r){qi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ms.x=r*qi.x-s*qi.y,ms.y=s*qi.x+r*qi.y):ms.copy(qi),i.copy(e),i.x+=ms.x,i.y+=ms.y,i.applyMatrix4(Gl)}var Bn=new U,Do=new U,hr=new U,ei=new U,Lo=new U,ur=new U,Uo=new U,ts=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=ei.dot(this.direction),c=-ei.dot(hr),l=ei.lengthSq(),h=Math.abs(1-a*a),f,d,m,x;if(h>0)if(f=a*c-o,d=a*o-c,x=r*h,f>=0)if(d>=-x)if(d<=x){let v=1/h;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Do).addScaledVector(hr,d),m}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){Lo.subVectors(t,e),ur.subVectors(n,e),Uo.crossVectors(Lo,ur);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);let c=o*this.direction.dot(ur.crossVectors(ei,ur));if(c<0)return null;let l=o*this.direction.dot(Lo.cross(ei));if(l<0||c+l>a)return null;let h=-o*ei.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zc=new St,_i=new ts,fr=new ai,Jc=new U,pr=new U,mr=new U,gr=new U,No=new U,_r=new U,$c=new U,xr=new U,kt=class extends Yt{constructor(e=new It,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(No.fromBufferAttribute(f,e),a?_r.addScaledVector(No,h):_r.addScaledVector(No.sub(t),h))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(fr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(fr,Jc)===null||_i.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let p=d[x],u=a[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,A=w;b<A;b+=3){let S=o.getX(b),C=o.getX(b+1),_=o.getX(b+2);s=yr(this,u,e,n,l,h,f,S,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){let M=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);s=yr(this,a,e,n,l,h,f,M,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let p=d[x],u=a[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,A=w;b<A;b+=3){let S=b,C=b+1,_=b+2;s=yr(this,u,e,n,l,h,f,S,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){let M=p,w=p+1,b=p+2;s=yr(this,a,e,n,l,h,f,M,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Yd(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Gn,o),c===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function yr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);let h=Yd(i,e,t,n,pr,mr,gr,$c);if(h){let f=new U;zn.getBarycoord($c,pr,mr,gr,f),s&&(h.uv=zn.getInterpolatedAttribute(s,o,c,l,f,new Ge)),r&&(h.uv1=zn.getInterpolatedAttribute(r,o,c,l,f,new Ge)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new U,materialIndex:0};zn.getNormal(pr,mr,gr,d.normal),h.face=d,h.barycoord=f}return h}var qr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=new U,Zd=new U,Jd=new Ve,Mn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fo.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jd.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new ai,$d=new Ge(.5,.5),br=new U,Rs=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],m=r[7],x=r[8],v=r[9],p=r[10],u=r[11],M=r[12],w=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-a,m-h,u-x,A-M).normalize(),s[1].setComponents(l+a,m+h,u+x,A+M).normalize(),s[2].setComponents(l+o,m+f,u+v,A+w).normalize(),s[3].setComponents(l-o,m-f,u-v,A-w).normalize(),n)s[4].setComponents(c,d,p,b).normalize(),s[5].setComponents(l-c,m-d,u-p,A-b).normalize();else if(s[4].setComponents(l-c,m-d,u-p,A-b).normalize(),t===mn)s[5].setComponents(l+c,m+d,u+p,A+b).normalize();else if(t===bs)s[5].setComponents(c,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);let t=$d.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zr=new U,Jr=new U,Kc=new St,_s=new ts,vr=new ai,ko=new U,Qc=new U,$r=class extends Yt{constructor(e=new It,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zr.fromBufferAttribute(t,s-1),Jr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zr.distanceTo(Jr);e.setAttribute("lineDistance",new Et(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;Kc.copy(s).invert(),_s.copy(e.ray).applyMatrix4(Kc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=m,p=x-1;v<p;v+=l){let u=h.getX(v),M=h.getX(v+1),w=Mr(this,e,_s,c,u,M,v);w&&t.push(w)}if(this.isLineLoop){let v=h.getX(x-1),p=h.getX(m),u=Mr(this,e,_s,c,v,p,x-1);u&&t.push(u)}}else{let m=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=m,p=x-1;v<p;v+=l){let u=Mr(this,e,_s,c,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){let v=Mr(this,e,_s,c,x-1,m,x-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Zr.fromBufferAttribute(o,s),Jr.fromBufferAttribute(o,r),t.distanceSqToSegment(Zr,Jr,ko,Qc)>n)return;ko.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:Qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var el=new U,tl=new U,Ps=class extends $r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)el.fromBufferAttribute(t,s),tl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+el.distanceTo(tl);e.setAttribute("lineDistance",new Et(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kr=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nl=new St,Ho=new ts,Sr=new ai,Er=new U,Ti=class extends Yt{constructor(e=new It,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;nl.copy(s).invert(),Ho.copy(e.ray).applyMatrix4(nl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=d,v=m;x<v;x++){let p=l.getX(x);Er.fromBufferAttribute(f,p),il(Er,p,c,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,v=m;x<v;x++)Er.fromBufferAttribute(f,x),il(Er,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function il(i,e,t,n,s,r,a){let o=Ho.distanceSqToPoint(i);if(o<t){let c=new U;Ho.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Is=class extends qt{constructor(e=[],t=di,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ds=class extends qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends qt{constructor(e,t,n=xn,s,r,a,o=Nt,c=Nt,l,h=Tn,f=1){if(h!==Tn&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ki(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qr=class extends Hn{constructor(e,t=xn,n=di,s,r,a=Nt,o=Nt,c,l=Tn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ls=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ns=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function x(v,p,u,M,w,b,A,S,C,_,T){let R=b/C,P=A/_,F=b/2,q=A/2,Z=S/2,B=C+1,X=_+1,H=0,K=0,te=new U;for(let ue=0;ue<X;ue++){let pe=ue*P-q;for(let ye=0;ye<B;ye++){let We=ye*R-F;te[v]=We*M,te[p]=pe*w,te[u]=Z,l.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[u]=S>0?1:-1,h.push(te.x,te.y,te.z),f.push(ye/C),f.push(1-ue/_),H+=1}}for(let ue=0;ue<_;ue++)for(let pe=0;pe<C;pe++){let ye=d+pe+B*ue,We=d+pe+B*(ue+1),_t=d+(pe+1)+B*(ue+1),nt=d+(pe+1)+B*ue;c.push(ye,We,nt),c.push(We,_t,nt),K+=6}o.addGroup(m,K,T),m+=K,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ea=class i extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new U,b=new U,A=new U;for(let S=0;S<t.length;S+=3)m(t[S+0],w),m(t[S+1],b),m(t[S+2],A),c(w,b,A,M)}function c(M,w,b,A){let S=A+1,C=[];for(let _=0;_<=S;_++){C[_]=[];let T=M.clone().lerp(b,_/S),R=w.clone().lerp(b,_/S),P=S-_;for(let F=0;F<=P;F++)F===0&&_===S?C[_][F]=T:C[_][F]=T.clone().lerp(R,F/P)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let R=Math.floor(T/2);T%2===0?(d(C[_][R+1]),d(C[_+1][R]),d(C[_][R])):(d(C[_][R+1]),d(C[_+1][R+1]),d(C[_+1][R]))}}function l(M){let w=new U;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(M),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let M=new U;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let b=p(M)/2/Math.PI+.5,A=u(M)/Math.PI+.5;a.push(b,1-A)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let w=a[M+0],b=a[M+2],A=a[M+4],S=Math.max(w,b,A),C=Math.min(w,b,A);S>.9&&C<.1&&(w<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function m(M,w){let b=M*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function x(){let M=new U,w=new U,b=new U,A=new U,S=new Ge,C=new Ge,_=new Ge;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),S.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),A.copy(M).add(w).add(b).divideScalar(3);let P=p(A);v(S,R+0,M,P),v(C,R+2,w,P),v(_,R+4,b,P)}}function v(M,w,b,A){A<0&&M.x===1&&(a[w]=M.x-1),b.x===0&&b.z===0&&(a[w]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Us=class i extends ea{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ns=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,m=[],x=[],v=[],p=[];for(let u=0;u<h;u++){let M=u*d-a;for(let w=0;w<l;w++){let b=w*f-r;x.push(b,-M,0),v.push(0,0,1),p.push(w/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){let w=M+l*u,b=M+l*(u+1),A=M+1+l*(u+1),S=M+1+l*u;m.push(w,b,S),m.push(b,A,S)}this.setIndex(m),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var is=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new U,d=new U,m=[],x=[],v=[],p=[];for(let u=0;u<=n;u++){let M=[],w=u/n,b=a+w*o,A=e*Math.cos(b),S=Math.sqrt(e*e-A*A),C=0;u===0&&a===0?C=.5/t:u===n&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=s+T*r;f.x=-S*Math.cos(R),f.y=A,f.z=S*Math.sin(R),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(T+C,1-w),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let w=h[u][M+1],b=h[u][M],A=h[u+1][M],S=h[u+1][M+1];(u!==0||a>0)&&m.push(w,b,S),(u!==n-1||c<Math.PI)&&m.push(b,A,S)}this.setIndex(m),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fs=class i extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new U,m=new U,x=new U;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let u=0;u<=s;u++){let M=u/s*r;m.x=(e+t*Math.cos(p))*Math.cos(M),m.y=(e+t*Math.cos(p))*Math.sin(M),m.z=t*Math.sin(p),l.push(m.x,m.y,m.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),x.subVectors(m,d).normalize(),h.push(x.x,x.y,x.z),f.push(u/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let u=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,w=(s+1)*(v-1)+p,b=(s+1)*v+p;c.push(u,M,b),c.push(M,w,b)}this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sl(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let s in n)e[s]=n[s]}return e}function sl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Hl={clone:Ri,merge:Ht},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new St().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var na=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bo,endingEnd:Bo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zo:r=e,o=2*t-n;break;case Vo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zo:a=e,c=2*n-t;break;case Vo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),v=x*x,p=v*x,u=-d*p+2*d*v-d*x,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*x+1,w=(-1-m)*p+(1.5+m)*v+.5*x,b=m*p-m*v;for(let A=0;A!==o;++A)r[A]=u*a[h+A]+M*a[l+A]+w*a[c+A]+b*a[f+A];return r}},ra=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},aa=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oa=class extends oi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),v=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*x;return r}let d=o*2,m=e-1;for(let x=0;x!==o;++x){let v=a[l+x],p=a[c+x],u=m*d+x*2,M=f[u],w=f[u+1],b=e*d+x*2,A=h[b],S=h[b+1],C=(n-t)/(s-t),_,T,R,P,F;for(let q=0;q<8;q++){_=C*C,T=_*C,R=1-C,P=R*R,F=P*R;let B=F*t+3*P*C*M+3*R*_*A+T*s-n;if(Math.abs(B)<1e-10)break;let X=3*P*(M-t)+6*R*C*(A-M)+3*_*(s-A);if(Math.abs(X)<1e-10)break;C=C-B/X,C=Math.max(0,Math.min(1,C))}r[x]=F*v+3*P*C*w+3*R*_*S+T*p}return r}},an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break;case Oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Dd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[d+x]||v!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=zr;var ci=class extends an{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=xs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var la=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="number";var da=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ks=class extends an{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends an{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=xs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="vector";var ua=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wl=new ua,fa=class{constructor(e){this.manager=e!==void 0?e:Wl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=new U,wr=new wn,vn=new U,Os=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ar,wr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ar,wr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new U,rl=new Ge,al=new Ge,Gt=class extends Os{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bs=class extends Os{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Yi=-90,Zi=1,pa=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Yi,Zi,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Yi,Zi,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Yi,Zi,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Yi,Zi,e,t);o.layers=this.layers,this.add(o);let c=new Gt(Yi,Zi,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Yi,Zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ma=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pc="\\[\\]\\.:\\/",th=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",nh="[^"+pc.replace("\\.","")+"]",ih=/((?:WC+[\/:])*)/.source.replace("WC",mc),sh=/(WCOD+)?/.source.replace("WCOD",nh),rh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),ah=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),oh=new RegExp("^"+ih+sh+rh+ah+"$"),ch=["material","materials","bones","map"],Wo=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(th,"")}static parseTrackName(e){let t=oh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ch.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Wo;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d0=new Float32Array(1);var jo=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function gc(i,e,t,n){let s=lh(n);switch(t){case cc:return i*e;case dc:return i*e/s.components*s.byteLength;case Sa:return i*e/s.components*s.byteLength;case fi:return i*e*2/s.components*s.byteLength;case Ea:return i*e*2/s.components*s.byteLength;case lc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Ta:return i*e*4/s.components*s.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ra:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case Ia:case La:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case qs:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case $a:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ys:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lh(i){switch(i){case on:case sc:return{byteLength:1,components:1};case rs:case rc:case Dn:return{byteLength:2,components:1};case va:case Ma:return{byteLength:2,components:4};case xn:case ba:case yn:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function fd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hh(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){let x=f[d],v=f[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){let v=f[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
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
#endif`,vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Th=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nh=`#define PI 3.141592653589793
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
} // validated`,Fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
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
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
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
#endif`,du=`uniform sampler2D dfgLUT;
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
}`,hu=`
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
#endif`,uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mu=`#if defined( USE_POINTS_UV )
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
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$u=`float getShadowMask() {
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
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Rf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Df=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:uh,alphahash_pars_fragment:fh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:_h,aomap_fragment:xh,aomap_pars_fragment:yh,batching_pars_vertex:bh,batching_vertex:vh,begin_vertex:Mh,beginnormal_vertex:Sh,bsdfs:Eh,iridescence_fragment:Th,bumpmap_pars_fragment:Ah,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ph,color_fragment:Ih,color_pars_fragment:Dh,color_pars_vertex:Lh,color_vertex:Uh,common:Nh,cube_uv_reflection_fragment:Fh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:zh,emissivemap_pars_fragment:Vh,colorspace_fragment:Gh,colorspace_pars_fragment:Hh,envmap_fragment:Wh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Xh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:su,envmap_vertex:Yh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:$h,fog_pars_fragment:Kh,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:eu,lights_lambert_fragment:tu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:cu,lights_physical_fragment:lu,lights_physical_pars_fragment:du,lights_fragment_begin:hu,lights_fragment_maps:uu,lights_fragment_end:fu,lightprobes_pars_fragment:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:xu,map_fragment:yu,map_pars_fragment:bu,map_particle_fragment:vu,map_particle_pars_fragment:Mu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:Eu,morphinstance_vertex:Tu,morphcolor_vertex:Au,morphnormal_vertex:wu,morphtarget_pars_vertex:Cu,morphtarget_vertex:Ru,normal_fragment_begin:Pu,normal_fragment_maps:Iu,normal_pars_fragment:Du,normal_pars_vertex:Lu,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:Bu,opaque_fragment:zu,packing:Vu,premultiplied_alpha_fragment:Gu,project_vertex:Hu,dithering_fragment:Wu,dithering_pars_fragment:ju,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Qu,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:cf,uv_pars_fragment:lf,uv_pars_vertex:df,uv_vertex:hf,worldpos_vertex:uf,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:xf,depth_vert:yf,depth_frag:bf,distance_vert:vf,distance_frag:Mf,equirect_vert:Sf,equirect_frag:Ef,linedashed_vert:Tf,linedashed_frag:Af,meshbasic_vert:wf,meshbasic_frag:Cf,meshlambert_vert:Rf,meshlambert_frag:Pf,meshmatcap_vert:If,meshmatcap_frag:Df,meshnormal_vert:Lf,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:kf,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:Vf,points_frag:Gf,shadow_vert:Hf,shadow_frag:Wf,sprite_vert:jf,sprite_frag:Xf},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var so={r:0,b:0,g:0},qf=new St,pd=new Ve;pd.set(-1,0,0,0,1,0,0,0,1);function Yf(i,e,t,n,s,r){let a=new He(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function m(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=e.get(w,b)}return w}function x(M){let w=!1,b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){let b=m(w);b&&(b.isCubeTexture||b.mapping===Vs)?(l===void 0&&(l=new kt(new ns(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Ri(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pd),l.material.toneMapped=$e.getTransfer(b.colorSpace)!==ct,(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new kt(new Ns(2,2),new Ot({name:"BackgroundMaterial",uniforms:Ri(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(so,fc(i)),t.buffers.color.setClear(so.r,so.g,so.b,w,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:v,dispose:u}}function Zf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,F,q,Z,B){let X=!1,H=f(P,Z,q,F);r!==H&&(r=H,l(r.object)),X=m(P,Z,q,B),X&&x(P,Z,q,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(P,F,q,Z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,F,q,Z){let B=Z.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let H=P.isInstancedMesh===!0?P.id:0,K=X[H];K===void 0&&(K={},X[H]=K);let te=K[q.id];te===void 0&&(te={},K[q.id]=te);let ue=te[B];return ue===void 0&&(ue=d(c()),te[B]=ue),ue}function d(P){let F=[],q=[],Z=[];for(let B=0;B<t;B++)F[B]=0,q[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Z,object:P,attributes:{},index:null}}function m(P,F,q,Z){let B=r.attributes,X=F.attributes,H=0,K=q.getAttributes();for(let te in K)if(K[te].location>=0){let pe=B[te],ye=X[te];if(ye===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),pe===void 0||pe.attribute!==ye||ye&&pe.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==Z}function x(P,F,q,Z){let B={},X=F.attributes,H=0,K=q.getAttributes();for(let te in K)if(K[te].location>=0){let pe=X[te];pe===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));let ye={};ye.attribute=pe,pe&&pe.data&&(ye.data=pe.data),B[te]=ye,H++}r.attributes=B,r.attributesNum=H,r.index=Z}function v(){let P=r.newAttributes;for(let F=0,q=P.length;F<q;F++)P[F]=0}function p(P){u(P,0)}function u(P,F){let q=r.newAttributes,Z=r.enabledAttributes,B=r.attributeDivisors;q[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),B[P]!==F&&(i.vertexAttribDivisor(P,F),B[P]=F)}function M(){let P=r.newAttributes,F=r.enabledAttributes;for(let q=0,Z=F.length;q<Z;q++)F[q]!==P[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function w(P,F,q,Z,B,X,H){H===!0?i.vertexAttribIPointer(P,F,q,B,X):i.vertexAttribPointer(P,F,q,Z,B,X)}function b(P,F,q,Z){v();let B=Z.attributes,X=q.getAttributes(),H=F.defaultAttributeValues;for(let K in X){let te=X[K];if(te.location>=0){let ue=B[K];if(ue===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){let pe=ue.normalized,ye=ue.itemSize,We=e.get(ue);if(We===void 0)continue;let _t=We.buffer,nt=We.type,J=We.bytesPerElement,re=nt===i.INT||nt===i.UNSIGNED_INT||ue.gpuType===ba;if(ue.isInterleavedBufferAttribute){let ne=ue.data,Le=ne.stride,Be=ue.offset;if(ne.isInstancedInterleavedBuffer){for(let Ie=0;Ie<te.locationSize;Ie++)u(te.location+Ie,ne.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ie=0;Ie<te.locationSize;Ie++)p(te.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Ie=0;Ie<te.locationSize;Ie++)w(te.location+Ie,ye/te.locationSize,nt,pe,Le*J,(Be+ye/te.locationSize*Ie)*J,re)}else{if(ue.isInstancedBufferAttribute){for(let ne=0;ne<te.locationSize;ne++)u(te.location+ne,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<te.locationSize;ne++)p(te.location+ne);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ne=0;ne<te.locationSize;ne++)w(te.location+ne,ye/te.locationSize,nt,pe,ye*J,ye/te.locationSize*ne*J,re)}}else if(H!==void 0){let pe=H[K];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(te.location,pe);break;case 3:i.vertexAttrib3fv(te.location,pe);break;case 4:i.vertexAttrib4fv(te.location,pe);break;default:i.vertexAttrib1fv(te.location,pe)}}}}M()}function A(){T();for(let P in n){let F=n[P];for(let q in F){let Z=F[q];for(let B in Z){let X=Z[B];for(let H in X)h(X[H].object),delete X[H];delete Z[B]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let q in F){let Z=F[q];for(let B in Z){let X=Z[B];for(let H in X)h(X[H].object),delete X[H];delete Z[B]}}delete n[P.id]}function C(P){for(let F in n){let q=n[F];for(let Z in q){let B=q[Z];if(B[P.id]===void 0)continue;let X=B[P.id];for(let H in X)h(X[H].object),delete X[H];delete B[P.id]}}}function _(P){for(let F in n){let q=n[F],Z=P.isInstancedMesh===!0?P.id:0,B=q[Z];if(B!==void 0){for(let X in B){let H=B[X];for(let K in H)h(H[K].object),delete H[K];delete B[X]}delete q[Z],Object.keys(q).length===0&&delete n[F]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Jf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let m=0;m<h;m++)d+=l[m];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $f(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!_)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:S}}function Kf(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,w=M*4,b=u.clippingState||null;c.value=b,b=h(x,d,w,m);for(let A=0;A!==w;++A)b[A]=t[A];u.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,x){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,x!==!0||p===null){let u=m+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,b=m;w!==v;++w,b+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var pi=4,jl=[.125,.215,.35,.446,.526,.582],Pi=20,Qf=256,Zs=new Bs,Xl=new He,_c=null,xc=0,yc=0,bc=!1,ep=new U,ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ep}=r;_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,xc,yc),this._renderer.xr.enabled=bc,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Dn,format:hn,colorSpace:Si,depthBuffer:!1},s=ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ip(r,e,t),this._ggxMaterial=np(r,e,t)}return s}_compileMaterial(e){let t=new kt(new It,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,s,r){let c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Xl),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new ns,new Rn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,u=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,u=!0):(p.color.copy(Xl),u=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let A=this._cubeSize;os(s,b*A,w>2?A:0,A,A),f.setRenderTarget(s),u&&f.render(v,c),f.render(e,c)}f.toneMapping=m,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=0+l*1.25,m=f*d,{_lodMax:x}=this,v=this._sizeLods[n],p=3*v*(n>x-pi?n-x+pi:0),u=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,os(r,p,u,3*v,2*v),s.setRenderTarget(r),s.render(o,Zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,os(e,p,u,3*v,2*v),s.setRenderTarget(e),s.render(o,Zs)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),v=r/x,p=isFinite(r)?1+Math.floor(h*v):Pi;p>Pi&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);let u=[],M=0;for(let C=0;C<Pi;++C){let _=C/v,T=Math.exp(-_*_/2);u.push(T),C===0?M+=T:C<p&&(M+=2*T)}for(let C=0;C<u.length;C++)u[C]=u[C]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:w}=this;d.dTheta.value=x,d.mipInt.value=w-n;let b=this._sizeLods[s],A=3*b*(s>w-pi?s-w+pi:0),S=4*(this._cubeSize-b);os(t,A,S,3*b,2*b),c.setRenderTarget(t),c.render(f,Zs)}};function tp(i){let e=[],t=[],n=[],s=i,r=i-pi+1+jl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-pi?c=jl[a-i+pi-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,v=3,p=2,u=1,M=new Float32Array(v*x*m),w=new Float32Array(p*x*m),b=new Float32Array(u*x*m);for(let S=0;S<m;S++){let C=S%3*2/3-1,_=S>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];M.set(T,v*x*S),w.set(d,p*x*S);let R=[S,S,S,S,S,S];b.set(R,u*x*S)}let A=new It;A.setAttribute("position",new ut(M,v)),A.setAttribute("uv",new ut(w,p)),A.setAttribute("faceIndex",new ut(b,u)),n.push(new kt(A,null)),s>pi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ql(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function np(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function ip(i,e,t){let n=new Float32Array(Pi),s=new U(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Yl(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Zl(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}var oo=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ns(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:In});r.uniforms.tEquirect.value=t;let a=new kt(s,r),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=Ft),new pa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function sp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===_a||m===xa)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let v=new oo(x.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,x=m===_a||m===xa,v=m===di||m===Ci;if(x||v){let p=t.get(d),u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new ao(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return x&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new ao(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,m){return m===_a?d.mapping=di:m===xa&&(d.mapping=Ci),d}function c(d){let m=0,x=6;for(let v=0;v<x;v++)d[v]!==void 0&&m++;return m===x}function l(d){let m=d.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function rp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bi("WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(f){let d=[],m=f.index,x=f.attributes.position,v=0;if(x===void 0)return;if(m!==null){let M=m.array;v=m.version;for(let w=0,b=M.length;w<b;w+=3){let A=M[w+0],S=M[w+1],C=M[w+2];d.push(A,S,S,C,C,A)}}else{let M=x.array;v=x.version;for(let w=0,b=M.length/3-1;w<b;w+=3){let A=w+0,S=w+1,C=w+2;d.push(A,S,S,C,C,A)}}let p=new(x.count>=65535?ws:As)(d,1);p.version=v;let u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function op(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function cp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;m===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let b=o.attributes.position.count*w,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*A*4*f),C=new Ss(S,b,A,f);C.type=yn,C.needsUpdate=!0;let _=w*4;for(let R=0;R<f;R++){let P=p[R],F=u[R],q=M[R],Z=b*A*4*R;for(let B=0;B<P.count;B++){let X=B*_;m===!0&&(s.fromBufferAttribute(P,B),S[Z+X+0]=s.x,S[Z+X+1]=s.y,S[Z+X+2]=s.z,S[Z+X+3]=0),x===!0&&(s.fromBufferAttribute(F,B),S[Z+X+4]=s.x,S[Z+X+5]=s.y,S[Z+X+6]=s.z,S[Z+X+7]=0),v===!0&&(s.fromBufferAttribute(q,B),S[Z+X+8]=s.x,S[Z+X+9]=s.y,S[Z+X+10]=s.z,S[Z+X+11]=q.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new Ge(b,A)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dp(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hp={[Jo]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[Ko]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function up(i,e,t,n,s,r){let a=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Hn(e,t):void 0}),o=new rn(e,t,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),c=new It;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));let l=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new kt(c,l),f=new Bs(-1,1,1,-1,0,1),d=null,m=null,x=!1,v,p=null,u=[],M=!1;this.setSize=function(w,b){a.setSize(w,b),o.setSize(w,b);for(let A=0;A<u.length;A++){let S=u[A];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){u=w,M=u.length>0&&u[0].isRenderPass===!0;let b=a.width,A=a.height;for(let S=0;S<u.length;S++){let C=u[S];C.setSize&&C.setSize(b,A)}},this.begin=function(w,b){if(x||w.toneMapping===_n&&u.length===0)return!1;if(p=b,b!==null){let A=b.width,S=b.height;(a.width!==A||a.height!==S)&&this.setSize(A,S)}return M===!1&&w.setRenderTarget(a),v=w.toneMapping,w.toneMapping=_n,!0},this.hasRenderPass=function(){return M},this.end=function(w,b){w.toneMapping=v,x=!0;let A=a,S=o;for(let C=0;C<u.length;C++){let _=u[C];if(_.enabled!==!1&&(_.render(w,S,A,b),_.needsSwap!==!1)){let T=A;A=S,S=T}}if(d!==w.outputColorSpace||m!==w.toneMapping){d=w.outputColorSpace,m=w.toneMapping,l.defines={},$e.getTransfer(d)===ct&&(l.defines.SRGB_TRANSFER="");let C=hp[m];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var md=new qt,Sc=new Hn(1,1),gd=new Ss,_d=new jr,xd=new Is,Jl=[],$l=[],Kl=new Float32Array(16),Ql=new Float32Array(9),ed=new Float32Array(4);function ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function _p(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;ed.set(n),i.uniformMatrix2fv(this.addr,!1,ed),Lt(t,n)}}function xp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),Lt(t,n)}}function yp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Lt(t,n)}}function bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Ep(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Cp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=t.isReversedDepthBuffer()?io:no,r=Sc):r=md,t.setTexture2D(e||r,s)}function Rp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_d,s)}function Pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xd,s)}function Ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function Dp(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return bp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return Tp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Lp(i,e){i.uniform1fv(this.addr,e)}function Up(i,e){let t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function Np(i,e){let t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Fp(i,e){let t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){let t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Op(i,e){let t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bp(i,e){let t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zp(i,e){i.uniform1iv(this.addr,e)}function Vp(i,e){i.uniform2iv(this.addr,e)}function Gp(i,e){i.uniform3iv(this.addr,e)}function Hp(i,e){i.uniform4iv(this.addr,e)}function Wp(i,e){i.uniform1uiv(this.addr,e)}function jp(i,e){i.uniform2uiv(this.addr,e)}function Xp(i,e){i.uniform3uiv(this.addr,e)}function qp(i,e){i.uniform4uiv(this.addr,e)}function Yp(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sc:a=md;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zp(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_d,r[a])}function Jp(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function $p(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function Kp(i){switch(i){case 5126:return Lp;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return kp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Vp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return jp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return $p}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function td(i,e){i.seq.push(e),i.map[e.id]=e}function Qp(i,e,t){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),a=vc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){td(t,l===void 0?new Ec(o,i,e):new Tc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ac(o),td(t,f)),t=f}}}var cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Qp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function nd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var em=37297,tm=0;function nm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var id=new Ve;function im(i){$e._getMatrix(id,$e.workingColorSpace,i);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+nm(i.getShaderSource(e),o)}else return r}function sm(i,e){let t=im(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var rm={[Jo]:"Linear",[$o]:"Reinhard",[Ko]:"Cineon",[Qo]:"ACESFilmic",[tc]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function am(i,e){let t=rm[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ro=new U;function om(){$e.getLuminanceCoefficients(ro);let i=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function lm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $s(i){return i!==""}function rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(hm,fm)}var um=new Map;function fm(i,e){let t=qe[e];if(t===void 0){let n=um.get(e);if(n!==void 0)t=qe[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wc(t)}var pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(pm,mm)}function mm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var gm={[zs]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function _m(i){return gm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xm={[di]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function ym(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var bm={[Ci]:"ENVMAP_MODE_REFRACTION"};function vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mm={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[Al]:"ENVMAP_BLENDING_MIX",[wl]:"ENVMAP_BLENDING_ADD"};function Sm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mm[i.combine]||"ENVMAP_BLENDING_NONE"}function Em(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_m(t),l=ym(t),h=vm(t),f=Sm(t),d=Em(t),m=cm(t),x=lm(r),v=s.createProgram(),p,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),u.length>0&&(u+=`
`)):(p=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?qe.tonemapping_pars_fragment:"",t.toneMapping!==_n?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=wc(a),a=rd(a,t),a=ad(a,t),o=wc(o),o=rd(o,t),o=ad(o,t),a=od(a),o=od(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=M+p+a,b=M+u+o,A=nd(s,s.VERTEX_SHADER,w),S=nd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,A),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(A)||"",Z=s.getShaderInfoLog(S)||"",B=F.trim(),X=q.trim(),H=Z.trim(),K=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,S);else{let ue=sd(s,A,"vertex"),pe=sd(s,S,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+ue+`
`+pe)}else B!==""?Ue("WebGLProgram: Program Info Log:",B):(X===""||H==="")&&(te=!1);te&&(P.diagnostics={runnable:K,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:H,prefix:u}})}s.deleteShader(A),s.deleteShader(S),_=new cs(s,v),T=dm(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,em)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=S,this}var Am=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=Am++,this.code=e,this.usedTimes=0}};function wm(i){return i===fi||i===qs||i===Ys}function Cm(i,e,t,n,s,r){let a=new Es,o=new Cc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,P,F,q){let Z=P.fog,B=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||X,H),te=K&&K.mapping===Vs?K.image.height:null,ue=m[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let pe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=pe!==void 0?pe.length:0,We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let _t,nt,J,re;if(ue){let ve=Un[ue];_t=ve.vertexShader,nt=ve.fragmentShader}else{_t=_.vertexShader,nt=_.fragmentShader;let ve=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,ve,dt),J=ve.id,re=dt.id}let ne=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,bt=!!_.map,je=!!_.matcap,Qe=!!K,Ke=!!_.aoMap,Ye=!!_.lightMap,at=!!_.bumpMap&&_.wireframe===!1,et=!!_.normalMap,lt=!!_.displacementMap,vt=!!_.emissiveMap,st=!!_.metalnessMap,it=!!_.roughnessMap,D=_.anisotropy>0,Rt=_.clearcoat>0,ze=_.dispersion>0,E=_.iridescence>0,g=_.sheen>0,N=_.transmission>0,z=D&&!!_.anisotropyMap,W=Rt&&!!_.clearcoatMap,se=Rt&&!!_.clearcoatNormalMap,ae=Rt&&!!_.clearcoatRoughnessMap,j=E&&!!_.iridescenceMap,$=E&&!!_.iridescenceThicknessMap,de=g&&!!_.sheenColorMap,Ce=g&&!!_.sheenRoughnessMap,he=!!_.specularMap,ce=!!_.specularColorMap,Te=!!_.specularIntensityMap,De=N&&!!_.transmissionMap,ke=N&&!!_.thicknessMap,I=!!_.gradientMap,oe=!!_.alphaMap,Y=_.alphaTest>0,le=!!_.alphaHash,me=!!_.extensions,Q=_n;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Q=i.toneMapping);let Ae={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:nt,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:je,envMap:Qe,envMapMode:Qe&&K.mapping,envMapCubeUVHeight:te,aoMap:Ke,lightMap:Ye,bumpMap:at,normalMap:et,displacementMap:lt,emissiveMap:vt,normalMapObjectSpace:et&&_.normalMapType===Pl,normalMapTangentSpace:et&&_.normalMapType===hc,packedNormalMap:et&&_.normalMapType===hc&&wm(_.normalMap.format),metalnessMap:st,roughnessMap:it,anisotropy:D,anisotropyMap:z,clearcoat:Rt,clearcoatMap:W,clearcoatNormalMap:se,clearcoatRoughnessMap:ae,dispersion:ze,iridescence:E,iridescenceMap:j,iridescenceThicknessMap:$,sheen:g,sheenColorMap:de,sheenRoughnessMap:Ce,specularMap:he,specularColorMap:ce,specularIntensityMap:Te,transmission:N,transmissionMap:De,thicknessMap:ke,gradientMap:I,opaque:_.transparent===!1&&_.blending===vi&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Y,alphaHash:le,combine:_.combine,mapUv:bt&&x(_.map.channel),aoMapUv:Ke&&x(_.aoMap.channel),lightMapUv:Ye&&x(_.lightMap.channel),bumpMapUv:at&&x(_.bumpMap.channel),normalMapUv:et&&x(_.normalMap.channel),displacementMapUv:lt&&x(_.displacementMap.channel),emissiveMapUv:vt&&x(_.emissiveMap.channel),metalnessMapUv:st&&x(_.metalnessMap.channel),roughnessMapUv:it&&x(_.roughnessMap.channel),anisotropyMapUv:z&&x(_.anisotropyMap.channel),clearcoatMapUv:W&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(_.sheenRoughnessMap.channel),specularMapUv:he&&x(_.specularMap.channel),specularColorMapUv:ce&&x(_.specularColorMap.channel),specularIntensityMapUv:Te&&x(_.specularIntensityMap.channel),transmissionMapUv:De&&x(_.transmissionMap.channel),thicknessMapUv:ke&&x(_.thicknessMap.channel),alphaMapUv:oe&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(et||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(bt||oe),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(u(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function u(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=m[_.type],R;if(T){let P=Un[T];R=Hl.clone(P.uniforms)}else R=_.uniforms;return R}function b(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Tm(i,T,_,s),l.push(R),h.set(T,R)),R}function A(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:A,releaseShaderCache:S,programs:l,dispose:C}}function Rm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,v,p,u){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:u},i[e]=M):(M.id=d.id,M.object=d,M.geometry=m,M.material=x,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=u),e++,M}function c(d,m,x,v,p,u){let M=o(d,m,x,v,p,u);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function l(d,m,x,v,p,u){let M=o(d,m,x,v,p,u);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,m,x){t.length>1&&t.sort(d||Pm),n.length>1&&n.sort(m||ld),s.length>1&&s.sort(m||ld),x&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let d=e,m=i.length;d<m;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Im(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new dd,i.set(n,[a])):s>=r.length?(a=new dd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Lm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Um=0;function Nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fm(i){let e=new Dm,t=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new St,a=new St;function o(l){let h=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,x=0,v=0,p=0,u=0,M=0,w=0,b=0,A=0,S=0,C=0;l.sort(Nm);for(let T=0,R=l.length;T<R;T++){let P=l[T],F=P.color,q=P.intensity,Z=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===fi?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*q,f+=F.g*q,d+=F.b*q;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],q);C++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(q),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;let H=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,H.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[v]=H.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=B,b++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(F).multiplyScalar(q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=X,p++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let H=P.shadow,K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=P.shadow.matrix,w++}n.point[x]=X,x++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(q),X.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[u]=X,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==v||_.rectAreaLength!==p||_.hemiLength!==u||_.numDirectionalShadows!==M||_.numPointShadows!==w||_.numSpotShadows!==b||_.numSpotMaps!==A||_.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,_.directionalLength=m,_.pointLength=x,_.spotLength=v,_.rectAreaLength=p,_.hemiLength=u,_.numDirectionalShadows=M,_.numPointShadows=w,_.numSpotShadows=b,_.numSpotMaps=A,_.numLightProbes=C,n.version=Um++)}function c(l,h){let f=0,d=0,m=0,x=0,v=0,p=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){let w=l[u];if(w.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(w.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function hd(i){let e=new Fm(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function km(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hd(i),e.set(s,[o])):r>=a.length?(o=new hd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`,zm=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Vm=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ud=new St,Js=new U,Mc=new U;function Gm(i,e,t){let n=new Rs,s=new Ge,r=new Ge,a=new Tt,o=new na,c=new ia,l={},h=t.maxTextureSize,f={[Gn]:Zt,[Zt]:Gn,[Pn]:Pn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new It;x.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new kt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let u=this.type;this.render=function(S,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===ll&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zs);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(In),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=u!==this.type;q&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(B=>B.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,B=S.length;Z<B;Z++){let X=S[Z],H=X.shadow;if(H===void 0){Ue("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ss){if(X.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new rn(s.x,s.y,{format:fi,type:Dn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Hn(s.x,s.y,yn),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Tn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else X.isPointLight?(H.map=new oo(s.x),H.map.depthTexture=new Qr(s.x,xn)):(H.map=new rn(s.x,s.y),H.map.depthTexture=new Hn(s.x,s.y,xn)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Tn,this.type===zs?(H.map.depthTexture.compareFunction=te?io:no,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}let ue=H.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ue;pe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(H.map),i.clear());let ye=H.getViewport(pe);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),F.viewport(a)}if(X.isPointLight){let ye=H.camera,We=H.matrix,_t=X.distance||ye.far;_t!==ye.far&&(ye.far=_t,ye.updateProjectionMatrix()),Js.setFromMatrixPosition(X.matrixWorld),ye.position.copy(Js),Mc.copy(ye.position),Mc.add(zm[pe]),ye.up.copy(Vm[pe]),ye.lookAt(Mc),ye.updateMatrixWorld(),We.makeTranslation(-Js.x,-Js.y,-Js.z),ud.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ud,ye.coordinateSystem,ye.reversedDepth)}else H.updateMatrices(X);n=H.getFrustum(),b(C,_,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===ss&&M(H,_),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(T,R,P)};function M(S,C){let _=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new rn(s.x,s.y,{format:fi,type:Dn})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,_,m,v,null)}function w(S,C,_,T){let R=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=R.uuid,q=C.uuid,Z=l[F];Z===void 0&&(Z={},l[F]=Z);let B=Z[q];B===void 0&&(B=R.clone(),Z[q]=B,C.addEventListener("dispose",A)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,T===ss?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=_}return R}function b(S,C,_,T,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ss)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let q=e.update(S),Z=S.material;if(Array.isArray(Z)){let B=q.groups;for(let X=0,H=B.length;X<H;X++){let K=B[X],te=Z[K.materialIndex];if(te&&te.visible){let ue=w(S,te,T,R);S.onBeforeShadow(i,S,C,_,q,ue,K),i.renderBufferDirect(_,null,q,ue,S,K),S.onAfterShadow(i,S,C,_,q,ue,K)}}}else if(Z.visible){let B=w(S,Z,T,R);S.onBeforeShadow(i,S,C,_,q,B,null),i.renderBufferDirect(_,null,q,B,S,null),S.onAfterShadow(i,S,C,_,q,B,null)}}let F=S.children;for(let q=0,Z=F.length;q<Z;q++)b(F[q],C,_,T,R)}function A(S){S.target.removeEventListener("dispose",A);for(let _ in l){let T=l[_],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Hm(i,e){function t(){let I=!1,oe=new Tt,Y=null,le=new Tt(0,0,0,0);return{setMask:function(me){Y!==me&&!I&&(i.colorMask(me,me,me,me),Y=me)},setLocked:function(me){I=me},setClear:function(me,Q,Ae,ve,dt){dt===!0&&(me*=ve,Q*=ve,Ae*=ve),oe.set(me,Q,Ae,ve),le.equals(oe)===!1&&(i.clearColor(me,Q,Ae,ve),le.copy(oe))},reset:function(){I=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,Y=null,le=null,me=null;return{setReversed:function(Q){if(oe!==Q){let Ae=e.get("EXT_clip_control");Q?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;let ve=me;me=null,this.setClear(ve)}},getReversed:function(){return oe},setTest:function(Q){Q?ne(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Q){Y!==Q&&!I&&(i.depthMask(Q),Y=Q)},setFunc:function(Q){if(oe&&(Q=zl[Q]),le!==Q){switch(Q){case Ir:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Ur:i.depthFunc(i.EQUAL);break;case Nr:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Q}},setLocked:function(Q){I=Q},setClear:function(Q){me!==Q&&(me=Q,oe&&(Q=1-Q),i.clearDepth(Q))},reset:function(){I=!1,Y=null,le=null,me=null,oe=!1}}}function s(){let I=!1,oe=null,Y=null,le=null,me=null,Q=null,Ae=null,ve=null,dt=null;return{setTest:function(ot){I||(ot?ne(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!I&&(i.stencilMask(ot),oe=ot)},setFunc:function(ot,Jt,Kt){(Y!==ot||le!==Jt||me!==Kt)&&(i.stencilFunc(ot,Jt,Kt),Y=ot,le=Jt,me=Kt)},setOp:function(ot,Jt,Kt){(Q!==ot||Ae!==Jt||ve!==Kt)&&(i.stencilOp(ot,Jt,Kt),Q=ot,Ae=Jt,ve=Kt)},setLocked:function(ot){I=ot},setClear:function(ot){dt!==ot&&(i.clearStencil(ot),dt=ot)},reset:function(){I=!1,oe=null,Y=null,le=null,me=null,Q=null,Ae=null,ve=null,dt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d={},m=new WeakMap,x=[],v=null,p=!1,u=null,M=null,w=null,b=null,A=null,S=null,C=null,_=new He(0,0,0),T=0,R=!1,P=null,F=null,q=null,Z=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=K>=1):te.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=K>=2);let ue=null,pe={},ye=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),_t=new Tt().fromArray(ye),nt=new Tt().fromArray(We);function J(I,oe,Y,le){let me=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Y;Ae++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(oe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return Q}let re={};re[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Mi),at(!1),et(Xo),ne(i.CULL_FACE),Ke(In);function ne(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Le(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Be(I,oe){return d[I]!==oe?(i.bindFramebuffer(I,oe),d[I]=oe,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(I,oe){let Y=x,le=!1;if(I){Y=m.get(oe),Y===void 0&&(Y=[],m.set(oe,Y));let me=I.textures;if(Y.length!==me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ae=me.length;Q<Ae;Q++)Y[Q]=i.COLOR_ATTACHMENT0+Q;Y.length=me.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function bt(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let je={[ii]:i.FUNC_ADD,[dl]:i.FUNC_SUBTRACT,[hl]:i.FUNC_REVERSE_SUBTRACT};je[ul]=i.MIN,je[fl]=i.MAX;let Qe={[pl]:i.ZERO,[wi]:i.ONE,[ml]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[_l]:i.DST_ALPHA,[gl]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[bl]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[Ml]:i.CONSTANT_COLOR,[Sl]:i.ONE_MINUS_CONSTANT_COLOR,[El]:i.CONSTANT_ALPHA,[Tl]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(I,oe,Y,le,me,Q,Ae,ve,dt,ot){if(I===In){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),I!==ga){if(I!==u||ot!==R){if((M!==ii||A!==ii)&&(i.blendEquation(i.FUNC_ADD),M=ii,A=ii),ot)switch(I){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",I);break}else switch(I){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",I);break}w=null,b=null,S=null,C=null,_.set(0,0,0),T=0,u=I,R=ot}return}me=me||oe,Q=Q||Y,Ae=Ae||le,(oe!==M||me!==A)&&(i.blendEquationSeparate(je[oe],je[me]),M=oe,A=me),(Y!==w||le!==b||Q!==S||Ae!==C)&&(i.blendFuncSeparate(Qe[Y],Qe[le],Qe[Q],Qe[Ae]),w=Y,b=le,S=Q,C=Ae),(ve.equals(_)===!1||dt!==T)&&(i.blendColor(ve.r,ve.g,ve.b,dt),_.copy(ve),T=dt),u=I,R=!1}function Ye(I,oe){I.side===Pn?Le(i.CULL_FACE):ne(i.CULL_FACE);let Y=I.side===Zt;oe&&(Y=!Y),at(Y),I.blending===vi&&I.transparent===!1?Ke(In):Ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function et(I){I!==ol?(ne(i.CULL_FACE),I!==F&&(I===Xo?i.cullFace(i.BACK):I===cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),F=I}function lt(I){I!==q&&(H&&i.lineWidth(I),q=I)}function vt(I,oe,Y){I?(ne(i.POLYGON_OFFSET_FILL),(Z!==oe||B!==Y)&&(Z=oe,B=Y,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Y))):Le(i.POLYGON_OFFSET_FILL)}function st(I){I?ne(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function it(I){I===void 0&&(I=i.TEXTURE0+X-1),ue!==I&&(i.activeTexture(I),ue=I)}function D(I,oe,Y){Y===void 0&&(ue===null?Y=i.TEXTURE0+X-1:Y=ue);let le=pe[Y];le===void 0&&(le={type:void 0,texture:void 0},pe[Y]=le),(le.type!==I||le.texture!==oe)&&(ue!==Y&&(i.activeTexture(Y),ue=Y),i.bindTexture(I,oe||re[I]),le.type=I,le.texture=oe)}function Rt(){let I=pe[ue];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ze(){try{i.compressedTexImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function N(){try{i.texSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function se(){try{i.texStorage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function ae(){try{i.texStorage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function j(){try{i.texImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function $(){try{i.texImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function de(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function Ce(I,oe){f[I]!==oe&&(i.pixelStorei(I,oe),f[I]=oe)}function he(I){_t.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),_t.copy(I))}function ce(I){nt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function Te(I,oe){let Y=l.get(oe);Y===void 0&&(Y=new WeakMap,l.set(oe,Y));let le=Y.get(I);le===void 0&&(le=i.getUniformBlockIndex(oe,I.name),Y.set(I,le))}function De(I,oe){let le=l.get(oe).get(I);c.get(oe)!==le&&(i.uniformBlockBinding(oe,le,I.__bindingPointIndex),c.set(oe,le))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ue=null,pe={},d={},m=new WeakMap,x=[],v=null,p=!1,u=null,M=null,w=null,b=null,A=null,S=null,C=null,_=new He(0,0,0),T=0,R=!1,P=null,F=null,q=null,Z=null,B=null,_t.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Le,bindFramebuffer:Be,drawBuffers:Ie,useProgram:bt,setBlending:Ke,setMaterial:Ye,setFlipSided:at,setCullFace:et,setLineWidth:lt,setPolygonOffset:vt,setScissorTest:st,activeTexture:it,bindTexture:D,unbindTexture:Rt,compressedTexImage2D:ze,compressedTexImage3D:E,texImage2D:j,texImage3D:$,pixelStorei:Ce,getParameter:de,updateUBOMapping:Te,uniformBlockBinding:De,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:he,viewport:ce,reset:ke}}function Wm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,f=new Set,d,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return x?new OffscreenCanvas(E,g):vs("canvas")}function p(E,g,N){let z=1,W=ze(E);if((W.width>N||W.height>N)&&(z=N/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let se=Math.floor(z*W.width),ae=Math.floor(z*W.height);d===void 0&&(d=v(se,ae));let j=g?v(se,ae):d;return j.width=se,j.height=ae,j.getContext("2d").drawImage(E,0,0,se,ae),Ue("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+ae+")."),j}else return"data"in E&&Ue("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function u(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,g,N,z,W,se=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;z&&(ae=e.get("EXT_texture_norm16"),ae||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===i.RED&&(N===i.FLOAT&&(j=i.R32F),N===i.HALF_FLOAT&&(j=i.R16F),N===i.UNSIGNED_BYTE&&(j=i.R8),N===i.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),N===i.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.R8UI),N===i.UNSIGNED_SHORT&&(j=i.R16UI),N===i.UNSIGNED_INT&&(j=i.R32UI),N===i.BYTE&&(j=i.R8I),N===i.SHORT&&(j=i.R16I),N===i.INT&&(j=i.R32I)),g===i.RG&&(N===i.FLOAT&&(j=i.RG32F),N===i.HALF_FLOAT&&(j=i.RG16F),N===i.UNSIGNED_BYTE&&(j=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),N===i.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RG8UI),N===i.UNSIGNED_SHORT&&(j=i.RG16UI),N===i.UNSIGNED_INT&&(j=i.RG32UI),N===i.BYTE&&(j=i.RG8I),N===i.SHORT&&(j=i.RG16I),N===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGB8UI),N===i.UNSIGNED_SHORT&&(j=i.RGB16UI),N===i.UNSIGNED_INT&&(j=i.RGB32UI),N===i.BYTE&&(j=i.RGB8I),N===i.SHORT&&(j=i.RGB16I),N===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),N===i.UNSIGNED_INT&&(j=i.RGBA32UI),N===i.BYTE&&(j=i.RGBA8I),N===i.SHORT&&(j=i.RGBA16I),N===i.INT&&(j=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),N===i.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),g===i.RGBA){let $=se?ys:$e.getTransfer(W);N===i.FLOAT&&(j=i.RGBA32F),N===i.HALF_FLOAT&&(j=i.RGBA16F),N===i.UNSIGNED_BYTE&&(j=$===ct?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),N===i.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(E,g){let N;return E?g===null||g===xn||g===as?N=i.DEPTH24_STENCIL8:g===yn?N=i.DEPTH32F_STENCIL8:g===rs&&(N=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xn||g===as?N=i.DEPTH_COMPONENT24:g===yn?N=i.DEPTH_COMPONENT32F:g===rs&&(N=i.DEPTH_COMPONENT16),N}function S(E,g){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){let g=E.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),P(g)}function T(E){let g=n.get(E);if(g.__webglInit===void 0)return;let N=E.source,z=m.get(N);if(z){let W=z[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(E),Object.keys(z).length===0&&m.delete(N)}n.remove(E)}function R(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let N=E.source,z=m.get(N);delete z[g.__cacheKey],a.memory.textures--}function P(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let W=0;W<g.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[z][W]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=E.textures;for(let z=0,W=N.length;z<W;z++){let se=n.get(N[z]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(N[z])}n.remove(E)}let F=0;function q(){F=0}function Z(){return F}function B(E){F=E}function X(){let E=F;return E>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function H(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function K(E,g){let N=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let z=E.image;if(z===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(N,E,g);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function te(E,g){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Le(N,E,g);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function ue(E,g){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Le(N,E,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function pe(E,g){let N=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Be(N,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let ye={[Or]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},We={[Nt]:i.NEAREST,[Cl]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},_t={[Il]:i.NEVER,[Fl]:i.ALWAYS,[Dl]:i.LESS,[no]:i.LEQUAL,[Ll]:i.EQUAL,[io]:i.GEQUAL,[Ul]:i.GREATER,[Nl]:i.NOTEQUAL};function nt(E,g){if(g.type===yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===ya||g.magFilter===Gs||g.magFilter===hi||g.minFilter===Ft||g.minFilter===ya||g.minFilter===Gs||g.minFilter===hi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ye[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ye[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ye[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,We[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,We[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_t[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==Gs&&g.minFilter!==hi||g.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function J(E,g){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,W=m.get(z);W===void 0&&(W={},m.set(z,W));let se=H(g);if(se!==E.__cacheKey){W[se]===void 0&&(W[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),W[se].usedTimes++;let ae=W[E.__cacheKey];ae!==void 0&&(W[E.__cacheKey].usedTimes--,ae.usedTimes===0&&R(g)),E.__cacheKey=se,E.__webglTexture=W[se].texture}return N}function re(E,g,N){return Math.floor(Math.floor(E/N)/g)}function ne(E,g,N,z){let se=E.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,z,g.data);else{se.sort((Ce,he)=>Ce.start-he.start);let ae=0;for(let Ce=1;Ce<se.length;Ce++){let he=se[ae],ce=se[Ce],Te=he.start+he.count,De=re(ce.start,g.width,4),ke=re(he.start,g.width,4);ce.start<=Te+1&&De===ke&&re(ce.start+ce.count-1,g.width,4)===De?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++ae,se[ae]=ce)}se.length=ae+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ce=0,he=se.length;Ce<he;Ce++){let ce=se[Ce],Te=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),ke=Te%g.width,I=Math.floor(Te/g.width),oe=De,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ke,I,oe,Y,N,z,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function Le(E,g,N){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let W=J(E,g),se=g.source;t.bindTexture(z,E.__webglTexture,i.TEXTURE0+N);let ae=n.get(se);if(se.version!==ae.__version||W===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Y=$e.getPrimaries($e.workingColorSpace),le=g.colorSpace===Wn?null:$e.getPrimaries(g.colorSpace),me=g.colorSpace===Wn||Y===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let $=p(g.image,!1,s.maxTextureSize);$=Rt(g,$);let de=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type),he=b(g.internalFormat,de,Ce,g.normalized,g.colorSpace,g.isVideoTexture);nt(z,g);let ce,Te=g.mipmaps,De=g.isVideoTexture!==!0,ke=ae.__version===void 0||W===!0,I=se.dataReady,oe=S(g,$);if(g.isDepthTexture)he=A(g.format===ui,g.type),ke&&(De?t.texStorage2D(i.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,de,Ce,null));else if(g.isDataTexture)if(Te.length>0){De&&ke&&t.texStorage2D(i.TEXTURE_2D,oe,he,Te[0].width,Te[0].height);for(let Y=0,le=Te.length;Y<le;Y++)ce=Te[Y],De?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(i.TEXTURE_2D,Y,he,ce.width,ce.height,0,de,Ce,ce.data);g.generateMipmaps=!1}else De?(ke&&t.texStorage2D(i.TEXTURE_2D,oe,he,$.width,$.height),I&&ne(g,$,de,Ce)):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,de,Ce,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,he,Te[0].width,Te[0].height,$.depth);for(let Y=0,le=Te.length;Y<le;Y++)if(ce=Te[Y],g.format!==hn)if(de!==null)if(De){if(I)if(g.layerUpdates.size>0){let me=gc(ce.width,ce.height,g.format,g.type);for(let Q of g.layerUpdates){let Ae=ce.data.subarray(Q*me/ce.data.BYTES_PER_ELEMENT,(Q+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Q,ce.width,ce.height,1,de,Ae)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,$.depth,de,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,he,ce.width,ce.height,$.depth,0,ce.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,$.depth,de,Ce,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,he,ce.width,ce.height,$.depth,0,de,Ce,ce.data)}else{De&&ke&&t.texStorage2D(i.TEXTURE_2D,oe,he,Te[0].width,Te[0].height);for(let Y=0,le=Te.length;Y<le;Y++)ce=Te[Y],g.format!==hn?de!==null?De?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,he,ce.width,ce.height,0,ce.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(i.TEXTURE_2D,Y,he,ce.width,ce.height,0,de,Ce,ce.data)}else if(g.isDataArrayTexture)if(De){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,he,$.width,$.height,$.depth),I)if(g.layerUpdates.size>0){let Y=gc($.width,$.height,g.format,g.type);for(let le of g.layerUpdates){let me=$.data.subarray(le*Y/$.data.BYTES_PER_ELEMENT,(le+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,$.width,$.height,1,de,Ce,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ce,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,de,Ce,$.data);else if(g.isData3DTexture)De?(ke&&t.texStorage3D(i.TEXTURE_3D,oe,he,$.width,$.height,$.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ce,$.data)):t.texImage3D(i.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,de,Ce,$.data);else if(g.isFramebufferTexture){if(ke)if(De)t.texStorage2D(i.TEXTURE_2D,oe,he,$.width,$.height);else{let Y=$.width,le=$.height;for(let me=0;me<oe;me++)t.texImage2D(i.TEXTURE_2D,me,he,Y,le,0,de,Ce,null),Y>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),$.parentNode!==Y){Y.appendChild($),f.add(g),Y.onpaint=le=>{let me=le.changedElements;for(let Q of f)me.includes(Q.image)&&(Q.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let me=i.RGBA,Q=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,Q,Ae,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(De&&ke){let Y=ze(Te[0]);t.texStorage2D(i.TEXTURE_2D,oe,he,Y.width,Y.height)}for(let Y=0,le=Te.length;Y<le;Y++)ce=Te[Y],De?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,de,Ce,ce):t.texImage2D(i.TEXTURE_2D,Y,he,de,Ce,ce);g.generateMipmaps=!1}else if(De){if(ke){let Y=ze($);t.texStorage2D(i.TEXTURE_2D,oe,he,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ce,$)}else t.texImage2D(i.TEXTURE_2D,0,he,de,Ce,$);u(g)&&M(z),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Be(E,g,N){if(g.image.length!==6)return;let z=J(E,g),W=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);let se=n.get(W);if(W.version!==se.__version||z===!0){t.activeTexture(i.TEXTURE0+N);let ae=$e.getPrimaries($e.workingColorSpace),j=g.colorSpace===Wn?null:$e.getPrimaries(g.colorSpace),$=g.colorSpace===Wn||ae===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let de=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!de&&!Ce?he[Q]=p(g.image[Q],!0,s.maxCubemapSize):he[Q]=Ce?g.image[Q].image:g.image[Q],he[Q]=Rt(g,he[Q]);let ce=he[0],Te=r.convert(g.format,g.colorSpace),De=r.convert(g.type),ke=b(g.internalFormat,Te,De,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,oe=se.__version===void 0||z===!0,Y=W.dataReady,le=S(g,ce);nt(i.TEXTURE_CUBE_MAP,g);let me;if(de){I&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ke,ce.width,ce.height);for(let Q=0;Q<6;Q++){me=he[Q].mipmaps;for(let Ae=0;Ae<me.length;Ae++){let ve=me[Ae];g.format!==hn?Te!==null?I?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,ke,ve.width,ve.height,0,ve.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,ve.width,ve.height,Te,De,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,ke,ve.width,ve.height,0,Te,De,ve.data)}}}else{if(me=g.mipmaps,I&&oe){me.length>0&&le++;let Q=ze(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ce){I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Te,De,he[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,he[Q].width,he[Q].height,0,Te,De,he[Q].data);for(let Ae=0;Ae<me.length;Ae++){let dt=me[Ae].image[Q].image;I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,dt.width,dt.height,Te,De,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,ke,dt.width,dt.height,0,Te,De,dt.data)}}else{I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,De,he[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,Te,De,he[Q]);for(let Ae=0;Ae<me.length;Ae++){let ve=me[Ae];I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,Te,De,ve.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,ke,Te,De,ve.image[Q])}}}u(g)&&M(i.TEXTURE_CUBE_MAP),se.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ie(E,g,N,z,W,se){let ae=r.convert(N.format,N.colorSpace),j=r.convert(N.type),$=b(N.internalFormat,ae,j,N.normalized,N.colorSpace),de=n.get(g),Ce=n.get(N);if(Ce.__renderTarget=g,!de.__hasExternalTextures){let he=Math.max(1,g.width>>se),ce=Math.max(1,g.height>>se);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,se,$,he,ce,g.depth,0,ae,j,null):t.texImage2D(W,se,$,he,ce,0,ae,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),it(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,Ce.__webglTexture,0,st(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,Ce.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(E,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let z=g.depthTexture,W=z&&z.isDepthTexture?z.type:null,se=A(g.stencilBuffer,W),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),se,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,E)}else{let z=g.textures;for(let W=0;W<z.length;W++){let se=z[W],ae=r.convert(se.format,se.colorSpace),j=r.convert(se.type),$=b(se.internalFormat,ae,j,se.normalized,se.colorSpace);it(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),$,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(E,g,N){let z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),nt(i.TEXTURE_CUBE_MAP,g.depthTexture);let de=r.convert(g.depthTexture.format),Ce=r.convert(g.depthTexture.type),he;g.depthTexture.format===Tn?he=i.DEPTH_COMPONENT24:g.depthTexture.format===ui&&(he=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,g.width,g.height,0,de,Ce,null)}}else K(g.depthTexture,0);let se=W.__webglTexture,ae=st(g),j=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,$=g.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Tn)it(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,$,j,se,0);else if(g.depthTexture.format===ui)it(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,$,j,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(E){let g=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let z=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=z}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let z=0;z<6;z++)je(g.__webglFramebuffer[z],E,z);else{let z=E.texture.mipmaps;z&&z.length>0?je(g.__webglFramebuffer[0],E,0):je(g.__webglFramebuffer,E,0)}else if(N){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),bt(g.__webglDepthbuffer[z],E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}else{let z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),bt(g.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,g,N){let z=n.get(E);g!==void 0&&Ie(z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Qe(E)}function Ye(E){let g=E.texture,N=n.get(E),z=n.get(g);E.addEventListener("dispose",_);let W=E.textures,se=E.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),se){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let $=0;$<g.mipmaps.length;$++)N.__webglFramebuffer[j][$]=i.createFramebuffer()}else N.__webglFramebuffer[j]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)N.__webglFramebuffer[j]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let j=0,$=W.length;j<$;j++){let de=n.get(W[j]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&it(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<W.length;j++){let $=W[j];N.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[j]);let de=r.convert($.format,$.colorSpace),Ce=r.convert($.type),he=b($.internalFormat,de,Ce,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),ce=st(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,N.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),nt(i.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ie(N.__webglFramebuffer[j][$],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,$);else Ie(N.__webglFramebuffer[j],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,$=W.length;j<$;j++){let de=W[j],Ce=n.get(de),he=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Ce.__webglTexture),nt(he,de),Ie(N.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+j,he,0),u(de)&&M(he)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,z.__webglTexture),nt(j,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ie(N.__webglFramebuffer[$],E,g,i.COLOR_ATTACHMENT0,j,$);else Ie(N.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,j,0);u(g)&&M(j),t.unbindTexture()}E.depthBuffer&&Qe(E)}function at(E){let g=E.textures;for(let N=0,z=g.length;N<z;N++){let W=g[N];if(u(W)){let se=w(E),ae=n.get(W).__webglTexture;t.bindTexture(se,ae),M(se),t.unbindTexture()}}}let et=[],lt=[];function vt(E){if(E.samples>0){if(it(E)===!1){let g=E.textures,N=E.width,z=E.height,W=i.COLOR_BUFFER_BIT,se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(E),j=g.length>1;if(j)for(let de=0;de<g.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let $=E.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<g.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ce=n.get(g[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,N,z,0,0,N,z,W,i.NEAREST),c===!0&&(et.length=0,lt.length=0,et.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(et.push(se),lt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<g.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ce=n.get(g[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(E){return Math.min(s.maxSamples,E.samples)}function it(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){let g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Rt(E,g){let N=E.colorSpace,z=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Si&&N!==Wn&&($e.getTransfer(N)===ct?(z!==hn||W!==on)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",N)),g}function ze(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=Z,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=pe,this.rebindTextures=Ke,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jm(i,e){function t(n,s=Wn){let r,a=$e.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===lc)return i.RGB;if(n===hn)return i.RGBA;if(n===Tn)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===js||n===Xs)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===wa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Ia||n===Da||n===La||n===Ua||n===qs||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===Ia)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return r.COMPRESSED_RG11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===ka||n===Oa||n===Ba||n===za||n===Va||n===Ga||n===Ha||n===Wa||n===ja||n===Xa||n===qa||n===Ya||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===$a||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===Ys||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ls(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends An{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,x=null,v=typeof XRWebGLBinding<"u",p=new Pc,u={},M=t.getContextAttributes(),w=null,b=null,A=[],S=[],C=new Ge,_=null,T=new Gt;T.viewport=new Tt;let R=new Gt;R.viewport=new Tt;let P=[T,R],F=new ma,q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=A[J];return re===void 0&&(re=new Qi,A[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=A[J];return re===void 0&&(re=new Qi,A[J]=re),re.getGripSpace()},this.getHand=function(J){let re=A[J];return re===void 0&&(re=new Qi,A[J]=re),re.getHandSpace()};function B(J){let re=S.indexOf(J.inputSource);if(re===-1)return;let ne=A[re];ne!==void 0&&(ne.update(J.inputSource,J.frame,l||a),ne.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",H);for(let J=0;J<A.length;J++){let re=S[J];re!==null&&(S[J]=null,A[J].disconnect(re))}q=null,Z=null,p.reset();for(let J in u)delete u[J];e.setRenderTarget(w),m=null,d=null,f=null,s=null,b=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Le=null,Be=null;M.depth&&(Be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?ui:Tn,Le=M.stencil?as:xn);let Ie={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:hn,type:on,depthTexture:new Hn(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new rn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(J){for(let re=0;re<J.removed.length;re++){let ne=J.removed[re],Le=S.indexOf(ne);Le>=0&&(S[Le]=null,A[Le].disconnect(ne))}for(let re=0;re<J.added.length;re++){let ne=J.added[re],Le=S.indexOf(ne);if(Le===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=S.length){S.push(ne),Le=Ie;break}else if(S[Ie]===null){S[Ie]=ne,Le=Ie;break}if(Le===-1)break}let Be=A[Le];Be&&Be.connect(ne)}}let K=new U,te=new U;function ue(J,re,ne){K.setFromMatrixPosition(re.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);let Le=K.distanceTo(te),Be=re.projectionMatrix.elements,Ie=ne.projectionMatrix.elements,bt=Be[14]/(Be[10]-1),je=Be[14]/(Be[10]+1),Qe=(Be[9]+1)/Be[5],Ke=(Be[9]-1)/Be[5],Ye=(Be[8]-1)/Be[0],at=(Ie[8]+1)/Ie[0],et=bt*Ye,lt=bt*at,vt=Le/(-Ye+at),st=vt*-Ye;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(st),J.translateZ(vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let it=bt+vt,D=je+vt,Rt=et-st,ze=lt+(Le-st),E=Qe*je/D*it,g=Ke*je/D*it;J.projectionMatrix.makePerspective(Rt,ze,E,g,it,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let re=J.near,ne=J.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),F.near=R.near=T.near=re,F.far=R.far=T.far=ne,(q!==F.near||Z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,Z=F.far),F.layers.mask=J.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Le=J.parent,Be=F.cameras;pe(F,Le);for(let Ie=0;Ie<Be.length;Ie++)pe(Be[Ie],Le);Be.length===2?ue(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),ye(J,F,Le)};function ye(J,re,ne){ne===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return u[J]};let We=null;function _t(J,re){if(h=re.getViewerPose(l||a),x=re,h!==null){let ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Le=!1;ne.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let je=0;je<ne.length;je++){let Qe=ne[je],Ke=null;if(m!==null)Ke=m.getViewport(Qe);else{let at=f.getViewSubImage(d,Qe);Ke=at.viewport,je===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Ye=P[je];Ye===void 0&&(Ye=new Gt,Ye.layers.enable(je),Ye.viewport=new Tt,P[je]=Ye),Ye.matrix.fromArray(Qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),je===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Ye)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let je=f.getDepthInformation(ne[0]);je&&je.isValid&&je.texture&&p.init(je,s.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let je=0;je<ne.length;je++){let Qe=ne[je].camera;if(Qe){let Ke=u[Qe];Ke||(Ke=new Ls,u[Qe]=Ke);let Ye=f.getCameraImage(Qe);Ke.sourceTexture=Ye}}}}for(let ne=0;ne<A.length;ne++){let Le=S[ne],Be=A[ne];Le!==null&&Be!==void 0&&Be.update(Le,re,l||a)}We&&We(J,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}let nt=new fd;nt.setAnimationLoop(_t),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}},Ym=new St,yd=new Ve;yd.set(-1,0,0,0,1,0,0,0,1);function Zm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,fc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,w,b){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,M,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Zt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Zt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let M=e.get(u),w=M.envMap,b=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yd),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,M,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=w*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,A){let S=A.program;n.uniformBlockBinding(b,S)}function l(b,A){let S=s[b.id];S===void 0&&(p(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let C=A.program;n.updateUBOMapping(b,C);let _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function h(b){let A=f();b.__bindingPointIndex=A;let S=i.createBuffer(),C=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let A=s[b.id],S=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=S.length;_<T;_++){let R=S[_];if(Array.isArray(R))for(let P=0,F=R.length;P<F;P++)m(R[P],_,P,C);else m(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,A,S,C){if(v(b,A,S,C)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let F=T[P],q=u(F);x(F,b.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function x(b,A,S){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,S)}function v(b,A,S,C){let _=b.value,T=A+"_"+S;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let R=C[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function p(b){let A=b.uniforms,S=0,C=16;for(let T=0,R=A.length;T<R;T++){let P=Array.isArray(A[T])?A[T]:[A[T]];for(let F=0,q=P.length;F<q;F++){let Z=P[F],B=Array.isArray(Z.value)?Z.value:[Z.value];for(let X=0,H=B.length;X<H;X++){let K=B[X],te=u(K),ue=S%C,pe=ue%te.boundary,ye=ue+pe;S+=pe,ye!==0&&C-ye<te.storage&&(S+=C-ye),Z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=te.storage}}}let _=S%C;return _>0&&(S+=C-_),b.__size=S,b.__cache={},this}function u(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",b),A}function M(b){let A=b.target;A.removeEventListener("dispose",M);let S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var $m=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function Km(){return Ln===null&&(Ln=new qr($m,16,16,fi,Dn),Ln.name="DFG_LUT",Ln.minFilter=Ft,Ln.magFilter=Ft,Ln.wrapS=En,Ln.wrapT=En,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var co=class{constructor(e={}){let{canvas:t=kl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=on}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let v=m,p=new Set([Ta,Ea,Sa]),u=new Set([on,xn,rs,as,va,Ma]),M=new Uint32Array(4),w=new Int32Array(4),b=new U,A=null,S=null,C=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,F=null,q=null,Z=null,B=null;this._outputColorSpace=sn;let X=0,H=0,K=null,te=-1,ue=null,pe=new Tt,ye=new Tt,We=null,_t=new He(0),nt=0,J=t.width,re=t.height,ne=1,Le=null,Be=null,Ie=new Tt(0,0,J,re),bt=new Tt(0,0,J,re),je=!1,Qe=new Rs,Ke=!1,Ye=!1,at=new St,et=new U,lt=new Tt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function it(){return K===null?ne:1}let D=n;function Rt(y,L){return t.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Jt,!1),D===null){let L="webgl2";if(D=Rt(L,y),D===null)throw Rt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Ne("WebGLRenderer: "+y.message),y}let ze,E,g,N,z,W,se,ae,j,$,de,Ce,he,ce,Te,De,ke,I,oe,Y,le,me,Q;function Ae(){ze=new rp(D),ze.init(),le=new jm(D,ze),E=new $f(D,ze,e,le),g=new Hm(D,ze),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),q=D.createFramebuffer(),Z=D.createFramebuffer(),B=D.createFramebuffer(),N=new cp(D),z=new Rm,W=new Wm(D,ze,g,z,E,le,N),se=new sp(R),ae=new hh(D),me=new Zf(D,ae),j=new ap(D,ae,N,me),$=new dp(D,j,ae,me,N),I=new lp(D,E,W),Te=new Kf(z),de=new Cm(R,se,ze,E,me,Te),Ce=new Zm(R,z),he=new Im,ce=new km(ze),ke=new Yf(R,se,g,$,x,c),De=new Gm(R,$,E),Q=new Jm(D,N,E,g),oe=new Jf(D,ze,N),Y=new op(D,ze,N),N.programs=de.programs,R.capabilities=E,R.extensions=ze,R.properties=z,R.renderLists=he,R.shadowMap=De,R.state=g,R.info=N}Ae(),v!==on&&(T=new up(v,t.width,t.height,o,s,r));let ve=new Ic(R,D);this.xr=ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(J,re,!1))},this.getSize=function(y){return y.set(J,re)},this.setSize=function(y,L,G=!0){if(ve.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,re=L,t.width=Math.floor(y*ne),t.height=Math.floor(L*ne),G===!0&&(t.style.width=y+"px",t.style.height=L+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(J*ne,re*ne).floor()},this.setDrawingBufferSize=function(y,L,G){J=y,re=L,ne=G,t.width=Math.floor(y*G),t.height=Math.floor(L*G),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===on){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(pe)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,L,G,O){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,L,G,O),g.viewport(pe.copy(Ie).multiplyScalar(ne).round())},this.getScissor=function(y){return y.copy(bt)},this.setScissor=function(y,L,G,O){y.isVector4?bt.set(y.x,y.y,y.z,y.w):bt.set(y,L,G,O),g.scissor(ye.copy(bt).multiplyScalar(ne).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(y){g.setScissorTest(je=y)},this.setOpaqueSort=function(y){Le=y},this.setTransparentSort=function(y){Be=y},this.getClearColor=function(y){return y.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,G=!0){let O=0;if(y){let V=!1;if(K!==null){let xe=K.texture.format;V=p.has(xe)}if(V){let xe=K.texture.type,Ee=u.has(xe),ge=ke.getClearColor(),we=ke.getClearAlpha(),Re=ge.r,Xe=ge.g,Ze=ge.b;Ee?(M[0]=Re,M[1]=Xe,M[2]=Ze,M[3]=we,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Re,w[1]=Xe,w[2]=Ze,w[3]=we,D.clearBufferiv(D.COLOR,0,w))}else O|=D.COLOR_BUFFER_BIT}L&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),ke.dispose(),he.dispose(),ce.dispose(),z.dispose(),se.dispose(),$.dispose(),me.dispose(),Q.dispose(),de.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Xn),ve.removeEventListener("sessionend",k),ie.stop()};function dt(y){y.preventDefault(),Ms("WebGLRenderer: Context Lost."),P=!0}function ot(){Ms("WebGLRenderer: Context Restored."),P=!1;let y=N.autoReset,L=De.enabled,G=De.autoUpdate,O=De.needsUpdate,V=De.type;Ae(),N.autoReset=y,De.enabled=L,De.autoUpdate=G,De.needsUpdate=O,De.type=V}function Jt(y){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Kt(y){let L=y.target;L.removeEventListener("dispose",Kt),Qs(L)}function Qs(y){uo(y),z.remove(y)}function uo(y){let L=z.get(y).programs;L!==void 0&&(L.forEach(function(G){de.releaseProgram(G)}),y.isShaderMaterial&&de.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,G,O,V,xe){L===null&&(L=vt);let Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=jt(y,L,G,O,V);g.setMaterial(O,Ee);let we=G.index,Re=1;if(O.wireframe===!0){if(we=j.getWireframeAttribute(G),we===void 0)return;Re=2}let Xe=G.drawRange,Ze=G.attributes.position,Pe=Xe.start*Re,ft=(Xe.start+Xe.count)*Re;xe!==null&&(Pe=Math.max(Pe,xe.start*Re),ft=Math.min(ft,(xe.start+xe.count)*Re)),we!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,we.count)):Ze!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,Ze.count));let wt=ft-Pe;if(wt<0||wt===1/0)return;me.setup(V,O,ge,G,we);let At,mt=oe;if(we!==null&&(At=ae.get(we),mt=Y,mt.setIndex(At)),V.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*it()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(V.isLine){let Bt=O.linewidth;Bt===void 0&&(Bt=1),g.setLineWidth(Bt*it()),V.isLineSegments?mt.setMode(D.LINES):V.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else V.isPoints?mt.setMode(D.POINTS):V.isSprite&&mt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Bt=V._multiDrawStarts,Se=V._multiDrawCounts,en=V._multiDrawCount,rt=we?ae.get(we).bytesPerElement:1,ln=z.get(O).currentProgram.getUniforms();for(let bn=0;bn<en;bn++)ln.setValue(D,"_gl_DrawID",bn),mt.render(Bt[bn]/rt,Se[bn])}else if(V.isInstancedMesh)mt.renderInstances(Pe,wt,V.count);else if(G.isInstancedBufferGeometry){let Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Bt);mt.renderInstances(Pe,wt,Se)}else mt.render(Pe,wt)};function er(y,L,G){y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,_e(y,L,G),y.side=Gn,y.needsUpdate=!0,_e(y,L,G),y.side=Pn):_e(y,L,G)}this.compile=function(y,L,G=null){G===null&&(G=y),S=ce.get(G),S.init(L),_.push(S),G.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),y!==G&&y.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights();let O=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xe=V.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let ge=xe[Ee];er(ge,G,V),O.add(ge)}else er(xe,G,V),O.add(xe)}),S=_.pop(),O},this.compileAsync=function(y,L,G=null){let O=this.compile(y,L,G);return new Promise(V=>{function xe(){if(O.forEach(function(Ee){z.get(Ee).currentProgram.isReady()&&O.delete(Ee)}),O.size===0){V(y);return}setTimeout(xe,10)}ze.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let jn=null;function Ii(y){jn&&jn(y)}function Xn(){ie.stop()}function k(){ie.start()}let ie=new fd;ie.setAnimationLoop(Ii),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(y){jn=y,ve.setAnimationLoop(y),y===null?ie.stop():ie.start()},ve.addEventListener("sessionstart",Xn),ve.addEventListener("sessionend",k),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(y,L);let G=ve.enabled===!0&&ve.isPresenting===!0,O=T!==null&&(K===null||G)&&T.begin(R,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(L),L=ve.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,L,K),S=ce.get(y,_.length),S.init(L),S.state.textureUnits=W.getTextureUnits(),_.push(S),at.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Qe.setFromProjectionMatrix(at,mn,L.reversedDepth),Ye=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,Ye),A=he.get(y,C.length),A.init(),C.push(A),ve.enabled===!0&&ve.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&ee(Ee,L,-1/0,R.sortObjects)}ee(y,L,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(Le,Be,L.reversedDepth),st=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,st&&ke.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Te.beginShadows();let V=S.state.shadowsArray;if(De.render(V,y,L),Ke===!0&&Te.endShadows(),(O&&T.hasRenderPass())===!1){let Ee=A.opaque,ge=A.transmissive;if(S.setupLights(),L.isArrayCamera){let we=L.cameras;if(ge.length>0)for(let Re=0,Xe=we.length;Re<Xe;Re++){let Ze=we[Re];Me(Ee,ge,y,Ze)}st&&ke.render(y);for(let Re=0,Xe=we.length;Re<Xe;Re++){let Ze=we[Re];be(A,y,Ze,Ze.viewport)}}else ge.length>0&&Me(Ee,ge,y,L),st&&ke.render(y),be(A,y,L)}K!==null&&H===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),O&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,L),me.resetDefaultState(),te=-1,ue=null,_.pop(),_.length>0?(S=_[_.length-1],W.setTextureUnits(S.state.textureUnits),Ke===!0&&Te.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,F!==null&&F.renderEnd()};function ee(y,L,G,O){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qe.intersectsSprite(y)){O&&lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(at);let Ee=$.update(y),ge=y.material;ge.visible&&A.push(y,Ee,ge,G,lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qe.intersectsObject(y))){let Ee=$.update(y),ge=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),lt.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),lt.copy(Ee.boundingSphere.center)),lt.applyMatrix4(y.matrixWorld).applyMatrix4(at)),Array.isArray(ge)){let we=Ee.groups;for(let Re=0,Xe=we.length;Re<Xe;Re++){let Ze=we[Re],Pe=ge[Ze.materialIndex];Pe&&Pe.visible&&A.push(y,Ee,Pe,G,lt.z,Ze)}}else ge.visible&&A.push(y,Ee,ge,G,lt.z,null)}}let xe=y.children;for(let Ee=0,ge=xe.length;Ee<ge;Ee++)ee(xe[Ee],L,G,O)}function be(y,L,G,O){let{opaque:V,transmissive:xe,transparent:Ee}=y;S.setupLightsView(G),Ke===!0&&Te.setGlobalState(R.clippingPlanes,G),O&&g.viewport(pe.copy(O)),V.length>0&&Fe(V,L,G),xe.length>0&&Fe(xe,L,G),Ee.length>0&&Fe(Ee,L,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Me(y,L,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[O.id]===void 0){let Pe=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[O.id]=new rn(1,1,{generateMipmaps:!0,type:Pe?Dn:on,minFilter:hi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let xe=S.state.transmissionRenderTarget[O.id],Ee=O.viewport||pe;xe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let ge=R.getRenderTarget(),we=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(_t),nt=R.getClearAlpha(),nt<1&&R.setClearColor(16777215,.5),R.clear(),st&&ke.render(G);let Xe=R.toneMapping;R.toneMapping=_n;let Ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),S.setupLightsView(O),Ke===!0&&Te.setGlobalState(R.clippingPlanes,O),Fe(y,G,O),W.updateMultisampleRenderTarget(xe),W.updateRenderTargetMipmap(xe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,wt=L.length;ft<wt;ft++){let At=L[ft],{object:mt,geometry:Bt,material:Se,group:en}=At;if(Se.side===Pn&&mt.layers.test(O.layers)){let rt=Se.side;Se.side=Zt,Se.needsUpdate=!0,Oe(mt,G,O,Bt,Se,en),Se.side=rt,Se.needsUpdate=!0,Pe=!0}}Pe===!0&&(W.updateMultisampleRenderTarget(xe),W.updateRenderTargetMipmap(xe))}R.setRenderTarget(ge,we,Re),R.setClearColor(_t,nt),Ze!==void 0&&(O.viewport=Ze),R.toneMapping=Xe}function Fe(y,L,G){let O=L.isScene===!0?L.overrideMaterial:null;for(let V=0,xe=y.length;V<xe;V++){let Ee=y[V],{object:ge,geometry:we,group:Re}=Ee,Xe=Ee.material;Xe.allowOverride===!0&&O!==null&&(Xe=O),ge.layers.test(G.layers)&&Oe(ge,L,G,we,Xe,Re)}}function Oe(y,L,G,O,V,xe){y.onBeforeRender(R,L,G,O,V,xe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(R,L,G,O,y,xe),V.transparent===!0&&V.side===Pn&&V.forceSinglePass===!1?(V.side=Zt,V.needsUpdate=!0,R.renderBufferDirect(G,L,O,V,y,xe),V.side=Gn,V.needsUpdate=!0,R.renderBufferDirect(G,L,O,V,y,xe),V.side=Pn):R.renderBufferDirect(G,L,O,V,y,xe),y.onAfterRender(R,L,G,O,V,xe)}function _e(y,L,G){L.isScene!==!0&&(L=vt);let O=z.get(y),V=S.state.lights,xe=S.state.shadowsArray,Ee=V.state.version,ge=de.getParameters(y,V.state,xe,L,G,S.state.lightProbeGridArray),we=de.getProgramCacheKey(ge),Re=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;let Xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=se.get(y.envMap||O.environment,Xe),O.envMapRotation=O.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",Kt),Re=new Map,O.programs=Re);let Ze=Re.get(we);if(Ze!==void 0){if(O.currentProgram===Ze&&O.lightsStateVersion===Ee)return Je(y,ge),Ze}else ge.uniforms=de.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,G,ge),y.onBeforeCompile(ge,R),Ze=de.acquireProgram(ge,we),Re.set(we,Ze),O.uniforms=ge.uniforms;let Pe=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=Te.uniform),Je(y,ge),O.needsLights=Qt(y),O.lightsStateVersion=Ee,O.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),O.lightProbeGrid=S.state.lightProbeGridArray.length>0,O.currentProgram=Ze,O.uniformsList=null,Ze}function xt(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=cs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Je(y,L){let G=z.get(y);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function ht(y,L){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(L.matrixWorld);for(let G=0,O=y.length;G<O;G++){let V=y[G];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function jt(y,L,G,O,V){L.isScene!==!0&&(L=vt),W.resetTextureUnits();let xe=L.fog,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,ge=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$e.workingColorSpace,we=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Re=se.get(O.envMap||Ee,we),Xe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ze=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pe=!!G.morphAttributes.position,ft=!!G.morphAttributes.normal,wt=!!G.morphAttributes.color,At=_n;O.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(At=R.toneMapping);let mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Bt=mt!==void 0?mt.length:0,Se=z.get(O),en=S.state.lights;if(Ke===!0&&(Ye===!0||y!==ue)){let yt=y===ue&&O.id===te;Te.setState(O,y,yt)}let rt=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==en.state.version||Se.outputColorSpace!==ge||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Re||O.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Te.numPlanes||Se.numIntersection!==Te.numIntersection)||Se.vertexAlphas!==Xe||Se.vertexTangents!==Ze||Se.morphTargets!==Pe||Se.morphNormals!==ft||Se.morphColors!==wt||Se.toneMapping!==At||Se.morphTargetsCount!==Bt||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Se.__version=O.version);let ln=Se.currentProgram;rt===!0&&(ln=_e(O,L,V),F&&O.isNodeMaterial&&F.onUpdateProgram(O,ln,Se));let bn=!1,qn=!1,Di=!1,gt=ln.getUniforms(),Ct=Se.uniforms;if(g.useProgram(ln.program)&&(bn=!0,qn=!0,Di=!0),O.id!==te&&(te=O.id,qn=!0),Se.needsLights){let yt=ht(S.state.lightProbeGridArray,V);Se.lightProbeGrid!==yt&&(Se.lightProbeGrid=yt,qn=!0)}if(bn||ue!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),gt.setValue(D,"projectionMatrix",y.projectionMatrix),gt.setValue(D,"viewMatrix",y.matrixWorldInverse);let Zn=gt.map.cameraPosition;Zn!==void 0&&Zn.setValue(D,et.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&gt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),ue!==y&&(ue=y,qn=!0,Di=!0)}if(Se.needsLights&&(en.state.directionalShadowMap.length>0&&gt.setValue(D,"directionalShadowMap",en.state.directionalShadowMap,W),en.state.spotShadowMap.length>0&&gt.setValue(D,"spotShadowMap",en.state.spotShadowMap,W),en.state.pointShadowMap.length>0&&gt.setValue(D,"pointShadowMap",en.state.pointShadowMap,W)),V.isSkinnedMesh){gt.setOptional(D,V,"bindMatrix"),gt.setOptional(D,V,"bindMatrixInverse");let yt=V.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),gt.setValue(D,"boneTexture",yt.boneTexture,W))}V.isBatchedMesh&&(gt.setOptional(D,V,"batchingTexture"),gt.setValue(D,"batchingTexture",V._matricesTexture,W),gt.setOptional(D,V,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",V._indirectTexture,W),gt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",V._colorsTexture,W));let Yn=G.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&I.update(V,G,ln),(qn||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,gt.setValue(D,"receiveShadow",V.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(Ct.envMapIntensity.value=L.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Km()),qn){if(gt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&cn(Ct,Di),xe&&O.fog===!0&&Ce.refreshFogUniforms(Ct,xe),Ce.refreshMaterialUniforms(Ct,O,ne,re,S.state.transmissionRenderTarget[y.id]),Se.needsLights&&Se.lightProbeGrid){let yt=Se.lightProbeGrid;Ct.probesSH.value=yt.texture,Ct.probesMin.value.copy(yt.boundingBox.min),Ct.probesMax.value.copy(yt.boundingBox.max),Ct.probesResolution.value.copy(yt.resolution)}cs.upload(D,xt(Se),Ct,W)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(cs.upload(D,xt(Se),Ct,W),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&gt.setValue(D,"center",V.center),gt.setValue(D,"modelViewMatrix",V.modelViewMatrix),gt.setValue(D,"normalMatrix",V.normalMatrix),gt.setValue(D,"modelMatrix",V.matrixWorld),O.uniformsGroups!==void 0){let yt=O.uniformsGroups;for(let Zn=0,Li=yt.length;Zn<Li;Zn++){let Uc=yt[Zn];Q.update(Uc,ln),Q.bind(Uc,ln)}}return ln}function cn(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Qt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,L,G){let O=z.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=L,z.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let G=z.get(y);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,G=0){K=y,X=L,H=G;let O=null,V=!1,xe=!1;if(y){let ge=z.get(y);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),pe.copy(y.viewport),ye.copy(y.scissor),We=y.scissorTest,g.viewport(pe),g.scissor(ye),g.setScissorTest(We),te=-1;return}else if(ge.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(ge.__hasExternalTextures)W.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xe=y.depthTexture;if(ge.__boundDepthTexture!==Xe){if(Xe!==null&&z.has(Xe)&&(y.width!==Xe.image.width||y.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let Re=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?O=Re[L][G]:O=Re[L],V=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?O=z.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[G]:O=Re,pe.copy(y.viewport),ye.copy(y.scissor),We=y.scissorTest}else pe.copy(Ie).multiplyScalar(ne).floor(),ye.copy(bt).multiplyScalar(ne).floor(),We=je;if(G!==0&&(O=q),g.bindFramebuffer(D.FRAMEBUFFER,O)&&g.drawBuffers(y,O),g.viewport(pe),g.scissor(ye),g.setScissorTest(We),V){let ge=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,G)}else if(xe){let ge=L;for(let we=0;we<y.textures.length;we++){let Re=z.get(y.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Re.__webglTexture,G,ge)}}else if(y!==null&&G!==0){let ge=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,G)}te=-1},this.readRenderTargetPixels=function(y,L,G,O,V,xe,Ee,ge=0){if(!(y&&y.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){g.bindFramebuffer(D.FRAMEBUFFER,we);try{let Re=y.textures[ge],Xe=Re.format,Ze=Re.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Xe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Ze)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-O&&G>=0&&G<=y.height-V&&D.readPixels(L,G,O,V,le.convert(Xe),le.convert(Ze),xe)}finally{let Re=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,L,G,O,V,xe,Ee,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(L>=0&&L<=y.width-O&&G>=0&&G<=y.height-V){g.bindFramebuffer(D.FRAMEBUFFER,we);let Re=y.textures[ge],Xe=Re.format,Ze=Re.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(L,G,O,V,le.convert(Xe),le.convert(Ze),0);let ft=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ft);let wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bl(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Pe),D.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,G=0){let O=Math.pow(2,-G),V=Math.floor(y.image.width*O),xe=Math.floor(y.image.height*O),Ee=L!==null?L.x:0,ge=L!==null?L.y:0;W.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Ee,ge,V,xe),g.unbindTexture()},this.copyTextureToTexture=function(y,L,G=null,O=null,V=0,xe=0){let Ee,ge,we,Re,Xe,Ze,Pe,ft,wt,At=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(G!==null)Ee=G.max.x-G.min.x,ge=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Xe=G.min.y,Ze=G.isBox3?G.min.z:0;else{let Ct=Math.pow(2,-V);Ee=Math.floor(At.width*Ct),ge=Math.floor(At.height*Ct),y.isDataArrayTexture?we=At.depth:y.isData3DTexture?we=Math.floor(At.depth*Ct):we=1,Re=0,Xe=0,Ze=0}O!==null?(Pe=O.x,ft=O.y,wt=O.z):(Pe=0,ft=0,wt=0);let mt=le.convert(L.format),Bt=le.convert(L.type),Se;L.isData3DTexture?(W.setTexture3D(L,0),Se=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(W.setTexture2DArray(L,0),Se=D.TEXTURE_2D_ARRAY):(W.setTexture2D(L,0),Se=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let en=g.getParameter(D.UNPACK_ROW_LENGTH),rt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(D.UNPACK_SKIP_PIXELS),bn=g.getParameter(D.UNPACK_SKIP_ROWS),qn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);let Di=y.isDataArrayTexture||y.isData3DTexture,gt=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let Ct=z.get(y),Yn=z.get(L),yt=z.get(Ct.__renderTarget),Zn=z.get(Yn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,yt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Li=0;Li<we;Li++)Di&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(y).__webglTexture,V,Ze+Li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(L).__webglTexture,xe,wt+Li)),D.blitFramebuffer(Re,Xe,Ee,ge,Pe,ft,Ee,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||z.has(y)){let Ct=z.get(y),Yn=z.get(L);g.bindFramebuffer(D.READ_FRAMEBUFFER,Z),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let yt=0;yt<we;yt++)Di?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,V,Ze+yt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,V),gt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yn.__webglTexture,xe,wt+yt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yn.__webglTexture,xe),V!==0?D.blitFramebuffer(Re,Xe,Ee,ge,Pe,ft,Ee,ge,D.COLOR_BUFFER_BIT,D.NEAREST):gt?D.copyTexSubImage3D(Se,xe,Pe,ft,wt+yt,Re,Xe,Ee,ge):D.copyTexSubImage2D(Se,xe,Pe,ft,Re,Xe,Ee,ge);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Se,xe,Pe,ft,wt,Ee,ge,we,mt,Bt,At.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,xe,Pe,ft,wt,Ee,ge,we,mt,At.data):D.texSubImage3D(Se,xe,Pe,ft,wt,Ee,ge,we,mt,Bt,At):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Pe,ft,Ee,ge,mt,Bt,At.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Pe,ft,At.width,At.height,mt,At.data):D.texSubImage2D(D.TEXTURE_2D,xe,Pe,ft,Ee,ge,mt,Bt,At);g.pixelStorei(D.UNPACK_ROW_LENGTH,en),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(D.UNPACK_SKIP_ROWS,bn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,qn),xe===0&&L.generateMipmaps&&D.generateMipmap(Se),g.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){X=0,H=0,K=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};function vd(i,e){e.forEach((t,n)=>{let s=i.filter(r=>r.source===t.id).sort((r,a)=>r.id.localeCompare(a.id));s.forEach((r,a)=>{let o=1-2*((a+.5)/s.length),c=a*.61803398875%1,l=(n+.08+c*.84)/e.length*Math.PI*2,h=350+100*(a*.754877666%1),f=Math.sqrt(1-o*o);r.x=r.fx=h*f*Math.sin(l),r.y=r.fy=h*o,r.z=r.fz=h*f*Math.cos(l)})})}function Md(i,e={}){let t=[new He(e.ring1||"#D9963A"),new He(e.ring2||"#F2EDE6")],n=new He(e.glow||"#D9963A"),s=new gn;i.add(s);let r=[];for(let m=0;m<2;m++){let x=490+m*35,v=new kt(new Fs(x,1.6,8,240),new Rn({color:t[m],transparent:!0,opacity:.3,depthWrite:!1}));v.rotation.set(m?.9:-.5,m?-.45:.4,.2),s.add(v);let p=new kt(new is(4.2,12,10),new Rn({color:t[m]}));v.add(p);let u=new kt(new is(9,12,10),new Rn({color:t[m],transparent:!0,opacity:.18,depthWrite:!1}));p.add(u),r.push({ring:v,bead:p,radius:x})}let a=new kt(new Us(44,1),new Rn({color:n,wireframe:!0,transparent:!0,opacity:.16,depthWrite:!1}));s.add(a);let o=document.createElement("canvas");o.width=o.height=128;let c=o.getContext("2d"),l=n,h=`${Math.round(l.r*255)},${Math.round(l.g*255)},${Math.round(l.b*255)}`,f=c.createRadialGradient(64,64,0,64,64,64);f.addColorStop(0,`rgba(${h},.5)`),f.addColorStop(.25,`rgba(${h},.14)`),f.addColorStop(1,`rgba(${h},0)`),c.fillStyle=f,c.fillRect(0,0,128,128);let d=new Ei(new es({map:new Ds(o),transparent:!0,depthWrite:!1,blending:Ai}));return d.scale.set(360,360,1),s.add(d),{update(m,x,v=1){a.rotation.set(m*.09,m*.12,0),d.material.opacity=x?.25:.7+Math.sin(m*.7)*.1,r.forEach(({ring:p,bead:u,radius:M},w)=>{p.visible=v>.01,p.scale.setScalar(.2+.8*Math.min(1,v)),p.rotation.z=m*(w?-.018:.012),u.position.set(Math.cos(m*.16+w*2)*M,Math.sin(m*.16+w*2)*M,0),p.material.opacity=(x?.09:.3)*Math.min(1,v)})}}}function Sd(i,e){let t=new Map(i.map(h=>[h.id,h])),n=new Map(i.map(h=>[h.id,[]])),s=h=>typeof h=="object"?h.id:h;for(let h of e){let f=s(h.source),d=s(h.target);!t.has(f)||!t.has(d)||(n.get(f).push({id:d,link:h}),n.get(d).push({id:f,link:h}))}let r=[...i].sort((h,f)=>(f.source==="wiki")-(h.source==="wiki")||(f.degree||0)-(h.degree||0)||h.id.localeCompare(f.id));for(let h of n.values())h.sort((f,d)=>(t.get(d.id).degree||0)-(t.get(f.id).degree||0)||f.id.localeCompare(d.id));let a=new Set,o=[],c=new Map,l=(h,f=null,d=null)=>{let m={node:h,parent:f,link:d,index:o.length,home:{x:h.x,y:h.y,z:h.z},born:0,origin:null};return o.push(m),c.set(h.id,m),a.add(h.id),m};for(let h of r){if(a.has(h.id))continue;let f=[l(h)];for(let d=0;d<f.length;d++){let m=f[d],x=n.get(m.node.id).filter(v=>!a.has(v.id));for(let v of x.slice(0,3))f.push(l(t.get(v.id),m,v.link));x.length>3&&f.push(m)}}return o.forEach((h,f)=>{h.born=f===0?0:f===1?1.2:f===2?2.4:3+23*Math.pow((f-2)/Math.max(1,o.length-3),.62)}),{records:o,byNode:c,treeLinks:new Set(o.map(h=>h.link).filter(Boolean)),duration:29}}function Ed(i,e){let t=Math.max(0,e-i.born),n=Math.min(1,t/1.6),s=n>=1?1:1-Math.exp(-5*n)*Math.cos(7*n),r=.17+.83*Math.min(1,e/26),a=i.origin||{x:0,y:0,z:0},o=i.index===0?Math.min(1,e/18):s;return Object.fromEntries(["x","y","z"].map(c=>[c,a[c]+(i.home[c]*r-a[c])*o]))}var Ks={sources:[{id:"projects",color:"#D9262E"},{id:"operations",color:"#7C8894"},{id:"people",color:"#4E9E7E"},{id:"decisions",color:"#D18A3A"},{id:"research",color:"#4A90B8"},{id:"ideas",color:"#B5647E"},{id:"memory",color:"#CBBF9A"}],nodes:[{id:"projects:ade1671a0fc3",s:"projects",d:1,t:"Alderpoint Brand Compliance Audio Adjustment"},{id:"projects:0f0b18f9922d",s:"projects",d:2,t:"Alderpoint Brand Guidelines Enforcement Concerns"},{id:"projects:7d08872da56d",s:"projects",d:5,t:"Alderpoint internal comms template review workflow"},{id:"projects:1b32ddc20396",s:"projects",d:3,t:"Alderpoint Network Graphic Change Approval Issues"},{id:"projects:3dcc92d9f1e2",s:"projects",d:6,t:"Alderpoint network spec file transfer issues"},{id:"projects:1786b5236fce",s:"projects",d:3,t:"Alderpoint Network spec review and invoice sign off"},{id:"projects:cbd0df0ebb88",s:"projects",d:4,t:"Alderpoint Spec-Sensitive Brand Mandate Changes"},{id:"projects:805ff00d7133",s:"projects",d:2,t:"Alderpoint's Multi-layered Brand Veto Process"},{id:"projects:c3836e78e4e0",s:"projects",d:2,t:"Third site interview material received"},{id:"projects:2a459de7bdc2",s:"projects",d:5,t:"Alderpoint brand guidelines conflict resolution notes"},{id:"projects:c2ce15ae175b",s:"projects",d:4,t:"Alderpoint Health graphic template migration review"},{id:"projects:1e1fe5956f7f",s:"projects",d:7,t:"Alderpoint Health sign-off delay causes logistical strain"},{id:"projects:36d5ac5c4b8e",s:"projects",d:5,t:"Alderpoint Health Spec Sensitive Data Constraints"},{id:"projects:2e3a05ff63f2",s:"projects",d:7,t:"Alderpoint Health two-site shoot logistics plan"},{id:"projects:0e10d5a9f2de",s:"projects",d:6,t:"Alderpoint internal comms review checklist items"},{id:"projects:4544f34aab28",s:"projects",d:7,t:"Alderpoint Network Audio Subtitles and WCAG Standards"},{id:"projects:b07648de7606",s:"projects",d:3,t:"Alderpoint Network interviewee list and scheduling difficulties"},{id:"projects:59ba21553f8a",s:"projects",d:19,t:"Alderpoint Q3 internal film"},{id:"projects:dd75759c7ef4",s:"projects",d:4,t:"Q3 film delivery log"},{id:"projects:d8aa8e6fb545",s:"projects",d:2,t:"Alderpoint Health Brand Specification Review Notes"},{id:"projects:32284f612903",s:"projects",d:5,t:"Alderpoint Health remote asset delivery logistics"},{id:"projects:9150e078ee40",s:"projects",d:2,t:"Drybank brewery live event delivery pipeline issues"},{id:"projects:b027e0d66c9b",s:"projects",d:4,t:"Ilias\u2019s first deliverable for Tallgrass Outfitters"},{id:"projects:7c05f2f0b348",s:"projects",d:3,t:"Kettleridge initial brief scope review"},{id:"projects:9234c42659f7",s:"projects",d:4,t:"Vantrell's two year project profile assessment"},{id:"projects:bcf0398d3fb6",s:"projects",d:4,t:"Alderpoint Health Internal Comms Review"},{id:"projects:1e7da5ca116b",s:"projects",d:0,t:"Cape Line rebrand animation delivery specs"},{id:"projects:1133f2511847",s:"projects",d:4,t:"Drybank Agency Contract Scope Clarification Notes"},{id:"projects:171ffaa09f8a",s:"projects",d:1,t:"Drybank Brewing colour grading test results"},{id:"projects:d8a2b8ede917",s:"projects",d:2,t:"Kettleridge Lecture Capture Experiment Scope Check"},{id:"projects:258a4d06eb13",s:"projects",d:3,t:"Startup explainer asset requirements sign-off"},{id:"projects:9d1f4c1e516c",s:"projects",d:2,t:"Tallgrass Outfitters new range colour grading notes"},{id:"projects:0ea8313f7b5b",s:"projects",d:6,t:"Wedding Film Agreement Status and Follow Up"},{id:"projects:3ed515ad94ec",s:"projects",d:2,t:"Year End Reel Delivery Complications"},{id:"projects:a765a7b0168a",s:"projects",d:3,t:"Alderpoint Health Corporate Event Sound Mix Notes"},{id:"projects:3bc50625ca13",s:"projects",d:1,t:"Alderpoint Network Spec Sensitivity and Delivery Timeline"},{id:"projects:baa4c8e81547",s:"projects",d:2,t:"Appeal Film Script Feedback Needs Aditi Review"},{id:"projects:d771f3e5bb79",s:"projects",d:4,t:"Cape Line delivery specs required for overflow project"},{id:"projects:b987fb41db6e",s:"projects",d:1,t:"Cape Line Museum Exhibit Spec Check"},{id:"projects:e1d6d99e5667",s:"projects",d:1,t:"Conference Sizzle Delivery Requirements Review"},{id:"projects:55ea8a9663e1",s:"projects",d:6,t:"Developer Site Tour Rough Cut Notes"},{id:"projects:88da2f855e09",s:"projects",d:3,t:"Drybank Brewery restaurant launch delivery notes"},{id:"projects:6b4d427a894f",s:"projects",d:2,t:"Drybank Brewing booth presentation loop fix"},{id:"projects:1151241ebf46",s:"projects",d:4,t:"Drybank Brewing short film pre-retainer specs"},{id:"projects:b7e1eeb4daba",s:"projects",d:1,t:"Kettleridge Open Day footage colour grade feedback"},{id:"projects:b460ef337da8",s:"projects",d:5,t:"Manufacturer Recruitment Film VFX Review Notes"},{id:"projects:f6375c1edf01",s:"projects",d:6,t:"Music Video Delivery Scheduling Conflicts and Feedback"},{id:"projects:eb239ac41ab5",s:"projects",d:5,t:"Reine\u2019s rationale for Cape Line delivery specs"},{id:"projects:8042fe4829bd",s:"projects",d:3,t:"Sports Club Season Review Final Deliverable Issues"},{id:"projects:dd057a791d15",s:"projects",d:3,t:"Standardization of Asset Handoff Protocol"},{id:"projects:fd84b25234d1",s:"projects",d:3,t:"Tallgrass apparel product shoot logistics issues"},{id:"projects:362bf9c0854f",s:"projects",d:1,t:"Tallgrass Outfitters Rebrand Launch Film Delivery Notes"},{id:"projects:91059f80ea43",s:"projects",d:3,t:"The Unplaced Documentary Short from Early 2024"},{id:"projects:1502221c1ec1",s:"projects",d:4,t:"Year End Reel Scope Creep and Deliverables Review"},{id:"projects:d9cdb861a093",s:"projects",d:10,t:"Agency Overreach on Drybank Delivery Timeline"},{id:"projects:e7da4b5d259b",s:"projects",d:5,t:"Drybank asset library status for seasonal campaigns"},{id:"projects:441c3eacd655",s:"projects",d:5,t:"Drybank Brewing Agency Delivery Requirements Clarification"},{id:"projects:f7b1124c3f14",s:"projects",d:4,t:"Drybank Brewing first batch delivery concerns"},{id:"projects:b940cd8a5518",s:"projects",d:4,t:"Drybank Brewing library music sourcing issues"},{id:"projects:e34dea37826e",s:"projects",d:2,t:"Drybank Brewing seasonal content delivery status"},{id:"projects:624f7fc6a6a7",s:"projects",d:4,t:"Vertical Capture Required For Drybank Brewing Campaign"},{id:"projects:b9a040b19e70",s:"projects",d:5,t:"Volume cap implications for Drybank Brewing deliverables"},{id:"projects:a7d5c7147514",s:"projects",d:4,t:"Broadcast cutdown delivery plan"},{id:"projects:66eede52cc76",s:"projects",d:3,t:"Dagny colour timing for Drybank asset review"},{id:"projects:5ffbcbc45f10",s:"projects",d:4,t:"Drybank Agency sign off and internal routing"},{id:"projects:6d425528f387",s:"projects",d:5,t:"Drybank Brewing asset delivery review spring cycle"},{id:"projects:84873a0addeb",s:"projects",d:3,t:"Drybank Brewing Endframe Legal Copy Review"},{id:"projects:005856be1e96",s:"projects",d:22,t:"Drybank broadcast cutdown"},{id:"projects:74e850a8d2d6",s:"projects",d:6,t:"Drybank Grade Differences for Agency and Social"},{id:"projects:3e0fba38b6ab",s:"projects",d:5,t:"Drybank revisions causing timeline drag"},{id:"projects:cc9d9032fc16",s:"projects",d:2,t:"Agency Feedback on Drybank's second round"},{id:"projects:e23ec9dac87c",s:"projects",d:6,t:"Drybank Asset Delivery Conflicts With Tallgrass Review"},{id:"projects:5048206ddf3c",s:"projects",d:2,t:"Drybank Brewing Agency Redlines on Hero Cut Timing"},{id:"projects:e7850ad76880",s:"projects",d:2,t:"Drybank Brewing Asset Checklist Post-Delivery"},{id:"projects:40a0a456da19",s:"projects",d:6,t:"Drybank Brewing call sheet discrepancies noted"},{id:"projects:e45ffa60b7f5",s:"projects",d:3,t:"Drybank Brewing cut revisions after agency review"},{id:"projects:cbbd09c31020",s:"projects",d:4,t:"Drybank Brewing cutbacks on social rollout"},{id:"projects:00499cc29465",s:"projects",d:3,t:"Drybank Brewing Grade Review with Dagny Restrepo"},{id:"projects:f0f49614d0df",s:"projects",d:5,t:"Drybank Brewing invoice query re colour grading"},{id:"projects:c8da728ff0a3",s:"projects",d:21,t:"Drybank Brewing spring campaign"},{id:"projects:41b5204b98af",s:"projects",d:2,t:"Drybank Brewing text treatment and mandated colour rules"},{id:"projects:f38dd8fc24f3",s:"projects",d:1,t:"Drybank Brewing VO replacement decision log"},{id:"projects:7078340e6b9f",s:"projects",d:5,t:"Harbour Site Suitability Assessment for Tallgrass Shoot"},{id:"projects:d8cc307ffba6",s:"projects",d:3,t:"Harbour Unit Access and Crane Placement Notes"},{id:"projects:5849e46d5775",s:"projects",d:3,t:"Spring campaign brief v3"},{id:"projects:17f1af198bf7",s:"projects",d:3,t:"Spring campaign edit notes"},{id:"projects:982c7d1a4cad",s:"projects",d:2,t:"Alumni series episode planning"},{id:"projects:33842c5ef674",s:"projects",d:3,t:"Alumni Series Feedback Lag on Recruitment Films"},{id:"projects:718ec56d5de1",s:"projects",d:3,t:"Budgetary scope creep on Kettleridge recruitment films"},{id:"projects:c892b9bcdec2",s:"projects",d:4,t:"Kettleridge alumni series archive access issues"},{id:"projects:92f6a06a14ca",s:"projects",d:6,t:"Kettleridge Alumni Series Edit Revisions Summary"},{id:"projects:6d7285846a3b",s:"projects",d:20,t:"Kettleridge alumni series"},{id:"projects:431f381b2585",s:"projects",d:2,t:"Kettleridge Campus Access and Location Constraints"},{id:"projects:5b6d808f2e14",s:"projects",d:2,t:"Kettleridge series visual sign off and asset lock"},{id:"projects:44d972b37afb",s:"projects",d:3,t:"Kettleridge Uni Episode One Asset Signoff"},{id:"projects:ca087d5dba90",s:"projects",d:3,t:"Kettleridge University Travel Costs Overrun"},{id:"projects:8f95659d8d58",s:"projects",d:3,t:"KU Travel Shoot Contingency Planning for Episode Two"},{id:"projects:bb1633b88041",s:"projects",d:4,t:"Kettleridge alumni series stalled on asset delivery"},{id:"projects:749d7854ad15",s:"projects",d:2,t:"Kettleridge campus access restrictions and sign-off"},{id:"projects:083061a421bc",s:"projects",d:6,t:"Kettleridge Open Day video asset delivery status"},{id:"projects:b289c8064262",s:"projects",d:5,t:"Kettleridge Recruitment Film Structure Assessment"},{id:"projects:7529b93c14a5",s:"projects",d:19,t:"Kettleridge recruitment films 2026"},{id:"projects:ca49a7ee6ae6",s:"projects",d:2,t:"Kettleridge University alumni series cancellation implications"},{id:"projects:331efd86f0c3",s:"projects",d:1,t:"Kettleridge University Alumni Series Contributor Change"},{id:"projects:24f20331f7b0",s:"projects",d:3,t:"Kettleridge university alumni series status update"},{id:"projects:9a670359c4c2",s:"projects",d:6,t:"Kettleridge University second library music notes"},{id:"projects:33c0f58961e7",s:"projects",d:3,t:"Kettleridge University Social Caption Review Status"},{id:"projects:5bc16329a872",s:"projects",d:4,t:"Kettleridge vertical asset requirements tracking"},{id:"projects:723ab07c3ec8",s:"projects",d:5,t:"Kettleridge web team delivery requirements check"},{id:"projects:b03d94729bc2",s:"projects",d:2,t:"Student pool for Kettleridge recruitment films"},{id:"projects:6de99e59b673",s:"projects",d:3,t:"Motion template system"},{id:"projects:53f3a35116c9",s:"projects",d:3,t:"Stills Requirements For Tallgrass Outfitters Campaign"},{id:"projects:3baf1de5dbd4",s:"projects",d:2,t:"Tallgrass Outfitters final file spec requirements"},{id:"projects:dc7ad9f3f453",s:"projects",d:1,t:"Tallgrass Outfitters High Resolution Retouching Mandate"},{id:"projects:a5a49ac259c7",s:"projects",d:2,t:"Tallgrass Outfitters review process bottlenecks"},{id:"projects:acaa78da4ac5",s:"projects",d:2,t:"Tallgrass Outfitters usage rights negotiation status"},{id:"projects:11d6d012865a",s:"projects",d:6,t:"Tallgrass Stills Distribution Rights Specification"},{id:"projects:6312fb234768",s:"projects",d:1,t:"Tallgrass mountain material colour correction notes"},{id:"projects:473a90cf47ba",s:"projects",d:4,t:"Tallgrass outdoor apparel delivery pipeline issues"},{id:"projects:9d48ce9c1a19",s:"projects",d:3,t:"Tallgrass Outfits Moodboard Review Issues"},{id:"projects:c9a12bc2469d",s:"projects",d:4,t:"Tallgrass Outfitters Final Invoice Reconciliation Issues"},{id:"projects:ada2fc952daf",s:"projects",d:5,t:"Tallgrass Outfitters High Altitude Deliverables Prep"},{id:"projects:091b03402fe0",s:"projects",d:3,t:"Tallgrass Outfitters model release signatures"},{id:"projects:3166404d17cc",s:"projects",d:3,t:"Tallgrass Outfitters music search needs update"},{id:"projects:999a257409e5",s:"projects",d:3,t:"Tallgrass Outfitters specific product reshoot logistics"},{id:"projects:28d1ff44049d",s:"projects",d:5,t:"Tallgrass screen specs high resolution requirements"},{id:"projects:d4cc6839a6f1",s:"projects",d:5,t:"Tallgrass spring range deliverables timeline discussion"},{id:"projects:a4400d70f8ef",s:"projects",d:1,t:"Tallgrass vertical cutdowns review and spec sheet"},{id:"projects:fa2866f703ae",s:"projects",d:3,t:"Tallgrass visual selection workflow review"},{id:"projects:ac0614ceb006",s:"projects",d:1,t:"Tallgrass winter range battery and field requirements"},{id:"projects:e3a41bd9b1e6",s:"projects",d:24,t:"Tallgrass winter range films"},{id:"operations:1a3c959f5b72",s:"operations",d:3,t:"Annual Subscription Costs And Renewal Dates"},{id:"operations:ada4ded60d2f",s:"operations",d:3,t:"Booking Chaos Regarding the Small Conference Room"},{id:"operations:8e78147c1f97",s:"operations",d:2,t:"Captioning and Subtitling Deliverable Handover Protocol"},{id:"operations:48e676a0dea2",s:"operations",d:5,t:"Client Payment Schedule and Standard Terms"},{id:"operations:afcc8de6075f",s:"operations",d:3,t:"Client Raw Media Intake Protocol"},{id:"operations:8fe340438117",s:"operations",d:4,t:"Client Requesting Source Project Files Protocol"},{id:"operations:ee934e3e1275",s:"operations",d:10,t:"Cape Line supplier agreement"},{id:"operations:d99c1a32c08e",s:"operations",d:14,t:"Drybank Brewing retainer 2026"},{id:"operations:4533c30f1919",s:"operations",d:20,t:"Tallgrass Outfitters master agreement 2026"},{id:"operations:a6eee751e736",s:"operations",d:6,t:"Council Permits For Tallgrass Outdoor Shoots"},{id:"operations:d2fed580dd0f",s:"operations",d:3,t:"Current Status of the Post Production Reel"},{id:"operations:f988bf333d81",s:"operations",d:19,t:"Alderpoint Health brand guidelines"},{id:"operations:cc03a3090742",s:"operations",d:1,t:"Cape Line delivery specification 2025"},{id:"operations:100a2fae4a51",s:"operations",d:9,t:"Cape Line delivery specification 2026 update"},{id:"operations:d0213106e05f",s:"operations",d:3,t:"Finished Job Master File Storage Protocol"},{id:"operations:5d88eabe2d86",s:"operations",d:3,t:"Fire Safety Checklist Review Annual Building Check"},{id:"operations:30ae30eb7633",s:"operations",d:3,t:"Freelancer Workflow Requirements and Deliverable Handover"},{id:"operations:a5c884a200b7",s:"operations",d:3,t:"Grading Monitor Calibration Needs Attention"},{id:"operations:c627ab4e0bb6",s:"operations",d:4,t:"Guest Network and Internal Device Access Protocol"},{id:"operations:04d7d7bfc7db",s:"operations",d:6,t:"Insurance and errors and omissions"},{id:"operations:b0c9cd50e1d2",s:"operations",d:5,t:"Keystock footage distributor has gone dark"},{id:"operations:669059ca8381",s:"operations",d:8,t:"Drybank spring campaign music clearance"},{id:"operations:a2cf4dec74c6",s:"operations",d:6,t:"Music library accounts"},{id:"operations:59450030097e",s:"operations",d:1,t:"LTO Archive Contents Breakdown by Tape Label"},{id:"operations:3f56087e937e",s:"operations",d:4,t:"New Client Intake Procedure Checklist"},{id:"operations:e23dc12fda0c",s:"operations",d:2,t:"Office Plant Care and Watering Schedule"},{id:"operations:1ed76b3575c8",s:"operations",d:3,t:"Physical Media Requirements and Dispatch Process"},{id:"operations:0b1f677b3fee",s:"operations",d:3,t:"Project Milestone Naming and Internal Tracking"},{id:"operations:aa08fb1fcbe8",s:"operations",d:4,t:"Q3 Office Equipment and Liability Policy Review"},{id:"operations:cf406eaaa8c2",s:"operations",d:8,t:"Reimbursement procedure for freelance subcontractors"},{id:"operations:76f6b3757732",s:"operations",d:4,t:"Render Farm Downtime Schedule and Contingency Planning"},{id:"operations:5d2975ca9170",s:"operations",d:4,t:"Required Delivery File Structure Protocol"},{id:"operations:86a09aab4e1d",s:"operations",d:3,t:"Required Monitoring Standards for Sound Mix Checks"},{id:"operations:8a1fa85dbbf1",s:"operations",d:4,t:"Retainer Invoicing and Client Chase Protocol"},{id:"operations:d9e4ea08522d",s:"operations",d:3,t:"Rush Job Quoting Process Steps"},{id:"operations:681e4dca2b9e",s:"operations",d:5,t:"Second Suite Colour Calibration Procedure and Issues"},{id:"operations:61419b1b0f81",s:"operations",d:4,t:"Source File Retention Policy For Project Archives"},{id:"operations:d862e3cae668",s:"operations",d:3,t:"Stock Library Usage and Licensing Restrictions"},{id:"operations:d043fbae1bd1",s:"operations",d:3,t:"Studio Key Distribution and Access Protocols"},{id:"operations:39a543e8c62a",s:"operations",d:23,t:"Project kickoff template"},{id:"operations:304316f72231",s:"operations",d:43,t:"Vantrell delivery checklist"},{id:"operations:8d200a040bc3",s:"operations",d:3,t:"The external archive drive failure in 2024"},{id:"operations:af477bc78673",s:"operations",d:3,t:"The reason shared drive folders are never the same"},{id:"operations:f1cb70a10508",s:"operations",d:44,t:"Vantrell rate card 2026"},{id:"operations:3e1d95ef7a24",s:"operations",d:2,t:"When talent releases are required and filed"},{id:"people:2183b8a7f795",s:"people",d:7,t:"Aditi Raval"},{id:"people:6cc7f846b08a",s:"people",d:8,t:"Alderpoint Health comms point of contact status"},{id:"people:94942648d174",s:"people",d:5,t:"Alderpoint Health prior agency briefing review"},{id:"people:fb090c544632",s:"people",d:5,t:"Broker contact details and renewal cycle notes"},{id:"people:8e49ecdcab81",s:"people",d:4,t:"Cape Line broadcast contact details and handover process"},{id:"people:e550a5cef532",s:"people",d:3,t:"Cape Line contact requires specific delivery signoff procedures"},{id:"people:c34ad8d17ed3",s:"people",d:30,t:"Client and supplier contacts"},{id:"people:edce48a07c77",s:"people",d:13,t:"Dagny Restrepo"},{id:"people:f27ce6a59c45",s:"people",d:4,t:"Drybank Agency Producer Communication Style and Delays"},{id:"people:da53a836eb3c",s:"people",d:3,t:"Drybank Brewing new marketing contact updates"},{id:"people:5ea566bb9042",s:"people",d:4,t:"External field recording specialist notes"},{id:"people:ddaa1b924478",s:"people",d:4,t:"Freelance DOP preferred for outdoor shoots"},{id:"people:7cf4b4381104",s:"people",d:7,t:"Ilias Novak"},{id:"people:5d03a440b050",s:"people",d:4,t:"Kettleridge alumni series dead and the recruitment files"},{id:"people:27bdea058a52",s:"people",d:4,t:"Kettleridge University office point of contact details"},{id:"people:4b315d644077",s:"people",d:11,t:"Kofi Mensah-Barr"},{id:"people:e3490b1bd43d",s:"people",d:4,t:"Need for second freelance editor capacity"},{id:"people:597a3593909f",s:"people",d:9,t:"Reine Okonjo"},{id:"people:45c64c9fc514",s:"people",d:12,t:"Sunniva Aalto"},{id:"people:180982616a8a",s:"people",d:4,t:"Tallgrass Outfitters Client Interaction Observations"},{id:"people:3242278a3321",s:"people",d:4,t:"Temporary Support Staffing During School Holidays"},{id:"people:f88b51f38ae6",s:"people",d:4,t:"The ongoing battle with external financial processing"},{id:"people:976c938c62fc",s:"people",d:5,t:"Tomas Bergeron"},{id:"people:594c2d7cc49d",s:"people",d:7,t:"Wren Castellanos"},{id:"decisions:1f711d572af7",s:"decisions",d:3,t:"Alderpoint health network rate adjustment rationale"},{id:"decisions:922f13d73070",s:"decisions",d:3,t:"Annual Reel Rebuild Triggers Account Strategy Shifts"},{id:"decisions:c63ab69e993d",s:"decisions",d:4,t:"Billing Rate for New Client Kickoff Meetings"},{id:"decisions:1f9faf63084e",s:"decisions",d:5,t:"Consolidating Project Tracking Systems Across Accounts"},{id:"decisions:67385950e96d",s:"decisions",d:3,t:"Dagny Restrepo colour grading dependency review"},{id:"decisions:4fa1f0c2f73f",s:"decisions",d:12,t:"Deliver everything to broadcast specification"},{id:"decisions:de749e1c3abf",s:"decisions",d:8,t:"Delivery Date Agreement Authority Levels"},{id:"decisions:69a726c7087c",s:"decisions",d:4,t:"Invoice Trigger Shifts From Client Approval to Final Delivery"},{id:"decisions:d33e9a1328f2",s:"decisions",d:5,t:"Junior role fills specific capacity gap"},{id:"decisions:6508c383006e",s:"decisions",d:4,t:"Keep Secondary Music Library Subscription"},{id:"decisions:f1af11c7e68b",s:"decisions",d:3,t:"Legacy Edit Suite Maintenance Protocol for Archive Conforms"},{id:"decisions:b6e35688d973",s:"decisions",d:4,t:"Migrate archive from unreliable spinning disks"},{id:"decisions:21acd9a36dc7",s:"decisions",d:5,t:"Need for second rendering node due to capacity issues"},{id:"decisions:a1a0cf0da04e",s:"decisions",d:5,t:"Reel Scope Exclusions Policy Post Alderpoint Review"},{id:"decisions:d74b8653a513",s:"decisions",d:12,t:"Standardise on one edit pipeline"},{id:"decisions:994afea4d58f",s:"decisions",d:4,t:"Standardised Captions Workflow Requirement Set"},{id:"decisions:8d6b467654af",s:"decisions",d:10,t:"Take the Tallgrass exclusivity"},{id:"decisions:54d927368366",s:"decisions",d:3,t:"Unpaid Pitches Are Not Part Of Our Scope"},{id:"decisions:67f38682f382",s:"decisions",d:5,t:"Weddings Do Not Align With Studio Focus"},{id:"decisions:42f8a2905283",s:"decisions",d:2,t:"weekend rates do not cover emergency revisions"},{id:"decisions:ed530142f678",s:"decisions",d:8,t:"Who uses which AI tools"},{id:"research:f1cc8b10efdb",s:"research",d:3,t:"Accented Voice Recognition Fails On Sound Design"},{id:"research:81033a116a04",s:"research",d:5,t:"Audio description workflow for visual content"},{id:"research:ba0b8ec93e1a",s:"research",d:3,t:"Brand Film Length Varies By Client Goals"},{id:"research:f68d12cab680",s:"research",d:7,t:"Broadcast loudness standards, a plain explanation"},{id:"research:937a2573e0e0",s:"research",d:4,t:"Burned Captions Versus Separate Sidecar Delivery"},{id:"research:569802adaaef",s:"research",d:3,t:"Client Tolerance for Remote Review Platforms"},{id:"research:aed45f3e8f30",s:"research",d:4,t:"Documentary funding relies heavily on regional council decisions"},{id:"research:38f43580097c",s:"research",d:3,t:"Drybank Brewing Agency Markup Process Observations"},{id:"research:f2964af4898c",s:"research",d:3,t:"Drybank Brewing feedback tends to involve agencies"},{id:"research:9271e8ea83a3",s:"research",d:4,t:"DSLR versus Cinema Camera Logistics"},{id:"research:3c8c12b9afae",s:"research",d:3,t:"European short film festival submission requirements and fees"},{id:"research:d7103994ac4b",s:"research",d:3,t:"HDR requirement status across current clients"},{id:"research:c6c00f95fb1c",s:"research",d:4,t:"Market Rates for High End Short Form Content"},{id:"research:69af4b1bd02c",s:"research",d:3,t:"Need for Dedicated Studio Space Assessment"},{id:"research:e4ab4c934dc8",s:"research",d:3,t:"Platform Encoding Loss and Delivery Specs"},{id:"research:82ce923df093",s:"research",d:3,t:"Podcast video feasibility and studio capacity"},{id:"research:5d6f7d9e4f15",s:"research",d:4,t:"Provincial drone flight regulations for outdoor shoots"},{id:"research:a849e4d7510f",s:"research",d:3,t:"Questions That Bypass Client Gloss"},{id:"research:b5dc6830fe06",s:"research",d:3,t:"Recruitment Films Must Show the Day To Day Reality"},{id:"research:37d65b79086a",s:"research",d:18,t:"Regional production companys, a look at the competition"},{id:"research:3d0acfc7eef0",s:"research",d:3,t:"Social Media Frame Rate Conversion Guidance"},{id:"research:7afb31b06056",s:"research",d:3,t:"Stock Music Licensing Versus Custom Scoring Budgeting"},{id:"research:94ffb9c8706e",s:"research",d:3,t:"Technical hurdles of live stream delivery"},{id:"research:bb5c5276c300",s:"research",d:3,t:"Three-point lighting standard for doc interviews"},{id:"research:0ab1a718e29d",s:"research",d:8,t:"Vertical formats for recruitment, what actually works"},{id:"ideas:ef419dd7c8da",s:"ideas",d:4,t:"Archive Material Digitisation Service Pitch"},{id:"ideas:eff4c454b659",s:"ideas",d:3,t:"Cape Line delivery spec briefing for clients"},{id:"ideas:8b0c25b192bf",s:"ideas",d:3,t:"Drybank Brewing agency demands rebrand narrative"},{id:"ideas:0626eb523f4a",s:"ideas",d:4,t:"Drybank Brewing Christmas content concept"},{id:"ideas:ebd35b42ad69",s:"ideas",d:4,t:"Ferry Operator Pitch Needs Quick Review"},{id:"ideas:5f6e055b4894",s:"ideas",d:3,t:"Grade Suite Booking Policy and Costs"},{id:"ideas:edfe81dd39c5",s:"ideas",d:3,t:"Harbour documentary potential scope and constraints"},{id:"ideas:ee8b335ee767",s:"ideas",d:3,t:"Health Communications Niche Viability Assessment"},{id:"ideas:67f4ab6bcaa5",s:"ideas",d:3,t:"Local Trades Documentary Series Potential Pitch"},{id:"ideas:c3192da73c80",s:"ideas",d:3,t:"Monthly Social Content Package Feasibility Study"},{id:"ideas:857d88865476",s:"ideas",d:4,t:"Our own marketing is the job nobody books"},{id:"ideas:f71029b803c3",s:"ideas",d:3,t:"Regional tourism board"},{id:"ideas:c889074992d0",s:"ideas",d:4,t:"Ridgeway Gear approach"},{id:"ideas:e55291f87627",s:"ideas",d:3,t:"Short Form Abstract for Reel Showcase"},{id:"ideas:c1dc429d2ff5",s:"ideas",d:3,t:"Stills photographer for product content"},{id:"ideas:c6fa08104bac",s:"ideas",d:4,t:"Studio Podcast Scope and Resource Assessment"},{id:"ideas:c47dd0f59771",s:"ideas",d:3,t:"Using Kettleridge materials for student modules"},{id:"memory:aa1f83764640",s:"memory",d:4,t:"24 June 2026"},{id:"memory:554c29c83836",s:"memory",d:5,t:"11 September 2026"},{id:"memory:d2af40c89466",s:"memory",d:6,t:"Alderpoint comms review stalled by spec lock"},{id:"memory:d5e55cab0b0d",s:"memory",d:6,t:"Alderpoint comms review stuck on branding guidelines"},{id:"memory:8542d12a741d",s:"memory",d:4,t:"Alderpoint health comms review stalled on brand guidelines"},{id:"memory:cbc196f92b1e",s:"memory",d:5,t:"Alderpoint Health spec review stalled by sound pass"},{id:"memory:5b5a459a325c",s:"memory",d:4,t:"Alderpoint spec review stalled by colour grade feedback"},{id:"memory:08535ef271a7",s:"memory",d:5,t:"Cape Line delivery specs causing Alderpoint review delays"},{id:"memory:23d2f2c7d216",s:"memory",d:4,t:"Cape Line delivery specs still pending approval"},{id:"memory:7b9e8af3cc00",s:"memory",d:4,t:"Cape Line spec delay and Drybank revisions"},{id:"memory:d286467d044d",s:"memory",d:4,t:"Cape Line spec requirements causing sound mix hold up"},{id:"memory:e3f2600c9539",s:"memory",d:5,t:"Drybank agency call stall and Tallgrass colour review"},{id:"memory:1336c80422b9",s:"memory",d:4,t:"Drybank Agency delivery specs causing Sunday night panic"},{id:"memory:83c46db56942",s:"memory",d:4,t:"Drybank agency feedback cycle and Ilias's confusion"},{id:"memory:e4e54235d234",s:"memory",d:4,t:"Drybank agency feedback cycle stall"},{id:"memory:dfd2f57520f7",s:"memory",d:3,t:"Drybank brewery agency calls stall delivery flow"},{id:"memory:9774544dd95a",s:"memory",d:3,t:"Drybank Brewing agency query and Alderpoint spec review"},{id:"memory:5c53fdc0e437",s:"memory",d:5,t:"Drybank Brewing agency review stalled on colour grade"},{id:"memory:844c92809f5d",s:"memory",d:4,t:"Drybank brewing reel is stuck on colour grade"},{id:"memory:f6142de2b599",s:"memory",d:5,t:"Drybank Brewing review cycle stalls again"},{id:"memory:2ea3ec1a3eac",s:"memory",d:4,t:"Drybank Brewing review delayed by agency sign-off"},{id:"memory:cab15ca96571",s:"memory",d:4,t:"Drybank cutdown held up by agency feedback"},{id:"memory:64a3c9e4be30",s:"memory",d:4,t:"Drybank deliverables stall over legal review"},{id:"memory:337815036a53",s:"memory",d:4,t:"Drybank delivery blocked by agency sign-off"},{id:"memory:a8609806d16d",s:"memory",d:5,t:"Drybank delivery blocked by Alderpoint spec query"},{id:"memory:ab0770a23f25",s:"memory",d:5,t:"Drybank delivery stalls waiting for Alderpoint sign-off"},{id:"memory:3c029334a42a",s:"memory",d:6,t:"Drybank delivery timeline confusion and Alderpoint strictness"},{id:"memory:30f47cf750ff",s:"memory",d:3,t:"Drybank demands re-sizzle before Cape Line delivery"},{id:"memory:5ba9910071b4",s:"memory",d:4,t:"Drybank reel pacing and Kettleridge asset handover"},{id:"memory:6117ac647e01",s:"memory",d:4,t:"Drybank review cycle stalled awaiting agency signoff"},{id:"memory:5c349f38776e",s:"memory",d:4,t:"Drybank review delays impacting Tallgrass finalisation"},{id:"memory:8523095d2859",s:"memory",d:3,t:"Drybank review feedback causes Alderpoint delivery delays"},{id:"memory:656ad266e551",s:"memory",d:4,t:"Drybank review feedback cycle and Kettleridge archive access"},{id:"memory:5bec3c83fe2f",s:"memory",d:5,t:"Drybank revisions and Cape Line specs stall"},{id:"memory:108f93445dea",s:"memory",d:5,t:"Ilias's new footage confusion on Tallgrass delivery"},{id:"memory:bf0f340ad304",s:"memory",d:3,t:"Kettleridge alumni reel stuck in colour grade"},{id:"memory:04562399d01e",s:"memory",d:4,t:"Kettleridge script review stalled on agency feedback"},{id:"memory:4b4472e9afef",s:"memory",d:4,t:"Tallgrass colour grading stalled after briefing"},{id:"memory:e6e39539bd3b",s:"memory",d:3,t:"Tallgrass colour review and Alderpoint spec hold up"},{id:"memory:cb7f3035d848",s:"memory",d:3,t:"Tallgrass Colouring Delay Affects Alderpoint Deliverables"},{id:"memory:e674341d0685",s:"memory",d:3,t:"Tallgrass review cycle stalling over colour grade feedback"}],links:[["projects:ade1671a0fc3","people:c34ad8d17ed3","link"],["projects:0f0b18f9922d","operations:f988bf333d81","link"],["projects:7d08872da56d","operations:304316f72231","link"],["projects:1b32ddc20396","operations:f988bf333d81","link"],["projects:3dcc92d9f1e2","operations:f988bf333d81","link"],["projects:3dcc92d9f1e2","operations:f1cb70a10508","link"],["projects:1786b5236fce","operations:f988bf333d81","link"],["projects:cbd0df0ebb88","operations:f988bf333d81","link"],["projects:805ff00d7133","decisions:d74b8653a513","link"],["projects:c3836e78e4e0","operations:f988bf333d81","link"],["projects:2a459de7bdc2","operations:304316f72231","link"],["projects:c2ce15ae175b","projects:59ba21553f8a","link"],["projects:c2ce15ae175b","operations:39a543e8c62a","link"],["projects:1e1fe5956f7f","operations:f988bf333d81","link"],["projects:36d5ac5c4b8e","operations:39a543e8c62a","link"],["projects:2e3a05ff63f2","operations:f988bf333d81","link"],["projects:0e10d5a9f2de","operations:100a2fae4a51","link"],["projects:4544f34aab28","operations:304316f72231","link"],["projects:b07648de7606","projects:59ba21553f8a","link"],["projects:b07648de7606","operations:f1cb70a10508","link"],["projects:59ba21553f8a","operations:f988bf333d81","link"],["projects:dd75759c7ef4","projects:59ba21553f8a","link"],["projects:dd75759c7ef4","operations:304316f72231","link"],["projects:d8aa8e6fb545","operations:f988bf333d81","link"],["projects:32284f612903","operations:39a543e8c62a","link"],["projects:32284f612903","operations:f1cb70a10508","link"],["projects:9150e078ee40","operations:304316f72231","link"],["projects:9150e078ee40","operations:39a543e8c62a","link"],["projects:b027e0d66c9b","decisions:d74b8653a513","link"],["projects:7c05f2f0b348","operations:39a543e8c62a","link"],["projects:7c05f2f0b348","operations:f1cb70a10508","link"],["projects:9234c42659f7","operations:39a543e8c62a","link"],["projects:bcf0398d3fb6","decisions:4fa1f0c2f73f","link"],["projects:1133f2511847","operations:f1cb70a10508","link"],["projects:1133f2511847","operations:39a543e8c62a","link"],["projects:171ffaa09f8a","operations:ee934e3e1275","link"],["projects:d8a2b8ede917","projects:7529b93c14a5","link"],["projects:d8a2b8ede917","projects:6d7285846a3b","link"],["projects:258a4d06eb13","operations:f988bf333d81","link"],["projects:9d1f4c1e516c","operations:4533c30f1919","link"],["projects:0ea8313f7b5b","operations:304316f72231","link"],["projects:a765a7b0168a","operations:304316f72231","link"],["projects:3bc50625ca13","operations:39a543e8c62a","link"],["projects:baa4c8e81547","operations:39a543e8c62a","link"],["projects:d771f3e5bb79","people:c34ad8d17ed3","link"],["projects:b987fb41db6e","decisions:4fa1f0c2f73f","link"],["projects:e1d6d99e5667","operations:304316f72231","link"],["projects:55ea8a9663e1","operations:f1cb70a10508","link"],["projects:55ea8a9663e1","operations:39a543e8c62a","link"],["projects:88da2f855e09","people:c34ad8d17ed3","link"],["projects:6b4d427a894f","operations:39a543e8c62a","link"],["projects:6b4d427a894f","operations:304316f72231","link"],["projects:1151241ebf46","operations:f1cb70a10508","link"],["projects:b7e1eeb4daba","projects:7529b93c14a5","link"],["projects:b460ef337da8","operations:a2cf4dec74c6","link"],["projects:f6375c1edf01","operations:f1cb70a10508","link"],["projects:f6375c1edf01","operations:304316f72231","link"],["projects:eb239ac41ab5","operations:304316f72231","link"],["projects:8042fe4829bd","operations:39a543e8c62a","link"],["projects:dd057a791d15","operations:304316f72231","link"],["projects:fd84b25234d1","operations:304316f72231","link"],["projects:fd84b25234d1","operations:f1cb70a10508","link"],["projects:362bf9c0854f","operations:4533c30f1919","link"],["projects:91059f80ea43","operations:39a543e8c62a","link"],["projects:91059f80ea43","operations:f1cb70a10508","link"],["projects:1502221c1ec1","decisions:d74b8653a513","link"],["projects:d9cdb861a093","operations:d99c1a32c08e","link"],["projects:e7da4b5d259b","operations:d99c1a32c08e","link"],["projects:441c3eacd655","projects:005856be1e96","link"],["projects:f7b1124c3f14","operations:d99c1a32c08e","link"],["projects:b940cd8a5518","operations:d99c1a32c08e","link"],["projects:e34dea37826e","operations:f1cb70a10508","link"],["projects:624f7fc6a6a7","operations:d99c1a32c08e","link"],["projects:b9a040b19e70","operations:d99c1a32c08e","link"],["projects:a7d5c7147514","projects:005856be1e96","link"],["projects:a7d5c7147514","operations:304316f72231","link"],["projects:66eede52cc76","projects:c8da728ff0a3","link"],["projects:5ffbcbc45f10","projects:005856be1e96","link"],["projects:6d425528f387","projects:005856be1e96","link"],["projects:6d425528f387","operations:f1cb70a10508","link"],["projects:84873a0addeb","projects:005856be1e96","link"],["projects:84873a0addeb","operations:304316f72231","link"],["projects:005856be1e96","projects:c8da728ff0a3","link"],["projects:005856be1e96","operations:d99c1a32c08e","link"],["projects:74e850a8d2d6","projects:005856be1e96","link"],["projects:3e0fba38b6ab","operations:f1cb70a10508","link"],["projects:cc9d9032fc16","decisions:ed530142f678","link"],["projects:e23ec9dac87c","projects:c8da728ff0a3","link"],["projects:e23ec9dac87c","operations:f1cb70a10508","link"],["projects:5048206ddf3c","projects:c8da728ff0a3","link"],["projects:e7850ad76880","decisions:4fa1f0c2f73f","link"],["projects:40a0a456da19","projects:c8da728ff0a3","link"],["projects:40a0a456da19","operations:304316f72231","link"],["projects:e45ffa60b7f5","operations:d99c1a32c08e","link"],["projects:cbbd09c31020","projects:c8da728ff0a3","link"],["projects:cbbd09c31020","operations:39a543e8c62a","link"],["projects:00499cc29465","projects:c8da728ff0a3","link"],["projects:00499cc29465","operations:39a543e8c62a","link"],["projects:f0f49614d0df","operations:d99c1a32c08e","link"],["projects:f0f49614d0df","projects:005856be1e96","link"],["projects:c8da728ff0a3","operations:39a543e8c62a","link"],["projects:c8da728ff0a3","operations:d99c1a32c08e","link"],["operations:669059ca8381","projects:c8da728ff0a3","link"],["projects:41b5204b98af","projects:c8da728ff0a3","link"],["projects:f38dd8fc24f3","projects:c8da728ff0a3","link"],["projects:7078340e6b9f","projects:c8da728ff0a3","link"],["projects:7078340e6b9f","operations:39a543e8c62a","link"],["projects:d8cc307ffba6","projects:005856be1e96","link"],["projects:5849e46d5775","projects:c8da728ff0a3","link"],["projects:17f1af198bf7","projects:c8da728ff0a3","link"],["projects:6d7285846a3b","projects:982c7d1a4cad","link"],["projects:33842c5ef674","projects:59ba21553f8a","link"],["projects:718ec56d5de1","projects:6d7285846a3b","link"],["projects:c892b9bcdec2","people:c34ad8d17ed3","link"],["projects:92f6a06a14ca","operations:304316f72231","link"],["projects:431f381b2585","projects:6d7285846a3b","link"],["projects:5b6d808f2e14","projects:7529b93c14a5","link"],["projects:44d972b37afb","projects:6d7285846a3b","link"],["projects:ca087d5dba90","projects:6d7285846a3b","link"],["projects:8f95659d8d58","projects:6d7285846a3b","link"],["projects:bb1633b88041","projects:7529b93c14a5","link"],["projects:749d7854ad15","operations:39a543e8c62a","link"],["projects:083061a421bc","operations:39a543e8c62a","link"],["projects:b289c8064262","projects:7529b93c14a5","link"],["projects:b289c8064262","operations:304316f72231","link"],["projects:ca49a7ee6ae6","projects:7529b93c14a5","link"],["projects:331efd86f0c3","projects:7529b93c14a5","link"],["projects:24f20331f7b0","operations:304316f72231","link"],["projects:9a670359c4c2","projects:7529b93c14a5","link"],["projects:33c0f58961e7","people:c34ad8d17ed3","link"],["projects:5bc16329a872","people:c34ad8d17ed3","link"],["projects:723ab07c3ec8","projects:7529b93c14a5","link"],["projects:b03d94729bc2","projects:6d7285846a3b","link"],["projects:3baf1de5dbd4","operations:4533c30f1919","link"],["projects:dc7ad9f3f453","operations:304316f72231","link"],["projects:a5a49ac259c7","operations:4533c30f1919","link"],["projects:acaa78da4ac5","operations:4533c30f1919","link"],["projects:acaa78da4ac5","operations:f1cb70a10508","link"],["projects:11d6d012865a","operations:4533c30f1919","link"],["operations:f1cb70a10508","projects:11d6d012865a","link"],["projects:6312fb234768","people:c34ad8d17ed3","link"],["projects:473a90cf47ba","projects:e3a41bd9b1e6","link"],["projects:9d48ce9c1a19","projects:e3a41bd9b1e6","link"],["projects:c9a12bc2469d","operations:f1cb70a10508","link"],["projects:ada2fc952daf","operations:4533c30f1919","link"],["projects:091b03402fe0","operations:304316f72231","link"],["projects:3166404d17cc","operations:a2cf4dec74c6","link"],["projects:999a257409e5","operations:4533c30f1919","link"],["projects:28d1ff44049d","projects:e3a41bd9b1e6","link"],["projects:28d1ff44049d","operations:f1cb70a10508","link"],["projects:d4cc6839a6f1","projects:e3a41bd9b1e6","link"],["operations:304316f72231","projects:d4cc6839a6f1","link"],["projects:a4400d70f8ef","projects:e3a41bd9b1e6","link"],["projects:fa2866f703ae","projects:e3a41bd9b1e6","link"],["projects:ac0614ceb006","projects:e3a41bd9b1e6","link"],["projects:e3a41bd9b1e6","operations:4533c30f1919","link"],["operations:1a3c959f5b72","operations:304316f72231","link"],["operations:1a3c959f5b72","projects:11d6d012865a","link"],["operations:1a3c959f5b72","projects:2e3a05ff63f2","link"],["operations:8e78147c1f97","people:c34ad8d17ed3","link"],["operations:8e78147c1f97","operations:04d7d7bfc7db","link"],["operations:48e676a0dea2","people:c34ad8d17ed3","link"],["operations:48e676a0dea2","projects:0e10d5a9f2de","link"],["operations:48e676a0dea2","projects:5849e46d5775","link"],["operations:afcc8de6075f","operations:4533c30f1919","link"],["operations:afcc8de6075f","projects:53f3a35116c9","link"],["operations:afcc8de6075f","projects:258a4d06eb13","link"],["operations:8fe340438117","projects:17f1af198bf7","link"],["operations:8fe340438117","projects:441c3eacd655","link"],["operations:04d7d7bfc7db","operations:ee934e3e1275","link"],["operations:ee934e3e1275","operations:100a2fae4a51","link"],["operations:d99c1a32c08e","operations:f1cb70a10508","link"],["operations:d99c1a32c08e","projects:5bc16329a872","link"],["operations:d99c1a32c08e","projects:0ea8313f7b5b","link"],["decisions:8d6b467654af","operations:4533c30f1919","link"],["operations:4533c30f1919","projects:74e850a8d2d6","link"],["operations:4533c30f1919","projects:55ea8a9663e1","link"],["operations:a6eee751e736","projects:6d7285846a3b","link"],["operations:a6eee751e736","projects:11d6d012865a","link"],["operations:d2fed580dd0f","projects:6d7285846a3b","link"],["operations:d2fed580dd0f","projects:44d972b37afb","link"],["operations:d2fed580dd0f","projects:3ed515ad94ec","link"],["operations:f988bf333d81","operations:304316f72231","link"],["operations:100a2fae4a51","operations:cc03a3090742","link"],["operations:100a2fae4a51","operations:304316f72231","link"],["operations:100a2fae4a51","projects:8f95659d8d58","link"],["operations:100a2fae4a51","projects:258a4d06eb13","link"],["operations:d0213106e05f","operations:4533c30f1919","link"],["operations:d0213106e05f","projects:88da2f855e09","link"],["operations:d0213106e05f","projects:005856be1e96","link"],["operations:5d88eabe2d86","people:c34ad8d17ed3","link"],["operations:5d88eabe2d86","projects:92f6a06a14ca","link"],["operations:5d88eabe2d86","projects:083061a421bc","link"],["operations:a5c884a200b7","operations:f1cb70a10508","link"],["operations:c627ab4e0bb6","operations:39a543e8c62a","link"],["operations:c627ab4e0bb6","projects:7529b93c14a5","link"],["operations:c627ab4e0bb6","projects:d9cdb861a093","link"],["operations:04d7d7bfc7db","people:c34ad8d17ed3","link"],["operations:04d7d7bfc7db","projects:f6375c1edf01","link"],["operations:04d7d7bfc7db","projects:d4cc6839a6f1","link"],["operations:b0c9cd50e1d2","people:c34ad8d17ed3","link"],["operations:b0c9cd50e1d2","projects:7078340e6b9f","link"],["operations:b0c9cd50e1d2","projects:e23ec9dac87c","link"],["operations:669059ca8381","projects:7d08872da56d","link"],["operations:669059ca8381","projects:ca087d5dba90","link"],["operations:a2cf4dec74c6","operations:669059ca8381","link"],["operations:a2cf4dec74c6","projects:ada2fc952daf","link"],["operations:a2cf4dec74c6","projects:b289c8064262","link"],["operations:59450030097e","operations:4533c30f1919","link"],["operations:3f56087e937e","operations:f1cb70a10508","link"],["operations:3f56087e937e","projects:55ea8a9663e1","link"],["operations:3f56087e937e","projects:5048206ddf3c","link"],["operations:e23dc12fda0c","people:c34ad8d17ed3","link"],["operations:1ed76b3575c8","operations:f988bf333d81","link"],["operations:0b1f677b3fee","operations:4533c30f1919","link"],["operations:0b1f677b3fee","projects:f6375c1edf01","link"],["operations:0b1f677b3fee","projects:624f7fc6a6a7","link"],["operations:aa08fb1fcbe8","operations:304316f72231","link"],["operations:aa08fb1fcbe8","projects:d8cc307ffba6","link"],["operations:aa08fb1fcbe8","projects:0ea8313f7b5b","link"],["operations:cf406eaaa8c2","operations:4533c30f1919","link"],["operations:cf406eaaa8c2","projects:a5a49ac259c7","link"],["operations:cf406eaaa8c2","projects:40a0a456da19","link"],["operations:76f6b3757732","people:c34ad8d17ed3","link"],["operations:5d2975ca9170","people:c34ad8d17ed3","link"],["operations:5d2975ca9170","operations:f1cb70a10508","link"],["operations:5d2975ca9170","projects:d9cdb861a093","link"],["operations:5d2975ca9170","projects:55ea8a9663e1","link"],["operations:86a09aab4e1d","operations:304316f72231","link"],["operations:86a09aab4e1d","projects:9a670359c4c2","link"],["operations:86a09aab4e1d","projects:6d7285846a3b","link"],["operations:8a1fa85dbbf1","operations:4533c30f1919","link"],["operations:8a1fa85dbbf1","projects:59ba21553f8a","link"],["operations:8a1fa85dbbf1","projects:c8da728ff0a3","link"],["operations:d9e4ea08522d","operations:f1cb70a10508","link"],["operations:681e4dca2b9e","projects:bcf0398d3fb6","link"],["operations:681e4dca2b9e","projects:f6375c1edf01","link"],["operations:61419b1b0f81","operations:f988bf333d81","link"],["operations:61419b1b0f81","projects:c8da728ff0a3","link"],["operations:61419b1b0f81","projects:723ab07c3ec8","link"],["operations:d862e3cae668","people:c34ad8d17ed3","link"],["operations:d862e3cae668","projects:1e1fe5956f7f","link"],["operations:d862e3cae668","projects:17f1af198bf7","link"],["operations:d043fbae1bd1","projects:c8da728ff0a3","link"],["operations:d043fbae1bd1","projects:9234c42659f7","link"],["operations:d043fbae1bd1","projects:d771f3e5bb79","link"],["operations:39a543e8c62a","projects:24f20331f7b0","link"],["operations:39a543e8c62a","projects:a7d5c7147514","link"],["operations:304316f72231","projects:431f381b2585","link"],["operations:8d200a040bc3","projects:59ba21553f8a","link"],["operations:af477bc78673","operations:304316f72231","link"],["operations:f1cb70a10508","projects:f0f49614d0df","link"],["operations:3e1d95ef7a24","people:c34ad8d17ed3","link"],["people:2183b8a7f795","projects:ada2fc952daf","link"],["people:2183b8a7f795","decisions:67f38682f382","link"],["people:2183b8a7f795","projects:cbd0df0ebb88","link"],["people:6cc7f846b08a","operations:f988bf333d81","link"],["people:6cc7f846b08a","projects:c9a12bc2469d","link"],["people:6cc7f846b08a","projects:f6375c1edf01","link"],["people:6cc7f846b08a","projects:cbd0df0ebb88","link"],["people:94942648d174","people:c34ad8d17ed3","link"],["people:94942648d174","operations:f1cb70a10508","link"],["people:94942648d174","decisions:de749e1c3abf","link"],["people:94942648d174","projects:0ea8313f7b5b","link"],["people:94942648d174","projects:9234c42659f7","link"],["people:fb090c544632","operations:f1cb70a10508","link"],["people:fb090c544632","people:c34ad8d17ed3","link"],["people:fb090c544632","decisions:b6e35688d973","link"],["people:fb090c544632","projects:b03d94729bc2","link"],["people:fb090c544632","projects:1502221c1ec1","link"],["people:8e49ecdcab81","operations:ee934e3e1275","link"],["people:8e49ecdcab81","decisions:6508c383006e","link"],["people:8e49ecdcab81","projects:fa2866f703ae","link"],["people:8e49ecdcab81","projects:33842c5ef674","link"],["people:e550a5cef532","projects:a765a7b0168a","link"],["people:e550a5cef532","projects:e23ec9dac87c","link"],["people:e550a5cef532","decisions:a1a0cf0da04e","link"],["people:c34ad8d17ed3","projects:005856be1e96","link"],["people:c34ad8d17ed3","projects:eb239ac41ab5","link"],["people:c34ad8d17ed3","projects:40a0a456da19","link"],["people:c34ad8d17ed3","projects:e45ffa60b7f5","link"],["people:edce48a07c77","projects:5bc16329a872","link"],["people:edce48a07c77","projects:5b6d808f2e14","link"],["people:edce48a07c77","decisions:d33e9a1328f2","link"],["people:f27ce6a59c45","people:c34ad8d17ed3","link"],["people:f27ce6a59c45","projects:1151241ebf46","link"],["people:f27ce6a59c45","projects:999a257409e5","link"],["people:f27ce6a59c45","projects:74e850a8d2d6","link"],["people:da53a836eb3c","projects:32284f612903","link"],["people:da53a836eb3c","projects:091b03402fe0","link"],["people:da53a836eb3c","projects:1786b5236fce","link"],["people:5ea566bb9042","operations:f1cb70a10508","link"],["people:5ea566bb9042","projects:1133f2511847","link"],["people:5ea566bb9042","projects:88da2f855e09","link"],["people:5ea566bb9042","projects:53f3a35116c9","link"],["people:ddaa1b924478","people:c34ad8d17ed3","link"],["people:ddaa1b924478","projects:fd84b25234d1","link"],["people:ddaa1b924478","projects:1151241ebf46","link"],["people:ddaa1b924478","decisions:8d6b467654af","link"],["people:7cf4b4381104","people:c34ad8d17ed3","link"],["people:7cf4b4381104","operations:f1cb70a10508","link"],["people:7cf4b4381104","projects:28d1ff44049d","link"],["people:7cf4b4381104","projects:dd75759c7ef4","link"],["people:7cf4b4381104","projects:bcf0398d3fb6","link"],["people:5d03a440b050","projects:7529b93c14a5","link"],["people:5d03a440b050","projects:b460ef337da8","link"],["people:5d03a440b050","projects:36d5ac5c4b8e","link"],["people:5d03a440b050","projects:441c3eacd655","link"],["people:27bdea058a52","operations:304316f72231","link"],["people:27bdea058a52","projects:36d5ac5c4b8e","link"],["people:27bdea058a52","projects:1786b5236fce","link"],["people:27bdea058a52","projects:d771f3e5bb79","link"],["people:4b315d644077","operations:4533c30f1919","link"],["people:4b315d644077","ideas:c889074992d0","link"],["people:4b315d644077","projects:9a670359c4c2","link"],["people:4b315d644077","decisions:4fa1f0c2f73f","link"],["people:4b315d644077","projects:473a90cf47ba","link"],["people:e3490b1bd43d","operations:f1cb70a10508","link"],["people:e3490b1bd43d","projects:473a90cf47ba","link"],["people:e3490b1bd43d","projects:091b03402fe0","link"],["people:e3490b1bd43d","projects:8042fe4829bd","link"],["people:597a3593909f","projects:7c05f2f0b348","link"],["people:597a3593909f","projects:3dcc92d9f1e2","link"],["people:597a3593909f","projects:b460ef337da8","link"],["people:45c64c9fc514","operations:304316f72231","link"],["people:45c64c9fc514","projects:7d08872da56d","link"],["people:45c64c9fc514","projects:b027e0d66c9b","link"],["people:45c64c9fc514","projects:7529b93c14a5","link"],["people:180982616a8a","operations:f1cb70a10508","link"],["people:180982616a8a","projects:b940cd8a5518","link"],["people:180982616a8a","projects:d4cc6839a6f1","link"],["people:180982616a8a","projects:cbbd09c31020","link"],["people:3242278a3321","operations:f1cb70a10508","link"],["people:3242278a3321","projects:0ea8313f7b5b","link"],["people:3242278a3321","projects:9d1f4c1e516c","link"],["people:3242278a3321","projects:eb239ac41ab5","link"],["people:f88b51f38ae6","operations:f1cb70a10508","link"],["people:f88b51f38ae6","projects:32284f612903","link"],["people:f88b51f38ae6","projects:1e1fe5956f7f","link"],["people:f88b51f38ae6","projects:718ec56d5de1","link"],["people:976c938c62fc","projects:b027e0d66c9b","link"],["people:976c938c62fc","decisions:1f9faf63084e","link"],["people:976c938c62fc","projects:e7da4b5d259b","link"],["people:594c2d7cc49d","projects:6de99e59b673","link"],["people:594c2d7cc49d","projects:1e1fe5956f7f","link"],["people:594c2d7cc49d","projects:3dcc92d9f1e2","link"],["people:594c2d7cc49d","projects:55ea8a9663e1","link"],["decisions:1f711d572af7","projects:c8da728ff0a3","link"],["decisions:1f711d572af7","operations:04d7d7bfc7db","link"],["decisions:1f711d572af7","projects:bcf0398d3fb6","link"],["decisions:922f13d73070","decisions:ed530142f678","link"],["decisions:922f13d73070","projects:28d1ff44049d","link"],["decisions:922f13d73070","projects:1502221c1ec1","link"],["decisions:c63ab69e993d","decisions:ed530142f678","link"],["decisions:c63ab69e993d","decisions:8d6b467654af","link"],["decisions:c63ab69e993d","projects:d771f3e5bb79","link"],["decisions:c63ab69e993d","projects:6d7285846a3b","link"],["decisions:1f9faf63084e","decisions:d74b8653a513","link"],["decisions:1f9faf63084e","projects:92f6a06a14ca","link"],["decisions:1f9faf63084e","projects:0f0b18f9922d","link"],["decisions:67385950e96d","projects:e3a41bd9b1e6","link"],["decisions:67385950e96d","projects:b289c8064262","link"],["decisions:67385950e96d","projects:5ffbcbc45f10","link"],["decisions:4fa1f0c2f73f","projects:59ba21553f8a","link"],["decisions:4fa1f0c2f73f","operations:304316f72231","link"],["decisions:4fa1f0c2f73f","projects:1133f2511847","link"],["decisions:4fa1f0c2f73f","projects:c9a12bc2469d","link"],["decisions:de749e1c3abf","projects:00499cc29465","link"],["decisions:de749e1c3abf","projects:9234c42659f7","link"],["decisions:69a726c7087c","decisions:8d6b467654af","link"],["decisions:69a726c7087c","decisions:d74b8653a513","link"],["decisions:69a726c7087c","projects:4544f34aab28","link"],["decisions:69a726c7087c","operations:a5c884a200b7","link"],["decisions:d33e9a1328f2","decisions:ed530142f678","link"],["decisions:d33e9a1328f2","decisions:8d6b467654af","link"],["decisions:d33e9a1328f2","projects:805ff00d7133","link"],["decisions:d33e9a1328f2","operations:8a1fa85dbbf1","link"],["decisions:6508c383006e","decisions:8d6b467654af","link"],["decisions:6508c383006e","operations:a6eee751e736","link"],["decisions:6508c383006e","operations:61419b1b0f81","link"],["decisions:f1af11c7e68b","decisions:4fa1f0c2f73f","link"],["decisions:f1af11c7e68b","projects:3166404d17cc","link"],["decisions:f1af11c7e68b","operations:d9e4ea08522d","link"],["decisions:b6e35688d973","people:c34ad8d17ed3","link"],["decisions:b6e35688d973","projects:7078340e6b9f","link"],["decisions:b6e35688d973","projects:999a257409e5","link"],["decisions:21acd9a36dc7","decisions:4fa1f0c2f73f","link"],["decisions:21acd9a36dc7","decisions:ed530142f678","link"],["decisions:21acd9a36dc7","projects:c892b9bcdec2","link"],["decisions:21acd9a36dc7","projects:d8cc307ffba6","link"],["decisions:a1a0cf0da04e","decisions:8d6b467654af","link"],["decisions:a1a0cf0da04e","projects:1e1fe5956f7f","link"],["decisions:a1a0cf0da04e","projects:d8aa8e6fb545","link"],["decisions:d74b8653a513","operations:76f6b3757732","link"],["decisions:d74b8653a513","projects:473a90cf47ba","link"],["decisions:994afea4d58f","operations:f988bf333d81","link"],["decisions:994afea4d58f","projects:749d7854ad15","link"],["decisions:994afea4d58f","projects:eb239ac41ab5","link"],["decisions:8d6b467654af","operations:af477bc78673","link"],["decisions:8d6b467654af","projects:d9cdb861a093","link"],["decisions:54d927368366","operations:304316f72231","link"],["decisions:54d927368366","projects:11d6d012865a","link"],["decisions:54d927368366","projects:3baf1de5dbd4","link"],["decisions:67f38682f382","decisions:d74b8653a513","link"],["decisions:67f38682f382","decisions:8d6b467654af","link"],["decisions:67f38682f382","operations:b0c9cd50e1d2","link"],["decisions:67f38682f382","projects:1502221c1ec1","link"],["decisions:42f8a2905283","projects:6d425528f387","link"],["decisions:42f8a2905283","projects:1b32ddc20396","link"],["decisions:ed530142f678","projects:7d08872da56d","link"],["decisions:ed530142f678","projects:59ba21553f8a","link"],["research:f1cc8b10efdb","research:37d65b79086a","link"],["research:f1cc8b10efdb","operations:76f6b3757732","link"],["research:f1cc8b10efdb","projects:083061a421bc","link"],["research:81033a116a04","operations:304316f72231","link"],["research:81033a116a04","projects:6de99e59b673","link"],["research:81033a116a04","projects:005856be1e96","link"],["research:ba0b8ec93e1a","operations:304316f72231","link"],["research:ba0b8ec93e1a","projects:7078340e6b9f","link"],["research:ba0b8ec93e1a","operations:3f56087e937e","link"],["research:f68d12cab680","operations:100a2fae4a51","link"],["research:f68d12cab680","operations:76f6b3757732","link"],["research:f68d12cab680","projects:6d425528f387","link"],["research:937a2573e0e0","research:37d65b79086a","link"],["research:937a2573e0e0","research:0ab1a718e29d","link"],["research:937a2573e0e0","operations:8d200a040bc3","link"],["research:937a2573e0e0","projects:e23ec9dac87c","link"],["research:569802adaaef","projects:59ba21553f8a","link"],["research:569802adaaef","projects:f0f49614d0df","link"],["research:569802adaaef","projects:92f6a06a14ca","link"],["research:aed45f3e8f30","research:0ab1a718e29d","link"],["research:aed45f3e8f30","research:37d65b79086a","link"],["research:aed45f3e8f30","projects:bb1633b88041","link"],["research:aed45f3e8f30","operations:681e4dca2b9e","link"],["research:38f43580097c","operations:f1cb70a10508","link"],["research:38f43580097c","projects:723ab07c3ec8","link"],["research:38f43580097c","projects:c2ce15ae175b","link"],["research:f2964af4898c","operations:f988bf333d81","link"],["research:f2964af4898c","projects:f7b1124c3f14","link"],["research:f2964af4898c","projects:fa2866f703ae","link"],["research:9271e8ea83a3","decisions:d74b8653a513","link"],["research:9271e8ea83a3","projects:f0f49614d0df","link"],["research:9271e8ea83a3","operations:3e1d95ef7a24","link"],["research:3c8c12b9afae","operations:ee934e3e1275","link"],["research:3c8c12b9afae","operations:d9e4ea08522d","link"],["research:3c8c12b9afae","projects:32284f612903","link"],["research:d7103994ac4b","research:37d65b79086a","link"],["research:d7103994ac4b","projects:4544f34aab28","link"],["research:d7103994ac4b","projects:723ab07c3ec8","link"],["research:c6c00f95fb1c","projects:bb1633b88041","link"],["research:c6c00f95fb1c","projects:40a0a456da19","link"],["research:69af4b1bd02c","research:37d65b79086a","link"],["research:69af4b1bd02c","projects:0ea8313f7b5b","link"],["research:69af4b1bd02c","projects:1e1fe5956f7f","link"],["research:e4ab4c934dc8","research:0ab1a718e29d","link"],["research:e4ab4c934dc8","projects:1151241ebf46","link"],["research:e4ab4c934dc8","projects:cc9d9032fc16","link"],["research:82ce923df093","operations:f1cb70a10508","link"],["research:82ce923df093","projects:723ab07c3ec8","link"],["research:82ce923df093","projects:0e10d5a9f2de","link"],["research:5d6f7d9e4f15","research:f68d12cab680","link"],["research:5d6f7d9e4f15","research:37d65b79086a","link"],["research:5d6f7d9e4f15","projects:baa4c8e81547","link"],["research:5d6f7d9e4f15","operations:ee934e3e1275","link"],["research:a849e4d7510f","research:37d65b79086a","link"],["research:a849e4d7510f","projects:2e3a05ff63f2","link"],["research:a849e4d7510f","projects:ada2fc952daf","link"],["research:b5dc6830fe06","research:f68d12cab680","link"],["research:b5dc6830fe06","operations:a6eee751e736","link"],["research:b5dc6830fe06","projects:c9a12bc2469d","link"],["research:37d65b79086a","research:0ab1a718e29d","link"],["research:37d65b79086a","research:f68d12cab680","link"],["research:37d65b79086a","projects:8042fe4829bd","link"],["research:37d65b79086a","operations:669059ca8381","link"],["research:3d0acfc7eef0","projects:005856be1e96","link"],["research:3d0acfc7eef0","projects:53f3a35116c9","link"],["research:3d0acfc7eef0","operations:1ed76b3575c8","link"],["research:7afb31b06056","research:37d65b79086a","link"],["research:7afb31b06056","projects:c3836e78e4e0","link"],["research:7afb31b06056","projects:7d08872da56d","link"],["research:94ffb9c8706e","research:f68d12cab680","link"],["research:94ffb9c8706e","operations:ee934e3e1275","link"],["research:94ffb9c8706e","projects:92f6a06a14ca","link"],["research:bb5c5276c300","projects:59ba21553f8a","link"],["research:bb5c5276c300","projects:eb239ac41ab5","link"],["research:bb5c5276c300","operations:1ed76b3575c8","link"],["research:0ab1a718e29d","projects:7529b93c14a5","link"],["research:0ab1a718e29d","operations:39a543e8c62a","link"],["research:0ab1a718e29d","operations:8fe340438117","link"],["research:0ab1a718e29d","projects:5ffbcbc45f10","link"],["ideas:ef419dd7c8da","research:37d65b79086a","link"],["ideas:ef419dd7c8da","operations:f1cb70a10508","link"],["ideas:ef419dd7c8da","operations:48e676a0dea2","link"],["ideas:ef419dd7c8da","projects:b460ef337da8","link"],["ideas:eff4c454b659","research:37d65b79086a","link"],["ideas:eff4c454b659","projects:e3a41bd9b1e6","link"],["ideas:eff4c454b659","projects:11d6d012865a","link"],["ideas:8b0c25b192bf","operations:304316f72231","link"],["ideas:8b0c25b192bf","operations:b0c9cd50e1d2","link"],["ideas:8b0c25b192bf","operations:c627ab4e0bb6","link"],["ideas:0626eb523f4a","research:37d65b79086a","link"],["ideas:0626eb523f4a","operations:f1cb70a10508","link"],["ideas:0626eb523f4a","operations:a6eee751e736","link"],["ideas:0626eb523f4a","projects:e45ffa60b7f5","link"],["ideas:ebd35b42ad69","operations:f1cb70a10508","link"],["ideas:ebd35b42ad69","research:37d65b79086a","link"],["ideas:ebd35b42ad69","projects:b460ef337da8","link"],["ideas:ebd35b42ad69","operations:af477bc78673","link"],["ideas:5f6e055b4894","operations:a5c884a200b7","link"],["ideas:5f6e055b4894","projects:2e3a05ff63f2","link"],["ideas:edfe81dd39c5","operations:f1cb70a10508","link"],["ideas:edfe81dd39c5","projects:9a670359c4c2","link"],["ideas:edfe81dd39c5","projects:d9cdb861a093","link"],["ideas:ee8b335ee767","operations:f1cb70a10508","link"],["ideas:ee8b335ee767","projects:cbd0df0ebb88","link"],["ideas:ee8b335ee767","projects:982c7d1a4cad","link"],["ideas:67f4ab6bcaa5","projects:e3a41bd9b1e6","link"],["ideas:67f4ab6bcaa5","projects:6d7285846a3b","link"],["ideas:67f4ab6bcaa5","projects:d4cc6839a6f1","link"],["ideas:c3192da73c80","operations:f1cb70a10508","link"],["ideas:c3192da73c80","projects:28d1ff44049d","link"],["ideas:c3192da73c80","projects:44d972b37afb","link"],["ideas:857d88865476","research:37d65b79086a","link"],["ideas:857d88865476","operations:f1cb70a10508","link"],["ideas:857d88865476","projects:91059f80ea43","link"],["ideas:857d88865476","projects:b07648de7606","link"],["ideas:f71029b803c3","operations:f1cb70a10508","link"],["ideas:f71029b803c3","operations:48e676a0dea2","link"],["ideas:f71029b803c3","projects:a765a7b0168a","link"],["ideas:c889074992d0","projects:24f20331f7b0","link"],["ideas:c889074992d0","projects:624f7fc6a6a7","link"],["ideas:e55291f87627","projects:e3a41bd9b1e6","link"],["ideas:e55291f87627","operations:669059ca8381","link"],["ideas:e55291f87627","projects:b027e0d66c9b","link"],["ideas:c1dc429d2ff5","projects:e3a41bd9b1e6","link"],["ideas:c1dc429d2ff5","projects:9d48ce9c1a19","link"],["ideas:c1dc429d2ff5","operations:aa08fb1fcbe8","link"],["ideas:c6fa08104bac","research:37d65b79086a","link"],["ideas:c6fa08104bac","operations:f1cb70a10508","link"],["ideas:c6fa08104bac","projects:e7850ad76880","link"],["ideas:c6fa08104bac","projects:d9cdb861a093","link"],["ideas:c47dd0f59771","operations:f1cb70a10508","link"],["ideas:c47dd0f59771","operations:669059ca8381","link"],["ideas:c47dd0f59771","projects:9d48ce9c1a19","link"],["memory:aa1f83764640","decisions:d74b8653a513","link"],["memory:aa1f83764640","projects:ada2fc952daf","link"],["memory:aa1f83764640","projects:3dcc92d9f1e2","link"],["memory:aa1f83764640","projects:1b32ddc20396","link"],["memory:554c29c83836","ideas:c889074992d0","link"],["memory:554c29c83836","projects:59ba21553f8a","link"],["memory:554c29c83836","decisions:ed530142f678","link"],["memory:554c29c83836","people:45c64c9fc514","link"],["memory:554c29c83836","projects:e7da4b5d259b","link"],["memory:d2af40c89466","people:597a3593909f","link"],["memory:d2af40c89466","projects:083061a421bc","link"],["memory:d2af40c89466","projects:d9cdb861a093","link"],["memory:d2af40c89466","people:594c2d7cc49d","link"],["memory:d5e55cab0b0d","operations:304316f72231","link"],["memory:d5e55cab0b0d","projects:005856be1e96","link"],["memory:d5e55cab0b0d","projects:c2ce15ae175b","link"],["memory:d5e55cab0b0d","projects:3e0fba38b6ab","link"],["memory:d5e55cab0b0d","projects:59ba21553f8a","link"],["memory:d5e55cab0b0d","people:6cc7f846b08a","link"],["memory:8542d12a741d","projects:b940cd8a5518","link"],["memory:8542d12a741d","projects:624f7fc6a6a7","link"],["memory:8542d12a741d","projects:f7b1124c3f14","link"],["memory:cbc196f92b1e","projects:7529b93c14a5","link"],["memory:cbc196f92b1e","projects:e3a41bd9b1e6","link"],["memory:cbc196f92b1e","projects:dd75759c7ef4","link"],["memory:cbc196f92b1e","projects:0e10d5a9f2de","link"],["memory:cbc196f92b1e","people:597a3593909f","link"],["memory:5b5a459a325c","people:c34ad8d17ed3","link"],["memory:5b5a459a325c","projects:66eede52cc76","link"],["memory:5b5a459a325c","people:976c938c62fc","link"],["memory:08535ef271a7","projects:59ba21553f8a","link"],["memory:08535ef271a7","projects:e3a41bd9b1e6","link"],["memory:08535ef271a7","projects:9a670359c4c2","link"],["memory:08535ef271a7","projects:3e0fba38b6ab","link"],["memory:08535ef271a7","projects:e7da4b5d259b","link"],["memory:23d2f2c7d216","projects:c8da728ff0a3","link"],["memory:23d2f2c7d216","people:c34ad8d17ed3","link"],["memory:23d2f2c7d216","projects:cbbd09c31020","link"],["memory:23d2f2c7d216","projects:36d5ac5c4b8e","link"],["memory:7b9e8af3cc00","projects:4544f34aab28","link"],["memory:7b9e8af3cc00","projects:e7da4b5d259b","link"],["memory:7b9e8af3cc00","projects:441c3eacd655","link"],["memory:d286467d044d","operations:304316f72231","link"],["memory:d286467d044d","people:597a3593909f","link"],["memory:d286467d044d","projects:0e10d5a9f2de","link"],["memory:d286467d044d","projects:4544f34aab28","link"],["memory:e3f2600c9539","projects:e3a41bd9b1e6","link"],["memory:e3f2600c9539","projects:bb1633b88041","link"],["memory:e3f2600c9539","projects:b289c8064262","link"],["memory:e3f2600c9539","people:edce48a07c77","link"],["memory:e3f2600c9539","projects:ca49a7ee6ae6","link"],["memory:1336c80422b9","operations:304316f72231","link"],["memory:1336c80422b9","projects:083061a421bc","link"],["memory:1336c80422b9","projects:9a670359c4c2","link"],["memory:1336c80422b9","projects:33c0f58961e7","link"],["memory:83c46db56942","operations:304316f72231","link"],["memory:83c46db56942","projects:33c0f58961e7","link"],["memory:83c46db56942","projects:4544f34aab28","link"],["memory:83c46db56942","projects:005856be1e96","link"],["memory:e4e54235d234","projects:7529b93c14a5","link"],["memory:e4e54235d234","projects:005856be1e96","link"],["memory:e4e54235d234","projects:5ffbcbc45f10","link"],["memory:e4e54235d234","projects:6d425528f387","link"],["memory:dfd2f57520f7","projects:005856be1e96","link"],["memory:dfd2f57520f7","projects:2a459de7bdc2","link"],["memory:dfd2f57520f7","people:6cc7f846b08a","link"],["memory:9774544dd95a","people:c34ad8d17ed3","link"],["memory:9774544dd95a","people:6cc7f846b08a","link"],["memory:9774544dd95a","projects:84873a0addeb","link"],["memory:5c53fdc0e437","operations:f988bf333d81","link"],["memory:5c53fdc0e437","projects:4544f34aab28","link"],["memory:5c53fdc0e437","projects:f7b1124c3f14","link"],["memory:5c53fdc0e437","projects:d9cdb861a093","link"],["memory:844c92809f5d","projects:e3a41bd9b1e6","link"],["memory:844c92809f5d","projects:7529b93c14a5","link"],["memory:844c92809f5d","projects:083061a421bc","link"],["memory:844c92809f5d","projects:2a459de7bdc2","link"],["memory:f6142de2b599","operations:304316f72231","link"],["memory:f6142de2b599","projects:3166404d17cc","link"],["memory:f6142de2b599","operations:ee934e3e1275","link"],["memory:f6142de2b599","operations:100a2fae4a51","link"],["memory:f6142de2b599","projects:40a0a456da19","link"],["memory:2ea3ec1a3eac","projects:e3a41bd9b1e6","link"],["memory:2ea3ec1a3eac","projects:41b5204b98af","link"],["memory:2ea3ec1a3eac","operations:669059ca8381","link"],["memory:2ea3ec1a3eac","projects:718ec56d5de1","link"],["memory:cab15ca96571","projects:7529b93c14a5","link"],["memory:cab15ca96571","projects:59ba21553f8a","link"],["memory:cab15ca96571","projects:74e850a8d2d6","link"],["memory:cab15ca96571","projects:3e0fba38b6ab","link"],["memory:64a3c9e4be30","operations:304316f72231","link"],["memory:64a3c9e4be30","people:594c2d7cc49d","link"],["memory:64a3c9e4be30","projects:74e850a8d2d6","link"],["memory:64a3c9e4be30","decisions:4fa1f0c2f73f","link"],["memory:337815036a53","projects:e3a41bd9b1e6","link"],["memory:337815036a53","people:4b315d644077","link"],["memory:337815036a53","people:7cf4b4381104","link"],["memory:337815036a53","people:6cc7f846b08a","link"],["memory:a8609806d16d","operations:304316f72231","link"],["memory:a8609806d16d","projects:e3a41bd9b1e6","link"],["memory:a8609806d16d","projects:36d5ac5c4b8e","link"],["memory:a8609806d16d","projects:d9cdb861a093","link"],["memory:a8609806d16d","projects:2a459de7bdc2","link"],["memory:ab0770a23f25","projects:e3a41bd9b1e6","link"],["memory:ab0770a23f25","projects:7529b93c14a5","link"],["memory:ab0770a23f25","projects:5bc16329a872","link"],["memory:ab0770a23f25","projects:3dcc92d9f1e2","link"],["memory:ab0770a23f25","projects:e23ec9dac87c","link"],["memory:3c029334a42a","projects:92f6a06a14ca","link"],["memory:3c029334a42a","projects:c892b9bcdec2","link"],["memory:3c029334a42a","projects:8f95659d8d58","link"],["memory:3c029334a42a","projects:ca087d5dba90","link"],["memory:30f47cf750ff","projects:59ba21553f8a","link"],["memory:30f47cf750ff","operations:ee934e3e1275","link"],["memory:30f47cf750ff","projects:33842c5ef674","link"],["memory:5ba9910071b4","projects:005856be1e96","link"],["memory:5ba9910071b4","people:597a3593909f","link"],["memory:5ba9910071b4","projects:441c3eacd655","link"],["memory:5ba9910071b4","projects:b940cd8a5518","link"],["memory:6117ac647e01","projects:59ba21553f8a","link"],["memory:6117ac647e01","projects:b9a040b19e70","link"],["memory:6117ac647e01","projects:74e850a8d2d6","link"],["memory:6117ac647e01","projects:1e1fe5956f7f","link"],["memory:5c349f38776e","decisions:994afea4d58f","link"],["memory:5c349f38776e","decisions:1f9faf63084e","link"],["memory:5c349f38776e","operations:e23dc12fda0c","link"],["memory:5c349f38776e","projects:6d7285846a3b","link"],["memory:8523095d2859","decisions:d74b8653a513","link"],["memory:8523095d2859","people:7cf4b4381104","link"],["memory:8523095d2859","projects:66eede52cc76","link"],["memory:656ad266e551","projects:7529b93c14a5","link"],["memory:656ad266e551","projects:a7d5c7147514","link"],["memory:656ad266e551","projects:b9a040b19e70","link"],["memory:656ad266e551","projects:005856be1e96","link"],["memory:5bec3c83fe2f","projects:6de99e59b673","link"],["memory:5bec3c83fe2f","projects:b9a040b19e70","link"],["memory:5bec3c83fe2f","projects:3e0fba38b6ab","link"],["memory:108f93445dea","decisions:a1a0cf0da04e","link"],["memory:108f93445dea","decisions:d74b8653a513","link"],["memory:108f93445dea","projects:c892b9bcdec2","link"],["memory:bf0f340ad304","projects:59ba21553f8a","link"],["memory:bf0f340ad304","projects:2a459de7bdc2","link"],["memory:bf0f340ad304","projects:2e3a05ff63f2","link"],["memory:04562399d01e","operations:d99c1a32c08e","link"],["memory:04562399d01e","operations:a6eee751e736","link"],["memory:04562399d01e","projects:0e10d5a9f2de","link"],["memory:04562399d01e","projects:d9cdb861a093","link"],["memory:4b4472e9afef","projects:e3a41bd9b1e6","link"],["memory:4b4472e9afef","projects:005856be1e96","link"],["memory:4b4472e9afef","projects:b9a040b19e70","link"],["memory:4b4472e9afef","projects:2e3a05ff63f2","link"],["memory:e6e39539bd3b","projects:005856be1e96","link"],["memory:e6e39539bd3b","projects:2e3a05ff63f2","link"],["memory:e6e39539bd3b","people:45c64c9fc514","link"],["memory:cb7f3035d848","projects:59ba21553f8a","link"],["memory:cb7f3035d848","decisions:21acd9a36dc7","link"],["memory:cb7f3035d848","projects:5849e46d5775","link"],["memory:e674341d0685","people:45c64c9fc514","link"],["memory:e674341d0685","projects:e34dea37826e","link"],["projects:3ed515ad94ec","operations:a2cf4dec74c6","mention"],["projects:dd057a791d15","people:45c64c9fc514","mention"],["projects:dd057a791d15","people:4b315d644077","mention"],["operations:ada4ded60d2f","people:4b315d644077","mention"],["operations:ada4ded60d2f","people:2183b8a7f795","mention"],["operations:ada4ded60d2f","projects:c8da728ff0a3","mention"],["operations:8fe340438117","people:4b315d644077","mention"],["operations:30ae30eb7633","people:edce48a07c77","mention"],["operations:30ae30eb7633","people:2183b8a7f795","mention"],["operations:30ae30eb7633","people:45c64c9fc514","mention"],["operations:cf406eaaa8c2","people:2183b8a7f795","mention"],["operations:cf406eaaa8c2","people:597a3593909f","mention"],["operations:cf406eaaa8c2","people:edce48a07c77","mention"],["operations:cf406eaaa8c2","people:4b315d644077","mention"],["operations:cf406eaaa8c2","people:45c64c9fc514","mention"],["operations:681e4dca2b9e","people:594c2d7cc49d","mention"],["operations:681e4dca2b9e","people:edce48a07c77","mention"],["operations:8d200a040bc3","people:edce48a07c77","mention"],["decisions:de749e1c3abf","people:2183b8a7f795","mention"],["decisions:de749e1c3abf","people:597a3593909f","mention"],["decisions:de749e1c3abf","people:976c938c62fc","mention"],["decisions:de749e1c3abf","people:45c64c9fc514","mention"],["decisions:de749e1c3abf","people:4b315d644077","mention"],["research:81033a116a04","people:edce48a07c77","mention"],["research:81033a116a04","people:45c64c9fc514","mention"],["research:9271e8ea83a3","people:edce48a07c77","mention"],["research:c6c00f95fb1c","people:edce48a07c77","mention"],["research:c6c00f95fb1c","decisions:4fa1f0c2f73f","mention"],["ideas:5f6e055b4894","people:edce48a07c77","mention"],["memory:d2af40c89466","operations:f988bf333d81","mention"],["memory:d2af40c89466","projects:6d7285846a3b","mention"],["memory:8542d12a741d","projects:e3a41bd9b1e6","mention"],["memory:5b5a459a325c","people:edce48a07c77","mention"],["memory:7b9e8af3cc00","projects:6d7285846a3b","mention"],["memory:5c53fdc0e437","projects:6d7285846a3b","mention"],["memory:3c029334a42a","projects:e3a41bd9b1e6","mention"],["memory:3c029334a42a","operations:4533c30f1919","mention"],["memory:5bec3c83fe2f","projects:6d7285846a3b","mention"],["memory:5bec3c83fe2f","operations:ee934e3e1275","mention"],["memory:108f93445dea","operations:100a2fae4a51","mention"],["memory:108f93445dea","projects:6d7285846a3b","mention"],["memory:e674341d0685","projects:6d7285846a3b","mention"]]};var Td=`/* Injected by hero-brain.core.js so the page needs no stylesheet link. */
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

/* The machine's lights. A warm status LED and three cool ports, each a soft glow the
   script brightens and dims. Sized and placed from the photo, like everything else. */
.hero-brain-lights{position:absolute;inset:0;pointer-events:none}
.hero-brain-lights i{position:absolute;display:none;border-radius:50%;opacity:0;transform:translate(-50%,-50%);will-change:opacity}
.hero-brain-led{background:radial-gradient(circle,#fff5df 0%,rgba(255,190,110,.95) 22%,rgba(255,150,60,.45) 46%,rgba(255,130,40,0) 72%);
  box-shadow:0 0 .6em .2em rgba(255,160,70,.45)}
.hero-brain-port{background:radial-gradient(circle,#f4fbff 0%,rgba(190,225,255,.85) 20%,rgba(120,180,255,.35) 45%,rgba(80,150,255,0) 70%)}
@media (prefers-reduced-motion:reduce){.hero-brain-lights i{transition:none}}

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
`;var t0=560,Ad=50,n0=.18,i0=.45;function Dc(i,e,t,n){let s=e/t,r=Math.min(1,Math.max(0,i)/s);return e*(1-Math.pow(1-r,n))}function wd(i,e=.97){let t=i%e/e,n=(s,r,a)=>a*Math.exp(-((t-s)*(t-s))/(2*r*r));return n(.09,.038,1)+n(.27,.05,.55)}function s0(i,e=6,t=.97){let n=e*t,s=((i-.09*t)%n+n)%n;if(s<.34){let a=s/.34;return 1-Math.pow(1-a,3)}let r=Math.min(1,(s-.34)/1.9);return 1-r*r*(3-2*r)}function Wt(i,e){let t=parseFloat(i);return Number.isFinite(t)?t:e}function r0(i){let e=i.dataset;return{image:e.image||".mm-machine img",avoid:e.avoid==null?".partners-hero-ctas":e.avoid,boxX:Wt(e.boxX,50),boxY:Wt(e.boxY,51),size:Wt(e.size,30),lift:Wt(e.lift,0),boxXPhone:Wt(e.boxXPhone,44),boxYPhone:Wt(e.boxYPhone,39),sizePhone:Wt(e.sizePhone,42),mode:e.mode==="loop"?"loop":"hold",speed:Wt(e.speed,1.8),warp:Wt(e.warp,1.6),turn:Wt(e.turn,1.5),pulse:e.pulse!=="0",heart:e.heart!=="0",signals:Wt(e.signals,40),breath:e.breath!=="0",breathEvery:Wt(e.breathEvery,6),lights:e.lights!=="0",lightsAt:(e.lightsAt||"48.1,64.75;59.7,62.5;61.25,62.5;62.8,62.5").split(";").map(t=>t.split(",").map(Number)),lightsAtPhone:(e.lightsAtPhone||"42.3,63.2;55.1,59;56.9,59;58.6,59").split(";").map(t=>t.split(",").map(Number)),labels:e.labels!=="0",interactive:e.interactive!=="0",holdSeconds:Wt(e.holdSeconds,8),phone:e.phone||"off",opacity:Wt(e.opacity,.85),rings:e.rings!=="0",glow:Wt(e.glow,.5),minSide:Wt(e.minSide,140)}}function a0(i){let e=i.getBoundingClientRect(),t=i.naturalWidth,n=i.naturalHeight;if(!t||!n||!e.width||!e.height||getComputedStyle(i).objectFit!=="cover")return e;let r=Math.max(e.width/t,e.height/n),a=t*r,o=n*r;return{left:e.left+(e.width-a)/2,top:e.top+(e.height-o)/2,width:a,height:o,right:0,bottom:0}}var Cd=`
  attribute float size; attribute float alpha; attribute vec3 color;
  varying vec3 vColor; varying float vAlpha;
  uniform float halfHeight;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * halfHeight * projectionMatrix[1][1] / max(1.0, -mv.z);
    vColor = color; vAlpha = alpha;
  }`,Rd=`
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.72, d) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a + vec3(0.18) * a * (1.0 - smoothstep(0.0, 0.5, d)), a);
  }`,Pd=`
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = min(1.0, length(gl_PointCoord - 0.5) * 2.0);
    float a = pow(1.0 - d, 2.2) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a, a);
  }`,o0=`
  attribute vec4 tint; varying vec4 vTint;
  void main() { vTint = tint; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,c0=`
  varying vec4 vTint;
  void main() { if (vTint.a < 0.003) discard; gl_FragColor = vec4(vTint.rgb * vTint.a, vTint.a); }`;function Lc(i){return i.blending=ga,i.blendSrc=wi,i.blendDst=wi,i.blendSrcAlpha=wi,i.blendDstAlpha=wi,i.transparent=!0,i.depthWrite=!1,i.depthTest=!1,i}function l0(i){let e=r0(i),t=document.querySelector(e.image);if(!t)return;let n=matchMedia("(prefers-reduced-motion: reduce)"),s=matchMedia("(max-width:1000px)"),r=s.matches;if(r&&e.phone==="off")return;let a;try{a=new co({alpha:!0,antialias:!r,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{return}if($e.enabled=!1,a.outputColorSpace=Si,!document.getElementById("hero-brain-css")){let k=document.createElement("style");k.id="hero-brain-css",k.textContent=Td,document.head.appendChild(k)}i.style.setProperty("--hero-brain-opacity",String(e.opacity)),a.setClearColor(0,0),a.setPixelRatio(Math.min(devicePixelRatio||1,r?1.25:1.6));let o=a.domElement;o.setAttribute("aria-hidden","true"),i.appendChild(o);let c=document.createElement("div");c.className="hero-brain-beat",c.innerHTML='<i class="hero-brain-flash"></i><i class="hero-brain-ring"></i><i class="hero-brain-ring hero-brain-ring-2"></i>',i.appendChild(c);let l=.55,h=document.createElement("div");h.className="hero-brain-labels",i.appendChild(h);let f=new Map,d=document.createElement("div");d.className="hero-brain-lights",i.appendChild(d);let m=e.lightsAt.map((k,ie)=>{let ee=document.createElement("i");return ee.className=ie===0?"hero-brain-led":"hero-brain-port",d.appendChild(ee),ee}),x=e.lightsAt.map(()=>0),v=Object.fromEntries(Ks.sources.map(k=>[k.id,new He(k.color)])),p=Ks.nodes.map(k=>({id:k.id,source:k.s,degree:k.d,title:k.t||""}));r&&(p=p.filter(k=>k.degree>=2));let u=new Map(p.map(k=>[k.id,k])),M=Ks.links.map(([k,ie,ee])=>({source:k,target:ie,kind:ee})).filter(k=>u.has(k.source)&&u.has(k.target));vd(p,Ks.sources);for(let k of p)k.r=Math.min(11,2.2+Math.sqrt(k.degree||0)*.85),k.home={x:k.x,y:k.y,z:k.z};let w=new Map(p.map(k=>[k.id,new Set]));for(let k of M)w.get(k.source).add(k.target),w.get(k.target).add(k.source);let b=new Set;M.forEach((k,ie)=>{let ee=u.get(k.source),be=u.get(k.target);(Math.hypot(ee.x-be.x,ee.y-be.y,ee.z-be.z)<330||ie%7===0)&&b.add(k)});let A=new Ts,S=new gn;A.add(S);let C=new Gt(Ad,1,1,8e3),_=p.length,T=new ut(new Float32Array(_*3),3).setUsage($t),R=new ut(new Float32Array(_*3),3),P=new ut(new Float32Array(_),1).setUsage($t),F=new ut(new Float32Array(_),1).setUsage($t),q=new ut(new Float32Array(_),1).setUsage($t),Z=new ut(new Float32Array(_),1).setUsage($t);p.forEach((k,ie)=>{let ee=v[k.source]||new He("#ffffff");R.setXYZ(ie,ee.r,ee.g,ee.b),k.i=ie});let B={value:1},X=(k,ie,ee)=>{let be=new It;be.setAttribute("position",T),be.setAttribute("color",R),be.setAttribute("size",k),be.setAttribute("alpha",ie);let Me=Lc(new Ot({uniforms:{halfHeight:B},vertexShader:Cd,fragmentShader:ee})),Fe=new Ti(be,Me);return Fe.frustumCulled=!1,Fe},H=new It,K=new ut(new Float32Array(M.length*6),3).setUsage($t),te=new ut(new Float32Array(M.length*8),4).setUsage($t);H.setAttribute("position",K),H.setAttribute("tint",te);let ue=new Ps(H,Lc(new Ot({vertexShader:o0,fragmentShader:c0})));ue.frustumCulled=!1,S.add(ue);let pe=r?null:X(q,Z,Pd);pe&&S.add(pe),S.add(X(P,F,Rd));let ye=e.rings?Md(S,{ring1:"#D9963A",ring2:"#F2EDE6",glow:"#D9963A"}):null,We=r?Math.min(e.signals,14):e.signals,_t=new ut(new Float32Array(Math.max(1,We)*3),3).setUsage($t),nt=new ut(new Float32Array(Math.max(1,We)*3),3),J=new ut(new Float32Array(Math.max(1,We)),1).setUsage($t),re=new ut(new Float32Array(Math.max(1,We)),1).setUsage($t),ne=new ut(new Float32Array(Math.max(1,We)),1).setUsage($t),Le=new ut(new Float32Array(Math.max(1,We)),1).setUsage($t);for(let k=0;k<We;k++)nt.setXYZ(k,1,.97,.9);let Be=(k,ie,ee)=>{let be=new It;be.setAttribute("position",_t),be.setAttribute("color",nt),be.setAttribute("size",k),be.setAttribute("alpha",ie);let Me=new Ti(be,Lc(new Ot({uniforms:{halfHeight:B},vertexShader:Cd,fragmentShader:ee})));return Me.frustumCulled=!1,Me};We>0&&(r||S.add(Be(ne,Le,Pd)),S.add(Be(J,re,Rd)));let Ie=[],bt=new Map(p.map(k=>[k.id,[]]));for(let k of M)bt.get(k.source).push(k),bt.get(k.target).push(k);let je=new Set,Qe=null,Ke=null;ye&&A.traverse(k=>{k instanceof Ei&&(Qe=k),k.geometry&&k.geometry.type==="IcosahedronGeometry"&&(Ke=k),k.material&&k!==ue&&!(k instanceof Ti)&&(k.material.blending=Ai,k.material.depthTest=!1,k.material.depthWrite=!1)});let Ye=new He("#F2EDE6"),at=n.matches,et,lt=0,vt=.35,st=.04,it="grow",D=0,Rt=!1,ze=null,E=0,g=0,N=0,z=!1;function W(){for(let k of p)k.x=k.home.x,k.y=k.home.y,k.z=k.home.z;et=Sd(p,M);for(let k of et.records)k.origin=null,k.node.x=k.node.y=k.node.z=0;lt=e.pulse&&!at?-l:0,it="grow"}function se(){!e.pulse||at||!Te||(c.classList.remove("is-beating"),c.offsetWidth,c.classList.add("is-beating"))}W();function ae(k){let ie=k>=et.duration,ee=0;for(let Me of et.records){let Fe=Me.node,Oe=Fe.i;if(Me.born>k){F.setX(Oe,0),Z.setX(Oe,0),P.setX(Oe,0),q.setX(Oe,0);continue}ee++;let _e;ie?_e=Me.home:(Me.origin||(Me.origin=Me.parent?{x:Me.parent.node.x,y:Me.parent.node.y,z:Me.parent.node.z}:{x:0,y:0,z:0}),_e=Ed(Me,k)),Fe.x=_e.x,Fe.y=_e.y,Fe.z=_e.z,T.setXYZ(Oe,_e.x,_e.y,_e.z);let xt=ie?1:Math.min(1,Math.max(.05,(k-Me.born)/.6)),Je=ze&&ze.id===Fe.id,ht=ze&&w.get(ze.id).has(Fe.id),jt=ze&&!Je&&!ht,cn=Je?1.5:ht?1.15:1;P.setX(Oe,Fe.r*2*(.3+.7*xt)*cn),F.setX(Oe,(jt?.19:Je?1:.95)*xt),q.setX(Oe,Fe.r*2*(3.2+3*(1-xt))*cn),Z.setX(Oe,jt?0:(Je?.5:.3)+.35*(1-xt))}T.needsUpdate=P.needsUpdate=F.needsUpdate=q.needsUpdate=Z.needsUpdate=!0;let be=0;for(let Me of M){let Fe=u.get(Me.source),Oe=u.get(Me.target),_e=et.byNode.get(Fe.id),xt=et.byNode.get(Oe.id),Je=0,ht=v[Oe.source]||Ye;if(ie&&ze)Fe===ze||Oe===ze?(Je=.72,ht=v[ze.source]||Ye):b.has(Me)&&(Je=.05,ht=Ye);else if(ie)b.has(Me)&&(Je=Me.kind==="bridge"?.18:.2,ht=Me.kind==="bridge"?Ye:v[Fe.source]||Ye);else if(_e&&xt&&Math.max(_e.born,xt.born)<=k){let jt=k-Math.max(_e.born,xt.born),cn=et.treeLinks.has(Me);cn&&(jt<4||ee<20)?Je=.5:(k>13&&b.has(Me)||cn)&&(Je=.12)}Je>.1?je.add(Me):je.delete(Me),K.setXYZ(be,Fe.x,Fe.y,Fe.z),K.setXYZ(be+1,Oe.x,Oe.y,Oe.z),te.setXYZW(be,ht.r,ht.g,ht.b,Je),te.setXYZW(be+1,ht.r,ht.g,ht.b,Je),be+=2}return K.needsUpdate=te.needsUpdate=!0,ie}let j=[];function $(k,ie){let ee=bt.get(k).filter(be=>be!==ie&&je.has(be));return ee.length?ee[Math.floor(Math.random()*ee.length)]:null}function de(k,ie,ee){k.link=ie,k.from=ee,k.to=ie.source===ee?ie.target:ie.source;let be=u.get(k.from),Me=u.get(k.to),Fe=Math.max(20,Math.hypot(be.x-Me.x,be.y-Me.y,be.z-Me.z));k.u=0,k.rate=Math.min(2.2,Math.max(.45,300/Fe))}function Ce(k){if(We){j.length=0;for(let ie of je)j.push(ie);for(let ie=0;ie<We;ie++){let ee=Ie[ie];if(ee||(ee=Ie[ie]={link:null,u:0,rate:1,from:null,to:null,wait:Math.random()*2}),!ee.link||!je.has(ee.link)){if(ee.wait-=k,ee.wait>0||!j.length){re.setX(ie,0),Le.setX(ie,0);continue}let _e=j[Math.floor(Math.random()*j.length)];de(ee,_e,Math.random()<.5?_e.source:_e.target),ee.u=Math.random()*.5}if(ee.u+=k*ee.rate,ee.u>=1){let _e=1+u.get(ee.to).i%3;_e<x.length&&Math.random()<.16&&(x[_e]=1);let xt=$(ee.to,ee.link);if(xt)de(ee,xt,ee.to);else{ee.link=null,ee.wait=.2+Math.random()*1.2,re.setX(ie,0),Le.setX(ie,0);continue}}let be=u.get(ee.from),Me=u.get(ee.to),Fe=ee.u,Oe=Math.sin(Fe*Math.PI);_t.setXYZ(ie,be.x+(Me.x-be.x)*Fe,be.y+(Me.y-be.y)*Fe,be.z+(Me.z-be.z)*Fe),J.setX(ie,3.2+1.2*Oe),re.setX(ie,.35+.6*Oe),ne.setX(ie,14+6*Oe),Le.setX(ie,.18+.22*Oe)}_t.needsUpdate=J.needsUpdate=re.needsUpdate=ne.needsUpdate=Le.needsUpdate=!0}}let he=0,ce=1,Te=!1;function De(){let k=i.getBoundingClientRect(),ie=a0(t),ee=s.matches;if(!ie.width||ee&&e.phone==="off"){Te&&(Te=!1,o.style.display="none");return}let be=ie.width*(ee?e.sizePhone:e.size)/100,Me=ie.left+ie.width*(ee?e.boxXPhone:e.boxX)/100,Oe=ie.top+ie.height*(ee?e.boxYPhone:e.boxY)/100-ie.height*e.lift/100,_e=Oe-be,xt=e.avoid?document.querySelector(e.avoid):null;if(xt){let y=xt.getBoundingClientRect().bottom+6;_e<y&&(_e=y,be=Math.max(0,Oe-_e))}let Je=be>=e.minSide;if(Je!==Te&&(Te=Je,o.style.display=Je?"block":"none"),!Je)return;let ht=Math.round(be);o.style.left=`${Math.round(Me-ht/2-k.left)}px`,o.style.top=`${Math.round(_e-k.top)}px`,o.style.width=o.style.height=`${ht}px`,h.style.left=o.style.left,h.style.top=o.style.top,h.style.width=h.style.height=`${ht}px`;let jt=ee?e.lightsAtPhone:e.lightsAt;m.forEach((Qt,y)=>{let[L,G]=jt[y]||jt[0],O=ie.width*(y===0?.012:.014);Qt.style.left=`${Math.round(ie.left+ie.width*L/100-k.left)}px`,Qt.style.top=`${Math.round(ie.top+ie.height*G/100-k.top)}px`,Qt.style.width=Qt.style.height=`${Math.round(O)}px`,Qt.style.display=e.lights&&Je?"block":"none"});let cn=Math.ceil(2*Math.hypot(Math.max(Me-k.left,k.right-Me),Math.max(_e+ht/2-k.top,k.bottom-_e-ht/2)));c.style.left=`${Math.round(Me-k.left)}px`,c.style.top=`${Math.round(_e+ht/2-k.top)}px`,c.style.setProperty("--reach",`${cn}px`),ht!==he&&(he=ht,a.setSize(ht,ht,!1),C.aspect=1,C.updateProjectionMatrix(),B.value=a.getDrawingBufferSize(new Ge).y/2,ce=t0/(.96*Math.tan(Ad/2*Math.PI/180)))}function ke(k){let ie=ce*(.56+.44*Math.min(1,k/26));C.position.set(Math.sin(vt)*Math.cos(st)*ie,Math.sin(st)*ie,Math.cos(vt)*Math.cos(st)*ie),C.lookAt(0,0,0)}let I=new U;function oe(k,ie){let ee=o.getBoundingClientRect(),be=k-ee.left,Me=ie-ee.top,Fe=null,Oe=1e9;for(let _e of p){if(F.getX(_e.i)<=0||(I.set(_e.x,_e.y,_e.z).multiplyScalar(S.scale.x).project(C),I.z>1))continue;let xt=(I.x+1)/2*ee.width,Je=(1-I.y)/2*ee.height,ht=Math.max(9,_e.r*1.4*ee.height/470+6),jt=Math.hypot(xt-be,Je-Me);jt<ht&&jt<Oe&&(Fe=_e,Oe=jt)}return Fe}let Y=[];function le(){if(!Y.length)return;let k=o.getBoundingClientRect(),ie=[];for(let ee of Y){let be=f.get(ee.id);I.set(ee.x,ee.y,ee.z).multiplyScalar(S.scale.x).project(C);let Me=(I.x+1)/2*k.width,Fe=(1-I.y)/2*k.height,Oe=be.offsetWidth||ee.title.length*6.5+10,_e=16,xt=Math.round(ee.r*1.4*k.height/470+10),Je={l:Me-Oe/2,r:Me+Oe/2,t:Fe-xt-_e,b:Fe-xt},ht=I.z<1&&Je.l>-k.width*.7&&Je.r<k.width*1.7&&Je.t>-40&&Je.b<k.height+40,jt=ie.some(Qt=>Je.l<Qt.r+6&&Je.r>Qt.l-6&&Je.t<Qt.b+3&&Je.b>Qt.t-3),cn=ht&&(!jt||ee===ze);be.style.visibility=cn?"visible":"hidden",cn&&(ie.push(Je),be.style.transform=`translate(${Math.round(Me)}px, ${Math.round(Fe-xt)}px) translate(-50%, -100%)`)}}function me(k){if(h.textContent="",f.clear(),Y=[],!k||!e.labels)return;let ie=[...w.get(k.id)].map(ee=>u.get(ee)).filter(Boolean).sort((ee,be)=>be.degree-ee.degree).slice(0,9);Y=[k,...ie];for(let ee of Y){let be=document.createElement("span");be.textContent=ee.title.length>42?ee.title.slice(0,40).replace(/\s+\S*$/,"")+"\u2026":ee.title,be.className=ee===k?"is-selected":"",be.style.color=ee===k?"#fff":v[ee.source]?"#"+v[ee.source].getHexString():"#fff",h.appendChild(be),f.set(ee.id,be)}le()}function Q(k){ze=k,me(k),o.classList.toggle("has-selection",!!k),it!=="grow"&&(ae(et.duration),at&&Xn())}function Ae(){return e.interactive&&Te&&it!=="grow"&&!Rt}if(e.interactive){o.classList.add("is-interactive");let k=0,ie=0,ee=0,be=0,Me=!1,Fe=null;o.addEventListener("pointerdown",_e=>{!Ae()||_e.button>0||(Fe=_e.pointerId,k=ee=_e.clientX,ie=be=_e.clientY,Me=!1,E=g=0,o.setPointerCapture(_e.pointerId))}),o.addEventListener("pointermove",_e=>{if(Fe===_e.pointerId){let xt=_e.clientX-ee,Je=_e.clientY-be;ee=_e.clientX,be=_e.clientY,!Me&&Math.hypot(_e.clientX-k,_e.clientY-ie)>6&&(Me=!0,z=!0,o.classList.add("is-dragging")),Me&&(vt-=xt*.006,st=Math.max(-1.2,Math.min(1.2,st+Je*.004)),E=-xt*.006,g=Je*.004,N=performance.now(),at&&Xn())}else Ae()&&_e.pointerType==="mouse"&&o.classList.toggle("is-over",!!oe(_e.clientX,_e.clientY))});let Oe=_e=>{Fe===_e.pointerId&&(Fe=null,z=!1,o.classList.remove("is-dragging"),N=performance.now(),!Me&&Ae()&&Q(oe(_e.clientX,_e.clientY)))};o.addEventListener("pointerup",Oe),o.addEventListener("pointercancel",Oe)}let ve=!1,dt=0,ot=0,Jt=!0,Kt=0;function Qs(k){if(dt=0,!ve)return;Kt++;let ie=Math.min((k-ot)/1e3,.1);ot=k;let ee=it!=="grow";if(it==="grow")lt+=ie,ee=ae(Dc(lt,et.duration,e.speed,e.warp)),ee&&(it="hold",D=k),vt+=ie*2*Math.PI/60*n0*e.turn;else{let Me=performance.now()-N>4e3;z||(Math.abs(E)>4e-4||Math.abs(g)>4e-4?(vt+=E,st=Math.max(-1.2,Math.min(1.2,st+g)),E*=.94,g*=.94):Me&&!ze&&(vt+=ie*2*Math.PI/60*i0*e.turn,st+=(.04-st)*Math.min(1,ie*.6))),e.mode==="loop"&&!ze&&Me&&!Rt&&k-D>e.holdSeconds*1e3&&(Rt=!0,o.classList.add("is-fading"),setTimeout(()=>{Q(null),W(),ae(0),ke(0),a.render(A,C),o.classList.remove("is-fading"),Rt=!1,se()},1500))}let be=it==="grow"?Dc(lt,et.duration,e.speed,e.warp):et.duration;if(ye&&(ye.update(k/1e3,!1,it==="grow"?Math.max(0,(be-8)/20):1),Qe&&(Qe.material.opacity*=e.glow)),Ke&&e.heart&&lt>=0){let Me=wd(k/1e3);Ke.scale.setScalar(1+.16*Me),Ke.material.opacity=.16+.34*Me,Qe&&(Qe.material.opacity+=.18*Me*e.glow)}if(S.scale.setScalar(e.breath&&it!=="grow"?1+.07*s0(k/1e3,e.breathEvery):1),lt>=0&&Ce(ie),e.lights){let Me=e.heart?wd(k/1e3):0,Fe=it==="grow"?.35:0;x[0]+=((lt<0?0:.45+.4*Me+Fe)-x[0])*Math.min(1,ie*12);for(let Oe=1;Oe<x.length;Oe++)x[Oe]=Math.max(0,x[Oe]-ie*4.5);m.forEach((Oe,_e)=>{Oe.style.opacity=Math.min(1,x[_e]).toFixed(3)})}ke(be),le(),o.style.visibility=it==="grow"&&lt<0?"hidden":"",a.render(A,C),dt=requestAnimationFrame(Qs)}function uo(){ve||at||(ve=!0,ot=performance.now(),dt=requestAnimationFrame(Qs))}function er(){ve=!1,dt&&cancelAnimationFrame(dt),dt=0}function jn(){Jt&&!document.hidden&&Te?uo():er()}new IntersectionObserver(k=>{Jt=k.some(ie=>ie.isIntersecting),jn()},{threshold:0}).observe(i),document.addEventListener("visibilitychange",jn);let Ii=()=>{De(),at&&Xn(),jn()};window.addEventListener("resize",Ii,{passive:!0}),window.ResizeObserver&&new ResizeObserver(Ii).observe(t),t.complete||t.addEventListener("load",Ii,{once:!0});function Xn(){Te&&(ae(et.duration),ye&&(ye.update(4,!1,1),Qe&&(Qe.material.opacity*=e.glow)),ke(et.duration),le(),e.lights&&m.forEach((k,ie)=>{k.style.opacity=ie===0?".6":".25"}),a.render(A,C))}window.heroBrain={settings:e,set(k){Object.assign(e,k),he=0,Ii(),i.style.setProperty("--hero-brain-opacity",String(e.opacity))},replay(){Q(null),W(),Rt=!1,o.classList.remove("is-fading"),at?Xn():se()},select(k){Q(k&&u.get(k)||null)},state(){return{selected:ze&&ze.id,angle:+vt.toFixed(3),pitch:+st.toFixed(3),elapsed:lt,growthTime:it==="grow"?Dc(lt,et.duration,e.speed,e.warp):et.duration,phase:it,running:ve,visible:Te,onScreen:Jt,frames:Kt,side:he,still:at}},snap(){a.render(A,C);let k=a.getContext(),ie=k.drawingBufferWidth,ee=k.drawingBufferHeight,be=new Uint8Array(ie*ee*4);k.readPixels(0,0,ie,ee,k.RGBA,k.UNSIGNED_BYTE,be);let Me=0;for(let _e=3;_e<be.length;_e+=4)be[_e]&&Me++;let Fe=0,Oe=0;for(let _e=0;_e<_;_e++)F.getX(_e)>0&&Fe++,Oe+=P.getX(_e);return{lit:Me,of:ie*ee,alive:Fe,meanSize:Oe/_,cam:C.position.toArray().map(Math.round),pos0:[T.getX(0),T.getY(0),T.getZ(0)].map(Math.round),halfHeight:B.value,distance:ce}}},De(),at?Xn():(ae(0),ke(0),a.render(A,C)),requestAnimationFrame(()=>{o.classList.add("is-on"),se(),jn()})}try{let i=document.querySelector("[data-hero-brain]");i&&!i.dataset.heroBrainRunning&&(i.dataset.heroBrainRunning="1",l0(i))}catch{}export{l0 as start};
