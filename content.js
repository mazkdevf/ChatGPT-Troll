async function loadScript() {
    await new Promise(r => setTimeout(r, 2000));

    var div = document.querySelector("div[class='text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100']");
    if (div) {
        div.innerHTML = `
        <div class="mt-6">
        <label for="large" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Model</label>
        <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
            <option selected="">Default (GPT-3.5)</option>

            <option value="legacy">Legacy (GPT-3.5)</option>
            <option value="latest">GPT-4</option>
        </select>

        </div>
        <h1 class="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">ChatGPT <span class="p-2 bg-yellow-200 text-yellow-900 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PLUS</span></h1>
        `;
    }

    var div = document.querySelector("div[class='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6']");

    if (div) {
        var a = div.querySelector("a[class='underline']");
        if (a) {
            var text = a.innerHTML;
            var link = a.href;

            div.innerHTML = `<a href="${link}" target="_blank" rel="noreferrer" class="underline">${text}</a>.`;
        }
    }




    var fadeOut = document.querySelector("div[class='md:flex items-start text-center gap-3.5']");
    if (fadeOut) {
        fadeOut.style.display = "none";
    }

    var accountSection = document.querySelector("span[class='flex w-full flex-row justify-between']");
    if (accountSection) {
        accountSection.innerHTML = `<span class="gold-new-button flex items-center gap-3"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>My account</span>`

        accountSection.addEventListener("click", function () {
            var purchaseButton = document.querySelector("button[class='btn relative btn-primary border-none py-3 font-semibold']")
            if (purchaseButton) {
                purchaseButton.classList = "cursor-not-allowed opacity-50 btn relative btn-primary dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100";

                purchaseButton.innerHTML = `<div class="flex w-full items-center justify-center gap-2"><span class="inline-block text-white">Your Current Plan</span></div>`;
            }
        });

    }

    var accountText = document.querySelector("a[class='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm']");

    accountText.addEventListener("click", function () {
        setTimeout(function () {
            var purchaseButton = document.querySelector("button[class='btn relative btn-primary border-none py-3 font-semibold']")
            if (purchaseButton) {
                purchaseButton.classList = "cursor-not-allowed opacity-50 btn relative btn-primary dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100";
                purchaseButton.disabled = true;
                purchaseButton.innerHTML = `<div class="flex w-full items-center justify-center gap-2"><span class="inline-block">Your Current Plan</span></div>`;
            }
        }, 2000);
    });

    var accountText = document.querySelector("a[class='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20 text']");
    if (accountText) {
        accountText.addEventListener("click", function () {
            setTimeout(function () {
                var div = document.querySelector("div[class='text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100']");
                if (div) {
                    div.innerHTML = `
        <div class="mt-6">
        <label for="large" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Model</label>
        <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
            <option selected="">Default (GPT-3.5)</option>

            <option value="legacy">Legacy (GPT-3.5)</option>
            <option value="latest">GPT-4</option>
        </select>

        </div>
        <h1 class="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">ChatGPT <span class="p-2 bg-yellow-200 text-yellow-900 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PLUS</span></h1>
        `;
                }

                var div = document.querySelector("div[class='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6']");

                if (div) {
                    var a = div.querySelector("a[class='underline']");
                    if (a) {
                        var text = a.innerHTML;
                        var link = a.href;

                        div.innerHTML = `<a href="${link}" target="_blank" rel="noreferrer" class="underline">${text}</a>.`;
                    }
                }

                var fadeOut = document.querySelector("div[class='md:flex items-start text-center gap-3.5']");
                if (fadeOut) {
                    fadeOut.style.display = "none";
                }
            }, 2000);
        });
    }

}

loadScript();