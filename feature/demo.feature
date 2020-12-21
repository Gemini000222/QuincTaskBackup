Feature: I am going to validate Investigator Scenario



@demo1
  Scenario: Login to Investigator > Search within Dashboard (quick search) > Apply filters from Dashboard > View Data > Further Filter (filter panel) > Column Filters > Document Navigation > Labeling > Bookmarking

    Given I landed on QuinC-Investigator login page
    When I will enter "username", "password" and click on login button
    Then I will be taken to load case page
    When I will click on "Open" button against case
    Then I will be taken to the Case Details page and I will enter "test" in search bar present on the Dashboard
    Then I will click on Search button in front of search bar
    When I click on "View Data" button
    Then I will observe that in Grid file count is "291"
    When I will click on "Filter" Icon to open Filter Panel
    Then I will click on "Pin" icon of filter panel to make the Grid more visible
    When I will select "Non-Standard Documents=34"
    Then I will apply filter of "txt" on Extension Column
    Then I will verify that there are "17" filtered items in Viewer
    Then I will select "Viewer" from Desktop Application Window

    When I click on Labels & Bookmarks Panel
    Then From Labels Panel, right click > New Label> Enter name and save it
    Then I will check All "17" files and check the created Label to apply it
    Then I will Click on Bookmarks Panel >right on Shared > Enter Bookmark name and save it
    Then I will Check the created bookmark to apply it
    Then I will Right click in Grid > Click on "Toggle Ignorable" option against few filtered items
    Then I will Right click in Grid > Click on "Toggle Privileged" option against few filtered items





