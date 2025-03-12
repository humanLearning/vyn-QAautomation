class QADashboardPage1 {
  
    get channelHeader() 
    { 
      return $("//a[normalize-space()='Dashboards']"); 
    }
    get qaDashboardLink() 
    { 
      return $("//div[@class='vn-title'][normalize-space()='QA Dashboard All features']"); 

    }
    get authorLinks() {
         return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]");
    } 
         
    get recordingDropdown() 
    { 
      return $("//div[contains(@class,'main-wrapper')]//div[2]//div[1]//div[1]//div[7]//div[2]//div[1]//a[1]//*[name()='svg']");

    } 
    get recordingTab() 
    { 
      return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]/div[2]/div[1]/span[1]");
      
    } 

    get clickdots() 
    { 
      return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[2]/div[3]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"); 

    }

    get fetchdots() 
    { 
      return $("//div[contains(@class,'dropdown-menu show')]"); 

    }

    /*get dropdownOptions() 
    { 
      return $$("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)"); 
      return $$('//div[1]//div[1]//div[3]//div[1]//div[1]//div[1]//div[1]//div[1]//div[7]//div[2]//div[3]//div[1]//div[2]//a[2]');
      return $$('//a[3]');

    }*/
      get viewRelatedDashboardsLink() 
      { 
        return $("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[2]/div[3]/div[1]/div[2]/a[1]");
  
      } 


    get downloadPDFLink() 
    { 
      return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[2]/div[3]/div[1]/div[2]/a[2]');

    } 
    get selectVynsCheckbox() 
    { 
      return $('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[2]/div[3]/div[1]/div[2]/a[3]');

     } 
    get Selectvynsclickfirst() 
    { 
      return $("//div[contains(@class,'grid-svns')]//a[1]");
    } 
    get Selectvynsclicksecond() 
    { 
      return $("//div[contains(@class,'svn-card shadow-sm selectable card')]");
    } 
    get downloadVynButton() 
    { 
      return $("//button[normalize-space()='Download']");

    }
    get downloadSummaryButton() 
    { 
      return $("//span[normalize-space()='Download summary']"); 

    } 
    get searchButton() 
    { 
      return $("//div[contains(@class,'drawer-handle')]"); 
      } 
    get searchoption1() 
    { 
      return $("//div[contains(@title,'Cadent-Gas-West')]"); 
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
      await this.recordingDropdown.click();
      // await this.recordingDropdown.click();
      // return this.recordingTab.waitForDisplayed(); // Verify tab is open
    }

    async openDropdown() {
      await this.clickdots.click();
      await this.fetchdots.waitForDisplayed({ timeout: 5000});
     
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
    async selectVynsclick1() {
      await this.Selectvynsclickfirst.click();
    }
    async selectVynsclick2() {
      await this.Selectvynsclicksecond.click();
    }
    async downloadVynButton1() {
      await this.downloadVynButton.click();
    }
    async downloadSummary() {
      await this.downloadSummaryButton.click();
    }
    async openSearchMenu() {
      await this.searchButton.click();
    }
  
   async searchoptionfilter() {
    await this.searchoption1.click();
  }

    /*async getOptionTexts() {
      const optionsElements= await this.dropdownOptions;
      return Promise.all(optionsElements.map(async element => await element.getText()));
    }

    async clickAllOptions() {
      const optionTexts = await this.getOptionTexts();
      for (const text of optionTexts) {
          console.log(`Clicking on option: ${'View Related Dashboards'}`);
          await this.clickOptionByText('View Related Dashboards');
      }


    /*async clickthreedots() {
      await this.clickdots.click();
    }*/

    

   
    
    /*a
    async getAllData() {
      const data = [];
      for (const row of this.dataRows) {
        const rowData = await row.$$('td').map(cell => cell.getText()); 
        data.push(rowData);
      }
      return data;
    }
    
    
      return this.searchMenu.waitForDisplayed(); // Verify menu is open
    }
  }}*/
    }
  module.exports = new QADashboardPage1();
  