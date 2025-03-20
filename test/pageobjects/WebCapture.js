class WebCapture {

    get iframeElement() {
        // Selector for the iframe element itself.
        // Based on the HTML snippet in the image, the iframe seems to have an ID.
        return $("//iframe[@title='Form']");
    }
    get iframeElement1() {
        // Selector for the iframe element itself.
        // Based on the HTML snippet in the image, the iframe seems to have an ID.
        return $("//div[@id='section_1-section']//div[@class='vsf-page-section-body']");
    }

    get Vynsheading() {
        
        return $("/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[2]"); // Example locator, adjust as needed
    }

    // get videoPlayer() {
        
        // return $("//div[@class='svn-card shadow-sm is-current-svn card']"); // Example locator, adjust as needed
    // }
    get videoPlayButton() {
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
    // }*/
    async switchToIframe() {
        await browser.switchFrame(await this.iframeElement);
    }
    // async switchToIframe2() {
        // await browser.switchToFrame(await this.iframeElement2);
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
    }
}
module.exports = new WebCapture();