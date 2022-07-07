const DownArrowTag = document.getElementsByClassName("DownArrow")[0];
const ProductTag = document.getElementsByClassName("Product")[0];

DownArrowTag.addEventListener("click",() => {
    if (ProductTag.classList.contains("ProductListOpen")) {
        ProductTag.classList.remove("ProductListOpen");
        ProductTag.style.display = "none";
    }else{
        ProductTag.style.display = "block";
        ProductTag.classList.add("ProductListOpen");
    }
})
const LightAndDarkMode = document.getElementsByClassName("LightAndDarkMode")[0];
const ProductName = document.querySelectorAll(".ProductName");
const DailyReportcalculator = document.getElementsByClassName("DailyReportcalculator")[0];
const totalAmountCheck = document.getElementsByClassName("totalAmountCheck")[0];
const Header = document.getElementsByClassName("Header")[0];
const Product = document.getElementsByClassName("Product")[0];

LightAndDarkMode.addEventListener("click",() => {
    if (document.body.classList.contains("DarkMood")) {
        document.body.classList.remove("DarkMood");
        document.body.classList.add("lightMood")
        LightAndDarkMode.classList.remove("far", "fa-lightbulb","ButtonColorAndBGColor");
        LightAndDarkMode.classList.add("fas", "fa-moon","lightMood","boderlightMode");
        LightAndDarkMode.textContent = "DarkMood";
        Header.classList.remove("ButtonColorAndBGColor");
        About.classList.remove("ButtonColorAndBGColor");
        SaveTargetButtom.classList.remove("ButtonColorAndBGColor");
        ToDaySaleAmount.classList.remove("ButtonColorAndBGColor");
        UpdateSaleButton.classList.remove("ButtonColorAndBGColor");
        MinusAmount.classList.remove("ButtonColorAndBGColor");
        BalanceButtom.classList.remove("ButtonColorAndBGColor");
        AchievementButtom.classList.remove("ButtonColorAndBGColor");
        ClearCalculator.classList.remove("ButtonColorAndBGColor");
        Product.classList.remove("ButtonColorAndBGColor");
        TotalAmountAdd.classList.remove("ButtonColorAndBGColor");
        SaleReportCreate.classList.remove("ButtonColorAndBGColor");
        AboutDisplay.classList.remove("ButtonColorAndBGColor");
        ChangeUpdateSaleButton.classList.remove("ButtonColorAndBGColor");
    }else{
        document.body.classList.remove("lightMood");
        LightAndDarkMode.classList.remove("fas", "fa-moon");
        document.body.classList.add("DarkMood");
        LightAndDarkMode.classList.remove("far","fa-moon","lightMood","boderlightMode");
        LightAndDarkMode.classList.add("far", "fa-lightbulb","ButtonColorAndBGColor");
        LightAndDarkMode.textContent = "LightMood";
        Header.classList.add("ButtonColorAndBGColor");
        About.classList.add("ButtonColorAndBGColor");
        SaveTargetButtom.classList.add("ButtonColorAndBGColor");
        ToDaySaleAmount.classList.add("ButtonColorAndBGColor");
        UpdateSaleButton.classList.add("ButtonColorAndBGColor");
        MinusAmount.classList.add("ButtonColorAndBGColor");
        BalanceButtom.classList.add("ButtonColorAndBGColor");
        AchievementButtom.classList.add("ButtonColorAndBGColor");
        ClearCalculator.classList.add("ButtonColorAndBGColor");
        Product.classList.add("ButtonColorAndBGColor");
        TotalAmountAdd.classList.add("ButtonColorAndBGColor");
        SaleReportCreate.classList.add("ButtonColorAndBGColor");
        AboutDisplay.classList.add("ButtonColorAndBGColor");
        ChangeUpdateSaleButton.classList.add("ButtonColorAndBGColor");
    }
})
const ProductEditMother = (element) =>{
    element.classList.add("AddBGColor");
    const OneProductMaindiv = document.createElement("div");
    OneProductMaindiv.classList.add("OneProductMaindiv")

   
    const ProductPriceDisplay = (Number) => {
        ProductPrice.append(Number);
    };
   
    const ProductShortName = document.createElement("p");
    ProductShortName.classList.add("ProductShortName");
    const ProductShortNameFunction = (Name)=>{
        ProductShortName.append(Name);
    };

    const ProductName = document.createElement("span")
    ProductName.textContent = element.innerHTML;

    const ProductEdit = () =>{
        if(ProductName.innerHTML === "LifeCort (LPI)"){
            ProductPriceDisplay(1105);
            ProductShortNameFunction("LPI -");
        }else if (ProductName.innerHTML === "Ceftrialife (CFIM)") {
            ProductPriceDisplay(1450);
            ProductShortNameFunction("CFIM -");
        }else if (ProductName.innerHTML === "Dicinac (DCN)") {
            ProductPriceDisplay(1750);
            ProductShortNameFunction("DCN -");
        }else if (ProductName.innerHTML === "Locto-Calamine (LCLO) 120ml") {
            ProductPriceDisplay(7500);
            ProductShortNameFunction("LCLO 120ml -");
        }else if (ProductName.innerHTML === "Locto-Calamine (LCLN) 120ml") {
            ProductPriceDisplay(7500);
            ProductShortNameFunction("LCLN 120ml -");
        }else if (ProductName.innerHTML === "Locto-Calamine (LCLO) 60ml") {
            ProductPriceDisplay(5100);
            ProductShortNameFunction("LCLO 60ml -");
        }else if (ProductName.innerHTML === "Locto-Calamine (LCLN) 60ml") {
            ProductPriceDisplay(5100);
            ProductShortNameFunction("LCLO 60ml -");
        }
        else if (ProductName.innerHTML === "Rinotin (RNT)") {
            ProductPriceDisplay(431);
            ProductShortNameFunction("RNT -");
        }else if (ProductName.innerHTML === "Lopo Plus (LPP)") {
            ProductPriceDisplay(970);
            ProductShortNameFunction("LPP -");
        }else if (ProductName.innerHTML === "Aceta X (ACX)") {
            ProductPriceDisplay(543);
            ProductShortNameFunction("ACX -");
        }else if (ProductName.innerHTML === "Asclop (ACP)") {
            ProductPriceDisplay(1131);
            ProductShortNameFunction("ACP -");
        }else if (ProductName.innerHTML === "Panpro20 (PNP)") {
            ProductPriceDisplay(727);
            ProductShortNameFunction("PNP -");
        }else if (ProductName.innerHTML === "Perilac (PLC)") {
            ProductPriceDisplay(970);
            ProductShortNameFunction("PLC -");
        }else if (ProductName.innerHTML === "Bacron (BOT)") {
            ProductPriceDisplay(3636);
            ProductShortNameFunction("BOT -");
        }else if (ProductName.innerHTML === "Mextil 500 (MXT)") {
            ProductPriceDisplay(3959);
            ProductShortNameFunction("MXT -");
        }else if (ProductName.innerHTML === "Glammer Capsule (GMC)") {
            ProductPriceDisplay(7228);
            ProductShortNameFunction("GMC -");
        }else if (ProductName.innerHTML === "Andrex (ADX)") {
            ProductPriceDisplay(10660);
            ProductShortNameFunction("ADX -");
        }else if (ProductName.innerHTML === "Nausidox (NSD)") {
            ProductPriceDisplay(3280);
            ProductShortNameFunction("NSD -");
        }else if (ProductName.innerHTML === "Colla Max (CLM)") {
            ProductPriceDisplay(3031);
            ProductShortNameFunction("CLM -");
        }else if (ProductName.innerHTML === "Q-10 Ultra Q10U") {
            ProductPriceDisplay(18112);
            ProductShortNameFunction("Q10U -");
        }else if (ProductName.innerHTML === "Mypar-500 (MYP)") {
            ProductPriceDisplay(646);
            ProductShortNameFunction("MYP -");
        }else if (ProductName.innerHTML === "KORS (ORS)") {
            ProductPriceDisplay(745);
            ProductShortNameFunction("KORS -");
        }else if (ProductName.innerHTML === "Troydom (TDM)") {
            ProductPriceDisplay(497);
            ProductShortNameFunction("TDM -");
        }else if (ProductName.innerHTML === "Paraquick (PQK)") {
            ProductPriceDisplay(646);
            ProductShortNameFunction("PQK -");
        }else if (ProductName.innerHTML === "Cetipen10 (CTP)") {
            ProductPriceDisplay(447);
            ProductShortNameFunction("CTP -");
        }else if (ProductName.innerHTML === "Loratahist (LRH)") {
            ProductPriceDisplay(994);
            ProductShortNameFunction("LRH -");
        }else if (ProductName.innerHTML === "Glucose-5D (5D)") {
            ProductPriceDisplay(1230);
            ProductShortNameFunction("5D -");
        }else if (ProductName.innerHTML === "SodiumChloride + Glucose(DNS)") {
            ProductPriceDisplay(1230);
            ProductShortNameFunction("DNS -");
        }else if (ProductName.innerHTML === "SodiumChloride (NS)") {
            ProductPriceDisplay(1230);
            ProductShortNameFunction("NS -");
        }else if (ProductName.innerHTML === "Metronidazole (MTI)") {
            ProductPriceDisplay(802);
            ProductShortNameFunction("MTI -");
        }else if (ProductName.innerHTML === "Ivipime (IVI)") {
            ProductPriceDisplay(6957);
            ProductShortNameFunction("IVI -");
        }else if (ProductName.innerHTML === "Vansafe CP (VSI-CP)") {
            ProductPriceDisplay(18883);
            ProductShortNameFunction("VSI-CP");
        }else if (ProductName.innerHTML === "Sucimed (SMI)") {
            ProductPriceDisplay(16895);
            ProductShortNameFunction("SMI -");
        }else if (ProductName.innerHTML === "Succicort (SCI)") {
            ProductPriceDisplay(1491);
            ProductShortNameFunction("SCI -");
        }else if (ProductName.innerHTML === "Thiotec (TTI)") {
            ProductPriceDisplay(11926);
            ProductShortNameFunction("TTI -");
        }else if (ProductName.innerHTML === "Mexinem (MXI)") {
            ProductPriceDisplay(28324);
            ProductShortNameFunction("MXI -");
        }
    }
    const ProductPrice = document.createElement("div");
    ProductPrice.classList.add("ProductPrice");
    ProductEdit();

    const productQuantityInput = document.createElement("input");
    productQuantityInput.classList.add("productQuantityInput");
    productQuantityInput.placeholder = "Product Quantity";
    productQuantityInput.type = "Number"
    // productQuantityInput.type(Number)

    const productQuantityInputUpdate = document.createElement("input");
    productQuantityInputUpdate.classList.add("productQuantityInputUpdate");
    productQuantityInputUpdate.placeholder = "Update Price";
    productQuantityInputUpdate.type = "Number"


    const productQuantity = document.createElement("p");
    productQuantity.classList.add("productQuantity");
    productQuantity.append(0);

    const productAmount = document.createElement("p");
    productAmount.classList.add("productAmount");
    let OneProductPrice = ProductPrice.innerText;

    let productAmountTotalConstant = 0;
    productQuantityInputUpdate.addEventListener("keyup",(event)=>{
        if (productQuantityInputUpdate.value === "") {
            ProductPrice.innerHTML = "";
            console.log("sdf");
            console.log(OneProductPrice)
            ProductPrice.innerText += OneProductPrice;
        }else{
            ProductPrice.innerHTML = "";
            ProductPrice.innerText += productQuantityInputUpdate.value;
            productQuantityInput.value = 0;
        }
        
    })
    productQuantityInput.addEventListener("keyup",(event)=>{
        productAmount.innerHTML="";
        productQuantity.innerHTML="";
        totalAmountCheck.innerHTML="";
        console.log(productQuantityInput.value,productQuantityInput.value[0])

        if (productQuantityInput.value[0] === "0") {
            productQuantityInput.value = productQuantityInput.value.slice(1,productQuantityInput.value.length)
        }
        if (productQuantityInput.value === "") {
            // OneProductMaindiv.remove();
            productQuantityInput.value = 0;
            // // 
            // productAmount.append(parseInt(ProductPrice.innerHTML)*parseInt(event.target.value));
            // productQuantity.append(event.target.value);
            // OneProductMaindiv.append(productQuantity,productAmount);

        }else{
            productAmount.append(parseInt(ProductPrice.innerHTML)*parseInt(event.target.value));
            productQuantity.append(event.target.value);
            OneProductMaindiv.append(productQuantity,productAmount);
        }
        const productTotalAmount =document.querySelectorAll(".productAmount");
        productTotalAmount.forEach((element)=>{
            const productAmountNumber = parseInt(element.innerHTML);
            productAmountTotalConstant+=productAmountNumber;
        });
        totalAmountCheck.append("Total Amount"+productAmountTotalConstant);
        productAmountTotalConstant = 0;
        TotalAmountAdd.style.display="block";
    })
    // productAmountArray = productAmount
    // console.log(productAmountArray,typeof productAmountArray)

   const productDelete = document.createElement("button");
   productDelete.classList.add("fas", "fa-trash");
   productDelete.addEventListener("click",(event)=>{
    // console.log(element.classList[1])
    element.classList.remove(`${element.classList[1]}`)
    OneProductMaindiv.remove();
   })
    OneProductMaindiv.append(ProductName,productDelete,ProductShortName,productQuantityInputUpdate,"price-",ProductPrice,productQuantityInput)
    DailyReportcalculator.append(OneProductMaindiv);
}

