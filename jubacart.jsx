import { useState } from "react";

const SUPERMARKETS = [
  { id:"jit", name:"JIT Mart", description:"One of Juba's largest supermarket chains with multiple branches. Groceries, home essentials, electronics, and more.", address:"Yei Road, Juba", image:"🏪", rating:4.7, deliveryFee:1500 },
  { id:"bj",  name:"Beijing Supermarket", description:"The biggest new supermarket in Juba offering affordable prices on a wide range of imported and local products.", address:"Juba Town, Main Road", image:"🏬", rating:4.6, deliveryFee:2000 },
  { id:"ph",  name:"Phenicia Market", description:"Premium supermarket on Airport Road offering diverse groceries, household items, and imported goods. Known for quality.", address:"Airport Road, Juba", image:"🛒", rating:4.8, deliveryFee:2500 },
  { id:"ly",  name:"Lily's Supermarket", description:"Your one-stop shop in Juba with affordable products, groceries, and everyday essentials.", address:"Juba, South Sudan", image:"🌸", rating:4.4, deliveryFee:1000 },
];

const CATEGORIES = [
  { id:"fruits",    name:"Fruits & Vegetables", icon:"🍎" },
  { id:"dairy",     name:"Dairy & Eggs",         icon:"🥛" },
  { id:"meat",      name:"Meat & Fish",           icon:"🥩" },
  { id:"beverages", name:"Beverages",             icon:"🥤" },
  { id:"snacks",    name:"Snacks",                icon:"🍿" },
  { id:"household", name:"Household",             icon:"🏠" },
  { id:"personal",  name:"Personal Care",         icon:"🧴" },
  { id:"bakery",    name:"Bakery",                icon:"🍞" },
];

