let elProductRenderList = document.querySelector(".render-product-here")
let eltitel1 = document.querySelector('.title-1');
let eltitel2 = document.querySelector('.title-2');

let products = []

eltitel1.addEventListener('click', () => {
    eltitel1.className = 'title-1 font-semibold text-[35px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398]';
    eltitel2.className = 'title-2 font-semibold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent';
});

eltitel2.addEventListener('click', () => {
    eltitel2.className = 'title-2 font-semibold text-[35px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398]';
    eltitel1.className = 'title-1 font-semibold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent';
});



let elModalWrapper = document.querySelector('.modal-wrapper');
let elModalInner = document.querySelector('.modal-inner');


elModalWrapper.addEventListener('click', function (e) {
    if (e.target === elModalWrapper) {
        elModalWrapper.classList.add("scale-0");
    }
});
function handleAddProductBtnClick() {
    elModalWrapper.classList.remove('scale-0');
    elModalInner.innerHTML = `
    <form class="add-product-form">
        <label class="block mb-4">
            <input class="hidden" type="file">
            <img src="./images/empty.png" alt="Empty Image" class="w-full h-[316px] object-cover">
        </label>
        <div class="flex flex-wrap justify-between space-y-4">
            <div class="w-[49%]">
                <label class="flex flex-col">
                    <span class="text-[15px] text-white mb-2">Категории</span>
                    <select name="productCategory" class="p-3 rounded-md outline-none focus:shadow focus:shadow-blue-500" required>
                        <option value="1">Каркасные</option>
                        <option value="2">Надувные</option>
                    </select>
                </label>
            </div>
            <div class="w-[49%]">
                <label class="flex flex-col">
                    <span class="text-[15px] text-white mb-2">Стартая цена (сум)</span>
                    <input class="p-3 rounded-md outline-none focus:shadow focus:shadow-blue-500" placeholder="Enter product old price" name="productOldPrice" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[49%]">
                <label class="flex flex-col">
                    <span class="text-[15px] text-white mb-2">Цена со скидкой (сум)</span>
                    <input class="p-3 rounded-md outline-none focus:shadow focus:shadow-blue-500" placeholder="Enter discounted price" name="productDiscountPrice" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[49%]">
                <label class="flex flex-col">
                    <span class="text-[15px] text-white mb-2">Количество</span>
                    <input class="p-3 rounded-md outline-none focus:shadow focus:shadow-blue-500" placeholder="Enter quantity" name="productQuantity" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[49%]">
                <label class="flex flex-col">
                    <span class="text-[15px] text-white mb-2">Рамка</span>
                    <select name="productFrame" class="p-3 rounded-md outline-none focus:shadow focus:shadow-blue-500" required>
                        <option value="1">Металлический</option>
                        <option value="2">Прямоугольная</option>
                        <option value="3">Рамка призмы</option>
                    </select>
                </label>
            </div>
        </div>
        <button type="submit" class="w-full p-3 mt-6 bg-[#009398] font-semibold rounded-[25px] text-[25px] text-white hover:bg-[#007f7b] transition-colors duration-300">
            Добавить
        </button>
    </form>
`;

let elAddProductForm = document.querySelector('.add-product-form');

elAddProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

     const formData = new FormData(elAddProductForm);
    const data = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        categoryId: formData.get("productCategory"),
        productOldPrice: formData.get("productOldPrice"),
        productDiscountPrice: formData.get("productDiscountPrice"),
        productQuantity: formData.get("productQuantity"),
        productFrame: formData.get("productFrame"),
    };

    products.push(data);
    elModalWrapper.classList.add("scale-0");
    elAddProductForm.reset(); 
});
}

// rander function start
