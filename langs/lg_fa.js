/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in Persian

// Instruction Screen (after practice session)
const main_text = /*html*/ `<br />The practice session is now complete. <br /><br />
Please keep your left index finger on the <span class='key_d'></span> key and your right index finger on
the <span class='key_k'></span> key. <br /><br />
<span>If the number is <span class='nums_d'></span>, press <span class='key_d'></span>.<br />
If the number is <span class='nums_k'></span>, press <span class='key_k'></span>.</span> <br /><br />
Please answer as quickly and as accurately as possible. <br /><br />
The feedback on the accuracy of your answers will not be displayed from this point onward.<br /><br />
Press <span class='key_d'></span> or <span class='key_k'></span> on your keyboard to start the next phase.<br /><br />`;

const tt = {
    // Welcome Screen
    consent_text: /*html*/ `<h2>به این آزمایش خوش آمدید</h2>

        از اینکه به مطالعه ما علاقمندید سپاسگزاریم

        <p>
        این مطالعه مربوط به شناخت اعداد ست و شرکت در آن حدود 30 دقیقه زمان می برد. انجام این آزمایش به کامپیوتر (رومیزی یا لپ تاپ) نیاز دارد و در دستگاه های تلفن همراه  </b>(موبایل یا تبلت) <b>  امکان پذیر نیست.
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
    mobile: /*html*/ ` ظاهرا شما در حال استفاده از تلفن همراه یا تبلت هستید. متاسفانه شرکت در این آزمایش با دستگاه های تلفن همراه امکان پذیر نیست. 
لطفا آزمایش را مجدد، با یک کامپیوتر شروع کنید.
            <br /><br />
  چنانچه مطمئن هستید که این یک اشتباه ست، برای ادامه 
        <button class="main_button" type="button" onclick="ignore_mobile();" style="visibility:hidden">
        را کلیک کنید </ دکمه > اینجا.`
    ,
    // Warning when small screen detected
    screen:/*html*/ ' برای لب تاب یا کامپیوتر خیلی کم ست (' + screen.width + ` پیکسل)  عرض صفحه مرورگر شما  