ProductName.forEach((element)=>{
    element.addEventListener("click",()=>{
        if (DailyReportcalculator.classList.contains("OpenDailyReportcalculator")) {
            ProductEditMother(element);
        }else{
            ProductEditMother(element);
            DailyReportcalculator.classList.add("OpenDailyReportcalculator");
        }
       
    })
})
const TotalAmountAdd = document.getElementsByClassName("TotalAmountAdd")[0];
const UpdateSaleAmount = document.getElementsByClassName("UpdateSaleAmount")[0];
const TotalAmountMinus = document.getElementsByClassName("TotalAmountMinus")[0];
const ToDaySaleAmount = document.getElementsByClassName("ToDaySaleAmount")[0];

const MinusAmount = document.getElementsByClassName("MinusAmount")[0];
const ReportForOrderList = document.getElementsByClassName("ReportForOrderList")[0];
const AddProductListForReport = document.getElementsByClassName("AddProductListForReport")[0];
let UpdateSaleAmountConstant = 0;

let productAmountConstant = 0;
let totalAmountplus = [];
let totalAmountMinus = [];

TotalAmountAdd.addEventListener("click",()=>{
    ToDaySaleAmount.innerHTML="";
    // UpdateSaleAmount.innerHTML="";
    const productAmount = document.querySelectorAll(".productAmount");
    // productAmountConstant = UpdateSaleAmountConstant;
    productAmount.forEach((element)=>{
        const productAmountNumber = parseInt(element.innerHTML);
        totalAmountplus.push(productAmountConstant+=productAmountNumber);
        // productAmountConstant = UpdateSaleAmountConstant;
    })
    
    ToDaySaleAmount.append("ToDay Sale  -",totalAmountplus[totalAmountplus.length-1]);


    AddProductListForReport.style.display = "block";
    const productShortName = document.querySelectorAll(".ProductShortName");
    const productQuantity = document.querySelectorAll(".productQuantity");
   
    const ReportDetailSN =document.createElement("div");
    ReportDetailSN.classList.add("ReportDetailSN");

    const ReportDetailQT =document.createElement("div");
    ReportDetailQT.classList.add("ReportDetailQT");

    const ReportDetailListChild = document.createElement("div");
    ReportDetailListChild.classList.add("ReportDetailListChild")
    productShortName.forEach((element)=>{
       
        const RDSNDiv = document.createElement("p");
        RDSNDiv.append(element.innerHTML)
        ReportDetailSN.append( RDSNDiv);
        // if (element.innerHTML=== "LPI -") {
        //     ReportDetailSN.id = 0;
        // }else if (element.innerHTML=== "CFIM -") {
        //     ReportDetailSN.id = 1;
        // }
        
    })

    productQuantity.forEach((element)=>{
        const RDQTDiv = document.createElement("p");
        RDQTDiv.append( element.innerHTML);
        ReportDetailQT.append(RDQTDiv);
    })
    ReportDetailListChild.append(ReportDetailSN,ReportDetailQT)
    ReportForOrderList.append(ReportDetailListChild);
    UpdateSaleButton.style.display="block";
    //  const ReportDetailSNID = document.querySelectorAll(".ReportDetailSN");
    //  const ReportDetailQT = document.querySelectorAll(".ReportDetailQT");
    //    ReportDetailSNID.forEach((ele)=>{
    //        productShortName.forEach((element)=>{
    //         if (element.id === ele.id) {
    //             productQuantity.innerHTML
    //         }
    //        })
    //    })
});
const UpdateSaleButton = document.getElementsByClassName("UpdateSaleButton")[0];

