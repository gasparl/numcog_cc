/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in English

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
    consent_text: /*html*/ `<h2>Welcome to this experiment</h2>

        Thank you for your interest in our study.

        <p>
        Participation in this numerical cognition study takes about 30 minutes. Participation requires a <b>computer (desktop or laptop)</b> and is not possible on mobile devices (smartphone or tablet).
        </p>

        <p>
        Please only participate if you are at least 18 years of age. Please carry out the study in a quiet environment to avoid unwanted distractions.
        </p>

        <p>
        You will first be asked to fill in some information about your gender, age, native language, and familiarity with other cultures. Next, you can choose response keys on your keyboard for the numerical cognition tasks. You will perform two different tasks. The instructions will be shown to you before you begin with some practice trials. Each task is divided into two parts and you can take a short break in between. After you finish the tasks, you will be asked to respond to some questions about your habits and preferences.
        </p>

        <hr>

        <h2>Informed Consent</h2>

        <p>        
        Your participation in this study is voluntary. You can cancel your participation at any time by closing this browser tab. Canceling participation will not have any negative consequences for you; you can request partial payment by contacting us via e-mail. You may also contact us in case of any problems, questions, remarks, or if you are interested in the results of this study:
        <br>
        <a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
        </p>

        <p>
        Your data will be collected and stored anonymously. Due to the anonymous storage of the data, deletion is not possible after complete participation. In some cases, data from the devices used for study participation are recorded and stored for technical reasons, but without allowing any conclusions to be drawn about personal information. Therefore, no individual feedback will be provided on your performance in the task. The results and data of this study will be published and available online, but you will not be identifiable, following the recommendations of the German Research Foundation (DFG) and the German Psychological Society (DGPs).
        </p>

        <hr>

        <p>
        If you are less than 18 years old or do not wish to participate, please close the browser window and exit this page.
        </p>
        
        <p>
        If you are at least 18 years old and agree to participate in the study, please click on the [Next] button below.
        </p>

        <hr>
        
        How would you like to proceed?
        
        <div class="options">
            <input name="seriousness" id='participate' value="participate" type="radio"> 
            <label for="participate">I would like to seriously participate.</label><br>
            <input name="seriousness" id='justlook' value="justlook" type="radio">
            <label for="justlook">I would only like to look at the experiment.</label><br>
        <div>

        <hr>

        <button class="main_button class_next" id="submit_button" type="button" onclick="consented();" style="visibility:hidden">
        </button>
        `
    ,
    // Warning when mobile detected (via device user agent)
    mobile: /*html*/ `You seem to be using a smartphone or tablet. Unfortunately you cannot do this experiment on a mobile device.
        Please start the experiment again with a normal web browser on your computer.
        <br /><br />
        If you are certain that this is a mistake, click 
        <button class="main_button" type="button" onclick="ignore_mobile();" style="visibility:hidden">
        here </button> to continue.`
    ,
    // Warning when small screen detected
    screen:/*html*/ 'The width of your screen (' + screen.width + ' pixels) is too small for a desktop/laptop computer. It should be at least 760px. Please use a computer with a regular modern monitor.'
    ,
    // Demographics
    demos: /*html*/ `
        <h3>Please provide the following information details.</h3>
        <hr>
        Your <b>gender</b>:
        <div class="options">
            <input type="radio" id="woman" value="woman" name="gender">
            <label for="woman">Female</label><br>
            <input type="radio" id="man" value="man" name="gender">
            <label for="man">Male</label><br>
            <input type="radio" id="other" value="other" name="gender">
            <label for="other">Other</label><br>
            <input type="radio" id="na" value="na" name="gender">
            <label for="na">I prefer not to answer.</label>
        </div>
        <hr>
        Your <b>age</b>:
        <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
        oninput="this.value=this.value.slice(0,2)" min='1' max='99' id="age_id" size="4">years<br>
        <input type="checkbox" onclick="checkageconsent(event);" style="margin-left: -1px;" id="age_na">
            <label for="age_na">I prefer not to answer.</label>
        <hr>
        Your <b>first native language(s)</b> (you can select more than one language):<br>
        <input type="checkbox" id="l1_de" />
        <label for="l1_de">German</label><br>
        <input type="checkbox" id="l1_tr" />
        <label for="l1_tr">Turkish</label><br>
        <input type="checkbox" id="l1_fa" />
        <label for="l1_fa">Persian</label><br>
        <input type="checkbox" id="l1_na" />
        <label for="l1_na">Other (please specify below)</label><br>
        Other language / remarks:
        <input id="l1_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        <b>Foreign language(s)</b> in which you can communicate:<br>
        <input type="checkbox" id="l2_de" />
        <label for="l2_de">German</label><br>
        <input type="checkbox" id="l2_tr" />
        <label for="l2_tr">Turkish</label><br>
        <input type="checkbox" id="l2_fa" />
        <label for="l2_fa">Persian</label><br>
        <input type="checkbox" id="l2_en" />
        <label for="l2_en">English</label><br>
        <input type="checkbox" id="l2_es" />
        <label for="l2_es">Spanish</label><br>
        <input type="checkbox" id="l2_fr" />
        <label for="l2_fr">French</label><br>
        <input type="checkbox" id="l2_it" />
        <label for="l2_it">Italian</label><br>
        <input type="checkbox" id="l2_ar" />
        <label for="l2_ar">Arabic</label><br>
        <input type="checkbox" id="l2_na" />
        <label for="l2_na">Other (please specify below)</label><br>
        Other language / optional remarks:
        <input id="l2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        Please select the country where you <b>currently live</b>:<br>
        <input type="radio" id="loc_de" value="loc_de" name='loc' />
        <label for="loc_de">Germany</label><br>
        <input type="radio" id="loc_tr" value="loc_tr" name='loc' />
        <label for="loc_tr">Turkey</label><br>
        <input type="radio" id="loc_fa" value="loc_fa" name='loc' />
        <label for="loc_fa">Iran</label><br>
        <input type="radio" id="loc_na" value="loc_na" name='loc' />
        <label for="loc_na">Other (please specify below)</label><br>
        Other country / remarks:
        <input id="loc_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        Please select the country where you have <b>spent the majority of your life</b>:<br>
        <input type="radio" id="loc2_de" value="loc2_de" name='loc2' />
        <label for="loc2_de">Germany</label><br>
        <input type="radio" id="loc2_tr" value="loc2_tr" name='loc2' />
        <label for="loc2_tr">Turkey</label><br>
        <input type="radio" id="loc2_fa" value="loc2_fa" name='loc2' />
        <label for="loc2_fa">Iran</label><br>
        <input type="radio" id="loc2_na" value="loc2_na" name='loc2' />
        <label for="loc2_na">Other (please specify below)</label><br>
        Other country / remarks:
        <input id="loc2_notes" style="width: 170px;margin:0;" maxlength="30">
        <hr>
        How <b>familiar</b> are you with <b><span class="only_east">Western</span><span
                class="only_de">Middle-Eastern</span></b> cultures?
        <div class="options">
            <input type="radio" id="cult3" value="3" name="cultur">
            <label for="cult3">very familiar</label><br>
            <input type="radio" id="cult2" value="2" name="cultur">
            <label for="cult2">a bit familiar</label><br>
            <input type="radio" id="cult1" value="1" name="cultur">
            <label for="cult1">not familiar</label><br>
            <input type="radio" id="cult0" value="0" name="cultur">
            <label for="cult0">I prefer not to answer.</label><br>
        </div>
        <hr>
        Your <b>handedness</b>:<br>
        <input type="radio" id="righthanded" value="righthanded" name='handedness'>
        <label for="righthanded">right-handed</label><br>
        <input type="radio" id="lefthanded" value="lefthanded" name='handedness'>
        <label for="lefthanded">left-handed</label><br>
        <input type="radio" id="ambidextrous" value="ambidextrous" name='handedness'>
        <label for="ambidextrous">ambidextrous (two-handed)</label><br>
        <input type="radio" id="handedness_na" value="na" name='handedness'>
        <label for="handedness_na">I prefer not to answer.</label><br>
        <hr>
        <button class="main_button class_next" type="button" onclick="demos_submitted();"></button>
    `,
    // For each foreign language selected
    l2_use: /*html*/ `
        Are you currently using this language in written or spoken terms?<br>
        <input type="radio" id="l2_use3" value="l2_use3" name='l2_use' />
        <label for="l2_use3">
            yes, I have been using it within the last month
        </label><br>
        <input type="radio" id="l2_use2" value="l2_use2" name='l2_use' />
        <label for="l2_use2">
            no, but I have been using it within the past 5 years
        </label><br>
        <input type="radio" id="l2_use1" value="l2_use1" name='l2_use' />
        <label for="l2_use1">
            no, I have not been using it within the past 5 years
        </label><br>
        <div id='l2_use_time' style='display:none;margin-top:10px;'>
            How much time per day do you use this language on average?
            <ul>
                <li>
                Handwritten: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h1" size="4">
                    hours and
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m1" size="4">
                    minutes
                </li>
                <li>
                Typed: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h2" size="4">
                    hours and
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m2" size="4">
                    minutes
                </li>
                <li>
                Spoken: <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='24' id="l2_use_h3" size="4">
                    hours and
                <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
                oninput="this.value=this.value.slice(0,2)" min='1' max='60' id="l2_use_m3" size="4">
                    minutes
                </li>
            </ul>
        </div>
    `,
    // Warning alert when not all fields are filled in
    unanswered: 'Please answer all questions on this page.',
    // Response Keys
    exp_start: /*html*/ `<br />In our experiment, you will need one <b>left response key</b> and one <b>right response key</b>. 

            On your keyboard, these should be located in the same row and four keys apart from each other.
            Please check whether
            the <span class="key_d">D</span> key and the <span class="key_k">K</span> key fulfill these requirements.<br /><br />

            If you want to use <span class="key_d">D</span> and <span class="key_k">K</span> as response keys, click on the <span>[Next]</span> button below. If not, click on the <span>[Change]</span> button and choose other response
            keys.<br /><br />
            <br /><br />
            <div class="buttonClass">
                <button id="changeButton" onclick="changeButton();" class="button_next">Change</button>
                <button id="startButton" onclick="startButton();" class="button_next">Next</button>
            </div>`
    ,
    // Change Response Keys
    change: /*html*/ `<br />On your keyboard, the left and right response keys should be located in the same row and four keys apart from each other. <br /><br />
            Please click on the [Left] button below to assign a left response key that replaces the <span class="key_d"></span> key. <br />
            Then click on the [Right] button below to assign a right response key that replaces the <span class="key_k"></span> key. <br /><br />
            Remember your response keys and click on the [Complete] button below to save the new assignment.
            <br /><br />
            <div class="buttonClass changeButt">
                <button id="leftButton" onclick="leftButton()" class="button_next">Left</button>
                <button id="rightButton" onclick="rightButton()" class="button_next">Right</button>
                <button id="completeButton" onclick="completeButton()" class="button_next">Complete</button>
            </div>`
    ,
    irregular_key: 'Please use only regular letter keys.',
    // Instructions on the bottom (during practice session)
    even: 'even',
    odd: 'odd',
    large: 'large',
    small: 'small',
    wrong_key: /*html*/ `wrong key`,
    correct_key: /*html*/ `correct key`,
    block_text_par:
        // TASK 1: PARITY JUDGMENT
        // BLOCK 1:
        // Instruction Screen (before practice session):
        [/*html*/ `<br />In this task, you are asked to <b>distinguish whether numbers are odd or even</b>.
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
        [/*html*/ `<br />In this task, you are asked to <b>classify numbers as smaller or larger than 5</b>.<br /><br />
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
    fruits: ['apple', 'banana', 'orange', 'pear'],
    cdq1_unanswered: 'Please fill in each text box with a single word.',
    cdq2_unanswered: 'Please move all the pictures to the boxes.',
    cdq_opt_unanswered: 'Please choose one of the options.',
    cdq_1_1:  /*html*/ `
    You will see four objects below, please write down their name in the text boxes.`,

    cdq_2_1:  /*html*/ `Below you will see some pictures. Please put them in meaningful horizontal order (drag and drop
        with a mouse cursor).`,

    cdq_3_1:  /*html*/ `Below, please click on the bicycle you like more. Choose “X” if you don't have a clear preference.`,

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

                <span id="pass_container">
                <br><br>
                    Please save and forward us the following code that verifies your participation:
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
                In case of any problems, questions, or remarks, feel free to contact us via e-mail: <br><a href="mailto:numcog@psycho.uni-tuebingen.de">numcog@psycho.uni-tuebingen.de</a>
                <br><br>`
    ,
    save_success: /*html*/ `Your data has been saved (anonymously). You may now exit this window by closing the browser tab. You might have to first leave fullscreen mode by pressing <kbd>Esc</kbd> or <kbd>F11</kbd>.`
    ,
    save_fail: /*html*/ `Data cannot be saved on the server. Perhaps you have no internet connection? <strong>Click <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> to try saving on the server. (This message will disappear on successful saving.) Alternatively, click <button onclick="dl_as_file();">DOWNLOAD</button> to save your data
                manually (note: you must allow pop-ups), and then send it to lkcsgaspar@gmail.com.</strong>
            `,
    class_nopref: 'X',
    class_next: 'Next'
};
