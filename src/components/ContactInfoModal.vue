<script setup lang="ts">
import { useModalStore } from '../stores/clientinfomodal';
import { useDetectMobileStore } from '../stores/detectmobile';

const infoModal = useModalStore();
const mobile = useDetectMobileStore();

</script>

<template>
    <div v-if="mobile.isMobile">
        <div class="modal-mobile" v-if="infoModal.isVisible">
            <div class="modal-inner-mobile" v-if="infoModal.isVisible">
                <div>
                    <section>
                        <form id="contactForm" @submit.prevent="infoModal.submitInfo(infoModal.firstName, infoModal.lastName)">
                            <input type="hidden" name="_next" value="http://localhost:4000/">
                            <input type="hidden" name="_captcha" value="false">
                            <input id="subjectLine" type="hidden" name="_subject">
                            <div class="group-mobile">
                                <header class="header-mobile">Contact</header>
                            </div>
                            <div class="group-mobile spacing-mobile">
                                <div class="set-width-mobile">
                                    <h1 class="label-mobile">First Name<span class="red-text-mobile">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="First Name"
                                        type="text"
                                        placeholder="Required"
                                        id="firstName"
                                        :class="{'input-form':infoModal.firstName!=''}"
                                        v-model="infoModal.firstName" />
                                </div>
                                <div class="set-width">
                                    <h1 class="label-mobile">Last Name<span class="red-text-mobile">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="Last Name"
                                        type="text"
                                        placeholder="Required"
                                        id="lastName"
                                        :class="{'input-form':infoModal.lastName!=''}"
                                        v-model="infoModal.lastName" />
                                </div>
                            </div>

                            <div class="group-mobile spacing-mobile">
                                <div class="set-width">
                                    <h1 class="label-mobile">Email<span class="red-text">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="Email"
                                        type="text"
                                        placeholder="Required"
                                        id="email"
                                        autocomplete="false"
                                        @input="infoModal.updateEmailClass(infoModal.isEmailComplete())"
                                        v-model="infoModal.email" />
                                </div>
                                <div class="set-width-mobile">
                                    <h1 class="label-mobile">Phone</h1>
                                    <input
                                        class="input-form"
                                        name="Phone"
                                        type="text"
                                        id="phoneNumber"
                                        autocomplete="false"
                                        placeholder="Optional"
                                        v-model="infoModal.phone" 
                                        @input="infoModal.formatPhoneNumber(); infoModal.updatePhoneClass(infoModal.isPhoneComplete())" />
                                </div>
                            </div>

                            <div class="reasons-container-mobile">
                                <div style="margin-left: 5%;">
                                    <h1 class="reasons-mobile">Reason for Inquiry<span class="red-text-mobile">*</span>
                                        <span v-if="infoModal.missingReasons" class="error-text-mobile">Select at least one.</span>
                                    </h1>
                                </div>
                            </div>
                            
                            <div class="label-container-mobile">
                                <div class="label-box-mobile">
                                    <div class="label-group-mobile spacing-mobile">
                                        <div class="label-container-mobile">
                                            <input class="label-checkbox" type="checkbox" id="PracticeInformation" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label-mobile" for="PracticeInformation">Practice Information</label>
                                        </div>

                                        <div class="label-container-mobile">
                                            <input class="label-checkbox" type="checkbox" id="ServicesOffered" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label-mobile" for="ServicesOffered">Services Offered</label>
                                        </div>

                                        <div class="label-container-mobile">
                                            <input class="label-checkbox" type="checkbox" id="Other" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label-mobile" for="Other">Other</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="label-box-mobile">
                                    <div class="label-group-mobile spacing">
                                        <div class="label-container-mobile">
                                            <input class="label-checkbox" type="checkbox" id="Fees&Insurance" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label-mobile" for="Fees&Insurance">Fees & Insurance</label> 
                                        </div>

                                        <div class="label-container-mobile">
                                            <input class="label-checkbox" type="checkbox" id="TypesofAppointments" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label-mobile" for="TypesofAppointments">Types of Appointments</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="group-mobile spacing-mobile">
                                <div class="info-box-mobile">
                                    <h1 class="label-mobile">Additional Info</h1>
                                    <textarea
                                        class="input-form additional-info-mobile"
                                        name="Additional Info"
                                        placeholder="Optional...Please do not share any confidential or sensitive medical information..."
                                    ></textarea>
                                </div>
                            </div>

                            <div class="group-mobile spacing-mobile">
                                <span v-if="infoModal.missingInfo == true" class="error-box-mobile">Please correct errors before submitting.</span>
                            </div>

                            <div>
                                <div class="modal-lower-button-mobile">
                                    <button type="submit" class="modal-button-mobile" value="Submit">Submit</button>
                                    <button type="button" class="modal-button-mobile" @click="infoModal.clickButton(); infoModal.missingInfo = false">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="modal" v-if="infoModal.isVisible">
            <div class="modal-inner" v-if="infoModal.isVisible">
                <div>
                    <section>
                        <form id="contactForm" @submit.prevent="infoModal.submitInfo(infoModal.firstName, infoModal.lastName)">
                            <input type="hidden" name="_next" value="http://localhost:4000/">
                            <input type="hidden" name="_captcha" value="false">
                            <input id="subjectLine" type="hidden" name="_subject">
                            <div class="group">
                                <header class="header">Contact</header>
                            </div>
                            <div class="group spacing">
                                <div class="set-width">
                                    <h1 class="label">First Name<span class="red-text">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="First Name"
                                        type="text"
                                        placeholder="Required"
                                        id="firstName"
                                        :class="{'input-form':infoModal.firstName!=''}"
                                        v-model="infoModal.firstName" />
                                </div>
                                <div class="set-width">
                                    <h1 class="label">Last Name<span class="red-text">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="Last Name"
                                        type="text"
                                        placeholder="Required"
                                        id="lastName"
                                        :class="{'input-form':infoModal.lastName!=''}"
                                        v-model="infoModal.lastName" />
                                </div>
                            </div>

                            <div class="group spacing">
                                <div class="set-width">
                                    <h1 class="label">Email<span class="red-text">*</span></h1>
                                    <input
                                        class="input-form"
                                        name="Email"
                                        type="text"
                                        placeholder="Required"
                                        id="email"
                                        autocomplete="false"
                                        @input="infoModal.updateEmailClass(infoModal.isEmailComplete())"
                                        v-model="infoModal.email" />
                                </div>
                                <div class="set-width">
                                    <h1 class="label">Phone</h1>
                                    <input
                                        class="input-form"
                                        name="Phone"
                                        type="text"
                                        id="phoneNumber"
                                        autocomplete="false"
                                        placeholder="Optional"
                                        v-model="infoModal.phone" 
                                        @input="infoModal.formatPhoneNumber(); infoModal.updatePhoneClass(infoModal.isPhoneComplete())" />
                                </div>
                            </div>

                            <div class="reasons-container">
                                <div style="margin-left: 5%;">
                                    <h1 class="reasons">Reason for Inquiry<span class="red-text">*</span>
                                        <span v-if="infoModal.missingReasons" class="error-text">Select at least one.</span>
                                    </h1>
                                </div>
                            </div>
                            
                            <div class="label-container">
                                <div class="label-box">
                                    <div class="label-group spacing">
                                        <div class="label-container-inner">
                                            <input class="label-checkbox" type="checkbox" id="PracticeInformation" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label" for="PracticeInformation">Practice Information</label>
                                        </div>

                                        <div class="label-container-inner">
                                            <input class="label-checkbox" type="checkbox" id="ServicesOffered" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label" for="ServicesOffered">Services Offered</label>
                                        </div>

                                        <div class="label-container-inner">
                                            <input class="label-checkbox" type="checkbox" id="Other" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label" for="Other">Other</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="label-box">
                                    <div class="label-group spacing">
                                        <div class="label-container-inner">
                                            <input class="label-checkbox" type="checkbox" id="Fees&Insurance" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label" for="Fees&Insurance">Fees & Insurance</label> 
                                        </div>

                                        <div class="label-container-inner">
                                            <input class="label-checkbox" type="checkbox" id="TypesofAppointments" value="Reason for Inquiry" @input="infoModal.updateReasonsClass(infoModal.isReasonChecked())">
                                            <label class="label" for="TypesofAppointments">Types of Appointments</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="group spacing">
                                <div class="info-box">
                                    <h1 class="label">Additional Info</h1>
                                    <textarea
                                        class="input-form additional-info"
                                        name="Additional Info"
                                        placeholder="Optional..."
                                    ></textarea>
                                </div>
                            </div>

                            <div class="group spacing">
                                <span v-if="infoModal.missingInfo == true" class="error-box">Please correct errors before submitting.</span>
                            </div>

                            <div>
                                <div class="modal-lower-button">
                                    <button type="submit" class="modal-button" value="Submit">Submit</button>
                                    <button type="button" class="modal-button" @click="infoModal.clickButton(); infoModal.missingInfo = false">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: var(--shadow);
    overflow-x: hidden;
    text-decoration: none;
}

