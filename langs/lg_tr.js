/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in Turkish

// Instruction Screen (after practice session)
const main_text = /*html*/ `<br />Alıştırma denemeleri tamamlandı. <br /><br />
 Lütfen sol işaret parmağınızı <span class='key_d'></span> tuşunun ve sağ işaret parmağınızı <span class='key_k'></span> tuşunun üzerinde tutun.<br /><br />
 Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.<br />
 Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. <br /><br />
 Lütfen mümkün olduğunca hızlı ve doğru yanıt vermeye çalışın. <br /><br />
Bundan sonraki denemelerde tepkinizin doğru olup olmadığına dair bir geri bildirim almayacaksınız.<br /><br />
Bir sonraki aşamaya başlamak için <span class='key_d'></span> ya da <span class='key_k'></span> tuşuna basın.<br /><br />`;

const tt = {
    // Welcome Screen
    consent_text: /*html*/ `<h2>Çalışmaya hoşgeldiniz</h2>

        <p>
        Bu sayısal biliş çalışmasına katılmak yaklaşık 30 dakika sürmektedir. Çalışmaya yalnızca bir <b>bilgisayar (masaüstü ya da dizüstü)</b> ile katılabilirsiniz, mobil cihazlardan (akıllı telefon ya da tablet) katılım mümkün değildir.
        </p>

        <p>
        Eğer 18 yaşından küçükseniz, lütfen çalışmaya katılmayın. Çalışmayı sessiz ve dikkat dağıtıcı olmayan bir bir ortamda yapmanız önemlidir.
        </p>

        <p>
        Önce sizden cinsiyetiniz, yaşınız, ana diliniz, yabancı diliniz ve diğer kültürlerle ne kadar aşina olduğunuza ilişkin birtakım sorulara cevap vermeniz istenecektir. Daha sonra ise sayısal görevler sırasında kullanacağınız tepki tuşlarını klavyeniz aracılığıyla belirleyebilirsiniz. Çalışma boyunca iki farklı görev yapacaksınız. Her bir göreve başlamadan önce o göreve ilişkin yönergeleri göreceksiniz ve birkaç alıştırma denemesi yapacaksınız. Her bir görev iki ayrı bölümden oluşmaktadır, bu iki bölüm arasında kısa bir ara verebilirsiniz. Sayısal görevleri bitirdikten sonra ise bazı alışkanlıklarınız ve tercihlerinize dair birkaç soruyu yanıtlamanız istenecektir.
        </p>

        <hr>

        <h2>Bilgilendirilmiş Onam Formu</h2>

        <p>        
        Çalışmaya katılımınız gönüllülük esasına dayalıdır. Herhangi bir zaman diliminde tarayıcınızı kapatarak çalışmaya katılımınızı sonlandırabilirsiniz. Çalışmaya katılmaktan vazgeçmenin sizin açınızdan hiçbir negatif sonucu olmayacaktır. Aynı zamanda herhangi bir sorun yaşarsanız, çalışmayla ilgili herhangi bir sorunuz veya yorumuz olursa ve çalışmanın sonuçlarıyla ilgili bilgi almak isterseniz bizimle iletişime geçebilirsiniz:
        <br>
        <a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
        </p>

        <p>
        Verileriniz anonim olarak toplanacak ve saklanacaktır. Bu nedenle çalışma bittikten sonra verinizi silmemiz mümkün değildir. Bazı durumlarda çalışmaya katıldığınız cihaza ait bilgiler teknik nedenlerle kaydedilebilir, fakat bu bilgilerden kişisel verilerinize ulaşmak mümkün değildir. Bu nedenle çalışmadaki performansınıza dair bireysel bir geri bildirim verilmeyecektir. Bu çalışmaya dair veri ve bulgular çevrimiçi ve basılı olarak yayınlanacaktır fakat katılımcıların kimlikleri Alman Araştırma Kurumu ve Alman Psikoloji Derneği’nin önerdiği şekilde saklı tutulacaktır.
        </p>

        <hr>

        <p>
        Eğer 18 yaşından küçükseniz veya çalışmaya katılmak istemiyorsanız lütfen tarayıcınızı kapatarak bu sayfadan ayrılın.
        </p>
        
        <p>
        Eğer en az 18 yaşındaysanız ve çalışmaya katılmayı kabul ediyorsanız, lütfen aşağıdaki [Next] butonuna tıklayınız.
        </p>

        <hr>
        
        Çalışmaya nasıl devam etmek istiyorsunuz ?
        
        <div class="options">
            <input name="seriousness" id='participate' value="participate" type="radio"> 
            <label for="participate">Ciddi olarak çalışmaya katılmak istiyorum.</label><br>
            <input name="seriousness" id='justlook' value="justlook" type="radio">
            <label for="justlook">Sadece deneye bakacağım.</label><br>
        <div>

        <hr>

        <button class="main_button class_next" id="submit_button" type="button" onclick="consented();" style="visibility:hidden">
        </button>
        `
    ,
    // Warning when mobile detected (via device user agent)
    mobile: /*html*/ `Akıllı telefon ya da tablet kullanıyorsunuz gibi görünüyor. Maalesef çalışmaya taşınabilir bir cihazla katılmanız mümkün değildir.
        <br /><br />
        Lütfen deneyi bilgisayarınızdaki normal bir tarayıcı ile tekrar başlatın. Bu uyarının bir hata olduğunu düşünüyorsanız devam etmek için, 
        <button class="main_button" type="button" onclick="ignore_mobile();" style="visibility:hidden">
        buradaki butona </button> tıklayınız.`
    ,
    // Warning when small screen detected
    screen:/*html*/ 'Ekranınızın genişliği (' + screen.width + ' piksel) bir masaüstü/dizüstü bilgisayar için çok küçük. En ez 760 piksel bir ekranla katılmalısınız. Lütfen uygun bir modern ekran kullanın. '
    ,
    // Demographics
    demos: /*html*/ `
        <h3>Lütfen aşağıdaki bilgileri doldurunuz.</h3>
        <hr>
        <b>Cinsiyetiniz</b>:
        <div class="options">
            <input type="radio" id="woman" value="woman" name="gender">
            <label for="woman">kadın</label><br>
            <input type="radio" id="man" value="man" name="gender">
            <label for="man">erkek</label><br>
            <input type="radio" id="other" value="other" name="gender">
            <label for="other">diğer</label><br>
            <input type="radio" id="na" value="na" name="gender">
            <label for="na">Yanıt vermek istemiyorum.</label>
        </div>
        <hr>
        <b>Yaşınız</b>:
        <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='99' id="age_id" size="4">years<br>
        <input type="checkbox" onclick="checkageconsent(event);" style="margin-left: -1px;" id="age_na">
            <label for="age_na">Yanıt vermek istemiyorum.</label>
        <hr>
        <b>Ana diliniz</b> (birden fazla seçebilirsiniz):<br>
        <input type="checkbox" id="l1_de" />
        <label for="l1_de">Almanca</label><br>
        <input type="checkbox" id="l1_tr" />
        <label for="l1_tr">Türkçe</label><br>
        <input type="checkbox" id="l1_fa" />
        <label for="l1_fa">Farsça</label><br>
        <input type="checkbox" id="l1_na" />
        <label for="l1_na">Diğer (lütfen aşağıda belirtin)
        </label><br>
        Diğer diller / açıklama:
        <input id="l1_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        İletişim kurabilecek derecede iyi bildiğiniz <b>yabancı diller</b>:<br>
        <input type="checkbox" id="l2_de" />
        <label for="l2_de">Almanca</label><br>
        <input type="checkbox" id="l2_tr" />
        <label for="l2_tr">Türkçe</label><br>
        <input type="checkbox" id="l2_fa" />
        <label for="l2_fa">Farsça</label><br>
        <input type="checkbox" id="l2_en" />
        <label for="l2_en">İngilizce</label><br>
        <input type="checkbox" id="l2_es" />
        <label for="l2_es">İspanyolca</label><br>
        <input type="checkbox" id="l2_fr" />
        <label for="l2_fr">Fransızca</label><br>
        <input type="checkbox" id="l2_it" />
        <label for="l2_it">İtalyanca</label><br>
        <input type="checkbox" id="l2_ar" />
        <label for="l2_ar">Arapça</label><br>
        <input type="checkbox" id="l2_na" />
        <label for="l2_na">Diğer (lütfen aşağıda belirtin)</label><br>
        Diğer diller / açıklama:
        <input id="l2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        Lütfen <b>şu anda yaşadığınız ülkeyi</b> seçin:<br>
        <input type="radio" id="loc_de" value="loc_de" name='loc' />
        <label for="loc_de">Almanya</label><br>
        <input type="radio" id="loc_tr" value="loc_tr" name='loc' />
        <label for="loc_tr">Türkiye</label><br>
        <input type="radio" id="loc_fa" value="loc_fa" name='loc' />
        <label for="loc_fa">İran</label><br>
        <input type="radio" id="loc_na" value="loc_na" name='loc' />
        <label for="loc_na">Diğer (lütfen aşağıda belirtin)</label><br>
        Diğer ülkeler / açıklama:
        <input id="loc_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        Lütfen <b>yaşamınızın çoğunu geçirdiğiniz ülkeyi</b> seçin:<br>
        <input type="radio" id="loc2_de" value="loc2_de" name='loc2' />
        <label for="loc2_de">Almanya</label><br>
        <input type="radio" id="loc2_tr" value="loc2_tr" name='loc2' />
        <label for="loc2_tr">Türkiye</label><br>
        <input type="radio" id="loc2_fa" value="loc2_fa" name='loc2' />
        <label for="loc2_fa">İran</label><br>
        <input type="radio" id="loc2_na" value="loc2_na" name='loc2' />
        <label for="loc2_na">Diğer (lütfen aşağıda belirtin)</label><br>
        Diğer ülkeler / açıklama:
        <input id="loc2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        <b>Batı</b> kültürü ile ne kadar <b>aşinasınız</b>:
        <div class="options">
            <input type="radio" id="cult3" value="3" name="cultur">
            <label for="cult3">çok aşinayım</label><br>
            <input type="radio" id="cult2" value="2" name="cultur">
            <label for="cult2">biraz aşinayım</label><br>
            <input type="radio" id="cult1" value="1" name="cultur">
            <label for="cult1">aşina değilim</label><br>
            <input type="radio" id="cult0" value="0" name="cultur">
            <label for="cult0">Yanıt vermek istemiyorum.</label><br>
        </div>
        <hr>
        <b>Baskın eliniz</b>:<br>
        <input type="radio" id="righthanded" value="righthanded" name='handedness'>
        <label for="righthanded">sağ</label><br>
        <input type="radio" id="lefthanded" value="lefthanded" name='handedness'>
        <label for="lefthanded">sol</label><br>
        <input type="radio" id="ambidextrous" value="ambidextrous" name='handedness'>
        <label for="ambidextrous">iki el</label><br>
        <input type="radio" id="handedness_na" value="na" name='handedness'>
        <label for="handedness_na">Yanıt vermek istemiyorum.</label><br>
        <hr>
        <button class="main_button class_next" type="button" onclick="demos_submitted();"></button>
    `,
    // Warning alert when not all fields are filled in
    unanswered: 'Lütfen bu sayfadaki tüm soruları yanıtlayınız.',
    // Response Keys
    exp_start: /*html*/ `<br />Çalışma boyunca bir <b>sol tepki tuşuna</b> ve bir <b>sağ tepki tuşuna</b>
            ihtiyacınız olacak. Bu tuşların klavyenizde aynı yükseklikte olması ve aralarında dört tuş boşluk olması gerekmektedir. Lütfen klavyenizdeki 
            the <span class="key_d">D</span> tuşunun ve <span class="key_k">K</span> tuşunun bu kurallara uyup uymadığını kontrol edin.<br /><br />

            Eğer <span class="key_d">D</span> ve <span class="key_k">K</span> tuşları kurallara uyuyorsa ve bu tuşlarla devam etmek istiyorsanız aşağıdaki <span>[Next]</span> butonuna tıklayın. Eğer farklı tuşlar tanımlamanız gerekiyorsa lütfen aşağıdaki <span>[Change]</span> butonuna tıklayın ve yeni tuşları tanımlayın.<br /><br />
            <br /><br />
            <div class="buttonClass">
                <button id="changeButton" onclick="changeButton();" class="button_next">Change</button>
                <button id="startButton" onclick="startButton();" class="button_next">Next</button>
            </div>`
    ,
    // Change Response Keys
    change: /*html*/ `<br />Sağ ve sol tepki tuşlarının klavyenizde aynı yükseklikte olması ve aralarında dört tuş boşluk olması gerekmektedir. <br /><br />
            <span class="key_d"></span> tuşu yerine kullanacağınız sol tepki tuşunu tanımlamak için aşağıdaki [Left] butonuna tıklayınız. <br />
            Daha sonra <span class="key_k"></span> tuşu yerine kullanacağınız sağ tepki tuşunu tanımlamak için aşağıdaki [Right] butonuna tıklayınız. <br /><br />
            Lütfen tepki tuşlarını aklınızda tutun ve atanan yeni tuşları kaydetmek için aşağıdaki [Complete] butonuna tıklayın.
            <br /><br />
            <div class="buttonClass changeButt">
                <button id="leftButton" onclick="leftButton()" class="button_next">Left</button>
                <button id="rightButton" onclick="rightButton()" class="button_next">Right</button>
                <button id="completeButton" onclick="completeButton()" class="button_next">Complete</button>
            </div>`
    ,
    // Instructions on the bottom (during practice session)
    even: 'çift',
    odd: 'tek',
    large: 'büyük',
    small: 'küçük',
    wrong_key: /*html*/ `yanlış tuş`,
    correct_key: /*html*/ `doğru tuş`,
    block_text_par:
        // TASK 1: PARITY JUDGMENT
        // BLOCK 1:
        // Instruction Screen (before practice session):
        [/*html*/ `<br />Bu görev boyunca yapmanız gereken ekrana gelen sayıları <b>tek ve çift olarak ayırt etmektir</b>.
        Bunun için, lütfen sol elinizin işaret parmağını <span class='key_d'></span> tuşunun ve sağ elinizin işaret parmağını ise <span class='key_k'></span> tuşunun üzerine yerleştirin.</span> <br /><br />
        Her bir denemeden önce ekranda siyah bir kare belirecektir. Bu kareye lütfen bakın, kare bir süre sonra kaybolacak ve yerine bir sayı ekrana gelecektir. <br /><br />

        Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.<br />
        Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. <br /><br />
        Lütfen mümkün olduğunca hızlı ve doğru yanıt vermeye çalışın. Deneyden önce birkaç alıştırma yapacaksınız, bu sırada tepkilerinizin doğru olup olmadığına dair geri bildirim alacaksınız.<br /><br />
        Başlamak için <span class='key_d'></span> ya da <span class='key_k'></span> tuşuna basın.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `İkinci yarıda, ekrana gelen sayıların tek mi çift mi olduğunu ayırt etmeye devam edeceksiniz.<br /><br />
        <b>Fakat ikinci yarıda önemli olarak tek ve çift tepkilerinin yerleri değişecek. <br /><br />        
        Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.<br />
        Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. <br /></b> <br /><br />
        Lütfen mümkün olduğunca hızlı ve doğru yanıt vermeye çalışın. <br /><br /> Yine önce birkaç alıştırma denemesi yapacaksınız ve bu sırada tepkilerinizin doğru olup olmadığına dair geri bildirim alacaksınız.<br />
        Başlamak için <span class='key_d'></span> ya da <span class='key_k'></span> tuşuna basın.<br /><br />`,
            main_text
        ]
    ,
    block_text_mag:
        // TASK 2: MAGNITUDE CLASSIFICATION
        // BLOCK 1:
        // Instruction Screen (before practice session)
        [/*html*/ `<br />        
        Bu görevde, ekrana gelen sayıları <b>5’ten küçük ya da 5’ten büyük olarak sınıflandırmanız</b> gerekecektir. <br /><br /> Bunun için sol elinizin işaret parmağını <span class='key_d'></span> tuşunun üzerine ve sağ elinizin işaret parmağını ise <span class='key_k'></span> tuşunun üzerine yerleştirin. <br /><br />
        Her bir denemeden önce ekranda siyah bir kare belirecektir. Bu kareye lütfen bakın, kare bir süre sonra kaybolacak ve yerine bir sayı ekrana gelecektir. <br /><br />
        Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.<br />
        Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. <br /> <br /><br />
        Lütfen mümkün olduğunca hızlı ve doğru yanıt vermeye çalışın.<br /><br /> Deneyden önce birkaç alıştırma yapacaksınız, bu sırada tepkilerinizin doğru olup olmadığına dair geri bildirim alacaksınız.<br /><br />
        Başlamak için <span class='key_d'></span> ya da <span class='key_k'></span> tuşuna basın.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `Görevin ikinci yarısında, sayıları 5’ten küçük ve 5’ten büyük olarak sınıflandırmaya devam edeceksiniz.<br /><br />
        <b>Fakat ikinci yarıda önemli olarak küçük ve büyük tepkilerinin yerleri değişecek.</b> <br /><br />
        Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.<br />
        Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. <br /></span> <br /><br />
        Lütfen mümkün olduğunca hızlı ve doğru yanıt vermeye çalışın. <br /><br /> Yine önce birkaç alıştırma denemesi yapacaksınız ve bu sırada tepkilerinizin doğru olup olmadığına dair geri bildirim alacaksınız. <br />
        Başlamak için <span class='key_d'></span> ya da <span class='key_k'></span> tuşuna basın.<br /><br />`,
            // block 4
            main_text
        ]
    ,
    // Break Screen 1 (between two blocks, 30 seconds long)
    mid_break: [`</br />Görevin ilk yarısı tamamlandı. <br /><br />
        Lütfen kısa bir ara verin (en az 30 saniye). <br /><br />`,
        `</br />İlk görev tamamlandı. <br /><br />
        Lütfen kısa bir ara verin (en az 30 saniye). <br /><br />`,
        `</br />Görevin ilk yarısı tamamlandı. <br /><br />
        Lütfen kısa bir ara verin (en az 30 saniye). <br /><br />`]
    ,
    // Break Screen 2 (between two blocks):
    mid_break2: /*html*/ `Şimdi görevin ikinci yarısına devam edebilirsiniz.<br /><br />
    <b>Tepki tuşlarının yeri değişecektir, bu yüzden yeni yönergeleri dikkatli bir şekilde okuyunuz.
    <br /><br />
    <button class="main_button" type="button" onclick="start_block();">Next</button>
    `,
    // Break Screen 2 (between two tasks)
    half_break: /*html*/ `Şimdi ikinci göreve devam edebilirsiniz.<br /><br />
    <button class="main_button" type="button" onclick="start_block();">Next</button>
    `,
    // Warning when holding a key
    keystroke_par: /*html*/ '<p>Lütfen tuşlara sadece ekranda bir sayı belirdiğinde tek ya da çift tepkisi vermek için basın.<br></p>',
    keystroke_mag: /*html*/ '<p>Lütfen tuşlara sadece ekranda bir sayı belirdiğinde küçük ya da büyük tepkisi vermek için basın.<br></p>',
    // Warning when a key other than [D] or [K] is pressed:
    wrongkeys: /*html*/ `<p>Bastığınız tuş deneye ait değil. Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.
    Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın.</p>`
    ,
    // Warning/Screen for breaks within a block
    pauseControl: /*html*/ `<p>Şu anda tepki vermiyorsunuz. Devam etmek için: Eğer sayı <span class='nums_d'></span>, ise <span class='key_d'></span> tuşuna basın.
                Eğer sayı <span class='nums_k'></span>, ise <span class='key_k'></span> tuşuna basın. </p>`
    ,
    // Warning when leaving full-screen mode (plus automatic return to in each trial)
    warning: /*html*/ `<p>Tam ekran modundan çıktınız. Lütfen aşağıdaki tuşa tıklayarak tam ekran moduna geçin.</p>
            <button onclick="fullscreen_on(true);" style="margin-bottom: 22px;">Full-screen mode</button>`
    ,
    //// Cultural Directionality Questionnaire
    fruits: ['elma', 'muz', 'portakal', 'armut'],
    cdq1_unanswered: 'Lütfen kutucukların her birine tek bir kelime yazınız.',
    cdq2_unanswered: 'Lütfen tüm fotoğrafları kutulara yerleştiriniz.',
    cdq_opt_unanswered: 'Lütfen seçeneklerden birini işaretleyiniz.',
    cdq_1_1:  /*html*/ `
    Aşağıda dört farklı obje göreceksiniz, lütfen bu objelerin adlarını kutucuklara yazınız.`,

    cdq_2_1:  /*html*/ `Aşağıda birkaç fotoğraf göreceksiniz. Lütfen bunları anlamlı bir şekilde yatay olarak bir sıraya dizin (fare imleciniz ile çekip bırakabilirsiniz).`,

    cdq_3_1:  /*html*/ `Aşağıda lütfen daha çok beğendiniz bisikleti tıklayarak seçin. Eğer belirli bir tercihiniz yoksa “X” seçeneğini işaretleyebilirsiniz.`,

    cdq_4:  /*html*/ `
        Bir bisikleti nasıl çizersiniz?
    <div class="options">
        <span id='cdq_4_top'> <input type="radio" id="bike_draw_right" value="bike_draw_right" name="bike_draw">
        <label for="bike_draw_right">Önü sağa bakacak şekilde</label> <br></span>
        <span><input type="radio" id="bike_draw_left" value="bike_draw_left" name="bike_draw">
        <label for="bike_draw_left">Önü sola bakacak şekilde</label> <br></span>
        <input type="radio" id="bike_draw_na" value="bike_draw_na" name="bike_draw">
        <label for="bike_draw_na">Belirli bir tercihim yok</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq4_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_5_1:  /*html*/ `
        Bir sonraki ekranda “İki kişi arasında hediye değiş tokuşu” sahnesini daha iyi tanımlayan seçeneği işaretleyin. Eğer belirli bir tercihiniz yoksa “X” seçeneğini işaretleyebilirsiniz.`,

    cdq_6:  /*html*/ `
    “İki kişi arasında hediye değiş tokuşu” sahnesini nasıl çizersiniz ?
    <div class="options">
    <span id='cdq_6_top'><input type="radio" id="give_draw_right" value="give_draw_right" name="give_draw">
        <label for="give_draw_right">Hediyeyi veren kişi solda, alan kişi sağda</label> <br></span>
        <span> <input type="radio" id="give_draw_left" value="give_draw_left" name="give_draw">
        <label for="give_draw_left">Hediyeyi veren kişi sağda, alan kişi solda</label> <br></span>
        <input type="radio" id="give_draw_na" value="na" name="give_draw">
        <label for="give_draw_na">Belirli bir tercihim yok</label> <br>
    </div>

    <hr>
    <button type="button" class="switcher" onclick="cdq6_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_7:  /*html*/ `
    <div id="a_line"></div>
    Yukarıda gördüğünüz gibi bir yatay çizgiyi nasıl çizersiniz ?
    <div class="options">
        <span id='cdq_7_top'><input type="radio" id="line_draw_right" value="line_draw_right" name="line_draw">
        <label for="line_draw_right">Soldan sağa doğru</label> <br></span>
        <span><input type="radio" id="line_draw_left" value="line_draw_left" name="line_draw">
        <label for="line_draw_left">Sağdan sola doğru</label> <br></span>
        <input type="radio" id="line_draw_na" value="line_draw_na" name="line_draw">
        <label for="line_draw_na">Belirli bir tercihim yok</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq7_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_8:  /*html*/ `
    İyi ve kötüyü yatay düzlemde nasıl temsil edersiniz?
    <div class="options">
        <span id='cdq_8_top'><input type="radio" id="moral_dir_left" value="moral_dir_left" name="moral_dir">
        <label for="moral_dir_left">İyi solda, kötü sağda</label> <br></span>
        <span><input type="radio" id="moral_dir_right" value="moral_dir_right" name="moral_dir">
        <label for="moral_dir_right">İyi sağda kötü solda</label> <br></span>
        <input type="radio" id="moral_dir_na" value="moral_dir_na" name="moral_dir">
        <label for="moral_dir_na">Belirli bir tercihim yok</label> <br>
        <hr>
    </div>
    <button type="button" class="switcher" onclick="cdq8_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    // Finger Counting Assessment
    fingercounting:  /*html*/ `
        Parmaklarınızı 1’den 10’a kadar <b>nasıl sayıyorsunuz</b>?
        <div class="options">
            <input type="radio" id="f_right" value="right" name="fingercountinghabits">
            <label for="f_right">
            Saymaya sağ elimin parmakları ile başlıyorum.
            </label>
            <br>
            <input type="radio" id="f_left" value="left" name="fingercountinghabits">
            <label for="f_left">
            Saymaya sol elimin parmakları ile başlıyorum.
            </label>
            <br>
            <input type="radio" id="f_donotknowornopreferred" value="na"
                name="fingercountinghabits">
            <label for="f_donotknowornopreferred">
            Bilmiyorum ya da bir tercihim yok.
            </label>
            <br>
            <input type="radio" id="f_donotwanttoanswer" value="donotwanttoanswer" name="fingercountinghabits">
            <label for="f_donotwanttoanswer">
                Yanıt vermek istemiyorum.

            </label>
            <br>
        </div>

        <hr>

        <b>Parmak sayma alışkanlığınız</b> ne kadar <b> istikrarlı </b>?
        <div class="options">
            <input type="radio" id="fc_always" value="always" name="fingercountingstability">
            <label for="fc_always">Saymaya her zaman bu elimle başlarım.</label>
            <br>
            <input type="radio" id="fc_mostly" value="mostly" name="fingercountingstability">
            <label for="fc_mostly">Saymaya genellikle bu elimle başlarım.
            </label>
            <br>
            <input type="radio" id="fc_slightly" value="slightly" name="fingercountingstability">
            <label for="fc_slightly">Bilmiyorum ya da tercih ettiğim bir elim ya da istikrarlı olduğum bir alışkanlık yok.
            </label>
            <br>
            <input type="radio" id="fc_na" value="na" name="fingercountingstability">
            <label for="fc_na">Yanıt vermek istemiyorum.</label>
            <br>
        </div>

        <hr>

        <button class="main_button class_next" type="button" onclick="finger_submit();"></button>
    `
    ,
    // Data-Quality Assessment Screen
    dataqualitycheck: /*html*/ `
    Çalışmaya katıldığınız süre boyunca içinde bulunduğunuz ortamı nasıl değerlendirirsiniz?

        <div class="options">
            <input type="radio" id="e_silent" value="silent" name="environment">
            <label for="e_silent">tamamen sessiz</label> <br>
            <input type="radio" id="e_very_quiet" value="very_quiet" name="environment">
            <label for="e_very_quiet">oldukça sessiz</label> <br>
            <input type="radio" id="e_fairly_quiet" value="fairly_quiet" name="environment">
            <label for="e_fairly_quiet">makul derecede sessiz</label> <br>
            <input type="radio" id="e_fairly_noisy" value="fairly_noisy" name="environment">
            <label for="e_fairly_noisy">makul derecede gürültülü</label> <br>
            <input type="radio" id="e_very_noisy" value="very_noisy" name="environment">
            <label for="e_very_noisy">oldukça gürültülü</label> <br>
            <input type="radio" id="e_extremely_noisy" value="extremely_noisy" name="environment">
            <label for="e_extremely_noisy">çok gürültülü</label> <br>
        </div>

        <hr>

        Çalışmaya katılımınız sırasında etrafınızda dikkatinizi dağıtacak öğeler var mıydı?

        <div class="options">
            <input type="radio" id="no_major" value="no_major" name="distractions">
            <label for="no_major">hayır, dikkatimi dağıtacak bir öğe yoktu</label> <br>
            <input type="radio" id="one_major" value="one_major" name="distractions">
            <label for="one_major">evet, dikkatimi dağıtan bir öğe vardı</label> <br>
            <input type="radio" id="multiple_major" value="multiple_major" name="distractions">
            <label for="multiple_major">evet, dikkatimi dağıtan birden fazla öğe vardı</label>
            <br>
        </div>

        <hr>

        Çalışmaya katılımınız sırasında herhangi bir zorluk yaşadınız mı?

        <div class="options">
            <input type="radio" id="diff_no" value="no" name="difficulties">
            <label for="diff_no">hayır</label> <br>
            <input type="radio" id="diff_yes" value="yes" name="difficulties">
            <label for="diff_yes">evet (lütfen aşağıda belirtin)</label> <br>
            <p style="margin-top: 10px; margin-bottom: 5px;">&nbsp; isteğe bağlı açıklama: <br>
                <textarea name="difficulties_notes" id="difficulties_notes" cols="50" rows="5"></textarea>
            </p>
        </div>

        <hr>

        <button class="main_button class_next" type="button" onclick="end_exp();"></button>
    `
    ,
    // Thanks-for-Participation Screen
    ending: /*html*/ `<br>Çalışmanın sonuna geldiniz.    <br>
                <b>Katılımınız için teşekkür ederiz !</b>
                <span id="pass_container">
                <br><br>
                    Lütfen ödemeniz sırasında katılımınızı doğrulamak amacıyla sizden istenilecek bu kodu kaydediniz:
                    <br>
                    <span id="pass_id">[Please wait, the link is not yet available.]</span>
                </span>
                <br>
                <br>
                <p id="save_success" style="color:black;display:none;">
                </p>
                <p id="save_fail" style="background:#ff3333;color:black;display:none;">
                </p>
                <br>
                Çalışmayla ilgili herhangi bir probleminiz, sorunuz ya da yorumunuz varsa, bizimle e-posta aracılığıyla iletişime geçebilirsiniz: <br><a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
                <br><br>`
    ,
    save_success: /*html*/ `Veriniz anonim olarak kaydedildi. Tarayıcınızı kapatarak bu pencereden çıkabilirsiniz. Önce tam ekran modundan çıkmak için <kbd>Esc</kbd> ya da <kbd>F11</kbd> tuşuna basmanız gerekebilir.`
    ,
    save_fail: /*html*/ `Data cannot be saved on the server. Perhaps you have no internet connection? <strong>Click <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> to try saving on the server. (This message will disappear on successful saving.) Alternatively, click <button onclick="dl_as_file();">DOWNLOAD</button> to save your data
                manually (note: you must allow pop-ups), and then send it to lkcsgaspar@gmail.com.</strong>
            `,
    class_nopref: 'X',
    class_next: 'Next'
};
