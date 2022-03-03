lerna is to manage the dependencies
the reason we use yarn It's because yarn has a feature called yarn workspaces
specifically design to share a single copy of node modules
and install shared dependencies in the root directory that each
one of your projects can use
lerna has first class support for it
just configure lerna.json to say 
I am using yarn workspaces
and you are off to the races

quickly scaffold

why do we need exactly the same library installed in 2 differernt projects when they're both part of the same repo

lerna is a manager for monorepos
run the same scripts in multiple projects within your packages directories
It can add new dependencies to multiple projects at once
It's basically like a superpower npm or yarn that can 
run the same commands you are used to
but in multiples projects at the same time

you can filter it down using regex pattern so if you have let's
say 4 or 5 projects maybe you only want to add a package to three of 
them lerna can do that

so It's really a handy tool

so we are using yarn workspeaces and that's gonna let us be able to install
all of our shared modules , like ts for example inside the root directory to
have a single copy of it 
instead of multiple copys of it



