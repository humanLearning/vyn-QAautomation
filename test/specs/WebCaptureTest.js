const WebCapture = require('../pageobjects/WebCapture');



before (async () => {
    console.log('<<<<<<<<<<< login called');
    browser.url('https://vynqa.vynsmart.com/capture?storyboardName=new-punch')
    //  await LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@');
    //  await expect(browser).toHaveUrlContaining('/dashboards');
     await browser.pause(10000);
    //  await QADashboardPage.open();
     
  });
describe('Vynpage Automation', () => {
    before(async () => {
        // await AppPage.open();
    });

    it('should switch to iframe and click Record button', async () => {
        console.log('Switching to iframe...');
        await WebCapture.switchToIframe();
        await browser.pause(10000);
        console.log('Switched to iframe.');
    });  
    
    it('should switch to iframe and click Record button 2', async () => {
        console.log('Switching to iframe...');
        await WebCapture.switchToIframe2();
        await browser.pause(10000);
        console.log('Switched to iframe.');
    });  

    it('User should be able to click on the vyn heading', async () => {
        // browser.url('https://vynqa.vynsmart.com/record?ou=vynqa.vynsmart.com&storyboardName=new-punch')
        await WebCapture.Vynsheadingclick();
        await browser.pause(10000);
        console.log('Video Playback Started (Verification needed)'); // Placeholder for verification
    });

    it('User should be able to click on the video swim lane and click on play button on it', async () => {
        await AppPage.playVideo();
        await browser.pause(10000);
        console.log('Video Playback Started (Verification needed)'); // Placeholder for verification
    });
    it('User should be able to click on the Recording', async () => {
        await AppPage.playrecording();
        await browser.pause(10000);
        console.log('Video Playback Started (Verification needed)'); // Placeholder for verification
    });

    it('User should be able to click on the comments image icon', async () => {
        await AppPage.commentsectionclick();
        await browser.pause(10000);

    });
    it('should be able to insert comment', async () => {
            // browser.url('https://vynqa.vynsmart.com')
            AppPage.login('vaibhav+qa@humanlearning.com')
            await browser.pause(10000);
    });

    it('User should be able to click on the labels', async () => {
        await AppPage.clickonLabel1();
        await browser.pause(5000);
        // Add assertions to verify label click action, e.g., check for UI changes or filters applied
        console.log('"Inside/Outside" Label Clicked (Verification needed)'); // Placeholder for verification
        await AppPage.clickVynTestLabel();
        await browser.pause(5000);
        // Add assertions to verify label click action for Vyn Test Label
        console.log('"Vyn Test Label" Clicked (Verification needed)'); // Placeholder for verification
    });
    it('User should be able to click on download icon and download the data', async () => {
        await AppPage.clickDownloadTestPDF();
        // Add assertions to verify download started, e.g., check for file download events or status
        console.log('Download for "Test PDF Upload" Initiated (Verification needed)'); // Placeholder for verification
        // You might need to implement file download verification based on your environment and setup
    });
    it('User should be able to click on assignees and a list will open and user should be able to select any option', async () => {
        await AppPage.openAssigneesDropdown();
        await expect(AppPage.assigneeList).toBeDisplayed(); // Verify dropdown list is opened
        const assigneeOptionToSelect = 'No one Asaat.c'; // Replace with an actual option text from the dropdown if different
        await AppPage.selectAssigneeOption(assigneeOptionToSelect);
        // Add assertions to verify assignee option is selected, e.g., check for UI update or selected assignee value
        console.log(`Assignee "${assigneeOptionToSelect}" Selected (Verification needed)`); // Placeholder for verification
    });
    it('In comments section user should be able to switch between All, comments and Activity tab', async () => {
        await AppPage.switchToCommentsTab();
        // Add assertions to verify Comments tab is active, e.g., check for active class or content change
        console.log('"Comments" Tab Switched (Verification needed)'); // Placeholder for verification
        await AppPage.switchToActivityTab();
        // Add assertions to verify Activity tab is active
        console.log('"Activity" Tab Switched (Verification needed)'); // Placeholder for verification
        await AppPage.switchToAllCommentsTab();
        // Add assertions to verify All tab is active
        console.log('"All" Tab Switched back (Verification needed)'); // Placeholder for verification
    });
    it('In comments section - All user should be click on icon and perform actions', async () => {
        await AppPage.switchToAllCommentsTab(); // Ensure we are on 'All' tab
        await AppPage.clickCommentIconInAllTab();
        // Add assertions to verify actions after clicking comment icon, e.g., modal opens, context menu appears
        console.log('Clicked Comment Icon in "All" tab (Verification needed)'); // Placeholder for verification
        // Implement further actions and verifications as needed after clicking the icon
    });
});