UpdateSaleButton.addEventListener("click",()=>{
    UpdateSaleAmount.innerHTML="";
    UpdateSaleAmountConstant += totalAmountplus[totalAmountplus.length-1];
    UpdateSaleAmount.append(UpdateSaleAmountConstant);
    localStorage.setItem("UpdateSale",UpdateSaleAmountConstant);
    ClearCalculator.style.display="block";
    
    BalanceButtom.style.display="block";
    AchievementButtom.style.display="block";
    // productAmountConstant=0;
})
const ReportForOrderListMinus = document.getElementsByClassName("ReportForOrderListMinus")[0];
const MinusProductListForReport =document.getElementsByClassName("MinusProductListForReport")[0];
let MinusConstant = 0;
let CheckConstant = 0;
TotalAmountMinus.addEventListener("click",()=>{
    MinusAmount.innerHTML="";
    ToDaySaleAmount.innerHTML="";
    UpdateSaleAmount.innerHTML="";
    MinusConstant=0;
    const productAmount = document.querySelectorAll(".productAmount");
    const DailyReportcalculator = document.getElementsByClassName("DailyReportcalculator")[0];
    if (!DailyReportcalculator.classList.contains('OpenDailyReportcalculator')) {
        alert("Choise your Minus Product Name and Fill Quantity and you can click Minus button");
        UpdateSaleAmount.append(UpdateSaleAmountConstant);
        ToDaySaleAmount.append("ToDay Sale Amount -",totalAmountplus[totalAmountplus.length-1]);
    }else{
        productAmount.forEach((element)=>{
            const productAmountNumber = parseInt(element.innerHTML);
            totalAmountMinus.push(MinusConstant += productAmountNumber);
            CheckConstant += totalAmountMinus[totalAmountMinus.length-1]
        });
        MinusAmount.append("Minus Amount -",CheckConstant);
        UpdateSaleAmountConstant -= totalAmountMinus[totalAmountMinus.length-1];
        UpdateSaleAmount.append(UpdateSaleAmountConstant);
        totalAmountplus.push(totalAmountplus[totalAmountplus.length-1]-totalAmountMinus[totalAmountMinus.length-1]);
        ToDaySaleAmount.append("ToDay Sale Amount -",totalAmountplus[totalAmountplus.length-1]);
        productAmountConstant = totalAmountplus[totalAmountplus.length-1] ;
        localStorage.setItem("UpdateSale",UpdateSaleAmountConstant);
        MinusProductListForReport.style.display="block";
    
        const productShortName = document.querySelectorAll(".ProductShortName");
        const productQuantity = document.querySelectorAll(".productQuantity");
       
        const ReportDetailSN =document.createElement("div");
        ReportDetailSN.classList.add("ReportDetailSN");
    
        const ReportDetailQT =document.createElement("div");
        ReportDetailQT.classList.add("ReportDetailQT");
    
        const ReportDetailListChild = document.createElement("div");
        ReportDetailListChild.classList.add("ReportDetailListChild")
        productShortName.forEach((element)=>{
           
            const RDSNDiv = document.createElement("p");
            RDSNDiv.append(element.innerHTML)
            ReportDetailSN.append( RDSNDiv);
            // if (element.innerHTML=== "LPI -") {
            //     ReportDetailSN.id = 0;
            // }else if (element.innerHTML=== "CFIM -") {
            //     ReportDetailSN.id = 1;
            // }
            
        })
    
        productQuantity.forEach((element)=>{
            const RDQTDiv = document.createElement("p");
            RDQTDiv.append( element.innerHTML);
            ReportDetailQT.append(RDQTDiv);
        })
        ReportDetailListChild.append(ReportDetailSN,ReportDetailQT)
        ReportForOrderListMinus.append(ReportDetailListChild); 
        
        const OneProductMaindiv = document.querySelectorAll(".OneProductMaindiv");

        OneProductMaindiv.forEach((element)=>{
            element.remove();
            TotalAmountMinus.style.display="block";
        })
        DailyReportcalculator.classList.remove("OpenDailyReportcalculator");
    }
   
});


