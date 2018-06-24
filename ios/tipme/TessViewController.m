//
//  AppViewController.m
//  tipme
//
//  Created by Kinshuk Jain on 6/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "TessViewController.h"
#import <React/RCTLog.h>


@implementation TessViewController

  - (void)viewDidLoad
  {
    [super viewDidLoad];
    
    G8Tesseract *tesseract = [[G8Tesseract alloc] initWithLanguage:@"eng"];
    RCTLogInfo(@"tesseract loaded");
    
    tesseract.delegate = self;
    
    // Optional: Limit the character set Tesseract should try to recognize from
    //    tesseract.charWhitelist = @"0123456789";
    
    // Optional: Limit the character set Tesseract should not try to recognize from
    //tesseract.charBlacklist = @"OoZzBbSs";
    
    // Specify the image Tesseract should recognize on
    tesseract.image = [[UIImage imageNamed:@"5_1.jpg"] g8_blackAndWhite];
    
    // Optional: Limit the area of the image Tesseract should recognize on to a rectangle
    tesseract.rect = CGRectMake(20, 20, 100, 100);
    
    // Optional: Limit recognition time with a few seconds
    tesseract.maximumRecognitionTime = 5.0;
    
    // Start the recognition
    [tesseract recognize];
    RCTLogInfo(@"recognizing text...");
    // Retrieve the recognized text
    NSLog(@"%@", [tesseract recognizedText]);
    //    _myTextView.text = [tesseract recognizedText];
    
    // You could retrieve more information about recognized text with these methods:
    //    NSArray *characterBoxes = [tesseract recognizedBlocksByIteratorLevel:G8PageIteratorLevelSymbol];
    //    NSArray *paragraphs = [tesseract recognizedBlocksByIteratorLevel:G8PageIteratorLevelParagraph];
    //    NSArray *characterChoices = tesseract.characterChoices;
    //    UIImage *imageWithBlocks = [tesseract imageWithBlocks:characterBoxes drawText:YES thresholded:NO];
  }

  - (void)progressImageRecognitionForTesseract:(G8Tesseract *)tesseract {
      NSLog(@"progress: %lu", (unsigned long)tesseract.progress);
    }

  - (BOOL)shouldCancelImageRecognitionForTesseract:(G8Tesseract *)tesseract {
      return NO;  // return YES, if you need to interrupt tesseract before it finishes
    }

@end