const PRODUCTS = [
  {id:"p1", name:"Mangoes",         price:3000,  unit:"kg",     desc:"Fresh ripe mangoes from local farms",      sm:"jit", cat:"fruits",    img:"🥭", featured:true },
  {id:"p2", name:"Bananas",         price:1500,  unit:"bunch",  desc:"Sweet yellow bananas",                     sm:"jit", cat:"fruits",    img:"🍌", featured:true },
  {id:"p3", name:"Tomatoes",        price:2500,  unit:"kg",     desc:"Fresh red tomatoes",                       sm:"bj",  cat:"fruits",    img:"🍅", featured:false},
  {id:"p4", name:"Onions",          price:2000,  unit:"kg",     desc:"Red onions — locally grown",               sm:"bj",  cat:"fruits",    img:"🧅", featured:false},
  {id:"p5", name:"Potatoes",        price:3000,  unit:"kg",     desc:"Fresh Irish potatoes",                     sm:"ph",  cat:"fruits",    img:"🥔", featured:false},
  {id:"p6", name:"Oranges",         price:2000,  unit:"kg",     desc:"Juicy sweet oranges",                      sm:"ly",  cat:"fruits",    img:"🍊", featured:true },
  {id:"p7", name:"Pineapple",       price:4000,  unit:"piece",  desc:"Fresh tropical pineapple",                 sm:"ly",  cat:"fruits",    img:"🍍", featured:false},
  {id:"p8", name:"Green Peppers",   price:3500,  unit:"kg",     desc:"Fresh green bell peppers",                 sm:"ph",  cat:"fruits",    img:"🫑", featured:false},
  {id:"p9", name:"Fresh Milk",      price:5000,  unit:"liter",  desc:"Farm fresh whole milk",                    sm:"jit", cat:"dairy",     img:"🥛", featured:true },
  {id:"p10",name:"Eggs (12 pack)",  price:4500,  unit:"pack",   desc:"Farm-fresh eggs — tray of 12",             sm:"bj",  cat:"dairy",     img:"🥚", featured:true },
  {id:"p11",name:"Cheddar Cheese",  price:8500,  unit:"pack",   desc:"Imported cheddar cheese slice pack",       sm:"ph",  cat:"dairy",     img:"🧀", featured:false},
  {id:"p12",name:"Yogurt",          price:3000,  unit:"cup",    desc:"Strawberry flavored yogurt",               sm:"ph",  cat:"dairy",     img:"🫙", featured:false},
  {id:"p13",name:"Butter",          price:5000,  unit:"pack",   desc:"Imported butter 250g",                     sm:"ly",  cat:"dairy",     img:"🧈", featured:false},
  {id:"p14",name:"Cream Cheese",    price:6500,  unit:"tub",    desc:"Philadelphia-style cream cheese",          sm:"jit", cat:"dairy",     img:"🧀", featured:false},
  {id:"p15",name:"Condensed Milk",  price:3500,  unit:"can",    desc:"Nestle condensed milk",                    sm:"bj",  cat:"dairy",     img:"🥫", featured:false},
  {id:"p16",name:"Chicken (Whole)", price:18000, unit:"piece",  desc:"Fresh whole chicken, cleaned",             sm:"jit", cat:"meat",      img:"🍗", featured:true },
  {id:"p17",name:"Beef (Boneless)", price:22000, unit:"kg",     desc:"Fresh boneless beef cuts",                 sm:"jit", cat:"meat",      img:"🥩", featured:false},
  {id:"p18",name:"Nile Perch",      price:15000, unit:"kg",     desc:"Fresh Nile perch — locally caught",        sm:"bj",  cat:"meat",      img:"🐟", featured:true },
  {id:"p19",name:"Goat Meat",       price:25000, unit:"kg",     desc:"Fresh goat meat cuts",                     sm:"ph",  cat:"meat",      img:"🥩", featured:false},
  {id:"p20",name:"Beef Sausages",   price:7000,  unit:"pack",   desc:"Premium beef sausages — 6 pack",          sm:"ly",  cat:"meat",      img:"🌭", featured:false},
  {id:"p21",name:"Smoked Fish",     price:10000, unit:"kg",     desc:"Traditional smoked Nile fish",             sm:"bj",  cat:"meat",      img:"🐟", featured:false},
  {id:"p22",name:"Coca-Cola 500ml", price:1000,  unit:"bottle", desc:"Classic Coca-Cola",                        sm:"jit", cat:"beverages", img:"🥤", featured:false},
  {id:"p23",name:"Drinking Water",  price:500,   unit:"bottle", desc:"Purified drinking water 500ml",            sm:"bj",  cat:"beverages", img:"💧", featured:true },
  {id:"p24",name:"Tropical Juice",  price:3000,  unit:"carton", desc:"Fresh tropical fruit juice 1L",            sm:"jit", cat:"beverages", img:"🧃", featured:false},
  {id:"p25",name:"Sprite 500ml",    price:1000,  unit:"bottle", desc:"Sprite lemon-lime soda",                   sm:"ph",  cat:"beverages", img:"🥤", featured:false},
  {id:"p26",name:"Red Bull",        price:2500,  unit:"can",    desc:"Red Bull energy drink 250ml",              sm:"ly",  cat:"beverages", img:"⚡", featured:false},
  {id:"p27",name:"Tea Bags",        price:2000,  unit:"box",    desc:"Lipton premium tea bags — 25 bags",        sm:"bj",  cat:"beverages", img:"🍵", featured:false},
  {id:"p28",name:"Instant Coffee",  price:4500,  unit:"jar",    desc:"Nescafe instant coffee 200g",              sm:"ph",  cat:"beverages", img:"☕", featured:false},
  {id:"p29",name:"Potato Chips",    price:2000,  unit:"pack",   desc:"Crispy salted potato chips",               sm:"jit", cat:"snacks",    img:"🍟", featured:false},
  {id:"p30",name:"Choc Biscuits",   price:2500,  unit:"pack",   desc:"Lotus chocolate biscuits",                 sm:"bj",  cat:"snacks",    img:"🍪", featured:true },
  {id:"p31",name:"Roasted Peanuts", price:1500,  unit:"pack",   desc:"Dry roasted peanuts 200g",                 sm:"ph",  cat:"snacks",    img:"🥜", featured:false},
  {id:"p32",name:"Chocolate Bar",   price:4000,  unit:"bar",    desc:"Cadbury Dairy Milk chocolate",             sm:"ly",  cat:"snacks",    img:"🍫", featured:false},
  {id:"p33",name:"Popcorn",         price:1500,  unit:"pack",   desc:"Butter-flavored microwave popcorn",        sm:"jit", cat:"snacks",    img:"🍿", featured:false},
  {id:"p34",name:"Assorted Cookies",price:3000,  unit:"pack",   desc:"Danish butter cookies tin",                sm:"ph",  cat:"snacks",    img:"🍪", featured:false},
  {id:"p35",name:"Chewing Gum",     price:500,   unit:"pack",   desc:"Mentos chewing gum",                       sm:"ly",  cat:"snacks",    img:"🍬", featured:false},
  {id:"p36",name:"Laundry Soap",    price:2000,  unit:"bar",    desc:"Laundry soap bar — multipack",             sm:"jit", cat:"household", img:"🧼", featured:false},
  {id:"p37",name:"Detergent",       price:6000,  unit:"pack",   desc:"Omo washing powder 1kg",                   sm:"bj",  cat:"household", img:"🫧", featured:false},
  {id:"p38",name:"Tissue Paper",    price:2500,  unit:"pack",   desc:"Soft toilet tissue rolls — 4 pack",        sm:"ph",  cat:"household", img:"🧻", featured:false},
  {id:"p39",name:"Candles",         price:1500,  unit:"pack",   desc:"Emergency candles — 10 pack",              sm:"ly",  cat:"household", img:"🕯️",featured:false},
  {id:"p40",name:"Matches",         price:500,   unit:"box",    desc:"Safety matches box",                       sm:"jit", cat:"household", img:"🪵", featured:false},
  {id:"p41",name:"Dish Soap",       price:3000,  unit:"bottle", desc:"Morning Fresh dishwashing liquid",         sm:"bj",  cat:"household", img:"🧽", featured:false},
  {id:"p42",name:"Bleach",          price:3500,  unit:"bottle", desc:"Jik bleach 500ml",                         sm:"ph",  cat:"household", img:"🫧", featured:false},
  {id:"p43",name:"Shampoo",         price:5000,  unit:"bottle", desc:"Sunsilk anti-dandruff shampoo",            sm:"ph",  cat:"personal",  img:"🧴", featured:false},
  {id:"p44",name:"Body Lotion",     price:6000,  unit:"bottle", desc:"Vaseline moisturizing lotion 400ml",       sm:"ly",  cat:"personal",  img:"🧴", featured:false},
  {id:"p45",name:"Deodorant",       price:4000,  unit:"piece",  desc:"Nivea roll-on deodorant",                  sm:"jit", cat:"personal",  img:"🪥", featured:false},
  {id:"p46",name:"Hand Sanitizer",  price:2500,  unit:"bottle", desc:"Antibacterial hand sanitizer 200ml",       sm:"bj",  cat:"personal",  img:"🧴", featured:true },
  {id:"p47",name:"Toothpaste",      price:3000,  unit:"tube",   desc:"Colgate fluoride toothpaste",              sm:"ly",  cat:"personal",  img:"🪥", featured:false},
  {id:"p48",name:"White Bread",     price:1800,  unit:"loaf",   desc:"Fresh baked white bread",                  sm:"jit", cat:"bakery",    img:"🍞", featured:true },
  {id:"p49",name:"Croissants",      price:3500,  unit:"pack",   desc:"Butter croissants — 4 pack",               sm:"ph",  cat:"bakery",    img:"🥐", featured:false},
  {id:"p50",name:"Chocolate Cake",  price:12000, unit:"piece",  desc:"Rich chocolate layer cake",                sm:"ph",  cat:"bakery",    img:"🎂", featured:true },
  {id:"p51",name:"Mandazi",         price:500,   unit:"piece",  desc:"Fresh fried mandazi — local favorite",     sm:"bj",  cat:"bakery",    img:"🥯", featured:false},
  {id:"p52",name:"Baguette",        price:2500,  unit:"piece",  desc:"Freshly baked French baguette",            sm:"ly",  cat:"bakery",    img:"🥖", featured:false},
  {id:"p53",name:"Samosas",         price:1000,  unit:"piece",  desc:"Beef samosas — freshly fried",             sm:"bj",  cat:"bakery",    img:"🥟", featured:false},
];