عرض صفحه مرورگر باید حداقل ۷۶۰ پیکسل باشد`,
    // Demographics
    demos: /*html*/ `
        <h3>لطفا اطلاعات خود را ارائه دهید</h3>
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
        <input id="l1_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        <b>زبان (های) خارجی</b> که می توانید با آنها ارتباط برقرار کنید:<br>
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
        <input id="l2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        در آن زندگی می کنید را مشخص کنید <br>در حال حاضر</br> لطفا کشوری که :<br>
        <input type="radio" id="loc_de" value="loc_de" name='loc' />
        <label for="loc_de">آلمان</label><br>
        <input type="radio" id="loc_tr" value="loc_tr" name='loc' />
        <label for="loc_tr">ترکیه</label><br>
        <input type="radio" id="loc_fa" value="loc_fa" name='loc' />
        <label for="loc_fa">ایران</label><br>
        <input type="radio" id="loc_na" value="loc_na" name='loc' />
        <label for="loc_na">Other (please specify below)</label><br>
        کشور دیگر:
        <input id="loc_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        در آن زندگی کرده اید مشخص کنید <br>اکثر طول عمرتان را</br> لطفا کشوری که :<br>
        <input type="radio" id="loc2_de" value="loc2_de" name='loc2' />
        <label for="loc2_de">آلمان</label><br>
        <input type="radio" id="loc2_tr" value="loc2_tr" name='loc2' />
        <label for="loc2_tr">ترکیه</label><br>
        <input type="radio" id="loc2_fa" value="loc2_fa" name='loc2' />
        <label for="loc2_fa">ایران</label><br>
        <input type="radio" id="loc2_na" value="loc2_na" name='loc2' />
        <label for="loc2_na">Other (please specify below)</label><br>
        کشور دیگر:
        <input id="loc2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>

        چقدر با فرهنگ  <b>غرب </b>هستید؟
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
        شما <b>دست برتر</b>:<br>
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
    // Warning alert when not all fields are filled in
    unanswered: 'لطفا به تمام سوالات این صفحه پاسخ دهید',
    // Response Keys
    exp_start: /*html*/ `<br />در این آزمایش شما دو دکمه روی کیبورد نیاز دارید<b>دکمه پاسخ چپ</b>و <b>دکمه پاسخ راست</b>. 

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

            keys.<br /><br />
            <br /><br />
            <div class="buttonClass">
                <button id="changeButton" onclick="changeButton();" class="button_next">تغییر</button>
                <button id="startButton" onclick="startButton();" class="button_next">بعدی</button>
            </div>`
    ,
  // Change Response Keys
    change: /*html*/ `<br />در صفحه کلید شما، کلیدهای پاسخ چپ و راست باید در یک ردیف بوده و چهار کلید از هم فاصله داشته باشند. <br /><br />

         لطفاً روی دکمه [چپ] در زیر کلیک کنید تا یک کلید پاسخ را که جایگزین کلید   <span class="key_d"></span> <br /> شود، انتخاب کنید. 
         سپس روی دکمه [راست] در زیر کلیک کنید تا یک کلید پاسخ را که جایگزین کلید   <span class="key_k"></span> <br /> شود، انتخاب کنید. 
کلیدهای پاسخ خود را به خاطر بسپارید و روی دکمه [تکمیل] کلیک کنید تا ترکیب جدید ذخیره شود.

            <br /><br />
            <div class="buttonClass changeButt">
                <button id="leftButton" onclick="leftButton()" class="button_next">چپ</button>
                <button id="rightButton" onclick="rightButton()" class="button_next">راست</button>
                <button id="completeButton" onclick="completeButton()" class="button_next">تکمیل</button>
            </div>`
    ,
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
        [/*html*/ `<br />In the first task, you are asked to <b>distinguish whether numbers are odd or even</b>.
        For this, please place the index finger of your left hand on the <span class='key_d'></span> key and the index finger of your right hand on the <span class='key_k'></span> key on your keyboard. <br /><br />
        In each run, a black square will appear in the center of the screen.
        Please look at this square. It will soon be replaced by a number. <br /><br />
        If the number is <span class='nums_d'></span>, press <span class='key_d'></span>.<br />
        If the number is <span class='nums_k'></span>, press <span class='key_k'></span>. <br /><br />
        Please answer as quickly and as accurately as possible.
        The experiment will start with a practice session, where you will get feedback on
        the accuracy of your answers.<br /><br />
        Press <span class='key_d'></span> or <span class='key_k'></span> on your keyboard to start.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `In the second half, your task remains to distinguish whether numbers are odd or even.<br /><br />
        <b>Importantly, however, the assignment of responses to even and odd will be reversed. <br /><br />
        If the number is <span class='nums_d'></span>, press <span class='key_d'></span>.<br />
        If the number is <span class='nums_k'></span>, press <span class='key_k'></span>.</b> <br /><br />
        Please answer as quickly and as accurately as possible. <br /><br />
        Again, there will be a practice session, where you will receive feedback on the
        accuracy of your answers. <br />
        Press <span class='key_d'></span> or <span class='key_k'></span> on your keyboard to start.<br /><br />`,
            main_text
        ]
    ,
    block_text_mag:
        // TASK 2: MAGNITUDE CLASSIFICATION
        // BLOCK 1:
        // Instruction Screen (before practice session)
        [/*html*/ `<br />In the second and last task, you are asked to <b>classify numbers as smaller or larger than 5</b>.<br /><br />
        For this, please place the index finger of your left hand on the <span class='key_d'></span> key and the index finger of your right hand on the <span class='key_k'></span> key on your keyboard. <br /><br />
        In each run, a black square will appear in the center of the screen.
        Please look at this square. It will soon be replaced by a number. <br /><br />
        If the number is <span class='nums_d'></span>, press <span class='key_d'></span>.<br />
        If the number is <span class='nums_k'></span>, press <span class='key_k'></span>. <br /><br />
        Please answer as quickly and as accurately as possible. <br /><br />
        The experiment will start with a practice session, where you will get feedback on
        the accuracy of your answers.<br /><br />
        <span>Press <span class='key_d'></span> or <span class='key_k'></span> on your keyboard to start.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `In the second half, your task remains to classify numbers as small or large compared to 5.<br /><br />
        <b>Importantly, however, the assignment of responses to the smaller and larger numbers will be reversed.</b> <br /><br />
        If the number is <span class='nums_d'></span>, press <span class='key_d'></span>.<br />
        If the number is <span class='nums_k'></span>, press <span class='key_k'></span>. <br /><br />
        Please answer as quickly and as accurately as possible. <br /><br />
        Again, there will be a practice session, where you will receive feedback on the
        accuracy of your answers. <br />
        Press <span class='key_d'></span> or <span class='key_k'></span> on your keyboard to start.<br /><br />`,
            // block 4
            main_text
        ]
    ,
    // Break Screen 1 (between two blocks, 30 seconds long)
    mid_break: [`</br />The first half of the first task is now complete. <br /><br />
        Please take a short break (minimum 30 seconds). <br /><br />`,
        `</br />The first task is now complete. <br /><br />
        Please take a short break (minimum 30 seconds). <br /><br />`,
        `</br />The first half of the second task is now complete. <br /><br />
        Please take a short break (minimum 30 seconds). <br /><br />`]
    ,
    // Break Screen 2 (between two blocks):
    mid_break2: /*html*/ `You can now go on with the second half of the task.<br /><br />
    <b>The required response keys will be reversed, so please read the new instructions carefully.<br /><br />
    <button class="main_button" type="button" onclick="start_block();">Next</button>
    `,
    // Break Screen 2 (between two tasks)
    half_break: /*html*/ `You can now go on with the second task.<br /><br />
    <button class="main_button" type="button" onclick="start_block();">Next</button>
    `,
    // Warning when holding a key
    keystroke_par: /*html*/ '<p>Please only press a key after a number has appeared, to decide whether it is odd or even.<br></p>',
    keystroke_mag: /*html*/ '<p>Please only press a key after a number has appeared, to decide whether it is smaller or larger than 5.<br></p>',
    // Warning when a key other than [D] or [K] is pressed:
    wrongkeys: /*html*/ `<p>The key you pressed is
                not part of the experiment. If the number is <span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_d" style="font-weight: 900;"></span>. If the number is <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_k" style="font-weight: 900;"></span>.</p>`
    ,
    // Warning/Screen for breaks within a block
    pauseControl: /*html*/ `<p>You are currently taking a break. To resume, press one of the two response keys: If the number is <span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_d"
                    style="font-weight: 900;"></span>. If the number is <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span>, press <span class="key_k"
                    style="font-weight: 900;"></span>.</p>`
    ,
    // Warning when leaving full-screen mode (plus automatic return to in each trial)
    warning: /*html*/ `<p>You have exited full-screen mode. Please return to full-screen mode by pressing this button.</p>
            <button onclick="fullscreen_on(true);" style="margin-bottom: 22px;">Full-screen mode</button>`
    ,
    //// Cultural Directionality Questionnaire
    fruits: ['سیب', ' موز', 'پرتغال', 'گلابی'],
    cdq1_unanswered: 'لظفا در هز مستظیل فقط یک کلمه بنویسید',
    cdq2_unanswered: 'لطفا تمام نصاویر را جایگزاری کنید',
    cdq_opt_unanswered: 'Please choose one of the options.',
    cdq_1_1:  /*html*/ `
    شما 4 شی در صفحه ی بعد خواهید دید. لطفا نام شان را در مستطیل ها بنویسید.`,

    cdq_2_1:  /*html*/ `در صفحه ی بعد چند تصویر می بینید. لطفا با یک ترتیب معنادار آنها را زیر هم قرار دهید. (با موس روی آنها کلیک کرده، بکشید و رها کنید.)`,

    cdq_3_1:  /*html*/ `در صفحه بعد لطفا روی دوچرخه ای که بیشتر دوست دارید کلیک کنید.`,

    cdq_4:  /*html*/ `
    How would you draw a bicycle?
    <div class="options">
        <span id='cdq_4_top'> <input type="radio" id="bike_draw_right" value="bike_draw_right" name="bike_draw">
        <label for="bike_draw_right">The front is rightward</label> <br></span>
        <span><input type="radio" id="bike_draw_left" value="bike_draw_left" name="bike_draw">
        <label for="bike_draw_left">The front is leftward</label> <br></span>
        <input type="radio" id="bike_draw_na" value="bike_draw_na" name="bike_draw">
        <label for="bike_draw_na">I have no clear preference</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq4_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_5_1:  /*html*/ `
        Below, please choose the option that depicts the scene “Exchanging gifts between two people” better. Choose “X” if you don't have a clear preference.`,

    cdq_6:  /*html*/ `
    How would you draw the scene “Exchanging gifts between two people”?
    <div class="options">
    <span id='cdq_6_top'><input type="radio" id="give_draw_right" value="give_draw_right" name="give_draw">
        <label for="give_draw_right">The giving person is on the left and the receiving person is on the
            right</label> <br></span>
        <span> <input type="radio" id="give_draw_left" value="give_draw_left" name="give_draw">
        <label for="give_draw_left">The giving person is on the right and the receiving person is on the
            left</label> <br></span>
        <input type="radio" id="give_draw_na" value="na" name="give_draw">
        <label for="give_draw_na">I have no clear preference</label> <br>
    </div>

    <hr>
    <button type="button" class="switcher" onclick="cdq6_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_7:  /*html*/ `
    <div id="a_line"></div>
    How would you draw a horizontal line (just like above)?
    <div class="options">
        <span id='cdq_7_top'><input type="radio" id="line_draw_right" value="line_draw_right" name="line_draw">
        <label for="line_draw_right">Rather from left-to-right</label> <br></span>
        <span><input type="radio" id="line_draw_left" value="line_draw_left" name="line_draw">
        <label for="line_draw_left">Rather from right-to-left</label> <br></span>
        <input type="radio" id="line_draw_na" value="line_draw_na" name="line_draw">
        <label for="line_draw_na">I have no clear preference</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq7_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_8:  /*html*/ `
    How would you associate the good and the bad with the horizontal space?
    <div class="options">
        <span id='cdq_8_top'><input type="radio" id="moral_dir_left" value="moral_dir_left" name="moral_dir">
        <label for="moral_dir_left">The good is rather on the left and the bad is rather on the right</label> <br></span>
        <span><input type="radio" id="moral_dir_right" value="moral_dir_right" name="moral_dir">
        <label for="moral_dir_right">The good is rather on the right and the bad is rather on the left</label> <br></span>
        <input type="radio" id="moral_dir_na" value="moral_dir_na" name="moral_dir">
        <label for="moral_dir_na">I have no clear preference</label> <br>
        <hr>
    </div>
    <button type="button" class="switcher" onclick="cdq8_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    // Finger Counting Assessment
    fingercounting:  /*html*/ `
        How do you <b>count with your fingers</b> from 1 to 10?
        <div class="options">
            <input type="radio" id="f_right" value="right" name="fingercountinghabits">
            <label for="f_right">
                I prefer to start counting with the fingers
                of my right hand.
            </label>
            <br>
            <input type="radio" id="f_left" value="left" name="fingercountinghabits">
            <label for="f_left">
                I prefer to start counting with the fingers of
                my left hand.
            </label>
            <br>
            <input type="radio" id="f_donotknowornopreferred" value="na"
                name="fingercountinghabits">
            <label for="f_donotknowornopreferred">
                I do not know or I do not
                have any preferred hand.
            </label>
            <br>
            <input type="radio" id="f_donotwanttoanswer" value="donotwanttoanswer" name="fingercountinghabits">
            <label for="f_donotwanttoanswer">
                I prefer not to answer.

            </label>
            <br>
        </div>

        <hr>

        How stable are your <b>finger counting habits</b>?
        <div class="options">
            <input type="radio" id="fc_always" value="always" name="fingercountingstability">
            <label for="fc_always">I always start counting with this
                hand.</label>
            <br>
            <input type="radio" id="fc_mostly" value="mostly" name="fingercountingstability">
            <label for="fc_mostly">I usually start counting with this
                hand.</label>
            <br>
            <input type="radio" id="fc_slightly" value="slightly" name="fingercountingstability">
            <label for="fc_slightly">I don't know or I don't have a preferred hand or stable habit.</label>
            <br>
            <input type="radio" id="fc_na" value="na" name="fingercountingstability">
            <label for="fc_na">I prefer not to answer.</label>
            <br>
        </div>

        <hr>

        <button class="main_button class_next" type="button" onclick="finger_submit();"></button>
    `
    ,
    // Data-Quality Assessment Screen
    dataqualitycheck: /*html*/ `
        How would you describe your environment during your participation in our study?

        <div class="options">
            <input type="radio" id="e_silent" value="silent" name="environment">
            <label for="e_silent">silent</label> <br>
            <input type="radio" id="e_very_quiet" value="very_quiet" name="environment">
            <label for="e_very_quiet">very quiet</label> <br>
            <input type="radio" id="e_fairly_quiet" value="fairly_quiet" name="environment">
            <label for="e_fairly_quiet">fairly quiet</label> <br>
            <input type="radio" id="e_fairly_noisy" value="fairly_noisy" name="environment">
            <label for="e_fairly_noisy">fairly noisy</label> <br>
            <input type="radio" id="e_very_noisy" value="very_noisy" name="environment">
            <label for="e_very_noisy">very noisy</label> <br>
            <input type="radio" id="e_extremely_noisy" value="extremely_noisy" name="environment">
            <label for="e_extremely_noisy">extremely noisy</label> <br>
        </div>

        <hr>

        Were there any major distractions during your participation in our study?

        <div class="options">
            <input type="radio" id="no_major" value="no_major" name="distractions">
            <label for="no_major">no, there were no major distractions</label> <br>
            <input type="radio" id="one_major" value="one_major" name="distractions">
            <label for="one_major">yes, there was one major distraction</label> <br>
            <input type="radio" id="multiple_major" value="multiple_major" name="distractions">
            <label for="multiple_major">yes, there were multiple major distractions</label>
            <br>
        </div>

        <hr>

        Were there any difficulties during your participation in our study?

        <div class="options">
            <input type="radio" id="diff_no" value="no" name="difficulties">
            <label for="diff_no">no</label> <br>
            <input type="radio" id="diff_yes" value="yes" name="difficulties">
            <label for="diff_yes">yes (please specify below)</label> <br>
            <p style="margin-top: 10px; margin-bottom: 5px;">&nbsp; Optional remarks: <br>
                <textarea name="difficulties_notes" id="difficulties_notes" cols="50" rows="5"></textarea>
            </p>
        </div>

        <hr>

        <button class="main_button class_next" type="button" onclick="end_exp();"></button>
    `
    ,
    // Thanks-for-Participation Screen
    ending: /*html*/ `<br>You have reached the end of our study.<br>
                <b>Thanks a lot for your participation!</b>

                <br>
                <br>
                <p id="save_success" style="color:black;display:none;">
                </p>
                <p id="save_fail" style="background:#ff3333;color:black;display:none;">
                </p>
                <br>
                In case of any problems, questions, or remarks, feel free to contact us via e-mail: <br><a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
                <br><br>`
    ,
    save_success: /*html*/ `Your data has been saved (anonymously). You may now exit this window by closing the browser tab. You might have to first leave fullscreen mode by pressing <kbd>Esc</kbd> or <kbd>F11</kbd>.`
    ,
    save_fail: /*html*/ `Data cannot be saved on the server. Perhaps you have no internet connection? <strong>Click <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> to try saving on the server. (This message will disappear on successful saving.) Alternatively, click <button onclick="dl_as_file();">DOWNLOAD</button> to save your data
                manually (note: you must allow pop-ups), and then send it to lkcsgaspar@gmail.com.</strong>
            `,
    class_nopref: 'X',
    class_next: 'بعدی'
};
