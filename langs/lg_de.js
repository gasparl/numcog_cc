/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in English

// Instruction Screen (after practice session)
const main_text = /*html*/ `<br />Die Übungsphase ist nun beendet.<br /><br />
Bitte lassen Sie Ihren linken Zeigefinger auf der Taste <span class='key_d'></span> und Ihren rechten Zeigefinger auf der Taste <span class='key_k'></span>. <br /><br />
Wenn die Zahl <span class='nums_d'></span> ist, drücken Sie <span class='key_d'></span>.<br />
Wenn die Zahl <span class='nums_k'></span> ist, drücken Sie <span class='key_k'></span>. <br /><br />
Bitte antworten Sie so schnell und so oft richtig wie möglich. <br /><br />
Die Rückmeldung zur Richtigkeit Ihrer Antworten wird ab jetzt nicht mehr angezeigt.<br /><br />
Drücken Sie <span class='key_d'></span> / <span class='key_k'></span>, um mit der nächsten Phase zu beginnen.<br /><br />`;

const tt = {
    // Welcome Screen
    consent_text: /*html*/ `<h2>Willkommen zu diesem Experiment</h2>

        Vielen Dank für Ihr Interesse an unserer Studie.

        <p>
        Die Teilnahme an dieser Studie zur numerischen Kognition dauert etwa 30 Minuten. Die Teilnahme erfordert einen <b>Computer (Desktop oder Laptop)</b> und ist auf mobilen Geräten (Smartphone oder Tablet) nicht möglich.
        </p>

        <p>
        Bitte nehmen Sie nur teil, wenn Sie mindestens 18 Jahre alt sind. Bitte führen Sie die Studie in einer ruhigen Umgebung durch, um unerwünschte Ablenkungen zu vermeiden.
        </p>

        <p>
        Sie werden zunächst gebeten, einige Angaben zu Ihrem Geschlecht, Alter, Ihrer Muttersprache und Vertrautheit mit anderen Kulturen zu machen. Anschließend können Sie auf Ihrer Tastatur Antworttasten für die Aufgaben zur numerischen Kognition auswählen. Sie werden zwei verschiedene Aufgaben bearbeiten. Die Anweisungen werden Ihnen gezeigt, bevor Sie mit einigen Übungsdurchgängen starten. Jede Aufgabe ist in zwei Teile gegliedert, zwischen denen Sie eine kurze Pause einlegen können. Nach Beendigung der Aufgaben werden Sie gebeten, einige Fragen zu Ihren Gewohnheiten und Präferenzen zu beantworten.       
        </p>

        <hr>

        <h2>Einverständniserklärung</h2>

        <p>        
        Ihre Teilnahme an dieser Studie ist freiwillig. Sie können Ihre Teilnahme jederzeit abbrechen, indem Sie diese Browserfenster schließen. Der Abbruch der Teilnahme hat keine negativen Folgen für Sie; Sie können eine anteilige Bezahlung einfordern, indem Sie uns per E-Mail kontaktieren. Sie können uns auch bei Problemen, Fragen, Anmerkungen oder bei Interesse an den Ergebnissen dieser Studie kontaktieren:
        <br>
        <a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
        </p>

        <p>
        Ihre Daten werden in anonymisierter Form erhoben und gespeichert. Aufgrund der anonymen Speicherung der Daten ist eine Löschung nach vollständiger Teilnahme nicht möglich. In einigen Fällen werden Daten der für die Studienteilnahme verwendeten Geräte aus technischen Gründen aufgezeichnet und gespeichert, ohne dass ein Rückschluss auf persönliche Informationen möglich ist. Daher erfolgt keine individuelle Rückmeldung über Ihre Leistung in den Aufgaben. Die Ergebnisse und Daten dieser Studie werden veröffentlicht und online zur Verfügung gestellt, wobei Sie gemäß den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) und der Deutschen Gesellschaft für Psychologie (DGPs) nicht identifizierbar sein werden.
        </p>

        <hr>

        <p>
        Wenn Sie unter 18 Jahre alt sind oder nicht teilnehmen möchten, schließen Sie bitte das Browserfenster und verlassen Sie diese Seite.
        </p>
        
        <p>
        Wenn Sie mindestens 18 Jahre alt sind und mit der Teilnahme an der Studie einverstanden sind, klicken Sie bitte unten auf [Weiter].
        </p>

        <hr>

        Wie möchten Sie fortfahren?
        
        <div class="options">
            <input name="seriousness" id='participate' value="participate" type="radio"> 
            <label for="participate">Ich möchte ernsthaft teilnehmen.</label><br>
            <input name="seriousness" id='justlook' value="justlook" type="radio">
            <label for="justlook">Ich möchte mir das Experiment nur ansehen.</label><br>
        <div>

        <hr>

        <button class="main_button class_next" id="submit_button" type="button" onclick="consented();" style="visibility:hidden">
        </button>
        `
    ,
    // Warning when mobile detected (via device user agent)
    mobile: /*html*/ `Sie scheinen ein Smartphone oder Tablet zu verwenden. Leider können Sie dieses Experiment nicht auf einem mobilen Gerät durchführen.
    Bitte starten Sie das Experiment erneut mit einem normalen Internetbrowser auf Ihrem Computer.
        <br /><br />
        Falls Sie sicher sind, dass diese Warnmeldung ein Fehler ist, klicken Sie <button class="main_button" type="button" onclick="ignore_mobile();" style="visibility:hidden"> hier </button> , um fortzufahren.`
    ,
    // Warning when small screen detected
    screen:/*html*/ 'Die Breite Ihres Bildschirms (' + screen.width + ' Pixel) ist zu klein für einen Desktop- oder Laptop-Computer. Ihr Bildschirm sollte mindestens 760 Pixel groß sein. Bitte verwenden Sie einen Computer mit einem normalen modernen Monitor.'
    ,
    // Demographics
    demos: /*html*/ `
    <h3>Bitte wählen Sie die Informationen aus, welche auf Sie zutreffen.</h3>
    <hr>
    Ihr <b>Gender</b>:
    <div class="options">
        <input type="radio" id="woman" value="woman" name="gender">
        <label for="woman">weiblich</label><br>
        <input type="radio" id="man" value="man" name="gender">
        <label for="man">männlich</label><br>
        <input type="radio" id="other" value="other" name="gender">
        <label for="other">anderes</label><br>
        <input type="radio" id="na" value="na" name="gender">
        <label for="na">Ich möchte lieber nicht antworten.</label>
    </div>
    <hr>
    Ihr <b>Alter</b>:
    <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
    oninput="this.value=this.value.slice(0,2)" min='1' max='99' id="age_id" size="4">years<br>
    <input type="checkbox" onclick="checkageconsent(event);" style="margin-left: -1px;" id="age_na">
        <label for="age_na">Ich möchte lieber nicht antworten.</label>
    <hr>
    Ihre <b>erste Muttersprache(n)</b> (Sie können mehr als eine Sprache auswählen):<br>
    <input type="checkbox" id="l1_de" />
    <label for="l1_de">deutsch</label><br>
    <input type="checkbox" id="l1_tr" />
    <label for="l1_tr">türkisch</label><br>
    <input type="checkbox" id="l1_fa" />
    <label for="l1_fa">farsi</label><br>
    <input type="checkbox" id="l1_na" />
    <label for="l1_na">andere (bitte unten angeben)</label><br>
    Andere Sprache / Anmerkungen:
    <input id="l1_notes" style="width: 170px;margin:0;" maxlength="30">
    <hr>
    <b>Fremdsprache(n)</b>, in denen Sie kommunizieren können:<br>
    <input type="checkbox" id="l2_de" />
    <label for="l2_de">deutsch</label><br>
    <input type="checkbox" id="l2_tr" />
    <label for="l2_tr">türkisch</label><br>
    <input type="checkbox" id="l2_fa" />
    <label for="l2_fa">farsi</label><br>
    <input type="checkbox" id="l2_en" />
    <label for="l2_en">englisch</label><br>
    <input type="checkbox" id="l2_es" />
    <label for="l2_es">spanisch</label><br>
    <input type="checkbox" id="l2_fr" />
    <label for="l2_fr">französisch</label><br>
    <input type="checkbox" id="l2_it" />
    <label for="l2_it">italienisch</label><br>
    <input type="checkbox" id="l2_ar" />
    <label for="l2_ar">arabisch</label><br>
    <input type="checkbox" id="l2_na" />
    <label for="l2_na">andere (bitte unten angeben)</label><br>
    Andere Sprache / Anmerkungen:
    <input id="l2_notes" style="width: 170px;margin:0;" maxlength="30">
    <hr>
    Bitte wählen Sie das Land aus, in dem Sie <b>aktuell leben</b>:<br>
    <input type="radio" id="loc_de" value="loc_de" name='loc' />
    <label for="loc_de">Deutschland</label><br>
    <input type="radio" id="loc_tr" value="loc_tr" name='loc' />
    <label for="loc_tr">Türkei</label><br>
    <input type="radio" id="loc_fa" value="loc_fa" name='loc' />
    <label for="loc_fa">Iran</label><br>
    <input type="radio" id="loc_na" value="loc_na" name='loc' />
    <label for="loc_na">anderes (bitte unten angeben)</label><br>
    Anderes Land / Anmerkungen:
    <input id="loc_notes" style="width: 170px;margin:0;" maxlength="30">
    <hr>
    Bitte wählen Sie das Land aus, in dem Sie den <b>Großteil Ihres Lebens verbracht</b> haben:<br>
    <input type="radio" id="loc2_de" value="loc2_de" name='loc2' />
    <label for="loc2_de">Deutschland</label><br>
    <input type="radio" id="loc2_tr" value="loc2_tr" name='loc2' />
    <label for="loc2_tr">Türkei</label><br>
    <input type="radio" id="loc2_fa" value="loc2_fa" name='loc2' />
    <label for="loc2_fa">Iran</label><br>
    <input type="radio" id="loc2_na" value="loc2_na" name='loc2' />
    <label for="loc2_na">anderes (bitte unten angeben)</label><br>
    Anderes Land / Anmerkungen:
    <input id="loc2_notes" style="width: 170px;margin:0;" maxlength="30">
    <hr>
    Wie <b>vertraut</b> sind Sie mit <b>nahöstlichen</b> Kulturen?
    <div class="options">
        <input type="radio" id="cult3" value="3" name="cultur">
        <label for="cult3">sehr vertraut</label><br>
        <input type="radio" id="cult2" value="2" name="cultur">
        <label for="cult2">ein wenig vertraut</label><br>
        <input type="radio" id="cult1" value="1" name="cultur">
        <label for="cult1">nicht vertraut</label><br>
        <input type="radio" id="cult0" value="0" name="cultur">
        <label for="cult0">Ich möchte lieber nicht antworten.</label><br>
    </div>
    <hr>
    Ihre <b>Händigkeit</b>:<br>
    <input type="radio" id="righthanded" value="righthanded" name='handedness'>
    <label for="righthanded">rechtshändig</label><br>
    <input type="radio" id="lefthanded" value="lefthanded" name='handedness'>
    <label for="lefthanded">linkshändig</label><br>
    <input type="radio" id="ambidextrous" value="ambidextrous" name='handedness'>
    <label for="ambidextrous">beidhändig</label><br>
    <input type="radio" id="handedness_na" value="na" name='handedness'>
    <label for="handedness_na">Ich möchte lieber nicht antworten.</label><br>
    <hr>
    <button class="main_button class_next" type="button" onclick="demos_submitted();"></button>
    `,
    // For each foreign language selected
    l2_use: /*html*/ `
        Verwenden Sie zurzeit diese Sprache in gesprochener oder geschriebener Form?<br>
        <input type="radio" id="l2_use3" value="l2_use3" name='l2_use' />
        <label for="l2_use3">
        ja, ich habe sie innerhalb des letzten Monats verwendet
        </label><br>
        <input type="radio" id="l2_use2" value="l2_use2" name='l2_use' />
        <label for="l2_use2">
        nein, aber ich habe sie innerhalb der letzten 5 Jahre verwendet
        </label><br>
        <input type="radio" id="l2_use1" value="l2_use1" name='l2_use' />
        <label for="l2_use1">
        nein, ich habe sie innerhalb der letzten 5 Jahre nicht verwendet
        </label><br>
        <div id='l2_use_time' style='display:none;margin-top:10px;'>
        Wie viel Zeit verwenden Sie diese Sprache durchschnittlich am Tag?
            <ul>
                <li>
                Handschriftlich: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h1" size="4">
                Stunden und
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m1" size="4">
                Minuten
                </li>
                <li>
                Getippt: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h2" size="4">
                Stunden und
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m2" size="4">
                Minuten
                </li>
                <li>
                Gesprochen: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h3" size="4">
                Stunden und
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m3" size="4">
                Minuten
                </li>
            </ul>
        </div>
    `,
    // Warning alert when not all fields are filled in
    unanswered: 'Bitte beantworten Sie alle Fragen auf dieser Seite.',
    // Response Keys
    exp_start: /*html*/ `
            <br />Für unser Experiment benötigen Sie eine <b>linke Antworttaste</b> und eine <b>rechte Antworttaste</b>. 

            Diese sollten sich auf Ihrer Tastatur in der gleichen Reihe und vier Tasten voneinander entfernt befinden. Bitte prüfen Sie, ob die Tasten <span class="key_d">D</span> und <span class="key_k">K</span> diese Anforderungen erfüllen.<br /><br />

            Wenn Sie <span class="key_d">D</span> und <span class="key_k">K</span> als Antworttasten verwenden möchten, klicken Sie unten auf [Weiter]. Falls nicht, klicken Sie auf [Ändern] und wählen Sie andere Tasten.<br /><br />
            <br /><br />
            <div class="buttonClass">
                <button id="changeButton" onclick="changeButton();" class="button_next">Ändern</button>
                <button id="startButton" onclick="startButton();" class="button_next">Weiter</button>
            </div>`
    ,
    // Change Response Keys
    change: /*html*/ `<br />Auf Ihrer Tastatur sollten sich die linke und die rechte Antworttaste in der gleichen Reihe und vier Tasten voneinander entfernt befinden. <br /><br />
    Klicken Sie bitte unten auf [Links], um eine linke Antworttaste auszuwählen, die die Taste <span class="key_d"></span> ersetzt. <br />
    Klicken Sie dann bitte unten auf [Rechts], um eine rechte Antworttaste auszuwählen, die die Taste <span class="key_k"></span> ersetzt. <br /><br />
    Merken Sie sich Ihre Antworttasten und klicken Sie unten auf [Fertig], um die neuen Antworttasten zu speichern.
    <br /><br />
    <div class="buttonClass changeButt">
        <button id="leftButton" onclick="leftButton()" class="button_next">Links</button>
        <button id="rightButton" onclick="rightButton()" class="button_next">Rechts</button>
        <button id="completeButton" onclick="completeButton()" class="button_next">Fertig</button>
    </div>`
    ,
    irregular_key: 'Bitte verwenden Sie nur normale Buchstabentasten.',
    // Instructions on the bottom (during practice session)
    odd: 'ungerade',
    even: 'gerade',
    small: 'klein',
    large: 'groß',
    wrong_key: /*html*/ `falsche Taste`,
    correct_key: /*html*/ `richtige Taste`,
    block_text_par:
        // TASK 1: PARITY JUDGMENT
        // BLOCK 1:
        // Instruction Screen (before practice session):
        [/*html*/ `<br />In dieser Aufgabe sollen Sie unterscheiden, ob <b>Zahlen gerade oder ungerade</b> sind.
        Legen Sie dazu bitte den Zeigefinger Ihrer linken Hand auf die Taste <span class='key_d'></span> und den Zeigefinger Ihrer rechten Hand auf die Taste <span class='key_k'></span> Ihrer Tastatur.</span> <br /><br />
        In jedem Durchgang erscheint ein schwarzes Quadrat in der Mitte des Bildschirms. Schauen Sie bitte auf dieses Quadrat. Es wird dann durch eine Zahl ersetzt. <br /><br />
        Wenn die Zahl <span class='nums_d'></span>, ist, drücken Sie <span class='key_d'></span>.<br />
        Wenn die Zahl <span class='nums_k'></span>, ist, drücken Sie <span class='key_k'></span>.<br /><br />
        Bitte antworten Sie so schnell und so oft richtig wie möglich. Das Experiment beginnt mit einer Übungsphase, in der Sie eine Rückmeldung zur Richtigkeit Ihrer Antworten erhalten.<br /><br />
        Drücken Sie <span class='key_d'></span> / <span class='key_k'></span> um zu beginnen.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `In der zweiten Hälfte bleibt Ihre Aufgabe zu unterscheiden, ob Zahlen gerade oder ungerade sind.<br /><br />
        <b>Wichtig ist, dass die Zuordnung der Antworten zu gerade/ungerade nun umgekehrt sein wird. <br /><br />
        Wenn die Zahl <span class='nums_d'></span> ist, drücken Sie <span class='key_d'></span>.<br />
        Wenn die Zahl <span class='nums_k'></span> ist, drücken Sie <span class='key_k'></span>.</b> <br /><br />
        Bitte antworten Sie so schnell und so oft richtig wie möglich. <br /><br />
        Auch in dieser Hälfte gibt es eine Übungsphase, in der Sie eine Rückmeldung über die Richtigkeit Ihrer Antworten erhalten.
         <br />
         Drücken Sie <span class='key_d'></span> / <span class='key_k'></span> um zu beginnen.<br /><br />`,
            main_text
        ]
    ,
    block_text_mag:
        // TASK 2: MAGNITUDE CLASSIFICATION
        // BLOCK 1:
        // Instruction Screen (before practice session)
        [/*html*/ `<br />In dieser Aufgabe sollen Sie unterscheiden, ob <b>Zahlen kleiner oder größer als 5</b> sind.<br /><br />
        Legen Sie dazu bitte den Zeigefinger Ihrer linken Hand auf die Taste <span class='key_d'></span> und den Zeigefinger Ihrer rechten Hand auf die Taste <span class='key_k'></span> Ihrer Tastatur. <br /><br />
        In jedem Durchgang erscheint ein schwarzes Quadrat in der Mitte des Bildschirms. Schauen Sie bitte auf dieses Quadrat. Es wird dann durch eine Zahl ersetzt. <br /><br />
        Wenn die Zahl <span class='nums_d'></span> ist, drücken Sie <span class='key_d'></span>.<br />
        Wenn die Zahl <span class='nums_k'></span> ist, drücken Sie <span class='key_k'></span>. <br /><br />
        Bitte antworten Sie so schnell und so oft richtig wie möglich. <br /><br />
        Das Experiment beginnt mit einer Übungsphase, in der Sie eine Rückmeldung über die Richtigkeit Ihrer Antworten erhalten. <br /><br />
        Drücken Sie <span class='key_d'></span> / <span class='key_k'></span>, um zu beginnen.<br /><br />`,
            main_text,
        // BLOCK 2:
        // Instruction Screen (before second practice session):
        /*html*/ `In der zweiten Hälfte bleibt Ihre Aufgabe zu unterscheiden, ob Zahlen kleiner oder größer als 5 sind.<br /><br />
        <b>Wichtig ist, dass die Zuordnung der Antworten zu klein/groß nun umgekehrt sein wird.</b> <br /><br />
        Wenn die Zahl <span class='nums_d'></span> ist, drücken Sie <span class='key_d'></span>.<br />
        Wenn die Zahl <span class='nums_k'></span> ist, drücken Sie <span class='key_k'></span>. <br /><br />
        Bitte antworten Sie so schnell und so oft richtig wie möglich.<br /><br />
        Auch hier gibt es eine Übungsphase, in der Sie eine Rückmeldung über die Richtigkeit Ihrer Antworten erhalten. <br />
        Drücken Sie <span class='key_d'></span> / <span class='key_k'></span>, um zu beginnen.<br /><br />`,
            // block 4
            main_text
        ]
    ,
    // Break Screen 1 (between two blocks, 30 seconds long)
    mid_break: [`</br />Die erste Hälfte der Aufgabe ist nun abgeschlossen. <br /><br />
    Bitte machen Sie eine kurze Pause (mindestens 30 Sekunden). <br /><br />`,
        `</br />Die erste Aufgabe ist nun abgeschlossen. <br /><br />
        Bitte machen Sie eine kurze Pause (mindestens 30 Sekunden). <br /><br />`,
        `</br />Die erste Hälfte der zweiten Aufgabe ist nun abgeschlossen. <br /><br />
        Bitte machen Sie eine kurze Pause (mindestens 30 Sekunden). <br /><br />`]
    ,
    // Break Screen 2 (between two blocks):
    mid_break2: /*html*/ `Sie können nun mit der zweiten Hälfte der Aufgabe fortfahren.<br /><br />
    <b>Die Antworttasten werden nun umgekehrt, also lesen Sie bitte sorgfältig die neuen Anweisungen.<br /><br />
    <button class="main_button" type="button" onclick="start_block();">Weiter</button>
    `,
    // Break Screen 2 (between two tasks)
    half_break: /*html*/ `Sie können jetzt mit der zweiten Aufgabe fortfahren.<br /><br />
    <button class="main_button" type="button" onclick="start_block();">Weiter</button>
    `,
    // Warning when holding a key
    keystroke_par: /*html*/ '<p>Bitte drücken Sie erst dann eine Taste, wenn eine Zahl erschienen ist, die Sie als gerade/ungerade bewerten sollen.<br></p>',
    keystroke_mag: /*html*/ '<p>Bitte drücken Sie erst dann eine Taste, wenn eine Zahl erschienen ist, die Sie als klein/groß bewerten sollen.<br></p>',
    // Warning when a key other than [D] or [K] is pressed:
    wrongkeys: /*html*/ `<p>Die Taste, die Sie gedrückt haben, ist nicht Teil des Experiments. Wenn die Zahl <span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span> ist, drücken Sie <span class="key_d" style="font-weight: 900;"></span>. Wenn die Zahl <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span> ist, drücken Sie <span class="key_k" style="font-weight: 900;"></span>.</p>`
    ,
    // Warning/Screen for breaks within a block
    pauseControl: /*html*/ `<p>Sie machen gerade eine Pause. Um fortzufahren, drücken Sie eine der beiden Antworttasten: Wenn die Zahl <span class="nums_d" style="font-weight: 900; text-transform: lowercase;"></span> ist, drücken Sie <span class="key_d" style="font-weight: 900;"></span>. Wenn die Zahl <span class="nums_k" style="font-weight: 900; text-transform: lowercase;"></span> ist, drücken Sie <span class="key_k" style="font-weight: 900;"></span>.</p>`
    ,
    // Warning when leaving full-screen mode (plus automatic return to in each trial)
    warning: /*html*/ `<p>Sie haben den Vollbildmodus verlassen. Bitte kehren Sie in den Vollbildmodus zurück, indem Sie hier klicken.</p>
    <button onclick="fullscreen_on(true);" style="margin-bottom: 22px;">Vollbildmodus</button>`
    ,
    //// Cultural Directionality Questionnaire
    fruits: ['apfel', 'banane', 'orange', 'birne'],
    cdq1_unanswered: 'Geben Sie bitte in jedes Textfeld ein Wort ein.',
    cdq2_unanswered: 'Verschieben Sie bitte die Bilder in die Kästchen.',
    cdq_opt_unanswered: 'Bitte wählen Sie eine der Optionen.',
    cdq_1_1:  /*html*/ `
    Unten sehen Sie vier Objekte. Bitte tragen Sie deren Namen in die Textfelder ein.`,

    cdq_2_1:  /*html*/ `Unten sehen Sie einige Bilder. Bringen Sie diese bitte in eine sinnvolle horizontale Reihenfolge (mit dem Mauszeiger ziehen und ablegen).`,

    cdq_3_1:  /*html*/ `Klicken Sie unten bitte auf das Fahrrad, das Ihnen am besten gefällt. Klicken Sie auf “X”, falls Sie keine klare Präferenz haben.`,

    cdq_4:  /*html*/ `
    Wie würden Sie ein Fahrrad zeichnen?
    <div class="options">
        <span id='cdq_4_top'> <input type="radio" id="bike_draw_right" value="bike_draw_right" name="bike_draw">
        <label for="bike_draw_right">Die Vorderseite nach rechts gerichtet</label> <br></span>
        <span><input type="radio" id="bike_draw_left" value="bike_draw_left" name="bike_draw">
        <label for="bike_draw_left">Die Vorderseite nach links gerichtet</label> <br></span>
        <input type="radio" id="bike_draw_na" value="bike_draw_na" name="bike_draw">
        <label for="bike_draw_na">Ich habe keine klare Präferenz</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq4_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_5_1:  /*html*/ `
            Klicken Sie bitte unten auf die Option, welche die Szene "Austausch von Geschenken zwischen zwei Personen" besser darstellt. Klicken Sie auf “X”, falls Sie keine klare Präferenz haben.`,

    cdq_6:  /*html*/ `
    Wie würden Sie die Szene "Austausch von Geschenken zwischen zwei Personen" zeichnen?
    <div class="options">
    <span id='cdq_6_top'><input type="radio" id="give_draw_right" value="give_draw_right" name="give_draw">
        <label for="give_draw_right">Die schenkende Person ist links und die empfangende Person rechts</label> <br></span>
        <span> <input type="radio" id="give_draw_left" value="give_draw_left" name="give_draw">
        <label for="give_draw_left">Die schenkende Person ist rechts und die empfangende Person links</label> <br></span>
        <input type="radio" id="give_draw_na" value="na" name="give_draw">
        <label for="give_draw_na">Ich habe keine klare Präferenz</label> <br>
    </div>

    <hr>
    <button type="button" class="switcher" onclick="cdq6_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_7:  /*html*/ `
    <div id="a_line"></div>
    Wie würden Sie eine horizontale Linie zeichnen (siehe oben)?
    <div class="options">
        <span id='cdq_7_top'><input type="radio" id="line_draw_right" value="line_draw_right" name="line_draw">
        <label for="line_draw_right">Eher von links nach rechts</label> <br></span>
        <span><input type="radio" id="line_draw_left" value="line_draw_left" name="line_draw">
        <label for="line_draw_left">Eher von rechts nach links</label> <br></span>
        <input type="radio" id="line_draw_na" value="line_draw_na" name="line_draw">
        <label for="line_draw_na">Ich habe keine klare Präferenz</label> <br>
    </div>
    <hr>
    <button type="button" class="switcher" onclick="cdq7_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    cdq_8:  /*html*/ `
    Wie würden Sie das Gute und das Schlechte mit dem horizontalen Raum assoziieren?
    <div class="options">
        <span id='cdq_8_top'><input type="radio" id="moral_dir_left" value="moral_dir_left" name="moral_dir">
        <label for="moral_dir_left">Das Gute ist eher links und das Schlechte ist eher rechts</label> <br></span>
        <span><input type="radio" id="moral_dir_right" value="moral_dir_right" name="moral_dir">
        <label for="moral_dir_right">Das Gute ist eher rechts und das Schlechte ist eher links</label> <br></span>
        <input type="radio" id="moral_dir_na" value="moral_dir_na" name="moral_dir">
        <label for="moral_dir_na">Ich habe keine klare Präferenz</label> <br>
        <hr>
    </div>
    <button type="button" class="switcher" onclick="cdq8_submit()">
        <div class="switch_arrow"></div>
    </button>`,

    // Finger Counting Assessment
    fingercounting:  /*html*/ `
    Wie <b>zählen Sie mit ihren Fingern</b> von 1 bis 10?
        <div class="options">
            <input type="radio" id="f_right" value="right" name="fingercountinghabits">
            <label for="f_right">
                Ich beginne am liebsten mit den Fingern meiner rechten Hand zu zählen.
            </label>
            <br>
            <input type="radio" id="f_left" value="left" name="fingercountinghabits">
            <label for="f_left">
                Ich beginne am liebsten mit den Fingern meiner linken Hand zu zählen.
            </label>
            <br>
            <input type="radio" id="f_donotknowornopreferred" value="na"
                name="fingercountinghabits">
            <label for="f_donotknowornopreferred">
                Ich weiß es nicht oder ich habe keine bevorzugte Hand.
            </label>
            <br>
            <input type="radio" id="f_donotwanttoanswer" value="donotwanttoanswer" name="fingercountinghabits">
            <label for="f_donotwanttoanswer">
                Ich möchte lieber nicht antworten.
            </label>
            <br>
        </div>

        <hr>

        Wie stabil sind ihre <b>Fingerzählgewohnheiten</b>?
        <div class="options">
            <input type="radio" id="fc_always" value="always" name="fingercountingstability">
            <label for="fc_always">Ich beginne immer mit dieser Hand zu zählen.</label>
            <br>
            <input type="radio" id="fc_mostly" value="mostly" name="fingercountingstability">
            <label for="fc_mostly">Ich beginne normalerweise mit dieser Hand zu zählen.</label>
            <br>
            <input type="radio" id="fc_slightly" value="slightly" name="fingercountingstability">
            <label for="fc_slightly">Ich weiß es nicht oder ich habe keine bevorzugte Hand oder stabile Gewohnheit.</label>
            <br>
            <input type="radio" id="fc_na" value="na" name="fingercountingstability">
            <label for="fc_na">Ich möchte lieber nicht antworten.</label>
            <br>
        </div>

        <hr>

        <button class="main_button class_next" type="button" onclick="finger_submit();"></button>
    `
    ,
    // Data-Quality Assessment Screen
    dataqualitycheck: /*html*/ `
        Wie würden Sie Ihr Umfeld während Ihrer Teilnahme an unserer Studie beschreiben?

        <div class="options">
            <input type="radio" id="e_silent" value="silent" name="environment">
            <label for="e_silent">still</label> <br>
            <input type="radio" id="e_very_quiet" value="very_quiet" name="environment">
            <label for="e_very_quiet">sehr leise</label> <br>
            <input type="radio" id="e_fairly_quiet" value="fairly_quiet" name="environment">
            <label for="e_fairly_quiet">eher leise</label> <br>
            <input type="radio" id="e_fairly_noisy" value="fairly_noisy" name="environment">
            <label for="e_fairly_noisy">eher laut</label> <br>
            <input type="radio" id="e_very_noisy" value="very_noisy" name="environment">
            <label for="e_very_noisy">sehr laut</label> <br>
            <input type="radio" id="e_extremely_noisy" value="extremely_noisy" name="environment">
            <label for="e_extremely_noisy">extrem laut</label> <br>
        </div>

        <hr>

        Gab es während Ihrer Teilnahme an unserer Studie wesentliche Ablenkungen?

        <div class="options">
            <input type="radio" id="no_major" value="no_major" name="distractions">
            <label for="no_major">nein, es gab keine wesentlichen Ablenkungen</label> <br>
            <input type="radio" id="one_major" value="one_major" name="distractions">
            <label for="one_major">ja, es gab eine wesentliche Ablenkung</label> <br>
            <input type="radio" id="multiple_major" value="multiple_major" name="distractions">
            <label for="multiple_major">ja, es gab mehrere wesentliche Ablenkungen</label>
            <br>
        </div>

        <hr>

        Gab es irgendwelche Schwierigkeiten während Ihrer Teilnahme an unserer Studie?

        <div class="options">
            <input type="radio" id="diff_no" value="no" name="difficulties">
            <label for="diff_no">nein</label> <br>
            <input type="radio" id="diff_yes" value="yes" name="difficulties">
            <label for="diff_yes">ja (bitte unten angeben)</label> <br>
            <p style="margin-top: 10px; margin-bottom: 5px;">&nbsp; Anmerkungen: <br>
                <textarea name="difficulties_notes" id="difficulties_notes" cols="50" rows="5"></textarea>
            </p>
        </div>

        <hr>
        <button class="main_button class_next" type="button" onclick="end_exp();"></button>
    `
    ,
    // Thanks-for-Participation Screen
    ending: /*html*/ `<br>Sie haben das Ende unserer Studie erreicht.<br>
                    <b>Herzlichen Dank für Ihre Teilnahme!</b>

                    <span id="pass_container">
                    <br><br>
                        Bitte speichern oder notieren Sie den folgenden Code, der Ihre Teilnahme verifiziert, und leiten Sie ihn an uns weiter:
                        <br>
                        <span id="pass_id">klHWEUI234</span>
                    </span>
                    <br>
                    <br>
                    <p id="save_success" style="color:black;display:none;">
                    </p>
                    <p id="save_fail" style="background:#ff3333;color:black;display:none;">
                    </p>
                    <br>
                    Sollten Sie Probleme, Fragen oder Anmerkungen haben, können Sie sich gerne per E-Mail an uns wenden: <br><a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
                    <br><br>`
    ,
    prolific_link: /*html*/`
        <br><br>
        Bitte öffnen Sie den folgenden Link, damit Ihre vollständige Teilnahme erfasst wird:
        <br>
        <span id="pass_id">[Bitte warten Sie, der Link ist noch nicht verfügbar.]</span>`,
    save_success: /*html*/ `Ihre Daten wurden (anonymisiert) gespeichert. Sie können dieses Fenster nun verlassen, indem Sie das Browserfenster schließen. Eventuell müssen Sie vorher den Vollbildmodus durch Drücken von <kbd>Esc</kbd> oder <kbd>F11</kbd> verlassen.`
    ,
    save_fail: /*html*/ `Data cannot be saved on the server. Perhaps you have no internet connection? <strong>Click <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> to try saving on the server. (This message will disappear on successful saving.) Alternatively, click <button onclick="dl_as_file();">DOWNLOAD</button> to save your data
                manually (note: you must allow pop-ups), and then send it to lkcsgaspar@gmail.com.</strong>
            `,
    class_nopref: 'X',
    class_next: 'Weiter'
};
