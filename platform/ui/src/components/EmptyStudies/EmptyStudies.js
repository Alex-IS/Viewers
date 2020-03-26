import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon, Typography } from '@ohif/ui';

const EmptyStudies = ({ className }) => {
  return (
    <div className={classnames('flex-col inline-flex items-center', className)}>
      <Icon name="magnifier" className="mb-4" />
      <Typography className="text-custom-aquaBright" variant="h5">
        No studies available
      </Typography>
    </div>
  );
};

EmptyStudies.defaultProps = {
  className: '',
};

EmptyStudies.propTypes = {
  className: PropTypes.string,
};

export default EmptyStudies;
