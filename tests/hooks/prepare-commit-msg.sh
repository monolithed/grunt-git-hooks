#!/usr/bin/env bash

# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".
#
# This hook includes three examples.  The first comments out the
# "Conflicts:" part of a merge commit.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.
#
#
# Example
#
# git rev-parse --abbrev-ref HEAD
# deploy
#
# git commit -m 'init commit'
#
# git show
# commit 1abc2f131d8e20c306ecce8bb95b02e365b0af60 (HEAD, refs/heads/mail-16043)
# Author: Alexander Abashkin <monolithed@gmail.com>
# Date:   Mon Jun 17 18:12:15 2013 +0400
#
#    [DEPLOY] init commit
#
#
# .git/COMMIT_EDITMSG

branch_name=`git rev-parse --abbrev-ref HEAD 2>/dev/null`;

if [ -n ${branch_name} ] && [ ${branch_name} != 'master' ];
	then echo "$(tr [:lower:] [:upper:] <<< [${branch_name}]) $(< $1)" > $1;
fi
