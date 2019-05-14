# Language Learning Virtual Agent

*AWS Sumerian based virtual agent for language learning using AIML dialogue system.*

---

## Sumerian Setup

1. Sign in to Amazon Sumerian with your [AWS account](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fportal.aws.amazon.com%2Fbilling%2Fsignup%2Fresume&client_id=signup).

2. When you first Sign in to Amazon Sumerian, you see the Dashboard home screen. From the home screen, you can:
   * Create a new scene using a wide selection of templates. The most common template is the *Default Lighting Template*.
   * Choose Import Assets in the top center menu above the canvas. Search for and then add Cristine.
   * Find Cristine in the Assets panel. Drag and drop the Cristine entity (next to the hexagon icon) onto the canvas.
   
3. Add State Machine Behavior :
   * In the Entities panel, choose Cristine.
   * Navigate to the Inspector panel on the right and add a State Machine component to Cristine.
   * In the State Machine panel, click the + button to create a new Behavior and open the State Machine Editor.
   * In the Inspector panel, under Selected State, rename State 1 to *Wait for SDK Ready*.
   * Select the *Wait for SDK Ready* in the State Graph, and then click Add Action in the Inspector panel. Select on AWS Ready.
   * Create another state *Face Recognition* by selecting Add State option. Add action *Execute Script*. Select the plus button, custom script and add the *Script Face Recognition* code in the newly opened window.
   * Similarly add the other states as shown below and connect the various states actions as shown by using drag n drop.
   * Add *Script Host Success* on Athena Response state.
   * Add *Script User Speech* on Start User Recording state.
  
4. Adding HTML Entities :
   * From the Create Entity menu, create a new HTML entity, and then select it.
   * Name it HTML SpeechToText Entity and click open in editor.
   * Remove the initial code and replace it with *html-speechToText-entity* code (this will show the speech the user says).
   * In the Inspector panel add the script *script-html-speech* to this HTML entity.
   * Add another HTML entity and name it HTML OpenCV.
   * Copy the code of *html-openCV* (this will will show the user's face recognized bounded by a box)
   * In the Inspector panel add the script *script-OpenCV* to this HTML entity.
   * Add another HTML entity and name it HTML User Speech Flag.
   * Copy the code of *html-userSpeech-flag* (When it shows red the user should not speak and when it is green the user should speak).
   * Add another HTML entity and name it HTML Language.
   * Copy the code of *html-language* (This shows the language learning part).
   * In the inspector panel add the script *script-initial* to this HTML entity.
   
 
 ## AIML Dialogue System
 
 1. Create an AWS EC2 instance and select the Ubuntu server.
 2. Copy the AIML folder to the EC2 server using an FTP service like FileZilla or the command scp which stands for secure copy.
 3. Install following : 
    * `pip install aiml`
    * `pip install Flask`
    * `pip install Flask-Cors`
    * `pip install gunicorn`
    * `pip install vaderSentiment`
    * `sudo apt-get install python3-pip python3-dev nginx`
 4. Let’s check if nginx . has been installed and running. Open your browser and run input your instances public IP . address.
 5. Remove the default nginx pages by running the command :
    * `sudo rm /etc/ningx/sites-enabled/default`
    * `sudo rm /etc/nginx/sites-available/default`
 6. Configure nginx to proxy our trafic to port 8000. Create a config file in sites-available and add a symlink to the sites-enabled in nginx.
   ```
   sudo touch /etc/nginx/sites-available/mysitename.com
  sudo chown -R $USER:$USER /etc/nginx/sites-   available/mysitename.com
  ```
 7. Open the mysitename.com file or whatever you named it and paste the contents below (make sure you give your domain name)
    ```
    server {
      listen 80;
      location / {
        proxy_pass http://127.0.0.1:8000/;
       }
      }
     ```
 8. Create a symlink now. Run the following commands.
    ```
    sudo ln -f -s /etc/nginx/sites-available/brightevents.com /etc/nginx/sites-enabled/mysitename.com
    sudo service nginx restart
    ```