const TargetInput = document.getElementsByClassName("TargetInput")[0];
const SaveTargetButtom = document.getElementsByClassName("SaveTarget")[0];
const TargetTextAmount = document.getElementsByClassName("TargetTextAmount")[0];




SaveTargetButtom.addEventListener("click",()=>{
    const TargetInputNumberChange = parseInt(TargetInput.value);
    if (TargetInputNumberChange<0 || !TargetInputNumberChange) {
        alert("Check your TargetAmount");
    }else{
        TargetTextAmount.innerHTML="";
        TargetTextAmount.append(TargetInputNumberChange);
        localStorage.setItem("SaveTarget",TargetInputNumberChange)
    }
})
window.addEventListener("load",()=>{
    const saveTarget = localStorage.getItem("SaveTarget");
    if (saveTarget === null) {
        TargetTextAmount.append(0);
    }else{
        TargetTextAmount.append(saveTarget);
    };
    
    const UpdateSale = localStorage.getItem("UpdateSale");
   
    if (UpdateSale === null) {
        const UpdateSaleNumber = 0;
        UpdateSaleAmount.append(UpdateSaleNumber)
        // console.log(UpdateSaleNumber)
        UpdateSaleAmountConstant =UpdateSaleNumber;
    }else{
        const UpdateSaleNumber = parseInt(UpdateSale);
        UpdateSaleAmount.append(UpdateSaleNumber)
        // console.log(UpdateSaleNumber)
        UpdateSaleAmountConstant =UpdateSaleNumber;
    }
})

