class QADashboardPage {
  
    get channelHeader() 
    { 
      return $(".nav-bar > .nav-item > .nav-link"); 
    }
    get qaDashboardLink() 
    { 
      return $('//*[text()="QA Dashboard All features"]'); 

    }
    

    get authorLinks() {
         return $('//a[contains(@href="dashboards")]')
         } 
         
    get recordingDropdown() 
    { 
      return $('//button[contains(text(), "Recording")]')

    } // Replace with accurate selector
    get recordingTab() 
    { 
      return $('@class="vn-icon vn-play"') 

    } 
    // Replace with accurate selector
    get viewRelatedDashboardsLink() 
    { return $('//a[contains(text(), "View Related Dashboards")]'); } // Replace with accurate selector
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
    
    async clickAuthorLink(index) {
      await this.authorLinks[index].click();
    }
    async openRecordingTab() {
      await this.recordingDropdown.click();
      return this.recordingTab.waitForDisplayed(); // Verify tab is open
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
  