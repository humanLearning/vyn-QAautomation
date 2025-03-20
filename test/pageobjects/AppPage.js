class AppPage {

    get Vynsheading() {
        
        return $("//a[normalize-space()='Vyns']"); // Example locator, adjust as needed
    }
    get firstCard () 
    { 
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]"); 

    } 
    get cardTitle () { 
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]/div[2]/div[1]/div[1]"); 
    } // Assuming title is in a div containing this text
    get cardEmail () { 
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]/div[2]/div[2]/div[1]'); } 
    get cardTimestamp () { 
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]/div[2]/div[3]/div[1]/div[1]/span[1]'); } 
    get cardSummary () { 
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]/div[3]/p[1]'); } 
    get cardCommentCount () { 
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[1]/div[1]/div[2]/div[3]/div[2]/span[1]'); } 
    /**
     * Method to get the text of the card title
     * @returns {Promise<string>}
     */
    async Vynsheadingclick() {
        await this.Vynsheading.click();
    }

    async firstCardclick() {
        // await this.firstCard.waitforClickable();
        await this.firstCard.waitForDisplayed();
        await this.firstCard.getText();
        await browser.pause(5000);
    }
    async getCardTitleText () {
        await this.cardTitle.waitForDisplayed();
        return await this.cardTitle.getText();
        await browser.pause(5000);
    }
    /**
     * Method to get the text of the card email
     @returns {Promise<string>}
     */
    async getCardEmailText () {
        await this.cardEmail.waitForDisplayed();
        return await this.cardEmail.getText();
    }
    /**
     * Method to get the text of the card timestamp
     @returns {Promise<string>}
     */
    async getCardTimestampText () {
        await this.cardTimestamp.waitForDisplayed();
        return await this.cardTimestamp.getText();
    }
    /**
     * Method to get the text of the card summary
     * @returns {Promise<string>}
     */
    async getCardSummaryText () {
        await this.cardSummary.waitForDisplayed();
        return await this.cardSummary.getText();
    }
    /**
     * Method to get the number of comments on the card
     * @returns {Promise<string>}
     */
    async getCardCommentCountText () {
        await this.cardCommentCount.waitForDisplayed();
        return await this.cardCommentCount.getText();
    }
    /**
     * Method to validate all information on the first card and print to console
     */
    async validateAndPrintFirstCardInfo () {
        const expectedTitle = 'SB for only Video format';
        const expectedEmail = 'vaibhav+qa@humanlearning.com';
        const expectedTimestamp = '19 Mar 2025 03:06';
        const expectedSummary = 'Summary:Team';
        const expectedCommentCount = '0';
        const actualTitle = await this.getCardTitleText();
        const actualEmail = await this.getCardEmailText();
        const actualTimestamp = await this.getCardTimestampText();
        const actualSummary = await this.getCardSummaryText();
        const actualCommentCount = await this.getCardCommentCountText();
        console.log('--- First Card Information ---');
        console.log('Title:', actualTitle);
        console.log('Email ID:', actualEmail);
        console.log('Timestamp:', actualTimestamp);
        console.log('Summary:', actualSummary);
        console.log('Number of Comments:', actualCommentCount);
        console.log('------------------------------');
        // Add your assertions here to validate the information
        expect(actualTitle).toBe(expectedTitle, 'Title of the first card is incorrect');
        expect(actualEmail).toBe(expectedEmail, 'Email ID of the first card is incorrect');
        expect(actualTimestamp).toBe(expectedTimestamp, 'Timestamp of the first card is incorrect');
        expect(actualSummary).toBe(expectedSummary, 'Summary of the first card is incorrect');
        expect(actualCommentCount).toBe(expectedCommentCount, 'Number of comments on the first card is incorrect');
    }


    // get videoPlayer() {
        
        // return $("//div[@class='svn-card shadow-sm is-current-svn card']"); // Example locator, adjust as needed
    // }
    /*get videoPlayButton() {
        // Assuming play button has a class or attribute
        return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/a[10]/div[1]/div[2]/div[1]/span[1]"); // Example locator, adjust as needed if you find a specific play button element within the video player
    }

    get RecordinglayButton() {
        // Assuming play button has a class or attribute
        return $("//div[@class='pl-video']//video"); // Example locator, adjust as needed if you find a specific play button element within the video player
    }
    get labelsSection() {
        return $('//div[text()="Labels"]/ancestor::div[contains(@class, "labels-section-container")]'); // Example, adjust based on actual structure
    }
    get label1() {
        return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[2]'); // Example, adjust based on actual text/locator
    }
    get label2() {
        return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/ul[1]/li[2]'); // Example, adjust based on actual text/locator
    }
    get commentsSection() {
        return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/button[1]"); // Example container class
    }
    get downloadIconTestPDF() {
        return $("//button[@title='Download PDF']"); // Example, adjust based on actual structure and icon locator
    }
    /*get assigneesDropdown() {
        return $('//div[text()="Assignees"]'); // Click to open dropdown
    }
    get assigneeList() {
        return $('//div[@class="assignee-dropdown-list"]'); // Assuming a class for the dropdown list
    }
    assigneeOption(optionText) {
        return this.assigneeList.$(`//div[text()="${optionText}"]`); // Dynamic locator for assignee options
    }
    
    get allCommentsTab() {
        return this.commentsSection.$('//button[text()="All"]'); // Tab with text "All"
    }
    get commentsTab() {
        return this.commentsSection.$('//button[text()="Comments"]'); // Tab with text "Comments"
    }
    get activityTab() {
        return this.commentsSection.$('//button[text()="Activity"]'); // Tab with text "Activity"
    }
    get commentIconInAllTab() {
        // Assuming there is an icon in "All" tab for the first comment, you might need to adjust the locator to be more specific
        return this.commentsSection.$('//div[@class="comment-item"]//div[@class="comment-icon"]'); 
    }
    // async open() {
        // await browser.url('YOUR_APPLICATION_URL'); // Replace with your application URL
    // }
    async Vynsheadingclick() {
        await this.Vynsheading.click();
    }
    async playVideo() {
        // await this.videoPlayer.click(); 
        await this.videoPlayButton.click();
    }

    async playrecording() {
            // await this.videoPlayer.click(); 
            await this.RecordinglayButton.click();
    }
        
        // Click on video player area to play. Might need to adjust based on actual video player interaction
        
        // await this.videoPlayButton.click();
    
    async clickonLabel1() {
        await this.label1.click();
    }
    async clickVynTestLabel() {
        await this.label2.click();
    }

    async commentsectionclick() {
        await this.commentsSection.click();
    }
    async clickDownloadTestPDF() {
        await this.downloadIconTestPDF.click();
        // Add assertions to verify download if needed, e.g., check file download status or existence
    }
    async openAssigneesDropdown() {
        await this.assigneesDropdown.click();
    }
    async selectAssigneeOption(optionText) {
        await this.assigneeOption(optionText).click();
    }
    async switchToAllCommentsTab() {
        await this.allCommentsTab.click();
    }
    async switchToCommentsTab() {
        await this.commentsTab.click();
    }
    async switchToActivityTab() {
        await this.activityTab.click();
    }
    async clickCommentIconInAll() {
        await this.commentIconInAllTab.click();
    }*/
}
module.exports = new AppPage();