const BalanceButtom = document.getElementsByClassName("BalanceButtom")[0];
const BalanceAmount = document.getElementsByClassName("BalanceAmount")[0];

BalanceButtom.addEventListener("click",()=>{
    BalanceAmount.innerHTML="";
    BalanceAmount.append(parseInt(TargetTextAmount.innerHTML) - UpdateSaleAmountConstant)
})

const AchievementButtom = document.getElementsByClassName("AchievementButtom")[0];
const AchievementAmount = document.getElementsByClassName("AchievementAmount")[0];

AchievementButtom.addEventListener("click",()=>{
    AchievementAmount.innerHTML="";
    AchievementAmount.append((UpdateSaleAmountConstant/parseInt(TargetTextAmount.innerHTML)*100).toFixed(1),"%")

})
const ClearUpdateSale = document.getElementsByClassName("ClearUpdateSale")[0];

ClearUpdateSale.addEventListener("click",()=>{
    UpdateSaleAmount.innerHTML="";
    UpdateSaleAmountConstant = 0;
    localStorage.setItem("UpdateSale",UpdateSaleAmountConstant);
    UpdateSaleAmount.append(0);
})

const ClearCalculator = document.getElementsByClassName("ClearCalculator")[0];

ClearCalculator.addEventListener("click",()=>{
    const OneProductMaindiv = document.querySelectorAll(".OneProductMaindiv");

    OneProductMaindiv.forEach((element)=>{
        element.remove();
        TotalAmountMinus.style.display="block";
    })
    DailyReportcalculator.classList.remove("OpenDailyReportcalculator");
});

