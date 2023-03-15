/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in Persian

// Instruction Screen (after practice session)
const main_text = /*html*/ `<br /> اکنون جلسه تمرین کامل شده است<br /><br />
    لطفا انگشت اشاره چپ خود را روی کلید
    <span class='key_d'></span>
    و انگشت اشاره سمت راست خود را روی کلید
    <span class='key_k'></span>
    نگه دارید<br /><br />

    <span> اگر عدد <span class='nums_d'></span> است <span class='key_d'> را فشار دهید </span>.<br />
    اگر عدد  <span class='nums_k'></span>است <span class='key_k'></span> را فشار دهید.</span> <br /><br />
    لطفا تا جایی که می توانید سریع و دقیق پاسخ دهید <br /><br />
    بازخورد در مورد صحت پاسخ های شما از این مرحله به بعد نمایش داده نخواهد شد <br /><br />
    <span class='key_d'></span> یا <span class='key_k'></span> 
    را روی صفحه کلید خود فشار دهید تا مرحله بعدی شروع شود<br /><br />`;

const tt = {
    // Welcome Screen
    consent_text: /*html*/ `<h2>به این آزمایش خوش آمدید</h2>

    از اینکه به مطالعه ما علاقمندید سپاسگزاریم

    <p>
    این مطالعه مربوط به شناخت اعداد ست و شرکت در آن حدود 30 دقیقه زمان می برد. انجام این آزمایش به کامپیوتر (رومیزی یا لپ تاپ) نیاز دارد و در دستگاه های تلفن همراه  <b>(موبایل یا تبلت) </b>  امکان پذیر نیست.
    </p>

    <p>
    لطفا در صورتی که حداقل 18 سال سن دارید در این مطالعه شرکت کنید. لطفا مطالعه را در محیطی آرام انجام دهید تا از حواس پرتی ناخواسته جلوگیری شود.
    </p>

    <p>
    ابتدا از شما خواسته می شود اطلاعاتی در مورد جنسیت، سن، زبان مادری و آشنایی با فرهنگ های دیگر وارد کنید. در مرحله بعد، می توانید کلیدهای پاسخ را روی صفحه کلید خود انتخاب کنید. شما دو تکلیف متفاوت انجام خواهید داد. قبل از شروع تمرین خواهید کرد و پیش از تمرین دستورالعمل ها به شما نشان داده می‌شوند. هر تکلیف به دو قسمت تقسیم می شود و می توانید یک استراحت کوتاه در بین آن ها داشته باشید. پس از اتمام، از شما خواسته می شود به سوالاتی در مورد عادات و ترجیحات خود پاسخ دهید.

    </p>

    <hr>

    <h2>رضایت آگاهانه</h2>

    <p>        
    شرکت شما در این مطالعه داوطلبانه است. با بستن این صفحه مرورگر، می‌توانید در هر زمانی به مشارکت خود پایان دهید. لغو شرکت هیچ عواقب منفی برای شما نخواهد داشت. برای میزان زمانی که سپری کرده‌اید، می‌توانید از طریق ایمیل با ما تماس بگیرید و درخواست پرداخت جزئی کنید. همچنین می توانید در صورت وجود هرگونه مشکل، سوال، تذکر و یا در صورت تمایل به دریافت نتایج این مطالعه با ما تماس بگیرید:
    <br>
    <a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
    </p>

    <p>
    داده های شما به صورت ناشناس جمع آوری و ذخیره می شود. به دلیل ذخیره سازی ناشناس داده ها، حذف پس از مشارکت کامل امکان پذیر نمی باشد. در برخی موارد به دلایل فنی، داده‌ها بدون نتیجه‌گیری درباره اطلاعات شخصی ذخیره می‌شوند. در چنین شرایطی، نمی‌توان بازخورد فردی در مورد عملکرد شما ارائه داد. نتایج و داده‌های این مطالعه به صورت آنلاین منتشر و در دسترس خواهد بود، اما بنا به توصیه بنیاد تحقیقات آلمان (DFG) و انجمن روان‌شناسی آلمان (DGPs) قابل شناسایی نخواهد بود.
    </p>

    <hr>

    <p>
    اگر کمتر از 18 سال سن دارید یا نمی خواهید در این مطالعه شرکت کنید، لطفا پنجره مرورگر را ببندید و از این صفحه خارج شوید.
    </p>
    
    <p>
    اگر حداقل 18 سال سن دارید و موافق شرکت در مطالعه هستید، لطفا روی دکمه [بعدی] در زیر کلیک کنید.
    </p>

    <hr>
    
    به چه منظور ادامه می دهید؟
    
    <div class="options">
        <input name="seriousness" id='participate' value="participate" type="radio"> 
        <label for="participate">می‌خواهم تکلیف اصلی را شروع کنم</label><br>
        <input name="seriousness" id='justlook' value="justlook" type="radio">
        <label for="justlook">می خواهم به تکلیف به صورت آزمایشی نگاه کنم </label><br>
    <div>

    <hr>

    <button class="main_button class_next" id="submit_button" type="button" onclick="consented();" style="visibility:hidden">
    </button>
    `
    ,
    // Warning when mobile detected (via device user agent)
    mobile: /*html*/ `ظاهرا شما در حال استفاده از تلفن همراه یا تبلت هستید. متاسفانه شرکت در این آزمایش با دستگاه های تلفن همراه امکان پذیر نیست. 
لطفا آزمایش را مجدد، با یک کامپیوتر شروع کنید.
        <br /><br />
چنانچه مطمئن هستید که این یک اشتباه ست، برای ادامه 
    <button class="main_button" type="button" onclick="ignore_mobile();" style="visibility:hidden">
    را کلیک کنید </ دکمه > اینجا.`
    ,
    // Warning when small screen detected
    screen:/*html*/ ' برای لب تاب یا کامپیوتر خیلی کم ست (' + screen.width + ' پیکسل)  عرض صفحه مرورگر شما  عرض صفحه مرورگر باید حداقل ۷۶۰ پیکسل باشد',
    // Demographics
    demos: /*html*/ `
    <h3>لطفا این اطلاعات را ارائه دهید</h3>
    <hr>
    شما <b>جنسیت</b>:
    <div class="options">
        <input type="radio" id="man" value="man" name="gender">
        <label for="man">مرد</label><br>
        <input type="radio" id="woman" value="woman" name="gender">
        <label for="woman">زن</label><br>
        <input type="radio" id="other" value="other" name="gender">
        <label for="other">سایر</label><br>
        <input type="radio" id="na" value="na" name="gender">
        <label for="na"> ترجیح می دهم پاسخ ندهم</label>
    </div>
    <hr>
    شما <b>سن</b>:
    <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
    oninput="this.value=this.value.slice(0,2)" min='1' max='99' id="age_id" size="4">سال<br>
    <input type="checkbox" onclick="checkageconsent(event);" style="margin-left: -1px;" id="age_na">
        <label for="age_na"> ترجیح می دهم پاسخ ندهم</label>
    <hr>
    شما <b>زبان (های) اصلی </b> (می توانید بیشتر از یک زبان را انتخاب کنید):<br>
    <input type="checkbox" id="l1_de" />
    <label for="l1_de">آلمانی</label><br>
    <input type="checkbox" id="l1_tr" />
    <label for="l1_tr">ترکی</label><br>
    <input type="checkbox" id="l1_fa" />
    <label for="l1_fa">فارسی</label><br>
    <input type="checkbox" id="l1_na" />
    <label for="l1_na">سایر (لطفا در پایین مشخص کنید)</label><br>
    زبان های دیگر :
    <input id="l1_notes" style="width: 170px;margin:0;" maxlength="20">
    <hr>
    <b> زبان(های) خارجی که با آن می‌توانید ارتباط برقرار کنید <br>
    <input type="checkbox" id="l2_de" />
    <label for="l2_de">آلمانی</label><br>
    <input type="checkbox" id="l2_tr" />
    <label for="l2_tr">ترکی</label><br>
    <input type="checkbox" id="l2_fa" />
    <label for="l2_fa">فارسی</label><br>
    <input type="checkbox" id="l2_en" />
    <label for="l2_en">انگلیسی</label><br>
    <input type="checkbox" id="l2_es" />
    <label for="l2_es">اسپانیایی</label><br>
    <input type="checkbox" id="l2_fr" />
    <label for="l2_fr">فرانسوی</label><br>
    <input type="checkbox" id="l2_it" />
    <label for="l2_it">ایتالیایی</label><br>
    <input type="checkbox" id="l2_ar" />
    <label for="l2_ar">عربی</label><br>
    <input type="checkbox" id="l2_na" />
    <label for="l2_na">سایر (لطفا در پایین مشخص کنید)</label><br>
زبان های دیگر :
    <input id="l2_notes" style="width: 170px;margin:0;" maxlength="20">
    <hr>
  لطفا کشوری که در حال حاضر در آن زندگی می کنید را مشخص کنید ه <br>
    <input type="radio" id="loc_de" value="loc_de" name='loc' />
    <label for="loc_de">آلمان</label><br>
    <input type="radio" id="loc_tr" value="loc_tr" name='loc' />
    <label for="loc_tr">ترکیه</label><br>
    <input type="radio" id="loc_fa" value="loc_fa" name='loc' />
    <label for="loc_fa">ایران</label><br>
    <input type="radio" id="loc_na" value="loc_na" name='loc' />
    <label for="loc_na">سایر (لطفا در پایین مشخص کنید)</label><br>
    کشور دیگر:
    <input id="loc_notes" style="width: 170px;margin:0;" maxlength="20">
    <hr>
    لطفا کشوری که اکثرعمرتان را در آن زندگی کرده اید، مشخص کنید <br>
    <input type="radio" id="loc2_de" value="loc2_de" name='loc2' />
    <label for="loc2_de">آلمان</label><br>
    <input type="radio" id="loc2_tr" value="loc2_tr" name='loc2' />
    <label for="loc2_tr">ترکیه</label><br>
    <input type="radio" id="loc2_fa" value="loc2_fa" name='loc2' />
    <label for="loc2_fa">ایران</label><br>
    <input type="radio" id="loc2_na" value="loc2_na" name='loc2' />
    <label for="loc2_na">سایر (لطفا در پایین مشخص کنید) ><br>
    کشور دیگر:
    <input id="loc2_notes" style="width: 170px;margin:0;" maxlength="20">
    <hr>

 چقدر با فرهنگ  غرب آشنا<b>  
 </b>هستید؟
    <div class="options">
        <input type="radio" id="cult3" value="3" name="cultur">
        <label for="cult3">بسیار آشنا</label><br>
        <input type="radio" id="cult2" value="2" name="cultur">
        <label for="cult2">کمی آشنا</label><br>
        <input type="radio" id="cult1" value="1" name="cultur">
        <label for="cult1">نا آشنا</label><br>
        <input type="radio" id="cult0" value="0" name="cultur">
        <label for="cult0">ترجیح می دهم پاسخ ندهم</label><br>
    </div>
    <hr>
     دست برتر شما<br>
    <input type="radio" id="righthanded" value="righthanded" name='handedness'>
    <label for="righthanded">راست دست</label><br>
    <input type="radio" id="lefthanded" value="lefthanded" name='handedness'>
    <label for="lefthanded">چپ دست</label><br>
    <input type="radio" id="ambidextrous" value="ambidextrous" name='handedness'>
    <label for="ambidextrous">دو سویه (دو دست)</label><br>
    <input type="radio" id="handedness_na" value="na" name='handedness'>
    <label for="handedness_na">ترجیح می دهم پاسخ ندهم</label><br>
    <hr>
<button class="main_button class_next" type="button" onclick="demos_submitted();"></button>
`,
    // For each foreign language selected
    l2_use: /*html*/ `

 آیا این زبانی ست که در حال حاضر از آن در فرم گفتاری یا نوشتاری استفاده می کنید؟
<br>
 <input type="radio" id="l2_use3" value="l2_use3" name='l2_use' />
 <label for="l2_use3">

بله، در ماه گذشته در حال استفاده از این زبان بوده ام

    </label><br>
    <input type="radio" id="l2_use2" value="l2_use2" name='l2_use' />
    <label for="l2_use2">

      نه، اما در طول ۵ سال گذشته از این زبان استفاده کرده ام

    </label><br>
    <input type="radio" id="l2_use1" value="l2_use1" name='l2_use' />
    <label for="l2_use1">

      نه، در طول ۵ سال گذشته از این زبان استفاده نکرده ام

    </label><br>
    <div id='l2_use_time' style='display:none;margin-top:10px;'>

در طول روز، به صورت متوسط به چه میزان از این زبان استفاده می کنید؟

      <ul>
<li>

        نوشتن با دست
<input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h1" size="4">

          ساعت و

        <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m1" size="4">

         دقیقه

        </li>
        <li>

        تایپ کردن 
<input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h2" size="4">

ساعت و

        <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m2" size="4">
         دقیقه

        </li>
        <li>

صحبت کردن
<input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h3" size="4">

          ساعت و

        <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m3" size="4">

          دقیقه

        </li>
      </ul>
    </div>
  `,

    // Warning alert when not all fields are filled in
    unanswered: 'لطفا به تمام سوالات این صفحه پاسخ دهید',
    // Response Keys
    exp_start: /*html*/ `<br />در این آزمایش شما دو دکمه روی کیبورد نیاز دارید: دکمه پاسخ چپ و دکمه پاسخ راست</b>. 

     این کلید ها باید در یک ردیف روی کیبورد بوده و چهار کلید از هم فاصله داشته باشند.
لطفاً بررسی کنید که آیا             
     کلید <span class="key_d">D</span> و کلید <span class="key_k">K</span>
این الزامات را برآورده می کنند یا خیر.<br /><br />

اگر می خواهید از 
<span class="key_d">D</span> و <span class="key_k">K</span>
به عنوان کلیدهای پاسخ استفاده کنید، روی دکمه
<span>[بعدی]</span>
در زیر کلیک کنید. اگر نه، لطفاً روی دکمه
<span>[تغییر]</span>
در زیر کلیک کنید و سایر کلیدهای پاسخ را انتخاب کنید.

        <br /><br />
        <br /><br />
        <div class="buttonClass">
            <button id="changeButton" onclick="changeButton();" class="button_next">تغییر</button>
            <button id="startButton" onclick="startButton();" class="button_next">بعدی</button>
        </div>`
    ,
    // Change Response Keys


    change: /*html*/ `<br />در صفحه کلید شما، کلیدهای پاسخ چپ و راست باید در یک ردیف بوده و چهار کلید از هم فاصله داشته باشند. <br /><br />

     لطفاً روی دکمه [چپ] در زیر کلیک کنید تا یک کلید پاسخ را که جایگزین کلید
<span class="key_d"></span> 
شود، انتخاب کنید. 
<br />
     سپس روی دکمه [راست] در زیر کلیک کنید تا یک کلید پاسخ را که جایگزین کلید 
<span class="key_k"></span>
شود، انتخاب کنید.
<br /> <br /> 


کلیدهای پاسخ خود را به خاطر بسپارید و روی دکمه [تکمیل] کلیک کنید تا ترکیب جدید ذخیره شود.

        <br /><br />
        <div class="buttonClass changeButt">
            <button id="leftButton" onclick="leftButton()" class="button_next">چپ</button>
            <button id="rightButton" onclick="rightButton()" class="button_next">راست</button>
            <button id="completeButton" onclick="completeButton()" class="button_next">تکمیل</button>
        </div>`
    ,
    irregular_key: `
لطفا تنها از کلیدهای مربوط به حروف الفبا استفاده کنید
`,


    // Instructions on the bottom (during practice session)
    even: 'زوج',
    odd: 'فرد',
    large: 'بزرگتر',
    small: 'کوچکتر',
    wrong_key: /*html*/ `دکمه غلط`,
    correct_key: /*html*/ `دکمه صحیح`,
    block_text_par:

        // TASK 1: PARITY JUDGMENT
        // BLOCK 1:
        // Instruction Screen (before practice session):
        [/*html*/ `<br />در این آزمایش، از شما خواسته می شود که زوج یا فرد بودن اعداد را مشخص کنید.  </b>.
برای این کار، لطفا انگشت اشاره دست چپ خود را روی <span class='key_d'></span>  
و انگشت اشاره دست راست خود را روی <span class='key_k'></span>  
صفحه کلید خود قرار دهید. <br /><br />
در هر اجرا، یک مربع سیاه در مرکز صفحه ظاهر می شود. لطفا به این مربع نگاه کنید. به زودی با یک عدد جایگزین خواهد شد
<br /><br />
<span> اگر عدد <span class='nums_d'></span> است <span class='key_d'> را فشار دهید </span>.<br />
اگر عدد  <span class='nums_k'></span>است <span class='key_k'></span> را فشار دهید.</span> <br /><br />
لطفا تا جایی که می توانید سریع و دقیق پاسخ دهید <br /><br />
آزمایش با یک تمرین شروع می شود، در ضمن تمرین در مورد صحت پاسخ های خود بازخورد دریافت خواهید کرد.
<br /><br />
برای شروع،<span class='key_d'></span> یا <span class='key_k'></span>
را روی صفحه کلید خود فشار دهید.
<br /><br />`,
            main_text,
    // BLOCK 2:
    // Instruction Screen (before second practice session):
    /*html*/ `<br />در نیمه دوم، تکلیف شما همچنان تشخیص زوج یا فرد بودن اعداد است  </b>.
نکته مهم این است که اکنون کلیدهای پاسخ به زوج یا فرد بودن اعداد، معکوس خواهد شد. <b>
<br /><br />
<span> اگر عدد <span class='nums_d'></span> است <span class='key_d'> را فشار دهید </span>.<br />
اگر عدد  <span class='nums_k'></span>است <span class='key_k'></span> را فشار دهید.</span> <br /><br />
لطفا تا جایی که می توانید سریع و دقیق پاسخ دهید <br /><br />
مجدداً یک جلسه تمرین وجود خواهد داشت که در آن بازخوردی در مورد صحت پاسخ های خود دریافت خواهید کرد.
<br /><br />
برای شروع،<span class='key_d'></span> یا <span class='key_k'></span>
را روی صفحه کلید خود فشار دهید.
<br /><br />`,
            main_text
        ]
    ,
    block_text_mag:
        // TASK 2: MAGNITUDE CLASSIFICATION
        // BLOCK 1:
        // Instruction Screen (before practice session)
        [/*html*/ `<br /> در این آزمایش از شما خواسته می شود پاسخ دهید اعدادی که می بینید از عدد ۵ کوچکتر هستند یا بزرگتر </b>.
 برای این کار، لطفا انگشت اشاره دست چپ خود را روی <span class='key_d'></span> 
و انگشت اشاره دست راست خود را روی <span class='key_k'></span>  
صفحه کلید خود قرار دهید. <br /><br />
در هر اجرا، یک مربع سیاه در مرکز صفحه ظاهر می شود. لطفا به این مربع نگاه کنید. به زودی با یک عدد جایگزین خواهد شد.
<br /><br />
<span> اگر عدد <span class='nums_d'></span> است <span class='key_d'> را فشار دهید </span>.<br />
اگر عدد  <span class='nums_k'></span>است <span class='key_k'></span> را فشار دهید.</span> <br /><br />
لطفا تا جایی که می توانید سریع و دقیق پاسخ دهید <br /><br />
آزمایش با یک تمرین شروع می شود، در ضمن تمرین در مورد صحت پاسخ های خود بازخورد دریافت خواهید کرد.
<br /><br />
برای شروع،<span class='key_d'></span> یا <span class='key_k'></span>
را روی صفحه کلید خود فشار دهید.
<br /><br />`,
            main_text,
    // BLOCK 2:
    // Instruction Screen (before second practice session):
    /*html*/ `<br /> در نیمه دوم، تکلیف شما همچنان طبقه بندی اعداد به کوچکتر یا بزرگتر از ۵ است </b>.
نکته مهم این است که اکنون کلیدهای پاسخ به کوچکتر یا بزرگتر بودن اعداد، معکوس خواهد شد. <b>
<br /><br />
<span> اگر عدد <span class='nums_d'></span> است <span class='key_d'> را فشار دهید </span>.<br />
اگر عدد  <span class='nums_k'></span>است <span class='key_k'></span> را فشار دهید.</span> <br /><br />
لطفا تا جایی که می توانید سریع و دقیق پاسخ دهید <br /><br />
مجدداً یک جلسه تمرین وجود خواهد داشت که در آن بازخوردی در مورد صحت پاسخ های خود دریافت خواهید کرد.
<br /><br />
برای شروع،<span class='key_d'></span> یا <span class='key_k'></span>
را روی صفحه کلید خود فشار دهید.
<br /><br />`,
            // block 4
            main_text
        ]
    ,
    // Break Screen 1 (between two blocks, 30 seconds long)
    mid_break: [`</br /> اکنون نیمه اول آزمایش اول تکمیل شده است <br /><br />
<br /><br />`, ` لطفا یک استراحت کوتاه (حداقل 30 ثانیه) داشته باشید
   `, `</br />اکنون آزمایش اول تکمیل شده است<br /><br />
    لطفا یک استراحت کوتاه (حداقل 30 ثانیه) داشته باشید<br /><br />`,
        `</br />اکنون نیمه اول آزمایش دوم تکمیل شده است<br /><br />
    لطفا یک استراحت کوتاه (حداقل 30 ثانیه) داشته باشید<br /><br />`]
    ,
    // Break Screen 2 (between two blocks):
    mid_break2: /*html*/ `اکنون می توانید نیمه دوم کار را ادامه دهید<br /><br />
<b>کلیدهای پاسخ در این نیمه برعکس خواهند بود، لطفا دستورالعمل جدید را با دقت بخوانید<br /><br />
<button class="main_button" type="button" onclick="start_block();">بعدی</button>
`,
    // Break Screen 2 (between two tasks)
    half_break: /*html*/ `اکنون می توانید آزمایش دوم را شروع کنید<br /><br />
<button class="main_button" type="button" onclick="start_block();">بعدی</button>`,

    // Warning when holding a key
    keystroke_par: /*html*/ '<p> لطفاً فقط بعد از اینکه عدد ظاهر شد کلید را فشار دهید و به زوج یا فرد بودن آن پاسخ دهید.  .<br></p>',
    keystroke_mag: /*html*/ '<p>لطفاً فقط بعد از اینکه عدد ظاهر شد کلید را فشار دهید و به بزرگتر یا کوچپ‌تر بودن آن از۵ پاسخ دهید.<br></p>',
    // Warning when a key other than [D] or [K] is pressed:
    wrongkeys: /*html*/ `<p> کلیدی که فشار دادید بخشی از آزمایش نیست
اگر عدد فرد یا کوچکتر از ۵<span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span>,  است،
<span class="key_d" style="font-weight: 900;"></span>.  را فشار دهید.
اگر عدد زوج یا بزرگتر از ۵ <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span>,  است، 
<span class="key_ k" style="font-weight: 900;"></span>.  را فشار دهید.`
    ,
    // Warning/Screen for breaks within a block
    pauseControl: /*html*/ `<p>شما در حال حاضر در حال استراحت هستید. برای ادامه، یکی از دو کلید پاسخ را فشار دهید:
اگر عدد فرد یا کوچکتر از ۵<span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span>,  است،
<span class="key_d" style="font-weight: 900;"></span>.  را فشار دهید.
اگر عدد زوج یا بزرگتر از ۵ <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span>,  است، 
<span class="key_ k" style="font-weight: 900;"></span>.  را فشار دهید.
If the number is <span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_d" style="font-weight: 900;"></span>. If the number is <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_k" style="font-weight: 900;"></span>.</p>`
    ,
    // Warning when leaving full-screen mode (plus automatic return to in each trial)
    warning: /*html*/ `<p>شما از حالت تمام صفحه خارج شده اید. لطفاً با فشار دادن این دکمه به حالت تمام صفحه بازگردید</p>
        <button onclick="fullscreen_on(true);" style="margin-bottom: 22px;"> حالت تمام صفحه</button>`
    ,
    //// Cultural Directionality Questionnaire
    fruits: ['سیب', ' موز', 'پرتغال', 'گلابی'],
    cdq1_unanswered: 'لظفا در هز مستظیل فقط یک کلمه بنویسید',
    cdq2_unanswered: 'لطفا تمام نصاویر را جایگزاری کنید',
    cdq_opt_unanswered: 'Please choose one of the options.',
    cdq_1_1:  /*html*/ `
شما 4 شی در صفحه ی بعد خواهید دید. لطفا نام شان را در مستطیل ها بنویسید.`,

    cdq_2_1:  /*html*/ `در صفحه ی بعد چند تصویر می بینید. لطفا با یک ترتیب معنادار آنها را زیر هم قرار دهید. (با موس روی آنها کلیک کرده، بکشید و رها کنید.)`,

    cdq_3_1:  /*html*/ ` در پایین، لطفا روی دوچرخه ای که بیشتر دوست دارید کلیک کنید. 
اگر ترجیح خاصی ندارید "X"  را انتخاب کنید `,

    cdq_4:  /*html*/ `
شما به چه صورت یک دوچرخه را خواهید کشید؟
<div class="options">
    <span id='cdq_4_top'> <input type="radio" id="bike_draw_right" value="bike_draw_right" name="bike_draw">
    <label for="bike_draw_right"> قسمت جلو در سمت راست </label> <br></span>
    <span><input type="radio" id="bike_draw_left" value="bike_draw_left" name="bike_draw">
    <label for="bike_draw_left"> قسمت جلو در سمت چپ </label> <br></span>
    <input type="radio" id="bike_draw_na" value="bike_draw_na" name="bike_draw">
    <label for="bike_draw_na">X </label> <br>
</div>
<hr>
<button type="button" class="switcher" onclick="cdq4_submit()">
    <div class="switch_arrow"></div>
</button>`,

    cdq_5_1:  /*html*/ `
در پایین، لطفا گزینه ای را انتخاب کنید که این صحنه را به بهترین شکل به تصویر می کشد: " هدیه دادن به دیگری"
اگر ترجیح خاصی ندارید "X" را انتخاب کنید
`,

    cdq_6:  /*html*/ `
شما صحنه هدیه دادن یک نفر به دیگری را چطور خواهید کشید؟
<div class="options">
<span id='cdq_6_top'><input type="radio" id="give_draw_right" value="give_draw_right" name="give_draw">
    <label for="give_draw_right"> کسی که هدیه می دهد در سمت چپ و کسی که هدیه را دریافت می کند در سمت راست</label> <br></span>
    <span> <input type="radio" id="give_draw_left" value="give_draw_left" name="give_draw">
    <label for="give_draw_left"> کسی که هدیه می دهد در سمت راست و کسی که هدیه را دریافت می کند در سمت چپ</label> <br></span>
    <input type="radio" id="give_draw_na" value="na" name="give_draw">
    <label for="give_draw_na"> ترجیح خاصی ندارم</label> <br>
</div>

<hr>
<button type="button" class="switcher" onclick="cdq6_submit()">
    <div class="switch_arrow"></div>
</button>`,

    cdq_7:  /*html*/ `
<div id="a_line"></div>
شما چطور یک خط افقی (مانند خط بالا) را می کشید؟
<div class="options">
    <span id='cdq_7_top'><input type="radio" id="line_draw_right" value="line_draw_right" name="line_draw">
    <label for="line_draw_right"> معمولا از سمت چپ به راست </label> <br></span>
    <span><input type="radio" id="line_draw_left" value="line_draw_left" name="line_draw">
    <label for="line_draw_left">معمولا از راست به چپ </label> <br></span>
    <input type="radio" id="line_draw_na" value="line_draw_na" name="line_draw">
    <label for="line_draw_na"> ترجیح خاصی ندارم </label> <br>
</div>
<hr>
<button type="button" class="switcher" onclick="cdq7_submit()">
    <div class="switch_arrow"></div>
</button>`,

    cdq_8:  /*html*/ `
اگر بخواهید مفهوم "خوب" و "بد" را به صورت فضایی جایگزاری کنید، چطور این کار را می کنید؟
<div class="options">
    <span id='cdq_8_top'><input type="radio" id="moral_dir_left" value="moral_dir_left" name="moral_dir">
    <label for="moral_dir_left"> معمولا خوب درسمت چپ و بد در سمت راست </label> <br></span>
    <span><input type="radio" id="moral_dir_right" value="moral_dir_right" name="moral_dir">
    <label for="moral_dir_right"> معمولا خوب در سمت راست و بد در سمت چپ </label> <br></span>
    <input type="radio" id="moral_dir_na" value="moral_dir_na" name="moral_dir">
    <label for="moral_dir_na"> ترجیح خاصی ندارم </label> <br>
    <hr>
</div>
<button type="button" class="switcher" onclick="cdq8_submit()">
    <div class="switch_arrow"></div>
</button>`,

    // Finger Counting Assessment
    fingercounting:  /*html*/ `
    لطفا نحوه شمارش انگشتان خود از ۱ تا ۱٠ را توضیح دهید
    <div class="options">
        <input type="radio" id="f_right" value="right" name="fingercountinghabits">
        <label for="f_right">
            ترجیح می دهم شمارش را با انگشتان دست راستم شروع کنم
        </label>
        <br>
        <input type="radio" id="f_left" value="left" name="fingercountinghabits">
        <label for="f_left">
            ترجیح می دهم شمارش را با انگشتان دست چپم شروع کنم
        </label>
        <br>
        <input type="radio" id="f_donotknowornopreferred" value="na"
            name="fingercountinghabits">
        <label for="f_donotknowornopreferred">
نمی دانم یا دست ترجیحی ندارم
        </label>
        <br>
        <input type="radio" id="f_donotwanttoanswer" value="donotwanttoanswer" name="fingercountinghabits">
        <label for="f_donotwanttoanswer">
            ترجیح می دهم پاسخ ندهم

        </label>
        <br>
    </div>

    <hr>
آیا همیشه به همین ترتیب انگشتان تان را می‌شمارید؟
    <div class="options">
        <input type="radio" id="fc_always" value="always" name="fingercountingstability">
        <label for="fc_always"> من همیشه با این دست شروع به شمردن می کنم</label>
        <br>
        <input type="radio" id="fc_mostly" value="mostly" name="fingercountingstability">
        <label for="fc_mostly"> من بیشتر با این دست شروع به شمردن می کنم</label>
        <br>
        <input type="radio" id="fc_slightly" value="slightly" name="fingercountingstability">
        <label for="fc_slightly"> نمی دانم یا دست ترجیحی ندارم</label>
        <br>
        <input type="radio" id="fc_na" value="na" name="fingercountingstability">
        <label for="fc_na"> ترجیح می دهم پاسخ ندهم </label>
        <br>
    </div>

    <hr>

    <button class="main_button class_next" type="button" onclick="finger_submit();"></button>
`
    ,
    // Data-Quality Assessment Screen
    dataqualitycheck: /*html*/ `
محیط خود را در طول شرکت در مطالعه چگونه توصیف می کنید؟
    <div class="options">
        <input type="radio" id="e_silent" value="silent" name="environment">
        <label for="e_silent"> ساکت </label> <br>
        <input type="radio" id="e_very_quiet" value="very_quiet" name="environment">
        <label for="e_very_quiet"> بسیار آرام </label> <br>
        <input type="radio" id="e_fairly_quiet" value="fairly_quiet" name="environment">
        <label for="e_fairly_quiet"> نسبتا آرام </label> <br>
        <input type="radio" id="e_fairly_noisy" value="fairly_noisy" name="environment">
        <label for="e_fairly_noisy"> نسبتاً پر سر و صدا </label> <br>
        <input type="radio" id="e_very_noisy" value="very_noisy" name="environment">
        <label for="e_very_noisy"> خیلی پر سر و صدا </label> <br>
        <input type="radio" id="e_extremely_noisy" value="extremely_noisy" name="environment">
        <label for="e_extremely_noisy"> شدیدا پر سر و صدا </label> <br>
    </div>

    <hr>
آیا در طول شرکت شما در مطالعه حواس پرتی عمده ای وجود داشت؟
    <div class="options">
        <input type="radio" id="no_major" value="no_major" name="distractions">
        <label for="no_major"> نه، هیچ مزاحمت عمده ای وجود نداشت </label> <br>
        <input type="radio" id="one_major" value="one_major" name="distractions">
        <label for="one_major"> بله، یک حواس پرتی عمده وجود داشت </label> <br>
        <input type="radio" id="multiple_major" value="multiple_major" name="distractions">
        <label for="multiple_major"> بله، چندین حواس پرتی عمده وجود داشت </label>
        <br>
    </div>

    <hr>

آیا در طول شرکت شما دراین مطالعه مشکلی وجود داشت؟ 

    <div class="options">
        <input type="radio" id="diff_no" value="no" name="difficulties">
        <label for="diff_no"> خیر </label> <br>
        <input type="radio" id="diff_yes" value="yes" name="difficulties">
        <label for="diff_yes"> بله (لطفا مشخص کنید) </label> <br>
        <p style="margin-top: 10px; margin-bottom: 5px;">&nbsp; اگر مایلید نام ببرید <br>
            <textarea name="difficulties_notes" id="difficulties_notes" cols="50" rows="5"></textarea>
        </p>
    </div>

    <hr>

    <button class="main_button class_next" type="button" onclick="end_exp();"></button>
`
    ,
    // Thanks-for-Participation Screen
    ending: /*html*/ `<br> شما به پایان مطالعه رسیدید <br>
            <b> از مشارکت شما بسیار متشکریم! </b>

            <span id="pass_container">
            <br><br>
                لطفا کد زیر را ذخیره کرده و برای ما ارسال کنید. این کد به منزله ی تکمیل مشارکت شما ست
                <br>
                <span id="pass_id">[لطفا صبر کنید، لینک هنوز آماده نیست]</span>
            </span>
            <br>
            <br>
            <p id="save_success" style="color:black;display:none;">
            </p>
            <p id="save_fail" style="background:#ff3333;color:black;display:none;">
            </p>
            <br>
            در صورت وجود هرگونه مشکل، سوال یا تذکر، از طریق ایمیل با ما تماس بگیرید <br><a  href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
            <br><br>`
    ,
    save_success: /*html*/ ` داده های شما (به صورت ناشناس) ذخیره شده است. اکنون می توانید با بستن مرورگر از این صفحه خارج شوید. 
ممکن است لازم باشد قبل از خروج، با فشار دادن 
<kbd>Esc</kbd> یا <kbd>F11</kbd>
از حالت تمام صفحه خارج شوید.
`
    ,
    save_fail: /*html*/ `اطلاعات قابل ذخیره شدن نیستند، ممکن ست مشکلی در اتصال شما به اینترنت وجود داشته باشد؟ <strong>این دکمه را فشار دهید <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> تا اطلاعات ذخیره شوند (This message will disappear on successful saving.) در غیر این صورت، این کلید را فشار دهید <button onclick="dl_as_file();">ذخیره</button> 
تا اطلاعات شما به صورت دستی ذخیره شود
(توجه: برای این کار باید دریافت نوتیفیکیشن بر روی مرورگر خود را فعال کنید) و سپس فایل ذخیره شده را به این آدرس ایمیل کنید.
lkcsgaspar@gmail.com.</strong>
        `,
    class_nopref: 'X',
    class_next: 'بعدی'
};
