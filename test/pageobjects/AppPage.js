class AppPage {
    get videoPlayer() {
        // Assuming video player is identifiable by a unique attribute or tag
        return $('//div[contains(@class, "video-player")]'); // Example locator, adjust as needed
    }
    get videoPlayButton() {
        // Assuming play button has a class or attribute
        return this.videoPlayer.$('.play-button-class'); // Example locator, adjust as needed if you find a specific play button element within the video player
    }
    get labelsSection() {
        return $('//div[text()="Labels"]/ancestor::div[contains(@class, "labels-section-container")]'); // Example, adjust based on actual structure
    }
    get insideOutsideLabel() {
        return this.labelsSection.$('//div[text()="Inside/Outside"]'); // Example, adjust based on actual text/locator
    }
    get vynTestLabel() {
        return this.labelsSection.$('//div[text()="Vyn Test Label"]'); // Example, adjust based on actual text/locator
    }
    get downloadIconTestPDF() {
        return $('//div[text()="Test PDF Upload"]/following-sibling::div[@class="download-icon-container"]'); // Example, adjust based on actual structure and icon locator
    }
    get assigneesDropdown() {
        return $('//div[text()="Assignees"]'); // Click to open dropdown
    }
    get assigneeList() {
        return $('//div[@class="assignee-dropdown-list"]'); // Assuming a class for the dropdown list
    }
    assigneeOption(optionText) {
        return this.assigneeList.$(`//div[text()="${optionText}"]`); // Dynamic locator for assignee options
    }
    get commentsSection() {
        return $('//div[contains(@class, "comments-section")]'); // Example container class
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
    async open() {
        await browser.url('YOUR_APPLICATION_URL'); // Replace with your application URL
    }
    async playVideo() {
        await this.videoPlayer.click(); // Click on video player area to play. Might need to adjust based on actual video player interaction
        
        // await this.videoPlayButton.click();
    }
    async clickInsideOutsideLabel() {
        await this.insideOutsideLabel.click();
    }
    async clickVynTestLabel() {
        await this.vynTestLabel.click();
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
module.exports = new AppPage();