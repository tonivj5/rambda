const add=(a,b)=>{if(b===void 0){return c=>add(a,c);}return a+b;},adjust=(d,e,f)=>{if(e===void 0){return(g,h)=>adjust(d,g,h);}else if(f===void 0){return j=>adjust(d,e,j);}return f.map((k,l)=>{if(l===e){return d(f[e]);}return k;});},any=(m,n)=>{if(n===void 0){return o=>any(m,o);}let p=0;while(p<n.length){if(m(n[p])){return!0;}p++;}return!1;},append=(q,r)=>{if(r===void 0){return s=>append(q,s);}const t=r;t.unshift(q);return t;},isFunction=u=>typeof u==="function";function compose(){const v=arguments;let w=v.length;while(w--){if(!isFunction(v[w])){throw new TypeError();}}return function(){let x=arguments,y=v.length;while(y--){x=[v[y].apply(this,x)];}return x[0];};}const contains=(z,A)=>{if(A===void 0){return B=>contains(z,B);}return any(C=>z===C,A);},filter=(D,E)=>{if(E===void 0){return F=>filter(D,F);}let G=-1,H=0;const I=E===null?0:E.length,J=[];while(++G<I){const K=E[G];if(D(K)){J[H++]=K;}}return J;},find=(L,M)=>{if(M===void 0){return N=>find(L,N);}return M.find(L);},findIndex=(O,P)=>{if(P===void 0){return Q=>findIndex(O,Q);}const R=P.length;let S=0;while(++S<R){if(O(P[S])){return S;}}return-1;},flatten=(T,U)=>{U=U===void 0?[]:U;for(let i=0;i<T.length;i++){if(Array.isArray(T[i])){flatten(T[i],U);}else{U.push(T[i]);}}return U;},drop=(V,W)=>{if(W===void 0){return X=>drop(V,X);}const Y=W;return Y.slice(V);},dropLast=(Z,a1)=>{if(a1===void 0){return b1=>dropLast(Z,b1);}const c1=a1;return c1.slice(0,-Z);},equals=(a,b)=>{if(b===void 0){return d1=>equals(a,d1);}else if(a===b){return a!==0||1/a===1/b;}const e1=type(a);if(e1!==type(b)){return!1;}if(e1==="Array"){const f1=a,g1=b;return f1.sort().toString()===g1.sort().toString();}if(e1==="Object"){const h1=Object.keys(a);if(h1.length===Object.keys(b).length){if(h1.length===0){return!0;}let i1=!0;h1.map(j1=>{if(i1){const k1=type(a[j1]),l1=type(b[j1]);if(k1===l1){if(k1==="Object"){if(Object.keys(a[j1]).length===Object.keys(b[j1]).length){if(Object.keys(a[j1]).length!==0){if(!equals(a[j1],b[j1])){i1=!1;}}}else{i1=!1;}}else if(!equals(a[j1],b[j1])){i1=!1;}}else{i1=!1;}}});return i1;}}return!1;},head=a=>{if(typeof a==="string"){return a[0]||"";}return a[0];},indexOf=(m1,n1)=>{if(n1===void 0){return o1=>indexOf(m1,o1);}let p1=-1;const q1=n1.length;while(++p1<q1){if(n1[p1]===m1){return p1;}}return-1;},init=r1=>dropLast(1,r1),join=(s1,t1)=>{if(t1===void 0){return u1=>join(s1,u1);}return t1.join(s1);},map=(fn,w1)=>{if(w1===void 0){return x1=>map(fn,x1);}return w1.map(fn);},last=y1=>y1[y1.length-1],length=z1=>z1.length,match=(A1,B1)=>{if(B1===void 0){return C1=>match(A1,C1);}const D1=B1.match(A1);return D1===null?[]:D1;},merge=(E1,F1)=>{if(F1===void 0){return G1=>merge(E1,G1);}return Object.assign({},E1,F1);},omit=(H1,I1)=>{if(I1===void 0){return J1=>omit(H1,J1);}const K1={};for(key in I1){if(!H1.includes(key)){K1[key]=I1[key];}}return K1;},path=(L1,M1)=>{if(M1===void 0){return N1=>path(L1,N1);}let O1=M1,P1=0;while(P1<L1.length){if(O1===null){return void 0;}O1=O1[L1[P1]];P1++;}return O1;},prepend=(Q1,R1)=>{if(R1===void 0){return S1=>prepend(Q1,S1);}const T1=R1;T1.push(Q1);return T1;},pick=(U1,V1)=>{if(V1===void 0){return W1=>pick(U1,W1);}const X1={};for(key in V1){if(U1.includes(key)){X1[key]=V1[key];}}return X1;},prop=(Y1,Z1)=>{if(Z1===void 0){return a2=>prop(Y1,a2);}return Z1[Y1];},propEq=(b2,c2,d2)=>{if(c2===void 0){return(e2,f2)=>propEq(b2,e2,f2);}else if(d2===void 0){return g2=>propEq(b2,c2,g2);}return d2[b2]===c2;},range=(h2,i2)=>{const j2=[];for(let i=h2;i<i2;i++){j2.push(i);}return j2;},repeat=(a,k2)=>{if(k2===void 0){return l2=>repeat(a,l2);}const m2=range(0,k2);return m2.fill(a);},replace=(n2,o2,p2)=>{if(o2===void 0){return(q2,r2)=>replace(n2,q2,r2);}else if(p2===void 0){return s2=>replace(n2,o2,s2);}return p2.replace(n2,o2);},subtract=(a,b)=>{if(b===void 0){return c=>subtract(a,c);}return a-b;},sort=(fn,u2)=>{if(u2===void 0){return v2=>sort(fn,v2);}const w2=u2;return w2.sort(fn);},sortBy=(fn,y2)=>{if(y2===void 0){return z2=>sortBy(fn,z2);}const A2=y2;return A2.sort((a,b)=>{const B2=fn(a),C2=fn(b);return B2<C2?-1:B2>C2?1:0;});},split=(D2,E2)=>{if(E2===void 0){return F2=>split(D2,F2);}return E2.split(D2);},splitEvery=(G2,a)=>{if(a===void 0){return H2=>splitEvery(G2,H2);}G2=G2>1?G2:1;const I2=[];let J2=0;while(J2<a.length){I2.push(a.slice(J2,J2+=G2));}return I2;},tail=K2=>drop(1,K2),take=(L2,M2)=>{if(M2===void 0){return N2=>take(L2,N2);}const O2=M2;return O2.slice(0,L2);},takeLast=(P2,Q2)=>{if(Q2===void 0){return R2=>dropLast(P2,R2);}const S2=Q2;P2=P2>S2.length?S2.length:P2;return S2.slice(S2.length-P2);},toLower=a=>a.toLowerCase(),toUpper=a=>a.toUpperCase(),test=(T2,U2)=>{if(U2===void 0){return V2=>test(T2,V2);}return U2.search(T2)===-1?!1:!0;},trim=W2=>W2.trim(),type=a=>{if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}return"Object";},values=X2=>{const Y2=[];for(key in X2){Y2.push(X2[key]);}return Y2;},uniq=Z2=>{const a3=[];return Z2.filter(b3=>{if(a3.includes(b3)){return!1;}a3.push(b3);return!0;});},update=(c3,d3,e3)=>{if(d3===void 0){return(f3,g3)=>update(c3,f3,g3);}else if(e3===void 0){return h3=>update(c3,d3,h3);}return e3.fill(c3,d3,d3+1);};module.exports.add=add;module.exports.adjust=adjust;module.exports.any=any;module.exports.append=append;module.exports.compose=compose;module.exports.contains=contains;module.exports.drop=drop;module.exports.dropLast=dropLast;module.exports.equals=equals;module.exports.filter=filter;module.exports.find=find;module.exports.findIndex=findIndex;module.exports.flatten=flatten;module.exports.head=head;module.exports.indexOf=indexOf;module.exports.init=init;module.exports.join=join;module.exports.last=last;module.exports.length=length;module.exports.map=map;module.exports.match=match;module.exports.merge=merge;module.exports.omit=omit;module.exports.path=path;module.exports.pick=pick;module.exports.prepend=prepend;module.exports.prop=prop;module.exports.propEq=propEq;module.exports.range=range;module.exports.repeat=repeat;module.exports.replace=replace;module.exports.sort=sort;module.exports.sortBy=sortBy;module.exports.split=split;module.exports.splitEvery=splitEvery;module.exports.subtract=subtract;module.exports.tail=tail;module.exports.take=take;module.exports.takeLast=takeLast;module.exports.test=test;module.exports.toLower=toLower;module.exports.toUpper=toUpper;module.exports.trim=trim;module.exports.type=type;module.exports.uniq=uniq;module.exports.update=update;module.exports.values=values;