/* Mobile */
.reasons-mobile {
    display: flex;
    color: var(--white);
    font-size: small;
    align-items: center;
}
.error-box-mobile {
    background-color: rgb(255, 91, 91);
    border-color: rgb(255, 45, 45);
    color: var(--white);
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    font-size: small;
    margin-bottom: 10px;
}
.label-container-inner-mobile {
    display: flex;
    width: 100%;
}
.label-checkbox-mobile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 6px;
    accent-color: var(--white);
}
.label-mobile {
    display: flex;
    color: var(--white);
    font-size: small;
    margin-bottom: 5px;
    align-items: center;
}
.red-text-mobile {
    color: rgb(197, 0, 0);
}
.additional-info-mobile {
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
}
.error-text-mobile {
    background-color: rgb(255, 91, 91);
    border-color: rgb(255, 45, 45);
    color: var(--white);
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    font-size: small;
    margin-left: 4px;
    margin-bottom: 10px;
}
.header-mobile {
    color: var(--white);
    margin-bottom: 25px;
}
.info-box-mobile {
    width: 90%;
    height: -o-calc(25vh - 20px); /* opera */
    height: -webkit-calc(25vh - 20px); /* google, safari */
    height: -moz-calc(25vh - 20px); /* firefox */
}
.spacing-mobile {
    margin-bottom: 15px;
}
.set-width-mobile {
    width: 40%;
}
.label-container-mobile {
    display: flex;
}
.reasons-container-mobile {
    display: flex;
    width: 100%;
    max-height: 40px;
    height: 40px;
    align-items:center;
}
.label-box-mobile {
    width: 50%;
}
.label-group-mobile {
    display: grid;
    margin-left: 10%;
}
.group-mobile {
    display: flex;
    justify-content: space-around;
}
.modal-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 85%;
    height: -o-calc(100vh - 80px); /* opera */
    height: -webkit-calc(100svh - 80px); /* google, safari */
    height: -moz-calc(100vh - 80px); /* firefox */
    position: fixed;
    background-color: var(--transparent);
    bottom: 0;
    left: 0;
}
.modal-inner-mobile {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 25px;
    background-color: var(--dark_purple);
}
.modal-button-mobile {
    height: auto;
    font-size: small;
    background-color: var(--purple);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    border: solid 1px var(--light_gray);
}
.modal-button-mobile:hover {
  background-color: var(--light_gray);
  border: solid 1px var(--purple);
}
.modal-lower-button-mobile {
    display: flex;
    position: absolute;
    bottom: 5%;
    right: 5%;
}


