#!/bin/sh
################################################################################
#    Copyright (c) 2013, KAIST.
#    All rights reserved.
#
#    Use is subject to license terms.
#
#    This distribution may include materials developed by third parties.
################################################################################

export JS_HOME="`$(dirname $0)/js_home`"
export WKSPACE=$JS_HOME/tests/bug_detector_tests
export fork_count=0

rm -f $WKSPACE/*.test

echo "*** Multi-Threaded Test File Generation ***"

function makeTestFile {
  tokenid=$1
  tokenname=$2
  prename=`basename $3`
  name=${prename%.js}
  out=tests/bug_detector_tests/$name.test
  dump=$name.dump

  echo [$tokenid] Generating a test file of $prename ...

  echo "################################################################################" >> $out
  echo "#    Copyright (c) 2013, KAIST." >> $out
  echo "#    All rights reserved." >> $out
  echo "#" >> $out
  echo "#    Use is subject to license terms." >> $out
  echo "#" >> $out
  echo "#    This distribution may include materials developed by third parties." >> $out
  echo "################################################################################" >> $out
  echo "tests=$name" >> $out
  echo "BUGDETECTOR_TESTS_DIR=\${JS_HOME}/tests/bug_detector_tests" >> $out
  echo "bug-detector" >> $out
  echo "bug-detector_out_WCIequals=\\" >> $out
  `${JS_HOME}/bin/jsaf bug-detector tests/bug_detector_tests/$name.js > $dump`
  #awk '{sub(/\/Users\/jjh\/safe\/tests\/bug_detector_tests/, "${BUGDETECTOR_TESTS_DIR}", $0); print $0, "\\n\\"} END{printf "\\n\n"}' $dump >> $out
  awk '{sub(/d:\/safe-private\/tests\/bug_detector_tests/, "${BUGDETECTOR_TESTS_DIR}", $0); print $0, "\\n\\"} END{printf "\\n\n"}' $dump >> $out
  echo "bug-detector_err_equals=" >> $out
  rm $dump

  touch $tokenname
}

# max token count
token_count=8

# create tokens
for (( i = 1 ; i <= $token_count ; i++ ))
do
  touch "token"$i".temp"
done

# for each .js file
files_js=`find $WKSPACE -name "*.js" -print -maxdepth 1`
for fil in $files_js
do
  run=1
  while (( run == 1 ))
  do
    for (( i = 1 ; i <= $token_count ; i++ ))
    do
      tokenname="token"$i".temp"
      if [ -f $tokenname ]
      then
	    rm $tokenname
	    makeTestFile $i $tokenname $fil &
		run=0
		break
      fi
    done
	# sleep 1 second if there is a no available token
	if (( run == 1 )); then sleep 1; fi
  done
done

# wait
run=1
while (( run == 1 ))
do
  run=0
  for (( i = 1 ; i <= $token_count ; i++ ))
  do
    tokenname="token"$i".temp"
    if [ ! -f $tokenname ]
    then
	  run=1
	fi
  done
  if (( run == 1 )); then sleep 1; fi
done

# delete tokens
rm -f token*.temp

echo
cd $JS_HOME
