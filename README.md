clinical-support-forum
==========

Meteor bulletin-board system (BBS) and help/discussion forum.

![travis-build](https://travis-ci.org/awatson1978/clinical-support-forum.svg?branch=master)  

Installation
------------------------


````sh
# Should be as simple as cloning the repository...  
git clone https://github.com/awatson1978/clinical-support-forum.git

# And then running it...
meteor
````

Default Users
------------------------

````js
  {
    username: 'sysadmin',
    password: 'sysadmin',
    email: 'sysadmin@test.org'
    role: 'Admin',
  }

  {
    username: 'janedoe',
    password: 'janedoe',
    email: 'janedoe@test.org',
    role: 'User'
  }

 {
    username: 'johndoe',
    password: 'johndoe',
    email: 'johndoe@test.org',
    role: 'User'
  }
````


TODO LIST
------------------------
- wrapbootstrap landing page
- swipeleft/swiperight
- admin: delete user
- admin: graytext moderation
- post: preview post
- post: tone/grammar check
- admin: add 'report a bug' url field


Licensing
------------------------

MIT License. Use as you wish, including for commercial purposes.