const WA = "211921708321";
const PHONE = "+211911455371";
const FB = "Juba Cart";

const G = "#16a34a";
const GD = "#15803d";
function ssp(n) { return "SSP " + n.toLocaleString(); }
function bg(name) {
  const c=["#dcfce7","#fef9c3","#dbeafe","#f3e8ff","#fce7f3","#ffedd5","#fee2e2","#ccfbf1","#e0e7ff","#fef3c7"];
  let h=0; for(let i=0;i<name.length;i++) h=name.charCodeAt(i)+((h<<5)-h);
  return c[Math.abs(h)%c.length];
}
const B = {background:G,color:"#fff",border:"none",cursor:"pointer",borderRadius:10,fontFamily:"inherit",fontWeight:700};
const PILL = {flexShrink:0,padding:"8px 16px",borderRadius:99,fontSize:13,fontWeight:600,border:"1.5px solid #e5e7eb",background:"#fff",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit",color:"#374151"};

function useStore() {
  const [view,setView]=useState("home");
  const [smId,setSmId]=useState(null);
  const [cart,setCart]=useState([]);
  const [cartOpen,setCartOpen]=useState(false);
  const [lastOrder,setLastOrder]=useState(null);
  const nav=(v,id)=>{setView(v);if(id!==undefined)setSmId(id);setCartOpen(false);window.scrollTo({top:0,behavior:"smooth"});};
  const addToCart=p=>setCart(prev=>{const ex=prev.find(i=>i.p.id===p.id);return ex?prev.map(i=>i.p.id===p.id?{...i,q:i.q+1}:i):[...prev,{p,q:1}];});
  const setQ=(id,q)=>{if(q<=0)setCart(prev=>prev.filter(i=>i.p.id!==id));else setCart(prev=>prev.map(i=>i.p.id===id?{...i,q}:i));};
  const clearCart=()=>setCart([]);
  const count=cart.reduce((s,i)=>s+i.q,0);
  const subtotal=cart.reduce((s,i)=>s+i.p.price*i.q,0);
  const fee=cart.length===0?0:(SUPERMARKETS.find(s=>s.id===cart[0].p.sm)?.deliveryFee??2000);
  return {view,smId,cart,cartOpen,setCartOpen,lastOrder,setLastOrder,nav,addToCart,setQ,clearCart,count,subtotal,fee};
}

export default function App() {
  const S=useStore();
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",background:"#f0fdf4",fontFamily:"system-ui,sans-serif"}}>
      <Nav S={S}/>
      {S.cartOpen&&<Drawer S={S}/>}
      <main style={{flex:1}}>
        {S.view==="home"&&<Home S={S}/>}
        {S.view==="sm"&&<SmPage S={S}/>}
        {S.view==="checkout"&&<Checkout S={S}/>}
        {S.view==="done"&&<Done S={S}/>}
      </main>
      <Foot S={S}/>
      {S.count>0&&S.view!=="checkout"&&S.view!=="done"&&(
        <div style={{position:"fixed",bottom:16,left:16,right:16,zIndex:90}}>
          <button onClick={()=>S.setCartOpen(true)} style={{width:"100%",background:G,color:"#fff",border:"none",borderRadius:16,padding:"13px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",boxShadow:"0 8px 24px rgba(22,163,74,.4)",fontFamily:"inherit"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span style={{background:"rgba(255,255,255,.2)",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🛒</span>
              <div style={{textAlign:"left"}}>
                <div style={{fontWeight:700,fontSize:14}}>{S.count} item{S.count>1?"s":""} in cart</div>
                <div style={{fontSize:11,color:"#bbf7d0"}}>{ssp(S.subtotal)}</div>
              </div>
            </div>
            <span style={{fontWeight:700,fontSize:14}}>View Cart →</span>
          </button>
        </div>
      )}
    </div>
  );
}

function Nav({S}) {
  return (
    <header style={{position:"sticky",top:0,zIndex:100,background:"#fff",borderBottom:"1px solid #e5e7eb",boxShadow:"0 1px 4px rgba(0,0,0,.07)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 16px",height:60,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <button onClick={()=>S.nav("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:26}}>🛒</span>
          <span style={{fontSize:20,fontWeight:900,color:G,letterSpacing:"-0.5px"}}>JubaCart</span>
        </button>
        <button onClick={()=>S.setCartOpen(true)} style={{background:"none",border:"none",cursor:"pointer",position:"relative",padding:8,borderRadius:12}}>
          <span style={{fontSize:22}}>🛒</span>
          {S.count>0&&<span style={{position:"absolute",top:2,right:2,background:G,color:"#fff",borderRadius:99,fontSize:10,fontWeight:700,minWidth:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"}}>{S.count}</span>}
        </button>
      </div>
    </header>
  );
}

function Home({S}) {
  const [cat,setCat]=useState(null);
  const vis=cat?SUPERMARKETS.filter(sm=>PRODUCTS.some(p=>p.sm===sm.id&&p.cat===cat)):SUPERMARKETS;
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#14532d,#15803d,#16a34a)",color:"#fff",padding:"60px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 20px"}}>
          <h1 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:900,lineHeight:1.1,marginBottom:14,letterSpacing:"-1px"}}>
            Your Neighborhood,<br/><span style={{color:"#fde047"}}>Delivered.</span>
          </h1>
          <p style={{fontSize:17,color:"#bbf7d0",marginBottom:28,maxWidth:460,lineHeight:1.6}}>Shop from Juba's best supermarkets. Fresh groceries delivered to your door. Pay on delivery — no stress.</p>
          <div style={{marginBottom:48}}>
            <button onClick={()=>document.getElementById("sm-sec")?.scrollIntoView({behavior:"smooth"})}
              style={{background:"#fff",color:GD,border:"none",cursor:"pointer",padding:"13px 26px",borderRadius:12,fontSize:15,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(0,0,0,.2)"}}>
              Order Now →
            </button>
          </div>
        </div>
        <div style={{height:44,background:"#f0fdf4",borderRadius:"44px 44px 0 0"}}/>
      </div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"28px 16px 0"}}>
        <h2 style={{fontSize:20,fontWeight:800,marginBottom:14}}>Shop by Category</h2>
        <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none"}}>
          {[{id:null,name:"All",icon:"🏪"},...CATEGORIES].map(c=>(
            <button key={c.id??"all"} onClick={()=>setCat(c.id===cat?null:c.id)}
              style={{...PILL,...(cat===c.id?{background:G,color:"#fff",borderColor:G}:{})}}>
              {c.icon} {c.name}
            </button>
          ))}
        </div>
      </div>

      <div id="sm-sec" style={{maxWidth:1200,margin:"0 auto",padding:"24px 16px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18}}>
          <h2 style={{fontSize:20,fontWeight:800}}>Featured Supermarkets</h2>
          <span style={{fontSize:12,background:"#f3f4f6",padding:"4px 12px",borderRadius:99,fontWeight:600,color:"#6b7280"}}>{vis.length} stores</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:18}}>
          {vis.map(sm=>(
            <div key={sm.id} style={{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",boxShadow:"0 1px 4px rgba(0,0,0,.07)",overflow:"hidden"}}>
              <div style={{background:"linear-gradient(135deg,#166534,#16a34a)",padding:"18px 18px 14px",color:"#fff"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                  <span style={{fontSize:26,background:"rgba(255,255,255,.2)",borderRadius:12,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sm.image}</span>
                  <div>
                    <div style={{fontWeight:700,fontSize:16}}>{sm.name}</div>
                    <div style={{fontSize:12,color:"#bbf7d0",marginTop:3}}>⭐ {sm.rating.toFixed(1)} · {PRODUCTS.filter(p=>p.sm===sm.id).length} products</div>
                  </div>
                </div>
              </div>
              <div style={{padding:"14px 16px 16px"}}>
                <p style={{fontSize:13,color:"#6b7280",lineHeight:1.5,marginBottom:12,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{sm.description}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
                  <span style={{fontSize:11,padding:"3px 10px",borderRadius:99,background:"#f3f4f6",color:"#6b7280"}}>📍 {sm.address}</span>
                  <span style={{fontSize:11,padding:"3px 10px",borderRadius:99,background:"#f3f4f6",color:"#6b7280"}}>🚚 {ssp(sm.deliveryFee)}</span>
                </div>
                <button onClick={()=>S.nav("sm",sm.id)} style={{...B,width:"100%",padding:11,fontSize:14}}>Browse Products →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:"#fff",padding:"52px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 16px"}}>
          <h2 style={{textAlign:"center",fontSize:24,fontWeight:800,marginBottom:6}}>How It Works</h2>
          <p style={{textAlign:"center",color:"#6b7280",marginBottom:40}}>Three simple steps to get your groceries delivered</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:28}}>
            {[{s:"1",i:"🔍",t:"Browse & Select",d:"Explore products from multiple supermarkets. Add your favorites to cart."},
              {s:"2",i:"📋",t:"Place Order",d:"Fill in your delivery details. No payment needed now — pay on delivery."},
              {s:"3",i:"🚚",t:"Get Delivered",d:"Your order arrives at your door. Pay with cash when you receive it."}].map(x=>(
              <div key={x.s} style={{textAlign:"center"}}>
                <div style={{width:72,height:72,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",fontSize:30}}>{x.i}</div>
                <div style={{fontSize:10,fontWeight:700,color:G,marginBottom:6,letterSpacing:1}}>STEP {x.s}</div>
                <h3 style={{fontWeight:700,marginBottom:6,fontSize:15}}>{x.t}</h3>
                <p style={{fontSize:13,color:"#6b7280",lineHeight:1.6}}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"40px 16px 52px"}}>
        <h2 style={{textAlign:"center",fontSize:22,fontWeight:800,marginBottom:6}}>Why JubaCart?</h2>
        <p style={{textAlign:"center",color:"#6b7280",marginBottom:28,fontSize:14}}>The smartest way to shop for groceries in Juba</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(155px,1fr))",gap:14}}>
          {[{i:"🏪",t:"Multiple Stores",d:"Choose from Juba's best supermarkets"},{i:"💵",t:"Cash on Delivery",d:"Pay when you receive your order"},{i:"🚀",t:"Fast Delivery",d:"Quick delivery across Juba town"},{i:"🥬",t:"Fresh Products",d:"Quality groceries every time"}].map(x=>(
            <div key={x.t} style={{background:"#fff",borderRadius:14,border:"1px solid #e5e7eb",padding:"18px 14px",textAlign:"center"}}>
              <div style={{fontSize:28,marginBottom:10}}>{x.i}</div>
              <div style={{fontWeight:700,fontSize:13,marginBottom:5}}>{x.t}</div>
              <div style={{fontSize:12,color:"#6b7280",lineHeight:1.5}}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmPage({S}) {
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState(null);
  const sm=SUPERMARKETS.find(s=>s.id===S.smId);
  const all=PRODUCTS.filter(p=>p.sm===S.smId);
  const shown=all.filter(p=>(!cat||p.cat===cat)&&(!search||p.name.toLowerCase().includes(search.toLowerCase())));
  const usedCats=CATEGORIES.filter(c=>all.some(p=>p.cat===c.id));
  if(!sm) return <div style={{padding:40,textAlign:"center"}}><button onClick={()=>S.nav("home")} style={{...B,padding:"12px 24px"}}>← Back</button></div>;
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#14532d,#16a34a)",color:"#fff",padding:"24px 0 28px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 16px"}}>
          <button onClick={()=>S.nav("home")} style={{background:"none",border:"none",cursor:"pointer",color:"#bbf7d0",fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:4,marginBottom:14,fontFamily:"inherit"}}>← Back to Home</button>
          <div style={{display:"flex",alignItems:"flex-start",gap:14}}>
            <span style={{fontSize:32,background:"rgba(255,255,255,.2)",borderRadius:14,width:58,height:58,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sm.image}</span>
            <div>
              <div style={{fontSize:23,fontWeight:800}}>{sm.name}</div>
              <div style={{color:"#bbf7d0",fontSize:13,marginTop:4}}>{sm.description}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:14,marginTop:10,fontSize:13,color:"#bbf7d0"}}>
                <span>⭐ {sm.rating.toFixed(1)}</span><span>📍 {sm.address}</span><span>🚚 Delivery: {ssp(sm.deliveryFee)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"20px 16px 0"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,background:"#fff",border:"1.5px solid #e5e7eb",borderRadius:12,padding:"0 14px",height:44,marginBottom:14}}>
          <span style={{color:"#9ca3af"}}>🔍</span>
          <input placeholder="Search products…" value={search} onChange={e=>setSearch(e.target.value)}
            style={{flex:1,border:"none",outline:"none",fontSize:14,fontFamily:"inherit",background:"transparent"}}/>
        </div>
        <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none"}}>
          <button onClick={()=>setCat(null)} style={{...PILL,...(cat===null?{background:G,color:"#fff",borderColor:G}:{})}}>All</button>
          {usedCats.map(c=><button key={c.id} onClick={()=>setCat(c.id===cat?null:c.id)} style={{...PILL,...(cat===c.id?{background:G,color:"#fff",borderColor:G}:{})}}>{c.icon} {c.name}</button>)}
        </div>
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 16px 80px"}}>
        {shown.length===0
          ?<div style={{textAlign:"center",padding:"60px 16px"}}><div style={{fontSize:48,marginBottom:12}}>🔍</div><h3>No products found</h3><p style={{color:"#6b7280"}}>Try a different search or category</p></div>
          :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:14}}>
            {shown.map(p=><PCard key={p.id} p={p} S={S}/>)}
          </div>
        }
      </div>
    </div>
  );
}

function PCard({p,S}) {
  const [added,setAdded]=useState(false);
  const item=S.cart.find(i=>i.p.id===p.id);
  const q=item?.q||0;
  const add=()=>{S.addToCart(p);setAdded(true);setTimeout(()=>setAdded(false),900);};
  return (
    <div style={{background:"#fff",borderRadius:14,border:"1px solid #e5e7eb",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,.07)"}}>
      <div style={{aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",background:bg(p.name),fontSize:46,position:"relative"}}>
        {p.img}
        {p.featured&&<span style={{position:"absolute",top:6,left:6,background:"#fde047",color:"#713f12",fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:99}}>⭐ Featured</span>}
      </div>
      <div style={{padding:"10px 10px 12px"}}>
        <div style={{fontSize:13,fontWeight:700,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</div>
        <div style={{fontSize:11,color:"#9ca3af",marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.desc}</div>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:4}}>
          <div>
            <div style={{fontSize:13,fontWeight:800,color:G}}>{ssp(p.price)}</div>
            <div style={{fontSize:10,color:"#9ca3af"}}>per {p.unit}</div>
          </div>
          {q===0
            ?<button onClick={add} style={{...B,padding:"6px 11px",fontSize:12,borderRadius:8}}>{added?"✓ Added":"+ Add"}</button>
            :<div style={{display:"flex",alignItems:"center",gap:3,background:"#f0fdf4",borderRadius:8,padding:3}}>
              <button onClick={()=>S.setQ(p.id,q-1)} style={{width:26,height:26,borderRadius:6,border:"1px solid #d1fae5",background:"#fff",cursor:"pointer",fontWeight:700,color:G,fontSize:15,fontFamily:"inherit"}}>−</button>
              <span style={{width:22,textAlign:"center",fontSize:13,fontWeight:700,color:G}}>{q}</span>
              <button onClick={()=>S.setQ(p.id,q+1)} style={{width:26,height:26,borderRadius:6,border:"none",background:G,cursor:"pointer",fontWeight:700,color:"#fff",fontSize:15,fontFamily:"inherit"}}>+</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

function Drawer({S}) {
  const total=S.subtotal+S.fee;
  return (
    <>
      <div onClick={()=>S.setCartOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",zIndex:200}}/>
      <div style={{position:"fixed",right:0,top:0,bottom:0,width:"100%",maxWidth:400,background:"#fff",zIndex:201,display:"flex",flexDirection:"column",boxShadow:"-8px 0 32px rgba(0,0,0,.15)"}}>
        <div style={{padding:"18px 20px",borderBottom:"1px solid #e5e7eb",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{fontSize:17,fontWeight:800}}>🛒 Your Cart ({S.count})</div>
          <button onClick={()=>S.setCartOpen(false)} style={{background:"#f3f4f6",border:"none",cursor:"pointer",width:34,height:34,borderRadius:"50%",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>
        {S.cart.length===0
          ?<div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"}}>
            <div style={{fontSize:56,marginBottom:14}}>🛍️</div>
            <h3 style={{fontWeight:700,marginBottom:8}}>Your cart is empty</h3>
            <p style={{color:"#6b7280",marginBottom:24}}>Add some products to get started!</p>
            <button onClick={()=>{S.setCartOpen(false);S.nav("home");}} style={{...B,padding:"12px 24px"}}>Start Shopping</button>
          </div>
          :<>
            <div style={{flex:1,overflowY:"auto",padding:16}}>
              {S.cart.map(item=>(
                <div key={item.p.id} style={{display:"flex",alignItems:"center",gap:12,padding:12,borderRadius:12,background:"#f9fafb",border:"1px solid #e5e7eb",marginBottom:10}}>
                  <div style={{width:44,height:44,borderRadius:10,background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{item.p.img}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:13,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.p.name}</div>
                    <div style={{fontSize:12,color:G,fontWeight:700}}>{ssp(item.p.price)}/{item.p.unit}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:3,background:"#f0fdf4",borderRadius:8,padding:3}}>
                    <button onClick={()=>S.setQ(item.p.id,item.q-1)} style={{width:26,height:26,borderRadius:6,border:"1px solid #d1fae5",background:"#fff",cursor:"pointer",fontWeight:700,color:G,fontSize:15}}>−</button>
                    <span style={{width:22,textAlign:"center",fontSize:13,fontWeight:700,color:G}}>{item.q}</span>
                    <button onClick={()=>S.setQ(item.p.id,item.q+1)} style={{width:26,height:26,borderRadius:6,border:"none",background:G,cursor:"pointer",fontWeight:700,color:"#fff",fontSize:15}}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{padding:16,borderTop:"1px solid #e5e7eb"}}>
              {[["Subtotal",ssp(S.subtotal)],["Delivery Fee",ssp(S.fee)]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6b7280",marginBottom:6}}><span>{k}</span><span>{v}</span></div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",fontSize:16,fontWeight:800,borderTop:"1px solid #e5e7eb",paddingTop:10,marginTop:6,marginBottom:14}}>
                <span>Total</span><span style={{color:G}}>{ssp(total)}</span>
              </div>
              <button onClick={()=>{S.setCartOpen(false);S.nav("checkout");}} style={{...B,width:"100%",padding:13,fontSize:15}}>Proceed to Checkout →</button>
            </div>
          </>
        }
      </div>
    </>
  );
}

function Checkout({S}) {
  const [f,setF]=useState({name:"",phone:"",address:"",notes:""});
  const [err,setErr]=useState({});
  const [loading,setLoading]=useState(false);
  const total=S.subtotal+S.fee;
  if(S.cart.length===0) return <div style={{textAlign:"center",padding:"80px 16px"}}><div style={{fontSize:56,marginBottom:14}}>🛍️</div><h3 style={{fontWeight:800,marginBottom:16}}>Your cart is empty</h3><button onClick={()=>S.nav("home")} style={{...B,padding:"12px 24px"}}>Start Shopping</button></div>;
  const validate=()=>{const e={};if(!f.name.trim())e.name="Name is required";if(!f.phone.trim())e.phone="Phone required";if(!f.address.trim())e.address="Address required";setErr(e);return!Object.keys(e).length;};
  const submit=async()=>{if(!validate())return;setLoading(true);await new Promise(r=>setTimeout(r,1100));const id=`JC-${Date.now().toString(36).toUpperCase()}`;S.setLastOrder({id,items:S.cart,customerName:f.name,customerPhone:f.phone,deliveryAddress:f.address,deliveryNotes:f.notes,subtotal:S.subtotal,deliveryFee:S.fee,total,createdAt:new Date().toISOString()});S.clearCart();S.nav("done");setLoading(false);};
  const field=(key,label,type="text",multi=false)=>(
    <div style={{marginBottom:14}}>
      <label style={{display:"block",fontSize:13,fontWeight:600,marginBottom:5,color:"#374151"}}>{label}{key!=="notes"&&<span style={{color:"#ef4444"}}> *</span>}</label>
      {multi
        ?<textarea value={f[key]} onChange={e=>setF({...f,[key]:e.target.value})} placeholder={label} style={{width:"100%",padding:"10px 13px",border:`1.5px solid ${err[key]?"#ef4444":"#e5e7eb"}`,borderRadius:10,fontSize:14,fontFamily:"inherit",outline:"none",resize:"none",minHeight:70,background:"#fff",boxSizing:"border-box"}}/>
        :<input type={type} value={f[key]} onChange={e=>setF({...f,[key]:e.target.value})} placeholder={label} style={{width:"100%",padding:"10px 13px",border:`1.5px solid ${err[key]?"#ef4444":"#e5e7eb"}`,borderRadius:10,fontSize:14,fontFamily:"inherit",outline:"none",background:"#fff",boxSizing:"border-box"}}/>
      }
      {err[key]&&<div style={{fontSize:11,color:"#ef4444",marginTop:3}}>{err[key]}</div>}
    </div>
  );
  return (
    <div style={{maxWidth:900,margin:"0 auto",padding:"28px 16px 80px"}}>
      <button onClick={()=>S.nav("sm")} style={{background:"none",border:"none",cursor:"pointer",color:G,fontWeight:600,fontSize:13,marginBottom:20,fontFamily:"inherit"}}>← Back to Shopping</button>
      <h1 style={{fontSize:24,fontWeight:800,marginBottom:22}}>Checkout</h1>
      <div style={{display:"grid",gap:18}}>
        <div style={{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",padding:22}}>
          <h2 style={{fontSize:15,fontWeight:700,marginBottom:18}}>🚚 Delivery Details</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div>{field("name","Full Name")}</div>
            <div>{field("phone","Phone Number","tel")}</div>
          </div>
          {field("address","Delivery Address","text",true)}
          {field("notes","Delivery Notes (optional)","text",true)}
        </div>
        <div style={{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",padding:22}}>
          <h2 style={{fontSize:15,fontWeight:700,marginBottom:16}}>💳 Payment Method</h2>
          <div style={{display:"flex",alignItems:"center",gap:12,padding:16,background:"#f0fdf4",border:"2px solid #bbf7d0",borderRadius:12}}>
            <span style={{fontSize:26}}>💵</span>
            <div><div style={{fontWeight:700,color:"#166534"}}>Cash on Delivery</div><div style={{fontSize:12,color:G}}>Pay with cash when you receive your order</div></div>
            <span style={{marginLeft:"auto",fontSize:20}}>✅</span>
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",padding:20}}>
          <h2 style={{fontSize:15,fontWeight:700,marginBottom:14}}>Order Summary</h2>
          {S.cart.map(item=>(
            <div key={item.p.id} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{fontSize:20,background:"#dcfce7",borderRadius:8,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{item.p.img}</span>
              <div style={{flex:1}}><div style={{fontSize:13,fontWeight:600}}>{item.p.name}</div><div style={{fontSize:11,color:"#9ca3af"}}>{ssp(item.p.price)} × {item.q}</div></div>
              <div style={{fontSize:13,fontWeight:700}}>{ssp(item.p.price*item.q)}</div>
            </div>
          ))}
          <div style={{borderTop:"1px solid #e5e7eb",marginTop:12,paddingTop:12}}>
            {[["Subtotal",ssp(S.subtotal)],["Delivery Fee",ssp(S.fee)]].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6b7280",marginBottom:5}}><span>{k}</span><span>{v}</span></div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",fontSize:16,fontWeight:800,marginTop:8}}><span>Total</span><span style={{color:G}}>{ssp(total)}</span></div>
          </div>
        </div>
        <button onClick={submit} disabled={loading} style={{...B,padding:15,fontSize:16,fontWeight:800,borderRadius:12,opacity:loading?.7:1,cursor:loading?"not-allowed":"pointer"}}>
          {loading?"⏳ Placing Order...":`Place Order — ${ssp(total)}`}
        </button>
      </div>
    </div>
  );
}

function Done({S}) {
  const o=S.lastOrder;
  if(!o) return <div style={{textAlign:"center",padding:60}}><button onClick={()=>S.nav("home")} style={{...B,padding:"12px 24px"}}>Back to Home</button></div>;
  const txt=`🛒 *New Order - JubaCart*\n\n📦 *Order #${o.id}*\n\n👤 *Customer:* ${o.customerName}\n📞 *Phone:* ${o.customerPhone}\n📍 *Address:* ${o.deliveryAddress}\n\n*Items:*\n${o.items.map(i=>`• ${i.p.name} × ${i.q} — ${ssp(i.p.price*i.q)}`).join("\n")}\n\n💰 *Subtotal:* ${ssp(o.subtotal)}\n🚚 *Delivery:* ${ssp(o.deliveryFee)}\n💵 *Total:* ${ssp(o.total)}${o.deliveryNotes?`\n\n📝 *Notes:* ${o.deliveryNotes}`:""}\n\nThank you for ordering with JubaCart! 🙏`;
  const waUrl=`https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
  return (
    <div style={{maxWidth:560,margin:"0 auto",padding:"44px 16px 80px"}}>
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{width:88,height:88,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:44}}>✅</div>
        <h1 style={{fontSize:28,fontWeight:800,marginBottom:8}}>Order Placed! 🎉</h1>
        <p style={{color:"#6b7280"}}>Your order is confirmed. Our rider will be on the way soon.</p>
      </div>
      <div style={{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",padding:22,marginBottom:18}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <div><div style={{fontSize:12,color:"#9ca3af",marginBottom:3}}>Order Number</div><div style={{fontSize:20,fontWeight:800,color:G}}>{o.id}</div></div>
          <span style={{background:"#dcfce7",color:"#166534",fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99}}>✓ Confirmed</span>
        </div>
        <div style={{borderTop:"1px solid #e5e7eb",paddingTop:14,marginBottom:14}}>
          <div style={{fontWeight:700,marginBottom:10,fontSize:14}}>Items Ordered</div>
          {o.items.map(item=>(
            <div key={item.p.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:20}}>{item.p.img}</span>
                <div><div style={{fontSize:13,fontWeight:600}}>{item.p.name}</div><div style={{fontSize:11,color:"#9ca3af"}}>{ssp(item.p.price)} × {item.q}</div></div>
              </div>
              <div style={{fontWeight:700,fontSize:13}}>{ssp(item.p.price*item.q)}</div>
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid #e5e7eb",paddingTop:12}}>
          {[["Subtotal",ssp(o.subtotal)],["Delivery Fee",ssp(o.deliveryFee)]].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6b7280",marginBottom:5}}><span>{k}</span><span>{v}</span></div>
          ))}
          <div style={{display:"flex",justifyContent:"space-between",fontSize:16,fontWeight:800,marginTop:8}}><span>Total</span><span style={{color:G}}>{ssp(o.total)}</span></div>
        </div>
        <div style={{borderTop:"1px solid #e5e7eb",marginTop:14,paddingTop:14,fontSize:13,color:"#6b7280",lineHeight:1.9}}>
          <div>👤 <strong>{o.customerName}</strong></div>
          <div>📞 <strong>{o.customerPhone}</strong></div>
          <div>📍 <strong>{o.deliveryAddress}</strong></div>
          {o.deliveryNotes&&<div>📝 {o.deliveryNotes}</div>}
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#25d366",color:"#fff",borderRadius:12,padding:14,fontSize:14,fontWeight:700,textDecoration:"none"}}>💬 Share via WhatsApp</a>
        <button onClick={()=>S.nav("home")} style={{background:"#fff",color:G,border:"2px solid #bbf7d0",cursor:"pointer",borderRadius:12,padding:14,fontSize:14,fontWeight:700,fontFamily:"inherit"}}>Continue Shopping</button>
      </div>
    </div>
  );
}

function Foot({S}) {
  return (
    <footer style={{background:"#111827",color:"#9ca3af",padding:"44px 0 24px",marginTop:32}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:28,marginBottom:28}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><span style={{fontSize:22}}>🛒</span><span style={{color:"#fff",fontSize:18,fontWeight:800}}>JubaCart</span></div>
            <p style={{fontSize:13,lineHeight:1.7}}>Your neighborhood, delivered. Shop from Juba's best supermarkets with delivery to your doorstep.</p>
            <p style={{fontSize:13,marginTop:10}}>📍 Delivering across Juba, South Sudan</p>
          </div>
          <div>
            <h3 style={{color:"#fff",fontSize:14,fontWeight:700,marginBottom:12}}>Quick Links</h3>
            {["Home","Supermarkets","Categories","How It Works"].map(l=>(
              <div key={l} style={{marginBottom:8}}><a href="#" onClick={e=>{e.preventDefault();S.nav("home");}} style={{color:"#9ca3af",textDecoration:"none",fontSize:13}}>{l}</a></div>
            ))}
          </div>
          <div>
            <h3 style={{color:"#fff",fontSize:14,fontWeight:700,marginBottom:12}}>Contact Us</h3>
            <div style={{marginBottom:8,fontSize:13}}>📞 <a href={`tel:${PHONE}`} style={{color:"#9ca3af",textDecoration:"none"}}>{PHONE} (calls)</a></div>
            <div style={{marginBottom:8,fontSize:13}}>💬 <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" style={{color:"#9ca3af",textDecoration:"none"}}>WhatsApp: +{WA}</a></div>
            <div style={{marginBottom:8,fontSize:13}}>📘 <a href={`https://www.facebook.com/search/top?q=${encodeURIComponent(FB)}`} target="_blank" rel="noopener noreferrer" style={{color:"#9ca3af",textDecoration:"none"}}>Facebook: {FB}</a></div>
          </div>
          <div>
            <h3 style={{color:"#fff",fontSize:14,fontWeight:700,marginBottom:12}}>Legal</h3>
            {["About Us","Terms of Service","Privacy Policy","Return Policy"].map(l=>(
              <div key={l} style={{marginBottom:8}}><a href="#" style={{color:"#9ca3af",textDecoration:"none",fontSize:13}}>{l}</a></div>
            ))}
          </div>
        </div>
        <div style={{borderTop:"1px solid #1f2937",paddingTop:18,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,fontSize:12,color:"#6b7280"}}>
          <span>© {new Date().getFullYear()} JubaCart. All rights reserved.</span>
          <span>Made with ❤️ in Juba, South Sudan</span>
        </div>
      </div>
    </footer>
  );
}