const SaleReportCreate = document.getElementsByClassName("SaleReportCreate")[0];
const DailyReportNote = document.getElementsByClassName("DailyReportNote")[0];
const DoctorCall = document.getElementsByClassName("DoctorCall")[0];
const Pharmacy = document.getElementsByClassName("Pharmacy")[0];
const ProductiveCalls =document.getElementsByClassName("ProductiveCalls")[0];

SaleReportCreate.addEventListener("click", () => {
    DailyReportNote.innerHTML=""
    if (DoctorCall.value === "" || Pharmacy.value === "" || !DailyReportcalculator.classList.contains("OpenDailyReportcalculator") || ProductiveCalls.value === "" || TargetTextAmount.innerHTML === "" || BalanceAmount.innerHTML=== ""|| AchievementAmount.innerHTML === "" || ToDaySaleAmount.innerHTML === "") {
        alert("Check your From to fill ");
    }else{
      
        const TodayDate =new Date().toLocaleDateString();
    
        const DrCall = document.createElement("p");
        DrCall.append("DoctorCalls - ",DoctorCall.value);
    
        const PharmacyCall = document.createElement("p");
        PharmacyCall.append("PharmacyCalls - ",Pharmacy.value);
    
        const ProductiveCall = document.createElement("p");
        ProductiveCall.append("ProductiveCalls - ",ProductiveCalls.value);
    
        const OrderItem = document.createElement("p");
        OrderItem.append("Order Item - ");
    
        const Productcover= document.createElement("div")
        const ProductDetailsReport = document.createElement("div");
        ProductDetailsReport.classList.add("ProductDetailsReport")
    
        const productShortName = document.querySelectorAll(".ProductShortName");
        const productQuantity = document.querySelectorAll(".productQuantity");
        const ProductPrice = document.querySelectorAll(".ProductPrice");
        const productAmount = document.querySelectorAll(".productAmount");
    
        
        const productCodeName = document.createElement("div");
        productCodeName.classList.add("productCodeName");
        const productCodeQuantity = document.createElement("div");
        productCodeQuantity.classList.add("productCodeQuantity");
        const productCodePrice = document.createElement("div");
        productCodePrice.classList.add("productCodePrice");
        const productCodeAmount = document.createElement("div");
        productCodeAmount.classList.add("productCodeAmount");
        
    
        let productArrayName=[];
        let productArrayQuantity=[];
        let productArrayPrice = [];
        let productArrayAmount=[];
    
        productShortName.forEach((element)=>{
            // const productCode = document.createElement("div");
            // productCode.append(element.innerText);
            // productCodeName.append(productCode);
            productArrayName.push(element.innerHTML);
           
        });
        
        productQuantity.forEach((element)=>{
            // const OneproductQuantity = document.createElement("div");
            // OneproductQuantity.append(element.innerText)
            // productCodeQuantity.append(OneproductQuantity);
            // productCodeName.append(productCodeQuantity)
            productArrayQuantity.push(element.innerHTML);
        });
        
        
        ProductPrice.forEach((element)=>{
            // const OneproductPrice = document.createElement("div");
            // OneproductPrice.append(" ×",element.innerHTML)
            // productCodePrice.append(OneproductPrice);
            productArrayPrice.push(element.innerHTML)
        });
        productAmount.forEach((element)=>{
            // const OneproductAmount = document.createElement("div");
            // OneproductAmount.append(" =",element.innerHTML," ks")
            // productCodeAmount.append(OneproductAmount);
            productArrayAmount.push(element.innerHTML)
        });
    
        let i =0;
        function HEEH() {
            while (i<productArrayName.length) {
                const Samplediv = document.createElement("div");
                Samplediv.append(productArrayName[i]+productArrayQuantity[i]+" ×"+productArrayPrice[i]+" ="+productArrayAmount[i]+"ks")
                ProductDetailsReport.append(Samplediv)
                i++;   
                // console.log(i)
            }
        }
        HEEH();
    
        const ToDaySaleAmountCode = document.createElement("p");
        ToDaySaleAmountCode.append(ToDaySaleAmount.innerHTML," ks");
    
        const TargetTextAmountCode = document.createElement("p");
        TargetTextAmountCode.append("Target -",TargetTextAmount.innerHTML," ks");
    
        const UpdateSaletCode = document.createElement("p");
        UpdateSaletCode.append("Update Sales -",UpdateSaleAmount.innerHTML," ks");
    
        const AchievementAmountCode = document.createElement("p");
        AchievementAmountCode.append("Achievement",AchievementAmount.innerHTML);
    
        const BalanceAmountCode = document.createElement("p");
        BalanceAmountCode.append("Balance -",BalanceAmount.innerHTML," ks");
    
    
        ProductDetailsReport.append(productCodePrice,productCodeAmount);
        Productcover.append(ProductDetailsReport);
    
    
        DailyReportNote.append(TodayDate,DrCall,PharmacyCall,ProductiveCall,OrderItem,Productcover,ToDaySaleAmountCode,TargetTextAmountCode,UpdateSaletCode,BalanceAmountCode,AchievementAmountCode);
    }

   
})