/* Desktop */
.reasons {
    display: flex;
    color: var(--white);
    font-size: small;
    align-items: center;
}
.error-box {
    background-color: rgb(255, 91, 91);
    border-color: rgb(255, 45, 45);
    color: var(--white);
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    font-size: small;
    margin-bottom: 10px;
}
.label-container-inner {
    display: flex;
    width: 100%;
}
.label-checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 6px;
    accent-color: var(--white);
}
.label {
    display: flex;
    color: var(--white);
    font-size: small;
    margin-bottom: 10px;
    align-items: center;
}
.red-text {
    color: rgb(197, 0, 0);
}
.additional-info {
    height: 100px;
    width: 100%;
    margin-bottom: 20px;
}
.spacing {
    margin-bottom: 25px;
}
.error-text {
    background-color: rgb(255, 91, 91);
    border-color: rgb(255, 45, 45);
    color: var(--white);
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    padding: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    font-size: small;
    margin-left: 4px;
    margin-bottom: 10px;
}
.header {
    color: var(--white);
    margin-bottom: 25px;
}
.info-box {
    width: 90%;
}
.set-width {
    width: 40%;
}
.label-container {
    display: flex;
}
.spacing {
    margin-bottom: 25px;
}
.reasons-container {
    display: flex;
    width: 100%;
    max-height: 40px;
    height: 40px;
    align-items:center;
}
.label-box {
    width: 50%;
}
.label-group {
    display: grid;
    margin-left: 10%;
}
.group {
    display: flex;
    justify-content: space-around;
}
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    height: -o-calc(100vh - 80px); /* opera */
    height: -webkit-calc(100svh - 80px); /* google, safari */
    height: -moz-calc(100vh - 80px); /* firefox */
    width: 100vw;
    position: fixed;
    background-color: var(--transparent);
    bottom: 0;
    left: 0;
}
.modal-inner {
    max-height: 100%;
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 5px 5px 6px -1px rgba(0,0, 0, 0.1), 0 2px 4px -1px rgba(0,0, 0, 0.6);
    padding: 25px;
    background-color: var(--dark_purple);
    border-radius: .5rem;
    border: solid 1px var(--purple);
}
.modal-button {
    height: auto;
    font-size: small;
    background-color: var(--purple);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    border: solid 1px var(--light_gray);
}
.modal-button:hover {
  background-color: var(--light_gray);
  border: solid 1px var(--purple);
}
.modal-lower-button {
    display: flex;
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.input-error {
    font-size: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    border-color: red;
    border-width: 1px;
    border-style: solid;
    color: var(--black);
    width: 100%;
}
.input-form {
    font-size: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    border: none;
    color: var(--black);
    width: 100%;
}
.input-error:focus {
    outline: none;
}
.input-form:focus {
    outline: none;
}
::placeholder {
    color: var(--gray);
}
::-moz-placeholder {
    color: var(--gray);
}
::-webkit-input-placeholder {
    color: var(--gray);
}
</style>