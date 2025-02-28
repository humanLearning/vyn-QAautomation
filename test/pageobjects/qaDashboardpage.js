class QADashboardPage {
  
    get channelHeader() 
    { 
      return $("//a[normalize-space()='Dashboards']"); 
    }
    get qaDashboardLink() 
    { 
      return $("//div[@class='vn-title'][normalize-space()='QA Dashboard All features']"); 

    }
    get authorLinks() {
         return $("//body/div[@id='react-app']/div[contains(@class,'main-wrapper')]/div[contains(@class,'mt-3 container-fluid')]/div[contains(@class,'px-0 px-sm-3 px-xl-5')]/div[contains(@class,'row')]/div[contains(@class,'col-xl-12')]/div[contains(@class,'row')]/div[contains(@class,'col')]/div[contains(@class,'dashboard-lanes')]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]")
    } 
         
    get recordingDropdown() 
    { 
      return $("//div[contains(@class,'dashboard-lanes')]//div[1]//div[1]//div[1]//div[7]//div[2]//div[1]//a[1]//*[name()='svg']//*[name()='path' and contains(@d,'M18.78 15.')]")

    } 
    get recordingTab() 
    { 
      return $("//div[@class='slick-slide slick-active slick-current']//div//span[@class='vn-icon vn-play']") 

    } 
    get viewRelatedDashboardsLink() 
    { return $("//div[contains(@class,'meta-actions')]//a[1]"); 

    }
    get downloadPDFLink() 
    { 
      return $('//a[contains(text(), "Download PDF")]') 

    } 
    get selectVynsCheckbox() 
    { 
      return $('//input[@type="checkbox" and contains(@name, "vyns")]')

     } 
    get dataRows() 
    { 
      return $$('//table/tbody/tr') 
    } 
    get downloadSummaryButton() 
    { 
      return $('//button[contains(text(), "Download Summary")]') 

    } 
    get searchButton() 
    { 
      return $('//button[contains(@class, "search-button")]'); 
      } 
    get searchMenu() 
    { 
      return $('//div[contains(@class, "search-menu")]'); 
      } 

    async navigateToQADashboard() {
      await this.channelHeader.click();
      await this.channelHeader.scrollIntoView();
      await this.qaDashboardLink.click();
  }
    
    async clickAuthorLink() {
      await this.authorLinks.click();
    }
    async openRecordingTab() {
      await this.recordingTab.click();
      // await this.recordingDropdown.click();
      // return this.recordingTab.waitForDisplayed(); // Verify tab is open
    }
    async clickViewRelatedDashboards() {
      await this.viewRelatedDashboardsLink.click();
    }
    async downloadPDF() {
      await this.downloadPDFLink.click();
    }
    async selectVynsForPDF() {
      await this.selectVynsCheckbox.click();
    }
    async getAllData() {
      const data = [];
      for (const row of this.dataRows) {
        const rowData = await row.$$('td').map(cell => cell.getText()); 
        data.push(rowData);
      }
      return data;
    }
    async downloadSummary() {
      await this.downloadSummaryButton.click();
    }
    async openSearchMenu() {
      await this.searchButton.click();
      return this.searchMenu.waitForDisplayed(); // Verify menu is open
    }
  }
  module.exports = new QADashboardPage();
  