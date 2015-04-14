#!/bin/sh
################################################################################
#    Copyright (c) 2013, KAIST.
#    All rights reserved.
#
#    Use is subject to license terms.
#
#    This distribution may include materials developed by third parties.
################################################################################

export WKSPACE=$JS_HOME/tests/disambiguator_tests

cd $WKSPACE

rm $WKSPACE/*.test
files_js=`find . -name "*.js" -print`
for fil in $files_js
do
  prename=`basename $fil`
  name=${prename%.js}
  out=$name.test
  dump=$name.dump
  echo "################################################################################" >> $out
  echo "#    Copyright (c) 2013, KAIST." >> $out
  echo "#    All rights reserved.\n#" >> $out
  echo "#    Use is subject to license terms.\n#" >> $out
  echo "#    This distribution may include materials developed by third parties." >> $out
  echo "################################################################################" >> $out
  echo "tests=$name" >> $out
  echo "DISAMB_TESTS_DIR=\${JS_HOME}/tests/disambiguator_tests" >> $out
  echo "disambiguate" >> $out
  echo "disambiguate_out_WCIequals=\\" >> $out
  `${JS_HOME}/bin/jsaf disambiguate $prename > $dump`
  awk '{sub(/d:\/safe-private\/tests\/disambiguator_tests/, "${DISAMB_TESTS_DIR}", $0); print $0, "\\n\\"} END{printf "\\n\n"}' $dump >> $out
  echo "disambiguate_err_equals=" >> $out
  echo | tr '\n' '.'
  rm $dump
done
echo
cd $JS_HOME