const About = document.getElementsByClassName("About")[0];
const AboutDisplay = document.getElementsByClassName("AboutDisplay")[0];
const CloseButton = document.getElementsByClassName("CloseButton")[0];
About.addEventListener("click",()=>{
    AboutDisplay.style.display="block";
    AboutDisplay.classList.add("ShowAbout");
})
CloseButton.addEventListener("click",()=>{
    AboutDisplay.style.display="none";
    AboutDisplay.classList.remove("ShowAbout");
});

const ChangeUpdateSaleButton = document.getElementsByClassName("ChangeUpdateSaleButton")[0];
const ChangeUpdateInputBox = document.getElementsByClassName("ChangeUpdateInputBox")[0];

ChangeUpdateSaleButton.addEventListener("click",()=>{
    const ChangeUpdateInputBoxNumberChange = parseInt(ChangeUpdateInputBox.value);
    if (ChangeUpdateInputBoxNumberChange < 0 || !ChangeUpdateInputBoxNumberChange) {
        alert("Check your TargetAmount");
    }else{
        UpdateSaleAmount.innerHTML="";
        UpdateSaleAmountConstant = ChangeUpdateInputBoxNumberChange;
        UpdateSaleAmount.append(UpdateSaleAmountConstant);
        localStorage.setItem("UpdateSale",UpdateSaleAmountConstant);
    }
})