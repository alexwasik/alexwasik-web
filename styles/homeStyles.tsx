const mdTitleStyle = {
    padding: '100px 0 50px 0',
  }
  const mdTitleTextStyle = {
    fontSize: 64
  }

  const mdSecondaryTextStyle = {
    fontSize: 50
  }

  const xsSecondaryTextStyle = {
    fontSize: 24
  }

  const xsTitleTextStyle = {
    fontSize: 32
  }

  const xsTitleStyle = {
    padding: '100px 0 50px 0',
  }

  const iconStyle = {
    fontSize: 15,
    paddingRight: 5
  }

  const imageStyle = (breakpoints: Breakpoints) => {
    console.log('breakpoints', breakpoints);
    const { xs, sm, md, lg, xl } = breakpoints;
    if (xs) {
      console.log('xs');
      return {
        marginLeft: 10,
        marginTop: 100,
        width: 200,
        height: 200,
      }
    }
    if (sm && !md) {
      console.log('sm');
      return {
        marginLeft: 250,
        marginTop: 100,
        width: 300,
        height: 300,
      }
    }
    if (md && !xl) {
      console.log('midup');
      return {
        marginLeft: -250,
        marginTop: 150,
        width: 475,
        height: 500,
      }
    }
    if (lg && !xl) {
      console.log('lg');
      return {
        marginLeft: -75,
        marginTop: 200,
        width: 475,
        height: 500,
      }
    }

    if (lg && xl) {
      console.log('lg');
      return {
        marginLeft: 500,
        marginTop: 150,
        width: 475,
        height: 500,
      }
    }
  }

  const xsImageStyle = {
    marginLeft: '-190px',
  }

  const mdImageStyle = {
    marginLeft: '130px',
  }

  const lgImageStyle = {
    marginLeft: '500px',
  }

  export {
    mdTitleStyle,
    mdTitleTextStyle,
    mdSecondaryTextStyle,
    xsSecondaryTextStyle,
    xsTitleTextStyle,
    xsTitleStyle,
    iconStyle,
    xsImageStyle,
    mdImageStyle,
    lgImageStyle,
    imageStyle,
  }
